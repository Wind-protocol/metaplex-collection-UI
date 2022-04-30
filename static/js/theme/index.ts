import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { fontSizes, fonts, letterSpacings, lineHeights } from "./typography";

import { colors } from "./colors";
import { components } from "./components";
import { shadows } from "./shadows";
import { styles } from "./styles";
import { layerStyles } from "./layerStyles";
import { breakpoints } from "./breakpoints";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  breakpoints,
  colors,
  components,
  config,
  fontSizes,
  fonts,
  letterSpacings,
  lineHeights,
  shadows,
  styles,
  layerStyles,
});
