/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
import { fork } from "effector";
import { $wallet } from "state/wallet";

export interface CollectionData {
  cluster: string;
  collection_id: string;
  collection_size: number;
  status: string;
  successful_mints: string[];
  processing_mints: string[];
  retry_mints: string[];
  failed_mints: string[];
}

const API_URL =
  "https://2d5hc1e0ri.execute-api.us-east-1.amazonaws.com/get-collections?authority=";

export const fetchCollections = async (): Promise<CollectionData[]> => {
  const scope = fork();
  const wallet = scope.getState($wallet);

  if (!wallet) {
    throw new Error("Wallet isn't connected!");
  }

  return await fetch(`${API_URL}${wallet.publicKey.toBase58()}`, {
    method: "GET",
  }).then(async (response) => {
    if (response.ok) {
      return await response.json().then((json) => {
        const collections: CollectionData[] = [];
        json.forEach((jsonCollection: CollectionData) => {
          const collection: CollectionData = {
            cluster: jsonCollection.cluster,
            collection_id: jsonCollection.collection_id,
            collection_size: jsonCollection.collection_size,
            status: jsonCollection.status,
            successful_mints: jsonCollection.successful_mints,
            processing_mints: jsonCollection.processing_mints,
            retry_mints: jsonCollection.retry_mints,
            failed_mints: jsonCollection.failed_mints,
          };
          collections.push(collection);
        });

        return collections;
      });
    }

    return [];
  });
};
