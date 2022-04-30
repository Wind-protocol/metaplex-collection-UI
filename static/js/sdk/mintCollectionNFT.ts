import BN from "bn.js";
import { PublicKey } from "@solana/web3.js";
import {
  actions,
  Connection,
  MetadataJson,
  Wallet,
  ArweaveStorage,
  ArweaveUploadResult,
} from "@metaplex/js";
import { createFilePack, METADATA_FILE_NAME } from "utils/arweave-cost";
import { Pipeline } from "utils/pipeline";
import { approveCollectionAuthorityAction, payForFiles } from "./actions";
import {
  Metadata,
  MasterEdition,
  Creator,
  CreateMetadataV2,
  CreateMasterEdition,
  DataV2,
  MetadataProgram,
} from "@metaplex-foundation/mpl-token-metadata";
import { ECollectionProgress } from "views/CreateCollection/CreateCollection.state";
const { sendTransaction, prepareTokenAccountAndMintTxs } = actions;

export interface MintArweaweNFTResponse {
  txId: string;
  mint: PublicKey;
  metadata: PublicKey;
  arweaveResultForJson: ArweaveUploadResult;
  arweaveResultForAsset?: ArweaveUploadResult;
}

export interface IMintArweaveParams {
  connection: Connection;
  wallet: Wallet;
  storage: ArweaveStorage;
  file: File;
  metadata: MetadataJson;
  updateProgress?: (status: ECollectionProgress | null) => void;
}

