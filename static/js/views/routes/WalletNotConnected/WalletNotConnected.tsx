import { Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import backgroundImage from "assets/collections_bg_static.png";
import { useCustomBreakpoints } from "hooks/useCustomBreakpoints";
import { FC } from "react";

export const WalletNotConnected: FC = () => {
  const { mdUp } = useCustomBreakpoints();
  return (
    <Center>
      <Flex direction="column" align="center" justify="center">
        <WalletModalProvider>
          <WalletMultiButton
            style={{
              height: 48,
              marginTop: mdUp ? 250 : 150,
              marginBottom: mdUp ? -80 : undefined,
            }}
          >
            Connect Wallet
          </WalletMultiButton>
        </WalletModalProvider>
        <Image
          maxW={mdUp ? 1000 : 600}
          maxH={550}
          marginBottom={mdUp ? -115 : -65}
          src={backgroundImage}
        />
        <Heading
          textAlign="center"
          variant="h3"
          w={mdUp ? 600 : undefined}
          my={4}
        >
          Create a Collection
        </Heading>
        <Text align="center" w={mdUp ? 536 : 300} mb={10}>
          Connect your wallet and use this tool to convert your NFTs into a
          verifiable collection using the Metaplex Standard.
        </Text>
      </Flex>
    </Center>
  );
};
