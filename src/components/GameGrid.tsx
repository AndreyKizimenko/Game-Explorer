import { SimpleGrid } from "@chakra-ui/react";
import GridCard from "./GridCard";

const GameGrid = () => {
  return (
    <SimpleGrid minChildWidth="300px" spacing={"20px"}>
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
      <GridCard />
    </SimpleGrid>
  );
};

export default GameGrid;
