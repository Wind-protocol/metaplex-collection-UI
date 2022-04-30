import { Box, Button, Divider, Text } from "@chakra-ui/react";
import { useState } from "react";
import { PreviewCreatorId } from "./PreviewCreatorId";
import { PreviewFile } from "./PreviewFile";
import { PreviewMintAccount } from "./PreviewMintAccount";

interface PreviewCollectionItemsProps {
  mintAddresses: string[];
  creatorIds: string[];
  csvFiles: File[];
  addMintAddressesToCollection: (mintAddressToAdd: string[]) => void;
}

export const PreviewCollectionItems = ({
  mintAddresses,
  creatorIds,
  csvFiles,
  addMintAddressesToCollection,
}: PreviewCollectionItemsProps) => {
  const [page, setPage] = useState(1);
  const visibleMintHashList = mintAddresses.slice(0, page * 3);

  return (
    <>
      {mintAddresses.length === 1 && (
        <>
          <Text variant={"small-bold"}>
            {mintAddresses.length} NFT has been added
          </Text>
        </>
      )}

      {mintAddresses.length > 1 && (
        <>
          <Text variant={"small-bold"}>
            {mintAddresses.length} NFTs have been added
          </Text>
        </>
      )}

      {visibleMintHashList.map((mint, index) => (
        <Box
          w="full"
          bg="whiteAlpha.50"
          px={4}
          borderRadius="2xl"
          borderColor="white"
          key={mint}
        >
          <PreviewMintAccount mint={mint} />
          {visibleMintHashList.length !== index && <Divider />}
        </Box>
      ))}

      {mintAddresses.length > visibleMintHashList.length && (
        <Button
          h="56px"
          w="full"
          variant={"tertiary"}
          onClick={() => setPage(page + 1)}
        >
          Preview More
        </Button>
      )}

      {creatorIds.length > 0 && (
        <>
          <Text variant={"small-bold"}>First Verified Creators</Text>
          {creatorIds.map((creatorId) => (
            <Box
              w="full"
              bg="whiteAlpha.50"
              px={4}
              borderRadius="2xl"
              borderColor="white"
              key={creatorId}
            >
              <PreviewCreatorId
                creatorId={creatorId}
                addMintAddressesToCollection={addMintAddressesToCollection}
              />
            </Box>
          ))}
        </>
      )}
      {csvFiles.length > 0 && (
        <>
          <Text variant={"small-bold"}>CSV Files</Text>
          {csvFiles.map((file) => (
            <Box
              w="full"
              bg="whiteAlpha.50"
              px={4}
              borderRadius="2xl"
              borderColor="white"
              key={file.name}
            >
              <PreviewFile
                file={file}
                addMintAddressesToCollection={addMintAddressesToCollection}
              />
            </Box>
          ))}
        </>
      )}
    </>
  );
};
