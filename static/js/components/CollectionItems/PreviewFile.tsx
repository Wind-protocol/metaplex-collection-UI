import { HStack, VStack, Text, Spinner, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsCheckCircle, BsExclamationCircle } from "react-icons/bs";
import { getCSVFileContent } from "utils/csv";
import { isValidNFTOwnedByWallet } from "utils/isValidNFTOwnedByWallet";

interface PreviewFileProps {
  file: File;
  addMintAddressesToCollection: (mintAddressToAdd: string[]) => void;
}

export const PreviewFile = ({
  file,
  addMintAddressesToCollection,
}: PreviewFileProps) => {
  const [mintList, setMintList] = useState<string[] | null>(null);
  const [title, setTitle] = useState("Looking for valid NFTs...");

  const getMintList = async (file: File) => {
    const csvContent = await getCSVFileContent(file);
    const hashList = csvContent.data
      .filter((row) => row[0].length > 1)
      .map((row) => row[0]);

    const validMints = [];
    if (hashList.length > 0) {
      for await (const mint of hashList) {
        if (await isValidNFTOwnedByWallet(mint)) {
          validMints.push(mint);
        }
      }
    }

    if (validMints.length === 0) {
      setTitle("No valid NFTs were imported from this file.");
    } else if (validMints.length === 1) {
      setTitle(`Found ${validMints.length} NFT`);
    } else {
      setTitle(`Found ${validMints.length} NFTs`);
    }
    setMintList(validMints);
    addMintAddressesToCollection(validMints);
  };

  useEffect(() => {
    getMintList(file);
  }, [file]);

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
        <Text fontSize={"sm"}>{file.name}</Text>
      </VStack>
    </HStack>
  );
};
