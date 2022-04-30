import { ROUTES } from "routes";
import type { ISchema } from "./types";
import { Home } from "views/Home";
import { CreateCollection } from "views/CreateCollection/CreateCollection";
import { $hasConnectedWallet } from "state/wallet";
import { WalletNotConnected } from "views/routes/WalletNotConnected";
import { ExpandCollection } from "views/ExpandCollection";
import { extractRouteVariable } from "./routeUtils";
import { useParams } from "react-router-dom";

export const SCHEMA: ISchema[] = [
  {
    path: ROUTES.home,
    view: () => {
      return <Home />;
    },
    guard: $hasConnectedWallet,
    guardView: WalletNotConnected,
  },
  {
    path: ROUTES.createNewCollection,
    view: () => {
      return <CreateCollection />;
    },
    guard: $hasConnectedWallet,
    guardView: WalletNotConnected,
  },
  {
    path: ROUTES.expandCollection,
    view: () => {
      const params = useParams();
      const collectionId = extractRouteVariable("collectionId", params);
      return <ExpandCollection collectionId={collectionId} />;
    },
    guard: $hasConnectedWallet,
    guardView: WalletNotConnected,
  },
];
