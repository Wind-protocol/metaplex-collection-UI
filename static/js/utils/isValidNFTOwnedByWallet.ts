import { programs } from "@metaplex/js";
const {
  metadata: { Metadata },
} = programs;
import { $connection } from "state/connection";
import { fork } from "effector";
import { AccountInfo, PublicKey } from "@solana/web3.js";
import { $wallet } from "state/wallet";

export const isValidNFTOwnedByWallet = async (mint: string) => {
  try {
    const scope = fork();
    const wallet = scope.getState($wallet);
    const connection = scope.getState($connection);

    if (!wallet) {
      throw new Error("Wallet isn't connected!");
    }

    const pda = await Metadata.getPDA(mint);
    const accountInfo = await connection.getParsedAccountInfo(
      new PublicKey(pda)
    );

    if (accountInfo) {
      const metadata = new Metadata(
        mint,
        accountInfo?.value as AccountInfo<Buffer>
      );

      return (
        metadata &&
        metadata.data.mint != null &&
        metadata.data.updateAuthority === wallet.publicKey.toBase58()
      );
    }
  } catch (err) {}

  return false;
};
