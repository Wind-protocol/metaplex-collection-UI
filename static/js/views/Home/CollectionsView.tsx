import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { PreviewCollectionStatus } from "components/CollectionItems/PreviewCollectionStatus";
import { Layout } from "components/Layout";
import { CollectionData } from "utils/fetchCollections";
import { getSavedNetwork } from "state/connection";
import { Cluster } from "@solana/web3.js";
import { retryMigration } from "utils/retryMigration";
import { useCustomBreakpoints } from "hooks/useCustomBreakpoints";
import { GrAdd } from "react-icons/gr";
import { FiRefreshCw } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";

export interface CollectionsViewProps {
  collections: CollectionData[];
  refreshCollections: () => void;
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({
  collections,
  refreshCollections,
}) => {
  const { finishedCollections, pendingAndFailedCollections } =
    separateCollectionsByStatus(collections, getSavedNetwork());

  const { mdUp } = useCustomBreakpoints();
  return (
    <Flex direction="column">
      <Layout>
        <Flex>
          <Spacer />
          <Stack direction={mdUp ? "row" : "column"} spacing={4}>
            <Button
              leftIcon={<GrAdd />}
              variant="primary"
              as={Link}
              to={ROUTES.createNewCollection()}
            >
              New Collection
            </Button>
          </Stack>
        </Flex>
        {pendingAndFailedCollections.length > 0 && (
          <PendingCollections
            collections={pendingAndFailedCollections}
            refreshCollections={refreshCollections}
          />
        )}
        {finishedCollections.length > 0 && (
          <FinishedCollections
            collections={finishedCollections}
            refreshCollections={refreshCollections}
          />
        )}
      </Layout>
    </Flex>
  );
};

export const FinishedCollections: React.FC<CollectionsViewProps> = ({
  collections,
  refreshCollections,
}) => {
  return (
    <Flex direction="column">
      <Heading
        variant="h3"
        my={4}
        marginTop={63 /* Height of Metaplex Top Bar */}
        mb={"32px"}
      >
        Collections
      </Heading>
      {collections.map((collectionData) => (
        <Box
          w="full"
          bg="whiteAlpha.50"
          px={4}
          borderRadius="2xl"
          borderColor="white"
          mb={"16px"}
          key={collectionData.collection_id}
        >
          <PreviewCollectionStatus
            collectionData={collectionData}
            refreshCollections={refreshCollections}
          />
        </Box>
      ))}
    </Flex>
  );
};

export const PendingCollections: React.FC<CollectionsViewProps> = ({
  collections,
  refreshCollections,
}) => {
  const onClickRetry = async (collectionId: string) => {
    await retryMigration(collectionId);
  };

  return (
    <Flex direction="column">
      <HStack marginTop={63 /* Height of Metaplex Top Bar */}>
        <Heading variant="h3" my={4} mb={"32px"}>
          In Progress
        </Heading>
        <Spacer />
        <Flex direction="column" align="center" justify="center">
          <IconButton
            aria-label="Refresh Collections"
            icon={<FiRefreshCw />}
            bg="transparent"
            color="#00FFBD"
            _hover={{ color: "#00E0A6" }}
            _focus={{ color: "#00E0A6" }}
            w="32px"
            h="32px"
            onClick={refreshCollections}
          />
        </Flex>
      </HStack>
      {collections.map((collectionData) => (
        <Box
          w="full"
          bg="whiteAlpha.50"
          px={4}
          borderRadius="2xl"
          borderColor="white"
          mb={"16px"}
          key={collectionData.collection_id}
        >
          <PreviewCollectionStatus
            collectionData={collectionData}
            refreshCollections={refreshCollections}
            onClickRetry={onClickRetry}
          />
        </Box>
      ))}
    </Flex>
  );
};

const separateCollectionsByStatus = (
  collections: CollectionData[],
  cluster: Cluster
) => {
  const finishedCollections: CollectionData[] = [];
  const pendingAndFailedCollections: CollectionData[] = [];

  collections.forEach((value) => {
    if (value.cluster === cluster.toString())
      if (value.status === "successful") {
        finishedCollections.push(value);
      } else {
        pendingAndFailedCollections.push(value);
      }
  });

  return {
    finishedCollections,
    pendingAndFailedCollections,
  };
};
