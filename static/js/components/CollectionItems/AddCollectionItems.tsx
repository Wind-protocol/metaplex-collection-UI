import {
  Button,
  Center,
  Divider,
  Flex,
  HStack,
  Input,
  Spinner,
  Tab,
  TabList,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import { useToast } from "components/modals/Toast";
import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import { getURIFromMintAccount } from "utils/token-metadata";
import { PreviewCollectionItems } from "./PreviewCollectionItems";
import { UploadButton } from "components/UploadButton";
import { FileType, FiletypeAcceptMap } from "components/MediaTypeSelector";
import { PublicKey } from "@solana/web3.js";

export interface AddCollectionItemsProps {
  setMintList: (newMintList: string[]) => void;
}

export const AddCollectionItems: React.FC<AddCollectionItemsProps> = ({
  setMintList,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputCanChangeRef = useRef(false);
  const toast = useToast();
  const [isValidatingMintHash, setIsValidatingMintHash] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [isInvalidInput, setIsInvalidInput] = useState<boolean>(false);
  const [creatorIds, setCreatorIds] = useState<string[]>([]);
  const [csvFiles, setCSVFiles] = useState<File[]>([]);
  const [totalMintHashList, setTotalMintHashList] = useState<Set<string>>(
    new Set()
  );
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setMintList(Array.from(totalMintHashList));
  }, [totalMintHashList]);

  const addMultipleMintAddresses = (mintAddresses: string[]) => {
    setTotalMintHashList((current) => {
      return new Set([...Array.from(current), ...mintAddresses]);
    });
  };

  const addMintAddress = async (mintAddress: string) => {
    setIsValidatingMintHash(true);
    try {
      await getURIFromMintAccount(mintAddress);
    } catch (error) {
      setIsInvalidInput(true);
      setIsValidatingMintHash(false);
      return;
    }

    addMultipleMintAddresses([inputValue]);
    setIsValidatingMintHash(false);
    setInputValue("");
  };

  const addFirstVerifiedCreator = (creatorId: string) => {
    setIsValidatingMintHash(true);
    if (creatorIds.includes(creatorId)) {
      toast({
        duration: 2000,
        title: "Already added",
        text: "This CM id has already been added",
      });
      return;
    }

    setIsValidatingMintHash(false);

    try {
      new PublicKey(creatorId);
    } catch (err) {
      setIsValidatingMintHash(false);
      setIsInvalidInput(true);
      return;
    }

    setCreatorIds([creatorId, ...creatorIds]);
    setInputValue("");
    return;
  };

  const onAddCSV = (files: FileList) => {
    setIsValidatingMintHash(true);
    setCSVFiles([...Array.from(csvFiles), ...Array.from(files)]);
    setIsValidatingMintHash(false);
  };

  const onAddSource: MouseEventHandler<HTMLButtonElement> = async () => {
    setIsInvalidInput(false);
    inputCanChangeRef.current = true;

    if (tab === 1) {
      addFirstVerifiedCreator(inputValue);
    } else {
      await addMintAddress(inputValue);
    }
  };

  const changeHandler = (value: string) => {
    inputCanChangeRef.current = false;
    setInputValue(value);
  };

  const getPlaceHolderText = () => {
    switch (tab) {
      case 0: {
        return "Enter a NFT address";
      }
      case 1: {
        return "Enter a First Verified Creator address";
      }
      case 2: {
        return "Import CSV File";
      }
    }
  };

  const getAddButtonContent = () => {
    if (isValidatingMintHash) {
      return <Spinner />;
    }

    if (tab === 2) {
      return "Choose file";
    }

    return "Add";
  };

  return (
    <VStack layerStyle={"base"} p={8} spacing={4} align="start">
      <Tabs
        onChange={(number) => {
          setTab(number);
          setInputValue("");
        }}
        defaultIndex={0}
      >
        <TabList>
          <Tab>Individual NFTs</Tab>
          <Tab>First Verified Creator</Tab>
          <Tab>CSV File</Tab>
        </TabList>
      </Tabs>
      <HStack w="full" spacing={4}>
        {tab !== 2 && (
          <>
            <Input
              ref={inputRef}
              onClick={() => inputRef.current}
              value={inputValue}
              onChange={(e) => changeHandler(e.target.value)}
              bg="whiteAlpha.50"
              color="whiteAlpha.700"
              placeholder={getPlaceHolderText()}
              isInvalid={isInvalidInput && inputValue !== ""}
            />

            <Button
              h="56px"
              minW="150px"
              variant={"tertiary"}
              onClick={onAddSource}
              opacity={isValidatingMintHash ? 0.5 : 1}
              disabled={isValidatingMintHash || inputValue === ""}
            >
              {getAddButtonContent()}
            </Button>
          </>
        )}
        {tab === 2 && (
          <Center height={"full"} w={"full"} borderRadius="2xl">
            <Flex direction="column" align="center">
              <UploadButton
                h="56px"
                accept={FiletypeAcceptMap[FileType.CSV]}
                onUpload={onAddCSV}
              >
                {getAddButtonContent()}
              </UploadButton>
            </Flex>
          </Center>
        )}
      </HStack>
      <Divider />
      <PreviewCollectionItems
        mintAddresses={Array.from(totalMintHashList)}
        creatorIds={creatorIds}
        csvFiles={csvFiles}
        addMintAddressesToCollection={addMultipleMintAddresses}
      />
    </VStack>
  );
};
