import { MetadataJson } from "@metaplex/js";
import { attach, createEffect, StoreValue } from "effector";
import { initCollection } from "sdk/initCollection";
import { ECollectionProgress } from "views/CreateCollection/CreateCollection.state";
import { $connection } from "state/connection";
import { $storage } from "state/storage";
import { $wallet } from "state/wallet";
import { RequestPayload } from ".";

export interface IUploadJSON2ArweaveParams {
  metadata: MetadataJson;
  file: File;
  payload: RequestPayload;
  updateProgress?: (status: ECollectionProgress | null) => void;
  setCollectionId: (collectionId: string) => void;
}

export interface IMintArweaveSource {
  connection: StoreValue<typeof $connection>;
  storage: StoreValue<typeof $storage>;
  wallet: StoreValue<typeof $wallet>;
}

export type IUploadJSON2ArweaveParamsWithSource = IUploadJSON2ArweaveParams &
  IMintArweaveSource;

export const initCollectionFx = attach({
  effect: createEffect(
    async ({
      metadata,
      file,
      payload,
      updateProgress,
      setCollectionId,
      connection,
      wallet,
      storage,
    }: IUploadJSON2ArweaveParamsWithSource) => {
      if (!wallet) {
        throw new Error("Wallet wasn't connected");
      }

      await initCollection({
        connection,
        wallet,
        storage,
        metadata,
        file,
        payload,
        updateProgress,
        setCollectionId,
      });
    }
  ),
  source: {
    connection: $connection,
    storage: $storage,
    wallet: $wallet,
  },
  mapParams: (params: IUploadJSON2ArweaveParams, sources) => ({
    ...sources,
    ...params,
  }),
});
