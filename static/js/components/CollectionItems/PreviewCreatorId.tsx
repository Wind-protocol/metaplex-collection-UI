import { HStack, VStack, Text, Spinner, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import { getMintListFromCreatorId } from "utils/getMintListFromCreatorId";

interface PreviewCreatorIdProps {
  creatorId: string;
  addMintAddressesToCollection: (mintAddressToAdd: string[]) => void;
}

export const PreviewCreatorId = ({
  creatorId,
  addMintAddressesToCollection,
}: PreviewCreatorIdProps) => {
  const [mintList, setMintList] = useState<string[] | null>(null);
  const [title, setTitle] = useState("Looking for valid NFTs...");

  const getMintList = (creatorId: string) => {
    getMintListFromCreatorId(creatorId).then((mintList) => {
      if (mintList.length === 0) {
        setTitle(
          "There are no NFTs associated with this Verified Creator or Wallet Authority"
        );
      } else if (mintList.length === 1) {
        setTitle(`Found ${mintList.length} NFT`);
      } else {
        setTitle(`Found ${mintList.length} NFTs`);
      }
      setMintList(mintList);
      addMintAddressesToCollection(mintList);
    });
  };

  useEffect(() => {
    getMintList(creatorId);
  }, [creatorId]);

  return (
    <HStack rounded="md" w="full" paddingY={3} spacing={4}>
      <Flex w="64px" h="64px" align="center" justify="center">
        {mintList ? (
          mintList.length > 0 ? (
            <BsCheckCircle size={32} />
          ) : (
            <BsExclamationCircle size={32} />
          )
        ) : (
          <Spinner />
        )}
      </Flex>
      <VStack align="start">
        <Text variant="small-bold">{title}</Text>
        <Text fontSize={"sm"}>{creatorId}</Text>
      </VStack>
    </HStack>
  );
};
