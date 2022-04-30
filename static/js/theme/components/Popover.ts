import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import type { PartsStyleFunction } from "@chakra-ui/theme-tools";

const baseStyle: PartsStyleFunction<typeof parts> = () => ({
  content: {
    _focus: {
      outline: 0,
      boxShadow: "none",
    },
  },
});

export const Popover = {
  baseStyle,
};
