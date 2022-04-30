import { HStack, Image, VStack, Text, Spinner, Flex } from "@chakra-ui/react";
import { MetadataJson } from "@metaplex/js";
import { MetaplexIcon } from "components/Icons";
import { useEffect, useState } from "react";
import { fetchRemoteMetadataJsonFromMint } from "utils/token-metadata";

interface PreviewMintAccountProps {
  mint: string;
}

export const PreviewMintAccount = ({ mint }: PreviewMintAccountProps) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [errorLoadingImage, setErrorLoadingImage] = useState(false);
  const [metadata, setMetadata] = useState<MetadataJson>();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchRemoteMetadataJsonFromMint(mint)
      .then((item) => {
        setMetadata(item);
      })
      .catch(() => {
        setHasError(true);
      });
  }, [mint]);

  if (hasError) {
    return (
      <HStack rounded="md" w="full" paddingY={3} spacing={4}>
        <Text variant={"small-bold"}>There was an issue loading: {mint}</Text>
      </HStack>
    );
  }

  return (
    <HStack rounded="md" w="full" paddingY={3} spacing={4}>
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
          {metadata ? metadata?.name : "Loading, please wait..."}
        </Text>
        <Text fontSize={"sm"}>{mint}</Text>
      </VStack>
    </HStack>
  );
};
