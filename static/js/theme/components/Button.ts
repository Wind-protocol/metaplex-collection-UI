export const Button = {
  baseStyle: {
    _focus: {
      boxShadow: "none",
    },
  },
  variants: {
    primary: {
      bg: "green.500",
      color: "gray.900",
      _hover: {
        bg: "green.600",
        _disabled: {
          bg: "gray.700",
        },
      },
      _focus: {
        bg: "green.700",
      },
      _disabled: {
        opacity: 1,
        boxShadow: "0px 0px 24px rgba(26, 26, 26, 0.12)",
        color: "whiteAlpha.500",
        bg: "gray.800",
      },
      _active: { bg: "green.400" },
    },
    secondary: {
      bg: "purple.500",
      color: "white",
      _hover: {
        bg: "purple.300",
        _disabled: {
          bg: "purple.500",
        },
      },
      _active: { bg: "purple.400" },
    },
    tertiary: {
      bg: "gray.700",
      color: "white",
      _hover: {
        bg: "gray.500",
        _disabled: {
          bg: "gray.700",
        },
      },
      _focus: {
        bg: "gray.400",
      },
      _active: { bg: "gray.600" },
    },
    ghost: {
      color: "white",
      _hover: {
        bg: "whiteAlpha.100",
      },
      _focus: {
        bg: "whiteAlpha.200",
      },
      _active: {
        bg: "whiteAlpha.200",
      },
    },
    solid: {
      bg: "white",
      color: "gray.900",
      _hover: {
        bg: "whiteAlpha.900",
      },
      _focus: {
        bg: "whiteAlpha.700",
      },
    },
    link: {
      color: "white",
      _hover: {
        color: "whiteAlpha.700",
        textDecoration: "none",
      },
      _focus: {
        color: "whiteAlpha.500",
        textDecoration: "none",
      },
    },
  },
  sizes: {
    xl: {
      borderRadius: "8px",
      minW: 12,
      fontSize: "lg",
      px: 6,
      py: 5,
    },
    lg: {
      borderRadius: "6px",
      minW: 12,
      fontSize: "lg",
      px: 6,
      py: 4,
    },
    md: {
      h: 12,
      minW: 0,
      fontSize: "lg",
      px: 4,
    },
  },
};
