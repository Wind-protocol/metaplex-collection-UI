import { MetadataJson, programs } from "@metaplex/js";
const {
  metadata: { Metadata },
} = programs;
import { $connection } from "state/connection";
import { fork } from "effector";
import { PublicKey, AccountInfo } from "@solana/web3.js";
import { $wallet } from "state/wallet";

export const getURIFromMintAccount = async (mint: string) => {
  const scope = fork();
  const wallet = scope.getState($wallet);
  const connection = scope.getState($connection);

  const pda = await Metadata.getPDA(mint);
  const accountInfo = await connection.getParsedAccountInfo(new PublicKey(pda));
  const metadata = new Metadata(
    mint,
    accountInfo?.value as AccountInfo<Buffer>
  );

  if (
    !wallet ||
    metadata.data.updateAuthority !== wallet.publicKey.toBase58()
  ) {
    throw new Error(
      "This wallet does not have Update Authority over this NFT."
    );
  }

  const metadataData = metadata.data.data;
  return metadataData.uri;
};

export const fetchRemoteMetadataJsonFromMint = async (mint: string) => {
  const uri = await getURIFromMintAccount(mint);
  const response = await fetch(uri);

  const result = (await response.json()) as MetadataJson;

  return result;
};
