import { Flex, FlexProps, Text } from "@chakra-ui/react";

import { ReactNode } from "react";

interface TitledBlockProps extends FlexProps {
  title: string;
  subtitle?: string | string[];
  content?: ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
}

const spacing = {
  xs: 1,
  sm: 2,
  md: 4,
  lg: 6,
};

export const TitledBlock: React.FC<TitledBlockProps> = ({
  title,
  subtitle,
  content,
  children,
  size = "md",
  fontWeight,
  ...props
}) => {
  const isXs = size === "xs";

  const subtitleString = Array.isArray(subtitle)
    ? subtitle.join("\n")
    : subtitle;

  return (
    <Flex align="stretch" direction="column" {...props}>
      <Text
        fontWeight={fontWeight}
        variant={isXs ? "small" : "label"}
        mb={subtitleString ? 1 : spacing[size]}
      >
        {title}
      </Text>
      {subtitleString && (
        <Text
          variant="subtitle"
          color="whiteAlpha.500"
          whiteSpace="pre-wrap"
          mb={spacing[size]}
        >
          {subtitleString}
        </Text>
      )}
      {content ? content : children}
    </Flex>
  );
};
