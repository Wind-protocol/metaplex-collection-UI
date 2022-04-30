/* eslint-disable @typescript-eslint/no-misused-promises */

import { Link } from "@chakra-ui/react";
import { MigrateToCollectionForm } from "components/forms/MigrateToCollectionForm";
import { Layout } from "components/Layout";
import { Progress } from "components/modals/Progress";
import { useLocalState } from "./CreateCollection.state";

export const CreateCollection: React.FC = () => {
  const { onSubmit, closeModal, updateProgress, progressMeta } =
    useLocalState();

  return (
    <Layout variant="narrow" gutterBottom>
      <MigrateToCollectionForm
        onSubmit={onSubmit}
        title={"Create a new collection"}
        buttonText={"Create Collection"}
      >
        Before getting started check out our{" "}
        <Link href="https://docs.metaplex.com/token-metadata/specification#collections">
          Collections Standard Overview.
        </Link>
      </MigrateToCollectionForm>
      <Progress
        isOpen={progressMeta.isOpen}
        title={progressMeta.title}
        subtitle={progressMeta.subtitle}
        status={progressMeta.status}
        onClose={closeModal}
        updateProgress={updateProgress}
        collectionId={progressMeta.collectionId}
      />
    </Layout>
  );
};
