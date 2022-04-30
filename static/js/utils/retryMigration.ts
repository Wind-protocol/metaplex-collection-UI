/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument */
import { PublicKey } from "@solana/web3.js";
import { ECollectionProgress } from "views/CreateCollection/CreateCollection.state";
import { Pipeline } from "utils/pipeline";
import { fetchJobStatus } from "utils/fetchJobStatus";
import { $wallet } from "state/wallet";
import { fork } from "effector";
import * as Sentry from "@sentry/react";

export const retryMigration = async (
  collectionId: string,
  pipe?: Pipeline<ECollectionProgress | null>
) => {
  const scope = fork();
  const wallet = scope.getState($wallet);

  if (!wallet) {
    throw new Error("Wallet isn't connected!");
  }

  if (!collectionId || collectionId === "") {
    throw new Error("No Collection ID to retry.");
  }

  pipe?.setStep(ECollectionProgress.migrating_collection);
  const isMigrationStarted = await retry(collectionId, wallet.publicKey);

  if (isMigrationStarted) {
    const jobStatus = await fetchJobStatus(
      collectionId,
      wallet.publicKey.toBase58()
    );

    if (!jobStatus || jobStatus !== "successful") {
      if (jobStatus === "retry") {
        pipe?.setStep(ECollectionProgress.migrating_error_retry);
      } else {
        pipe?.setStep(ECollectionProgress.migrating_error);
      }
      Sentry.captureException(
        new Error(
          `Collection Migration failed. Job Status: ${jobStatus} Collection ID: ${collectionId}.`
        )
      );
    } else {
      pipe?.setStep(ECollectionProgress.migrating_success);
    }
  } else {
    Sentry.captureException(
      new Error(`Failed to start migration: Collection ID ${collectionId}.`)
    );
  }
};

const API_ENDPOINT_RETRY_MIGRATION =
  "https://2d5hc1e0ri.execute-api.us-east-1.amazonaws.com/retry-collection";

const retry = async (
  collectionId: string,
  updateAuthority: PublicKey
): Promise<boolean> => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({
      collection_id: collectionId,
      update_authority: updateAuthority,
    }),
  };

  return await fetch(API_ENDPOINT_RETRY_MIGRATION, requestOptions).then(
    (response) => {
      return response.ok;
    }
  );
};