export async function mintCollectionNFT(
  {
    connection,
    wallet,
    file,
    metadata,
    storage,
    updateProgress = () => {},
  }: IMintArweaveParams,
  WebFile: typeof File = File
): Promise<MintArweaweNFTResponse> {
  const pipe = new Pipeline<ECollectionProgress | null>(null, updateProgress);

  try {
    pipe.setStep(ECollectionProgress.minting);

    const {
      mint,
      payForFilesTx,
      files,
      createMintTx,
      createAssociatedTokenAccountTx,
      mintToTx,
      metadataPDA,
    } = await pipe.exec(async () => {
      const fileMetadata = createFilePack(
        metadata,
        METADATA_FILE_NAME,
        WebFile
      );
      const files = file ? [file, fileMetadata] : [fileMetadata];
      const payForFilesTx = await payForFiles({
        wallet,
        files,
      });

      const { mint, createMintTx, createAssociatedTokenAccountTx, mintToTx } =
        await prepareTokenAccountAndMintTxs(connection, wallet.publicKey);

      const metadataPDA = await Metadata.getPDA(mint.publicKey);

      return {
        metadataPDA,
        mint,
        payForFilesTx,
        files,
        createMintTx,
        createAssociatedTokenAccountTx,
        mintToTx,
      };
    }, ECollectionProgress.preparing_assets);

    const payForFilesTxId = await pipe.exec(
      () =>
        sendTransaction({
          connection,
          wallet,
          txs: [payForFilesTx],
        }),
      ECollectionProgress.preparing_assets
    );

    // Start the Upload process.
    pipe.setStep(ECollectionProgress.uploading_assets);

    const { arweaveResultForAsset, assetFile } = await pipe.exec(async () => {
      if (file) {
        const arweaveResult = await storage.upload(
          files as unknown as Map<string, Buffer>,
          mint.publicKey.toBase58(),
          payForFilesTxId
        );

        const assetFile = arweaveResult.messages?.find(
          (m) => m.filename === file.name
        );
        return { arweaveResultForAsset: arweaveResult, assetFile };
      }

      return { arweaveResultForAsset: undefined, assetFile: undefined };
    }, ECollectionProgress.uploading_assets);

    const assetTransactionId = assetFile?.transactionId || undefined;
    const { arweaveResultForJson, metadataFile } = await pipe.exec(async () => {
      if (assetTransactionId) {
        const uri = `https://arweave.net/${assetTransactionId}`;
        metadata.image = uri;
        metadata.properties.files = [{ type: "image/png", uri }];
      }

      const fileMetadata = createFilePack(
        metadata,
        METADATA_FILE_NAME,
        WebFile
      );

      const arweaveResult = await storage.upload(
        [fileMetadata] as unknown as Map<string, Buffer>,
        mint.publicKey.toBase58(),
        payForFilesTxId
      );

      const metadataFile = arweaveResult.messages?.find(
        (m) => m.filename === METADATA_FILE_NAME
      );

      return { arweaveResultForJson: arweaveResult, metadataFile };
    }, ECollectionProgress.uploading_assets);

    if (!metadataFile?.transactionId) {
      throw new Error("Failed uploading assets.");
    }

    // Start creating transactions for Token Mint.
    pipe.setStep(ECollectionProgress.preparing_token_transactions);

    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    const metadataJsonTransactionId = metadataFile.transactionId;
    const createMetadataTx = pipe.exec(() => {
      const creators = metadata.properties.creators.map((c) => new Creator(c));
      const uri = `https://arweave.net/${metadataJsonTransactionId}`;
      const metadataData = new DataV2({
        uri,
        name: metadata.name,
        symbol: metadata.symbol,
        sellerFeeBasisPoints: metadata.seller_fee_basis_points,
        creators,
        collection: null,
        uses: null,
      });

      const createMetadataTx = new CreateMetadataV2(
        {
          feePayer: wallet.publicKey,
        },
        {
          metadata: metadataPDA,
          mint: mint.publicKey,
          mintAuthority: wallet.publicKey,
          updateAuthority: wallet.publicKey,
          metadataData,
        }
      );
      return createMetadataTx;
    }, ECollectionProgress.preparing_token_transactions);

    const createMasterEditionTx = await pipe.exec(async () => {
      const [edition] = await PublicKey.findProgramAddress(
        [
          Buffer.from(MetadataProgram.PREFIX),
          MetadataProgram.PUBKEY.toBuffer(),
          new PublicKey(mint.publicKey).toBuffer(),
          Buffer.from(MasterEdition.EDITION_PREFIX),
        ],
        MetadataProgram.PUBKEY
      );

      return new CreateMasterEdition(
        { feePayer: wallet.publicKey },
        {
          edition,
          metadata: metadataPDA,
          updateAuthority: wallet.publicKey,
          mint: mint.publicKey,
          mintAuthority: wallet.publicKey,
          maxSupply: new BN(0),
        }
      );
    }, ECollectionProgress.preparing_token_transactions);

    const approveUpdateAuthorityTx = await approveCollectionAuthorityAction({
      connection,
      wallet,
      mint: mint.publicKey,
    });

    if (!approveUpdateAuthorityTx) {
      throw new Error("Error adding an Approved Collection Authority");
    }

    // Send the transactions to create the NFT
    pipe.setStep(ECollectionProgress.signing_token_transaction);

    const txid = await pipe.exec(
      () =>
        sendTransaction({
          connection,
          wallet,
          signers: [mint],
          txs: [
            payForFilesTx,
            createMintTx,
            createMetadataTx,
            createAssociatedTokenAccountTx,
            mintToTx,
            createMasterEditionTx,
            approveUpdateAuthorityTx,
          ],
        }),
      ECollectionProgress.signing_token_transaction
    );

    await pipe.exec(
      () => connection.confirmTransaction(txid, "max"),
      ECollectionProgress.sending_transaction_to_solana
    );

    await pipe.exec(
      () => connection.getParsedTransaction(txid, "confirmed"),
      ECollectionProgress.waiting_for_initial_confirmation
    );

    return {
      arweaveResultForJson,
      arweaveResultForAsset,
      txId: txid,
      mint: mint.publicKey,
      metadata: metadataPDA,
    };
  } catch (err) {
    throw err;
  }
}
