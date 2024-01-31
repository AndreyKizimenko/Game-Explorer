import { Flex } from "@chakra-ui/react";
import PlatformsFilters from "./PlatformsFilters";
import OrderBy from "./OrderBy";

interface FiltersProps {
  my?: string;
}

const Filters = ({my} : FiltersProps) => {
  return (
    <>
      <Flex gap="10px" my={my}>
        <PlatformsFilters />
        <OrderBy/>
      </Flex>
    </>
  );
};

export default Filters;
