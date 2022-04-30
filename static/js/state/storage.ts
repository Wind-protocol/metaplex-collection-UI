import { ArweaveStorage } from "@metaplex/js";
import { $network } from "./connection";

export const ARWEAVE_UPLOAD_ENDPOINT =
  "https://us-central1-metaplex-studios.cloudfunctions.net/uploadFile";

export const $storage = $network.map(
  (env) =>
    new ArweaveStorage({
      endpoint: ARWEAVE_UPLOAD_ENDPOINT,
      env,
    })
);
