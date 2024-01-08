import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { FiltersProps } from "../../services/types";
import { PLATFORMS } from "../../constData";

const PlatformsFilters = ({ setParams, parameters }: FiltersProps) => {
  const handlePlatformSelect = (id: number) => {
    setParams((prevValue) => {
      const newParams = { ...prevValue };
      if (newParams.parent_platforms === id || id === -1) {
        delete newParams.parent_platforms;
      } else {
        newParams.parent_platforms = id;
      }
      return newParams;
    });
  };
  const currentlySelected = PLATFORMS.find(
    (platform) => platform.id === parameters.parent_platforms
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} whiteSpace="normal" py={6}>
        {parameters.parent_platforms ? currentlySelected?.name : "All Platforms"}
      </MenuButton>
      <MenuList>
        {PLATFORMS &&
          PLATFORMS.map((item) => (
            <MenuItem
              key={item.id}
              color={parameters.parent_platforms === item.id ? "green.300" : "inherit"}
              fontSize={parameters.parent_platforms === item.id ? "larger" : "inherit"}
              onClick={() => handlePlatformSelect(item.id)}
            >
              {item.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformsFilters;
