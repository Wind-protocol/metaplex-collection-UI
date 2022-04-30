import { Box, Flex } from "@chakra-ui/react";
import { FC, useCallback, useState } from "react";

import { useCustomBreakpoints } from "hooks/useCustomBreakpoints";
import { useScrollTrigger } from "./useScrollTrigger";

export type LayoutContentVariant = "wide" | "medium" | "narrow";
const variantToWidth = { wide: "1600px", medium: "7xl", narrow: "3xl" };

interface Props {
  focused?: boolean;
  variant?: LayoutContentVariant;
  gutterBottom?: boolean;
  onScrollTrigger?: (trigger: boolean) => void;
}

export const LayoutContent: FC<Props> = ({
  focused,
  variant = "wide",
  gutterBottom,
  onScrollTrigger,
  children,
}) => {
  const [node, setNode] = useState<Element | null>(null);
  useScrollTrigger(node, { onTrigger: onScrollTrigger });
  const { mdUp } = useCustomBreakpoints();

  const onRefChange = useCallback(setNode, []);

  const paddingValue = mdUp ? 12 : 6;
  const maxWidth = variantToWidth[variant];

  return (
    <Box
      ref={onRefChange}
      flexGrow={1}
      position="relative"
      maxH="100vh"
      overflowY="auto"
    >
      <Flex
        direction="column"
        maxW={mdUp ? maxWidth : "full"}
        w={mdUp ? undefined : "390px"}
        marginX="auto"
        flexGrow={1}
        px={paddingValue}
        pt={focused ? paddingValue : 88}
        pb={gutterBottom ? "30vh" : paddingValue}
      >
        {children}
      </Flex>
    </Box>
  );
};
