import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import backgroundImage from "assets/collections-ellipse.png";
import { GrAdd } from "react-icons/gr";
import { Layout } from "components/Layout";
import { useCustomBreakpoints } from "hooks/useCustomBreakpoints";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";
import { useEffect, useState } from "react";
import { CollectionData, fetchCollections } from "utils/fetchCollections";
import { CollectionsView } from "./CollectionsView";
import { getSavedNetwork } from "state/connection";

export const Home: React.FC = () => {
  const [collections, setCollections] = useState<CollectionData[] | undefined>(
    undefined
  );

  const refreshCollections = () => {
    fetchCollections()
      .then((collections) => {
        const cluster = getSavedNetwork().toString();
        const collectionsForCluster = collections.filter((collection) => {
          return collection.cluster === cluster;
        });
        setCollections(collectionsForCluster);
      })
      .catch(() => {
        setCollections([]);
      });
  };

  useEffect(() => {
    refreshCollections();
  }, []);

  const { mdUp } = useCustomBreakpoints();
  return collections === undefined ? (
    <Center marginTop={mdUp ? 400 : 200}>
      <Layout>
        <Spinner size="xl" color="#00FFBD" />
      </Layout>
    </Center>
  ) : collections.length > 0 ? (
    <CollectionsView
      collections={collections}
      refreshCollections={refreshCollections}
    />
  ) : (
    <Center marginTop={mdUp ? 400 : 200}>
      <Image
        position={"absolute"}
        maxW={mdUp ? 1000 : 350}
        src={backgroundImage}
        zIndex={-1}
      />
      <Flex direction="column" align="center" justify="center">
        <Layout>
          <Heading
            textAlign={"center"}
            variant="h3"
            my={4}
            w={mdUp ? 600 : undefined}
            marginTop={-63 /* Height of Metaplex Top Bar */}
          >
            Migrate existing NFT collections to use the new Metaplex Collection
            Standard
          </Heading>
          <Center>
            <Text align="center" w={mdUp ? 536 : undefined} mb={10}>
              You may choose to create a new Collection NFT, which is the most
              common scenario. In rare scenarios, you may opt to use an existing
              NFT created to represent your on-chain Collection.
            </Text>
          </Center>

          <Center>
            <Button
              leftIcon={<GrAdd />}
              variant="primary"
              as={Link}
              to={ROUTES.createNewCollection()}
            >
              New Collection
            </Button>
          </Center>
        </Layout>
      </Flex>
    </Center>
  );
};
