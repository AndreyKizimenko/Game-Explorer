import { Flex } from "@chakra-ui/react";
import { FiltersProps } from "../../services/types";
import PlatformsFilters from "./PlatformsFilters";
import OrderBy from "./OrderBy";

const Filters = ({ my, setParams, parameters }: FiltersProps) => {
  return (
    <>
      <Flex gap="10px" my={my}>
        <PlatformsFilters parameters={parameters} setParams={setParams} />
        <OrderBy parameters={parameters} setParams={setParams}/>
      </Flex>
    </>
  );
};

export default Filters;
