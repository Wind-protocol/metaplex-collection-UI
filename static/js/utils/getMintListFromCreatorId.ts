import { fork } from "effector";
import { $connection } from "state/connection";
import bs58 from "bs58";
import { PublicKey } from "@solana/web3.js";
import { $wallet } from "state/wallet";

const TOKEN_METADATA_PROGRAM = new PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);

const MAX_NAME_LENGTH = 32;
const MAX_URI_LENGTH = 200;
const MAX_SYMBOL_LENGTH = 10;
const MAX_CREATOR_LEN = 32 + 1 + 1;
const MAX_CREATOR_LIMIT = 5;
const MAX_DATA_SIZE =
  4 +
  MAX_NAME_LENGTH +
  4 +
  MAX_SYMBOL_LENGTH +
  4 +
  MAX_URI_LENGTH +
  2 +
  1 +
  4 +
  MAX_CREATOR_LIMIT * MAX_CREATOR_LEN;
const MAX_METADATA_LEN = 1 + 32 + 32 + MAX_DATA_SIZE + 1 + 1 + 9 + 172;
const CREATOR_ARRAY_START =
  1 +
  32 +
  32 +
  4 +
  MAX_NAME_LENGTH +
  4 +
  MAX_URI_LENGTH +
  4 +
  MAX_SYMBOL_LENGTH +
  2 +
  1 +
  4;

export const getMintListFromCreatorId = async (firstCreatorAddress: string) => {
  const scope = fork();
  const wallet = scope.getState($wallet);
  const connection = scope.getState($connection);

  if (!wallet) {
    throw new Error("Wallet isn't connected!");
  }

  const validMetadataAccounts = await connection.getProgramAccounts(
    TOKEN_METADATA_PROGRAM,
    {
      dataSlice: { offset: 33, length: 32 },
      filters: [
        { dataSize: MAX_METADATA_LEN },
        {
          memcmp: {
            offset: CREATOR_ARRAY_START,
            bytes: firstCreatorAddress,
          },
        },
        {
          memcmp: {
            offset: 1,
            bytes: wallet.publicKey.toBase58(),
          },
        },
      ],
    }
  );

  return validMetadataAccounts.map((metadataAccountInfo) =>
    bs58.encode(metadataAccountInfo.account.data)
  );
};
