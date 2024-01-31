import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList, Button, MenuGroup } from "@chakra-ui/react";
import useFiltersStore from "../../filterStore";

const OrderBy = () => {
  const ORDERING = [
    { id: 1, name: "Relevance", orderReversed: "" },
    { id: 2, name: "Game Title", orderReversed: "-name" },
    { id: 3, name: "Release Date", orderReversed: "-released" },
    { id: 4, name: "Last Updated", orderReversed: "-updated" },
    { id: 5, name: "User Rating", orderReversed: "-rating" },
    { id: 6, name: "Metacritic score", orderReversed: "-metacritic" },
  ];
  const sortOrder = useFiltersStore((s) => s.filterParameters.ordering);
  const setSortOrder = useFiltersStore((s) => s.setOrdering);
  const currentlySelected = ORDERING.find((order) => order.orderReversed === sortOrder);

  const handleOrderSelect = (reversedItem: string) => {
    if (sortOrder === reversedItem) {
      setSortOrder(undefined);
    }
    else {
      setSortOrder(reversedItem);
    }
    
  };

  return (
    <Menu>
      <MenuGroup>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} whiteSpace="normal" py={6}>
          Order by: {currentlySelected?.name || "Relevance"}
        </MenuButton>
        <MenuList>
          {ORDERING.map((item) => (
            <MenuItem
              key={item.id}
              color={sortOrder === item.orderReversed ? "green.300" : "inherit"}
              fontSize={sortOrder === item.orderReversed ? "larger" : "inherit"}
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
