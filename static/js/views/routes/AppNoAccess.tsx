import { FC } from "react";
import { NotFoundView } from "views/NotFoundView";

export const AppNoAccess: FC = ({ children }) => (
  <NotFoundView>{children || "Access denied"}</NotFoundView>
);
