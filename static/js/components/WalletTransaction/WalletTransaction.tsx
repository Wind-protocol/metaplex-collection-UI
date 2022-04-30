import { Stack, StackProps, Flex } from "@chakra-ui/react";

import { SolUsdDisplay } from "components/SolUsdDisplay/SolUsdDisplay";
import { TitledBlock } from "components/TitledBlock";
import { useCustomBreakpoints } from "hooks/useCustomBreakpoints";

interface WalletTransactionProps extends StackProps {
  sol?: number;
  usd?: number;
  title?: string;
}

export const WalletTransaction: React.FC<WalletTransactionProps> = ({
  sol,
  usd,
  title = "Price",
  children,
  ...rest
}) => {
  const { mdUp } = useCustomBreakpoints();

  return (
    <Stack
      direction={mdUp ? "row" : "column"}
      spacing={4}
      borderRadius={6}
      bgColor="gray.700"
      padding={4}
      align="stretch"
      justify="space-between"
      {...rest}
    >
      <TitledBlock title={title} size="sm" w="full">
        <SolUsdDisplay sol={sol} usd={usd} />
      </TitledBlock>
      <Flex>{children}</Flex>
    </Stack>
  );
};
