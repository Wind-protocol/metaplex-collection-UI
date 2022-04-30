/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument */
import { Wallet } from "@metaplex/js";
import { PublicKey } from "@solana/web3.js";
import { ECollectionProgress } from "views/CreateCollection/CreateCollection.state";
import { RequestPayload } from "state/collection";
import { Pipeline } from "utils/pipeline";
import { fetchJobStatus } from "utils/fetchJobStatus";
import { delay } from "./delay";

export const migrateCollection = async (
  collectionId: PublicKey,
  payload: RequestPayload,
  wallet: Wallet,
  pipe: Pipeline<ECollectionProgress | null>
) => {
  pipe.setStep(ECollectionProgress.migrating_collection);
  const isMigrationStarted = await startCollectionMigration(
    collectionId,
    payload
  );

  if (isMigrationStarted) {
    await delay(5000);
    const jobStatus = await fetchJobStatus(
      collectionId.toBase58(),
      wallet.publicKey.toBase58()
    );

    if (!jobStatus || jobStatus !== "successful") {
      if (jobStatus === "retry") {
        pipe.setStep(ECollectionProgress.migrating_error_retry);
      } else {
        pipe.setStep(ECollectionProgress.migrating_error);
      }
      throw new Error(
        `Collection Migration failed. Job Status: ${jobStatus} Collection ID: ${collectionId.toBase58()}.`
      );
    } else {
      pipe.setStep(ECollectionProgress.migrating_success);
    }
  } else {
    throw new Error(
      `Failed to start migration: Collection ID ${collectionId.toBase58()}.`
    );
  }
};

const API_ENDPOINT_CREATE_COLLECTION =
  "https://2d5hc1e0ri.execute-api.us-east-1.amazonaws.com/create-collection";

const startCollectionMigration = async (
  collectionMint: PublicKey,
  payload: RequestPayload
): Promise<boolean> => {
  payload.collection_id = collectionMint.toBase58();
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(payload),
  };

  return await fetch(API_ENDPOINT_CREATE_COLLECTION, requestOptions).then(
    (response) => {
      return response.ok;
    }
  );
};
