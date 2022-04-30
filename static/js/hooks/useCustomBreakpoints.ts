import { useMediaQuery } from "@chakra-ui/react";
import { sidebarWidth } from "components/Sidebar/StaticSidebar";
import { breakpointsValues } from "theme/breakpoints";

const { xxl, xl, lg, md, sm } = breakpointsValues;

export const useCustomBreakpoints = (includeSidebar = false) => {
  const sidebar = includeSidebar ? sidebarWidth : 0;

  const [smUp, mdUp, lgUp, xlUp, xxlUp] = useMediaQuery([
    `(min-width: ${sm + sidebar}px)`,
    `(min-width: ${md + sidebar}px)`,
    `(min-width: ${lg + sidebar}px)`,
    `(min-width: ${xl + sidebar}px)`,
    `(min-width: ${xxl + sidebar}px)`,
  ]);

  return {
    xxlUp,
    xlUp,
    lgUp,
    mdUp,
    smUp,
    smDown: !smUp,
  };
};
