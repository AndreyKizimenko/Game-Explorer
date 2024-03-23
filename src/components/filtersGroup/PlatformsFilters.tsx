import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList, Button, MenuGroup } from "@chakra-ui/react";
import { PLATFORMS } from "../../constData";
import useFiltersStore from "../../filterStore";

const PlatformsFilters = () => {
  const platformFilter = useFiltersStore((s) => s.filterParameters.parent_platforms);
  const setPlatformFilter = useFiltersStore((s) => s.setParent_platforms);
  const currentlySelected = PLATFORMS.find((platform) => platform.id === platformFilter);

  const handlePlatformSelect = (id: number) => {
    if (platformFilter === id || id === -1) {
      setPlatformFilter(undefined);
    } else {
      setPlatformFilter(id);
    }
  };
  return (
    <Menu>
      <MenuGroup>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} whiteSpace="normal" py={6}>
          {platformFilter ? currentlySelected?.name : "All Platforms"}
        </MenuButton>
        <MenuList>
          {PLATFORMS &&
            PLATFORMS.map((item) => (
              <MenuItem
                key={item.id}
                color={
                  platformFilter === item.id || (platformFilter === undefined && item.id === -1)
                    ? "green.300"
                    : "inherit"
                }
                fontSize={
                  platformFilter === item.id || (platformFilter === undefined && item.id === -1)
                    ? "larger"
                    : "inherit"
                }
                onClick={() => handlePlatformSelect(item.id)}
              >
                {item.name}
              </MenuItem>
            ))}
        </MenuList>
      </MenuGroup>
    </Menu>
  );
};

export default PlatformsFilters;
