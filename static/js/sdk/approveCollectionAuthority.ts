import { Wallet, actions } from "@metaplex/js";
import { Connection, PublicKey } from "@solana/web3.js";
import { Pipeline } from "utils/pipeline";
import { ECollectionProgress } from "views/CreateCollection/CreateCollection.state";
import { approveCollectionAuthorityAction } from "./actions";
const { sendTransaction } = actions;

export interface ApproveCollectionAuthorityProps {
  connection: Connection;
  wallet: Wallet;
  mint: PublicKey;
  pipe: Pipeline<ECollectionProgress | null>;
}

export const approveCollectionAuthority = async ({
  connection,
  wallet,
  mint,
  pipe,
}: ApproveCollectionAuthorityProps): Promise<string | undefined> => {
  try {
    pipe.setStep(
      ECollectionProgress.checking_for_existing_collection_authority
    );

    const approveUpdateAuthorityTx = await approveCollectionAuthorityAction({
      connection,
      wallet,
      mint,
    });

    if (approveUpdateAuthorityTx) {
      pipe.setStep(ECollectionProgress.approving_collection_authority);

      const txid = await sendTransaction({
        connection,
        wallet,
        txs: [approveUpdateAuthorityTx],
      });

      await connection.confirmTransaction(txid, "max");
      await connection.getParsedTransaction(txid, "confirmed");

      return txid;
    }

    return undefined;
  } catch (err) {
    throw err;
  }
};
