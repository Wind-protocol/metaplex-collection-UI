import { Button, ButtonProps } from "@chakra-ui/react";

import { ReactElement } from "react";
import { SidebarStepItem } from "./SidebarStepItem";

interface MenuItemProps extends ButtonProps {
  icon?: ReactElement;
  variant?: "primary" | "secondary" | "step";
  isActive?: boolean;
}

export const SidebarMenuItem: React.FC<MenuItemProps> = ({
  icon,
  variant,
  isActive,
  children,
  ...rest
}) => {
  const textSecondary = variant === "secondary" || variant === "step";

  return variant === "step" ? (
    <SidebarStepItem active={isActive} icon={icon}>
      {children}
    </SidebarStepItem>
  ) : (
    <Button
      variant="ghost"
      flexShrink={0}
      h="56px"
      isActive={isActive}
      isFullWidth
      justifyContent="start"
      leftIcon={icon}
      color={textSecondary ? "whiteAlpha.700" : "white"}
      {...rest}
    >
      {children}
    </Button>
  );
};
