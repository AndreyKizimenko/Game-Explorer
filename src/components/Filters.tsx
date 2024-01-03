import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  MenuGroup,
  Flex,
  Text,
} from "@chakra-ui/react";
import usePlatforms from "../hooks/UsePlatforms";
import { FiltersProps, UsePlatforms } from "../services/types";

const Filters = ({ my, setParams, parameters }: FiltersProps) => {
  const ordering = ["Name", "Released", "Added", "Created", "Updated", "Rating", "Metacritic"];
  const { platforms, platformsError, platformsIsLoading }: UsePlatforms = usePlatforms();
  //// UseState to keep track of the currently active filters

  const handlePlatformSelect = (id: number) => {
    setParams((prevValue) => {
      let newParams = { ...prevValue };
      if (newParams.platforms === id) {
        delete newParams.platforms;
      } else {
        newParams.platforms = id;
      }
      return newParams;
    });
  };
  const handleOrderSelect = () => {
    console.log("order clicked");
  };

  return (
    <>
      <Flex gap="10px" my={my}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {parameters.platforms ? parameters.platforms : "Platforms"}
          </MenuButton>
          <MenuList>
            {platformsError && <Text>Encountered {platformsError}</Text>}
            {platformsIsLoading && <Text>Fetching data</Text>}
            {platforms &&
              platforms.map((item) => (
                <MenuItem
                  key={item.id}
                  color={parameters.platforms === item.id ? "green.300" : "inherit"}
                  fontSize={parameters.platforms === item.id ? "larger" : "inherit"}
                  onClick={() => handlePlatformSelect(item.id)}
                >
                  {item.name}
                </MenuItem>
                
              ))}
          </MenuList>
        </Menu>
        <Menu>
          <MenuGroup>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Order by: Relevance
            </MenuButton>
            <MenuList>
              {ordering.map((item) => (
                <MenuItem key={item} onClick={() => handleOrderSelect()}>
                  {item}
                </MenuItem>
              ))}
            </MenuList>
          </MenuGroup>
        </Menu>
      </Flex>
    </>
  );
};

export default Filters;
