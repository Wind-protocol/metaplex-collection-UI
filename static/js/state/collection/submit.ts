import { CollectionFormProps } from "components/forms/MigrateToCollectionForm";
import { attach, createEffect, StoreValue } from "effector";
import { $walletAddress } from "state/wallet";
import { initCollectionFx } from "./init";
import { MetadataJson } from "@metaplex/js";
import { getSavedNetwork } from "state/connection";
import { ECollectionProgress } from "views/CreateCollection/CreateCollection.state";

export interface RequestPayload {
  mint_list: string[];
  collection_id: string;
  update_authority: string;
  cluster: string;
}

export function convertCollectionFormPropsToICollectionConfig(
  data: CollectionFormProps,
  walletAddress: string
) {
  const metadata: MetadataJson = {
    attributes: [],
    description: data.description,
    image: "",
    name: data.name,
    properties: {
      files: [{ type: "image/png", uri: "" }],
      category: "image",
      creators: [
        {
          address: walletAddress,
          verified: true,
          share: 100,
        },
      ],
    },
    seller_fee_basis_points: 0,
    symbol: data.symbol,
  };

  const files = [data.logoImg].filter((f) => f instanceof File) as File[];
  const payload: RequestPayload = {
    mint_list: data.mintList,
    collection_id: data.collectionId || "",
    update_authority: walletAddress,
    cluster: getSavedNetwork(),
  };

  return { metadata, file: files[0], payload };
}

export interface ISubmitProps {
  updateProgress?: (status: ECollectionProgress | null) => void;
  setCollectionId: (collectionId: string) => void;
  data: CollectionFormProps;
}

export const submitCreateCollectionFx = attach({
  effect: createEffect(
    async ({
      data,
      updateProgress,
      setCollectionId,
      walletAddress,
    }: ISubmitProps & {
      walletAddress: StoreValue<typeof $walletAddress>;
    }) => {
      if (!walletAddress) {
        throw new Error(`Wallet isn't connected`);
      }

      const { metadata, file, payload } =
        convertCollectionFormPropsToICollectionConfig(data, walletAddress);
      await initCollectionFx({
        metadata,
        file,
        payload,
        updateProgress,
        setCollectionId,
      });
    }
  ),
  source: {
    walletAddress: $walletAddress,
  },
  mapParams(
    { data, updateProgress, setCollectionId }: ISubmitProps,
    { walletAddress }
  ) {
    return { data, updateProgress, setCollectionId, walletAddress };
  },
});
