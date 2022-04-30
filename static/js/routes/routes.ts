import { route, variable } from "utils/route";

export const collectionId = variable(":collectionId");
const expandCollection = route("expand-collection", collectionId);

export const ROUTES = {
  home: route(""),
  createNewCollection: route("create-collection"),
  expandCollection,
  notFound: route("404"),
} as const;
