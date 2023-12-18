import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList, Button, MenuGroup, Flex } from "@chakra-ui/react";

interface Props{
  my?: string
}

const Filters = ({ my }: Props) => {
  return (
    <>
      <Flex gap="10px" my={my}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Platforms
          </MenuButton>
          <MenuList>
            <MenuItem>Windows</MenuItem>
            <MenuItem>Xbox</MenuItem>
            <MenuItem>Playstation</MenuItem>
            <MenuItem>Android</MenuItem>
            <MenuItem>iOS</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuGroup>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Order by: Relevance
            </MenuButton>
            <MenuList>
              <MenuItem>Release date</MenuItem>
              <MenuItem>Age</MenuItem>
              <MenuItem>Rating</MenuItem>
              <MenuItem>Price</MenuItem>
            </MenuList>
          </MenuGroup>
        </Menu>
      </Flex>
    </>
  );
};

export default Filters;
