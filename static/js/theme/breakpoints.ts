import { createBreakpoints } from "@chakra-ui/theme-tools";

export const breakpointsValues = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
};

export const breakpoints = createBreakpoints({
  sm: breakpointsValues.sm.toString() + "px",
  md: breakpointsValues.md.toString() + "px",
  lg: breakpointsValues.lg.toString() + "px",
  xl: breakpointsValues.xl.toString() + "px",
  "2xl": breakpointsValues.xxl.toString() + "px",
});
