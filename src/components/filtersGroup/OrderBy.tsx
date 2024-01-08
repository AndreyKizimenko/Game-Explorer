import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList, Button, MenuGroup } from "@chakra-ui/react";

import { FiltersProps } from "../../services/types";

const OrderBy = ({ setParams, parameters }: FiltersProps) => {
  const ORDERING = [
    { id: 1, name: "Relevance", orderReversed: "" },
    { id: 2, name: "Game Title", orderReversed: "-name" },
    { id: 3, name: "Release Date", orderReversed: "-released" },
    { id: 4, name: "Last Updated", orderReversed: "-updated" },
    { id: 5, name: "User Rating", orderReversed: "-rating" },
    { id: 6, name: "Metacritic score", orderReversed: "-metacritic" },
  ];
  const currentlySelected = ORDERING.find((order) => order.orderReversed === parameters.ordering);

  const handleOrderSelect = (reversedItem: string) => {
    setParams((prevValue) => {
      const newParams = { ...prevValue };
      if (newParams.ordering === reversedItem) {
        delete newParams.ordering;
      } else {
        newParams.ordering = reversedItem;
      }
      return newParams;
    });
  };

  return (
    <Menu>
      <MenuGroup>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Order by: {currentlySelected?.name || "Relevance"}
        </MenuButton>
        <MenuList>
          {ORDERING.map((item) => (
            <MenuItem
              key={item.id}
              color={parameters.ordering === item.orderReversed ? "green.300" : "inherit"}
              fontSize={parameters.ordering === item.orderReversed ? "larger" : "inherit"}
              onClick={() => handleOrderSelect(item.orderReversed)}
            >
              {item.name}
            </MenuItem>
          ))}
        </MenuList>
      </MenuGroup>
    </Menu>
  );
};

export default OrderBy;
