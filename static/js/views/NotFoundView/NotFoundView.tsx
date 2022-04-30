import { VStack } from "@chakra-ui/layout";
import { Button, Center, Heading } from "@chakra-ui/react";
import { Layout } from "components/Layout";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";

interface Props {
  href?: string;
  hrefTitle?: string;
}

export const NotFoundContent: FC<Props> = ({
  hrefTitle: linkTitle = "Go Home",
  href = ROUTES.home(),
  children,
}) => (
  <Center height="full">
    <VStack spacing={4}>
      <Heading variant="h1">{children || "Page was not found"}</Heading>
      <Button flexGrow={1} size="lg" as={Link} to={href}>
        {linkTitle}
      </Button>
    </VStack>
  </Center>
);

export const NotFoundView: FC = ({ children }) => {
  return (
    <Layout>
      <NotFoundContent>{children}</NotFoundContent>
    </Layout>
  );
};
