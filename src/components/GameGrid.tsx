import { SimpleGrid } from "@chakra-ui/react";

import GridCard from "./GridCard";

const GameGrid = () => {
  return (
    <>
      <SimpleGrid minChildWidth="300px" spacing={"20px"}>
        <GridCard />
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
