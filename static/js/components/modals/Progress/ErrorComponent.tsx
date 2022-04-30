import { Button, Center, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { FC } from "react";
import errorAsset from "./assets/Error.svg";
import {
  ECollectionProgress,
  ProgressStatus,
} from "views/CreateCollection/CreateCollection.state";
import { retryMigration } from "utils/retryMigration";
import { Pipeline } from "utils/pipeline";

export interface ErrorComponentProps {
  title?: string;
  subtitle?: string;
  status: ProgressStatus;
  updateProgress: (payload: ECollectionProgress | null) => void;
  collectionId?: string;
}

export const ErrorComponent: FC<ErrorComponentProps> = ({
  title,
  subtitle,
  status,
  updateProgress,
  collectionId,
}) => {
  const onClick = async (collectionId: string) => {
    const pipe = new Pipeline<ECollectionProgress | null>(null, updateProgress);

    await retryMigration(collectionId, pipe);
  };

  return (
    <Flex direction="column" flexGrow={1}>
      <Center
        w="full"
        h="250px"
        flexDirection="column"
        flexGrow={1}
        px={16}
        my={16}
      >
        <Flex marginBottom={5}>
          <Img src={errorAsset} />
        </Flex>
        <Heading variant="h4" mb={1} textAlign="center">
          {title}
        </Heading>
        <Text textAlign="center" color="whiteAlpha.700">
          {subtitle}
        </Text>
        {status === ProgressStatus.ErrorRetry && collectionId !== undefined && (
          <Button
            onClick={() => {
              onClick(collectionId);
            }}
            type="submit"
            mt={4}
            size="md"
            variant="primary"
          >
            Retry
          </Button>
        )}
      </Center>
    </Flex>
  );
};
