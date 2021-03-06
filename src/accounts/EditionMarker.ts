"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditionMarker = exports.EditionMarkerData = void 0;
const mpl_core_1 = require("@metaplex-foundation/mpl-core");
const web3_js_1 = require("@solana/web3.js");
const Edition_1 = require("./Edition");
const MetadataProgram_1 = require("../MetadataProgram");
const buffer_1 = require("buffer");
const constants_1 = require("./constants");
class EditionMarkerData extends mpl_core_1.Borsh.Data {
    constructor(args) {
        super(args);
        this.key = constants_1.MetadataKey.EditionMarker;
    }
    editionTaken(edition) {
        const editionOffset = edition % EditionMarker.DATA_SIZE;
        const indexOffset = Math.floor(editionOffset / 8);
        if (indexOffset > 30) {
            throw Error('Bad index for edition');
        }
        const positionInBitsetFromRight = 7 - (editionOffset % 8);
        const mask = Math.pow(2, positionInBitsetFromRight);
        const appliedMask = this.ledger[indexOffset] & mask;
        return appliedMask != 0;
    }
}
exports.EditionMarkerData = EditionMarkerData;
EditionMarkerData.SCHEMA = EditionMarkerData.struct([
    ['key', 'u8'],
    ['ledger', [31]],
]);
class EditionMarker extends mpl_core_1.Account {
    constructor(key, info) {
        super(key, info);
        if (!this.assertOwner(MetadataProgram_1.MetadataProgram.PUBKEY)) {
            throw (0, mpl_core_1.ERROR_INVALID_OWNER)();
        }
        if (!EditionMarker.isCompatible(this.info.data)) {
            throw (0, mpl_core_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = EditionMarkerData.deserialize(this.info.data);
    }
    static getPDA(mint, edition) {
        return __awaiter(this, void 0, void 0, function* () {
            const editionNumber = Math.floor(edition.toNumber() / 248);
            return MetadataProgram_1.MetadataProgram.findProgramAddress([
                buffer_1.Buffer.from(MetadataProgram_1.MetadataProgram.PREFIX),
                MetadataProgram_1.MetadataProgram.PUBKEY.toBuffer(),
                new web3_js_1.PublicKey(mint).toBuffer(),
                buffer_1.Buffer.from(Edition_1.Edition.EDITION_PREFIX),
                buffer_1.Buffer.from(editionNumber.toString()),
            ]);
        });
    }
    static isCompatible(data) {
        return data[0] === constants_1.MetadataKey.EditionMarker;
    }
}
exports.EditionMarker = EditionMarker;
EditionMarker.DATA_SIZE = 248;
//# sourceMappingURL=EditionMarker.js.map