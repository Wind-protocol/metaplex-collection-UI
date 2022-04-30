import { FC } from "react";
import { Layout } from "components/Layout";
import { LoaderComponent } from "components/modals/Progress/LoaderComponent";

export const AppLoading: FC<{ title?: string }> = ({
  title = "Loading collections",
}) => (
  <Layout>
    <LoaderComponent title={title} />
  </Layout>
);
