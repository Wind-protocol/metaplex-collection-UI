import { PublicKey } from "@solana/web3.js";
import { Wallet } from "@metaplex/js";
import {
  RevokeCollectionAuthority,
  Metadata,
  MetadataProgram,
} from "@metaplex-foundation/mpl-token-metadata";

const REVOKE_COLLECTION_AUTHORITY_PUBKEY = new PublicKey(
  "AQdVjN6ESkryiRx4UWHnEt3hxfAW6FdSKwiBEgta5rJP"
);
export interface IRevokeCollectionAuthorityParams {
  wallet: Wallet;
  mint: PublicKey;
}

export async function revokeCollectionAuthorityAction({
  wallet,
  mint,
}: IRevokeCollectionAuthorityParams) {
  const dARecord = await MetadataProgram.findCollectionAuthorityAccount(
    mint,
    REVOKE_COLLECTION_AUTHORITY_PUBKEY
  );

  const metadataPDA = await Metadata.getPDA(mint);

  return new RevokeCollectionAuthority(
    {},
    {
      collectionAuthorityRecord: dARecord[0],
      newCollectionAuthority: REVOKE_COLLECTION_AUTHORITY_PUBKEY,
      updateAuthority: wallet.publicKey,
      metadata: metadataPDA,
      mint: mint,
    }
  );
}
