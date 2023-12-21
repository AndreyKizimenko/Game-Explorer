import { SimpleGrid } from "@chakra-ui/react";
import GridCard from "./GridCard";
import { UseGames } from "../services/types";

const GameGrid = ({gamesError, games, gamesIsLoading} : UseGames) => {
  return (
    <>
      <SimpleGrid minChildWidth="300px" spacing={"20px"}>
        <GridCard gamesError={gamesError} games={games} gamesIsLoading={gamesIsLoading}/>
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
