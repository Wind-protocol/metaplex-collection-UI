import { Connection, PublicKey } from "@solana/web3.js";
import { Wallet } from "@metaplex/js";
import {
  ApproveCollectionAuthority,
  Metadata,
  MetadataProgram,
} from "@metaplex-foundation/mpl-token-metadata";

const APPROVE_COLLECTION_AUTHORITY_PUBKEY = new PublicKey(
  "AQdVjN6ESkryiRx4UWHnEt3hxfAW6FdSKwiBEgta5rJP"
);

export interface IApproveCollectionAuthorityParams {
  wallet: Wallet;
  mint: PublicKey;
  connection: Connection;
}

export async function approveCollectionAuthorityAction({
  wallet,
  mint,
  connection,
}: IApproveCollectionAuthorityParams): Promise<
  ApproveCollectionAuthority | undefined
> {
  // Check if Collection Authority is already delegated
  const result = (await connection.getParsedAccountInfo(mint)).value;

  if (result != null && result?.lamports !== 0) {
    return undefined;
  }

  const dARecord = await MetadataProgram.findCollectionAuthorityAccount(
    mint,
    APPROVE_COLLECTION_AUTHORITY_PUBKEY
  );
  const metadataPDA = await Metadata.getPDA(mint);

  return new ApproveCollectionAuthority(
    { feePayer: wallet.publicKey },
    {
      collectionAuthorityRecord: dARecord[0],
      newCollectionAuthority: APPROVE_COLLECTION_AUTHORITY_PUBKEY,
      updateAuthority: wallet.publicKey,
      metadata: metadataPDA,
      mint: mint,
    }
  );
}
