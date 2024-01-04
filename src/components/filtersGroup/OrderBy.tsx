import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, MenuList, Button, MenuGroup } from "@chakra-ui/react";
import { ORDERING } from "../../constData";
import { FiltersProps } from "../../services/types";
import { useState } from "react";

const OrderBy = ({ setParams, parameters }: FiltersProps) => {
  const [activeOrdering, setActiveOrdering] = useState("Relevance");

  const handleOrderSelect = (reversedItem:string, item: string) => {
    setParams((prevValue) => {
      let newParams = { ...prevValue };
      if (newParams.ordering === reversedItem) {
        setActiveOrdering("Relevance");
        delete newParams.ordering;
      } else {
        setActiveOrdering(item);
        newParams.ordering = reversedItem;
      }
      return newParams;
    });
  };

  return (
    <Menu>
      <MenuGroup>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Order by: {activeOrdering}
        </MenuButton>
        <MenuList>
          {ORDERING.map((item) => {
            const reversedFilter = "-" + item.toLowerCase();            

            return (
              <MenuItem
                key={item}
                color={parameters.ordering === reversedFilter ? "green.300" : "inherit"}
                fontSize={parameters.ordering === reversedFilter ? "larger" : "inherit"}
                onClick={() => handleOrderSelect(reversedFilter, item)}
              >
                {item}
              </MenuItem>
            );
          })}
        </MenuList>
      </MenuGroup>
    </Menu>
  );
};

export default OrderBy;
