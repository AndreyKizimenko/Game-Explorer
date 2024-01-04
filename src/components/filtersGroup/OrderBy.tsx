import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList, Button, MenuGroup } from "@chakra-ui/react";
import { ORDERING } from "../../constData";

const OrderBy = () => {
  const handleOrderSelect = () => {
    console.log("order clicked");
  };

  return (
    <Menu>
      <MenuGroup>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Order by: Relevance
        </MenuButton>
        <MenuList>
          {ORDERING.map((item) => (
            <MenuItem key={item} onClick={() => handleOrderSelect()}>
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </MenuGroup>
    </Menu>
  );
};

export default OrderBy;
