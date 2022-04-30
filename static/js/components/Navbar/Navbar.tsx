import { Flex, FlexProps, HStack, Heading, Spacer } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { MetaplexIcon } from "components/Icons";
import { useCustomBreakpoints } from "hooks/useCustomBreakpoints";

interface Props extends FlexProps {
  transparent?: boolean;
  backgroundBlur?: boolean;
}

export const Navbar: React.FC<Props> = ({
  transparent,
  backgroundBlur,
  children,
  ...props
}) => {
  const bgColor = backgroundBlur ? "blackAlpha.500" : "gray.900";
  const { mdUp } = useCustomBreakpoints();

  return (
    <Flex
      w="100%"
      as="header"
      pl={mdUp ? 8 : 6}
      pr={mdUp ? 10 : 6}
      height={16}
      borderBottomStyle="solid"
      borderBottomColor={transparent ? "rgba(0, 0, 0, 0)" : "whiteAlpha.100"}
      borderBottomWidth="1px"
      bgColor={transparent ? undefined : bgColor}
      backdropFilter={backgroundBlur && !transparent ? "blur(20px)" : undefined}
      boxShadow={transparent ? undefined : "md"}
      transition="background-color .3s ease; border-color .3s ease box-shadow .3s ease"
      {...props}
    >
      <HStack as={Link} to="/">
        <MetaplexIcon w={9} h={9} />
        <Heading as="h1" size="xs">
          METAPLEX
        </Heading>
      </HStack>
      <Spacer />
      {children}
    </Flex>
  );
};
