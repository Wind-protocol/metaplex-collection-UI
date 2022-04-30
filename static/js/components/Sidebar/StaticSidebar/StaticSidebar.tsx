import { FC } from "react";
import { Flex } from "@chakra-ui/react";

export const sidebarWidth = 344;

interface Props {
  focused?: boolean;
}

export const StaticSidebar: FC<Props> = ({ focused, children }) => {
  return (
    <Flex
      flex="0 0 auto"
      w={sidebarWidth}
      height="100vh"
      overflowY="auto"
      borderRightColor="whiteAlpha.100"
      borderRightWidth="1px"
      p={8}
      pt={focused ? 4 : 20}
    >
      {children}
    </Flex>
  );
};
