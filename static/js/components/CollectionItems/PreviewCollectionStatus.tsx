import {
  HStack,
  Image,
  VStack,
  Text,
  Spinner,
  Flex,
  Spacer,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { MetadataJson } from "@metaplex/js";
import { useCallback, useEffect, useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { CollectionData } from "utils/fetchCollections";
import { fetchRemoteMetadataJsonFromMint } from "utils/token-metadata";
import { RiAddFill } from "react-icons/ri";
import { ROUTES } from "routes";
import { Link } from "react-router-dom";
import { MetaplexIcon } from "components/Icons";
import { delay } from "utils/delay";

interface PreviewCollectionStatusProps {
  collectionData: CollectionData;
  onClickRetry?: (collectionId: string) => Promise<void>;
  refreshCollections?: () => void;
}

export const PreviewCollectionStatus = ({
  collectionData,
  onClickRetry,
  refreshCollections,
}: PreviewCollectionStatusProps) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [errorLoadingImage, setErrorLoadingImage] = useState(false);
  const [metadata, setMetadata] = useState<MetadataJson>();
  const [hasError, setHasError] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  const onClickRetryLocal = useCallback(async () => {
    if (onClickRetry) {
      onClickRetry(collectionData.collection_id);
    }

    if (refreshCollections) {
      setIsRetrying(true);
      await delay(5000);
      refreshCollections();
      setIsRetrying(false);
    }
  }, []);

  const getSubtitleContent = () => {
    if (collectionData.status === "processing") {
      return (
        <Text variant="small-bold" color={"#00E0A6"}>
          {"Your Collection is still being migrated, check back soon…"}
        </Text>
      );
    } else if (collectionData.status === "retry") {
      return (
        <Text variant="small-bold" color={"pink.500"}>
          {`Failed to migrate ${
            collectionData.failed_mints.length +
            collectionData.retry_mints.length
          } ${
            collectionData.failed_mints.length +
              collectionData.retry_mints.length ===
            1
              ? "NFT"
              : "NFTs"
          }, please retry.`}
        </Text>
      );
    } else if (collectionData.status === "failed") {
      return (
        <Text variant="small-bold" color={"pink.500"}>
          {`We are unable to migrate this collection.`}
        </Text>
      );
    }

    return (
      <Text variant="small-bold">{`${collectionData.successful_mints.length} items`}</Text>
    );
  };

  const getIconOrButton = () => {
    switch (collectionData.status) {
      case "processing":
        return (
          <>
            <Spacer />
            <Flex w="64px" h="64px" align="center" justify="center">
              <Spinner />
            </Flex>
          </>
        );
      case "failed":
        return (
          <>
            <Spacer />
            <Flex w="64px" h="64px" align="center" justify="center">
              <BsExclamationCircle size="32" color="#D83AEB" />
            </Flex>
          </>
        );
      case "retry":
        return (
          <>
            <Spacer />
            <Flex h="48px" w="76px" align="center" justify="center">
              {isRetrying ? (
                <Spinner />
              ) : (
                <Button
                  onClick={() => {
                    onClickRetryLocal();
                  }}
                  type="submit"
                  size="md"
                  variant="tertiary"
                >
                  Retry
                </Button>
              )}
            </Flex>
          </>
        );
      default:
        return (
          <>
            <Spacer />
            <IconButton
              aria-label="Refresh Collections"
              icon={<RiAddFill />}
              bg="transparent"
              color="#00FFBD"
              _hover={{ bg: "#3A3A3A" }}
              _focus={{ bg: "#3A3A3A" }}
              w="48px"
              h="48px"
              as={Link}
              to={ROUTES.expandCollection({
                ":collectionId": collectionData.collection_id,
              })}
            />
          </>
        );
    }
  };

  useEffect(() => {
    fetchRemoteMetadataJsonFromMint(collectionData.collection_id)
      .then((item) => {
        setMetadata(item);
      })
      .catch(() => {
        setHasError(true);
      });
  }, [collectionData.collection_id]);

  if (hasError) {
    return (
      <HStack rounded="md" w="full" paddingY={3} spacing={4}>
        <Text variant={"small-bold"} color={"pink.500"}>
          There was an issue loading Collection ID:
          {collectionData.collection_id}
        </Text>
      </HStack>
    );
  }

  return (
    <HStack rounded="md" w="full" paddingY={3} spacing={4} h="96px">
      {isLoadingImage && (
        <Flex w="64px" h="64px" align="center" justify="center">
          <Spinner />
        </Flex>
      )}
      {errorLoadingImage && (
        <Flex w="64px" h="64px" align="center" justify="center">
          <MetaplexIcon w={9} h={9} />
        </Flex>
      )}
      {metadata && !errorLoadingImage && (
        <Image
          style={{ display: isLoadingImage ? "none" : "flex" }}
          rounded="md"
          w="64px"
          h="64px"
          src={metadata?.image}
          onError={() => {
            setIsLoadingImage(false);
            setErrorLoadingImage(true);
          }}
          onLoad={() => {
            setIsLoadingImage(false);
          }}
        />
      )}

      <VStack align="start">
        <Text variant="small-bold">
          {metadata
            ? metadata?.name
            : "Loading Collection Metadata, please wait..."}
        </Text>
        <Text variant="small-bold">{collectionData.collection_id}</Text>
        {getSubtitleContent()}
      </VStack>

      {getIconOrButton()}
    </HStack>
  );
};
