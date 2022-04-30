import { ArweaveStorage, MetadataJson, Wallet } from "@metaplex/js";
import { Connection, PublicKey } from "@solana/web3.js";
import { ECollectionProgress } from "views/CreateCollection/CreateCollection.state";
import { RequestPayload } from "state/collection";
import { Pipeline } from "utils/pipeline";
import { mintCollectionNFT } from "./mintCollectionNFT";
import { approveCollectionAuthority } from "./approveCollectionAuthority";
import { migrateCollection } from "utils/migrateCollection";
import * as Sentry from "@sentry/react";

export interface InitCollectionProps {
  metadata: MetadataJson;
  file: File;
  payload: RequestPayload;
  updateProgress?: (status: ECollectionProgress | null) => void;
  setCollectionId: (collectionId: string) => void;
  connection: Connection;
  wallet: Wallet;
  storage: ArweaveStorage;
}

export const initCollection = async ({
  metadata,
  file,
  payload,
  updateProgress,
  setCollectionId,
  connection,
  wallet,
  storage,
}: InitCollectionProps) => {
  const pipe = new Pipeline<ECollectionProgress | null>(null, updateProgress);
  try {
    let collectionId;

    // Create a new NFT if one wasn't provided
    if (payload.collection_id) {
      collectionId = new PublicKey(payload.collection_id);
      await approveCollectionAuthority({
        connection,
        wallet,
        mint: collectionId,
        pipe,
      });
    } else {
      collectionId = (
        await mintCollectionNFT(
          {
            connection,
            wallet,
            file,
            metadata,
            storage,
            updateProgress,
          },
          File
        )
      ).mint;
    }

    setCollectionId(collectionId.toBase58());
    migrateCollection(collectionId, payload, wallet, pipe);

    return collectionId;
  } catch (err) {
    pipe.setStep(ECollectionProgress.migrating_error);
    Sentry.captureException(err);
    return undefined;
  }
};
