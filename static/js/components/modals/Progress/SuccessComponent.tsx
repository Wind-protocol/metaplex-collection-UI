import { Center, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { FC } from "react";
import { ModalFootnote } from "../ModalFootnote";
import { useCustomBreakpoints } from "hooks/useCustomBreakpoints";
import { LoaderProps } from "./LoaderComponent";
import successAsset from "./assets/Success.svg";

export const SuccessComponent: FC<LoaderProps> = ({
  title,
  subtitle,
  noteIcon,
  noteText,
}) => {
  const { mdUp } = useCustomBreakpoints();

  return (
    <Flex direction="column" flexGrow={1}>
      <Center
        w="full"
        h="250px"
        flexDirection="column"
        flexGrow={1}
        px={mdUp ? 16 : 0}
        my={mdUp ? 16 : 6}
      >
        <Flex marginBottom={5}>
          <Img src={successAsset} />
        </Flex>
        <Heading variant="h4" mb={1} textAlign="center">
          {title}
        </Heading>
        <Text align="center" color="whiteAlpha.700">
          {subtitle}
        </Text>
      </Center>
      <ModalFootnote icon={noteIcon} text={noteText} />
    </Flex>
  );
};
