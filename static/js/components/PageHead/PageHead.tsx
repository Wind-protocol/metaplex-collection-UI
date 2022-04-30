import { FC, ReactNode } from "react";
import { Heading, Text } from "@chakra-ui/react";

interface Props {
  title?: string;
  subtitle?: string | ReactNode;
}

export const PageHead: FC<Props> = ({ title, subtitle }) => (
  <>
    <Heading variant="h3" mt={6} mb={subtitle ? 4 : 12}>
      {title}
    </Heading>
    {subtitle && (
      <Text color="whiteAlpha.500" variant="body-large" mb={12}>
        {subtitle}
      </Text>
    )}
  </>
);
