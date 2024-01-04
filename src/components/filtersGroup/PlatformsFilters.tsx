import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList, Button, Text } from "@chakra-ui/react";
import { FiltersProps, UsePlatforms } from "../../services/types";
import usePlatforms from "../../hooks/UsePlatforms";
import { useState } from "react";

const PlatformsFilters = ({ setParams, parameters }: FiltersProps) => {
  const { platforms, platformsError, platformsIsLoading }: UsePlatforms = usePlatforms();

  const [activePlatform, setActivePlatform] = useState("");

  const handlePlatformSelect = (id: number, name: string) => {
    setParams((prevValue) => {
      let newParams = { ...prevValue };
      if (newParams.parent_platforms === id) {
        setActivePlatform("");
        delete newParams.parent_platforms;
      } else {
        setActivePlatform(name);
        newParams.parent_platforms = id;
      }
      return newParams;
    });
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {parameters.parent_platforms ? activePlatform : "Platforms"}
      </MenuButton>
      <MenuList>
        {platformsError && <Text>Encountered {platformsError}</Text>}
        {platformsIsLoading && <Text>Fetching data</Text>}
        {platforms &&
          platforms.map((item) => (
            <MenuItem
              key={item.id}
              color={parameters.parent_platforms === item.id ? "green.300" : "inherit"}
              fontSize={parameters.parent_platforms === item.id ? "larger" : "inherit"}
              onClick={() => handlePlatformSelect(item.id, item.name)}
            >
              {item.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformsFilters;
