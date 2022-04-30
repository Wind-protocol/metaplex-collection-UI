import { Link, MenuItem } from "@chakra-ui/react";
import { SidebarMenuItem } from "components/Sidebar/SidebarMenuItem";

interface Props {
  variant?: "menu" | "sidebar";
}

export const ResourcesList: React.FC<Props> = ({ variant }) => {
  if (variant === "sidebar") {
    return (
      <>
        <SidebarMenuItem>
          <Link href="https://docs.metaplex.com/">The Metaplex Protocol</Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link href="https://docs.metaplex.com/token-metadata/specification#collections">
            Verified Collections Standard
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link href="https://github.com/metaplex-foundation/collection-migration-issues">
            Report an issue
          </Link>
        </SidebarMenuItem>
      </>
    );
  }

  return (
    <>
      <MenuItem>
        <Link href="https://docs.metaplex.com/">The Metaplex Protocol</Link>
      </MenuItem>
      <MenuItem>
        <Link href="https://docs.metaplex.com/token-metadata/specification#collections">
          Verified Collections Standard
        </Link>
      </MenuItem>
      <MenuItem>
        <Link href="https://github.com/metaplex-foundation/collection-migration-issues">
          Report an issue
        </Link>
      </MenuItem>
    </>
  );
};
