import { Grid, GridItem, Heading, Flex, Show } from "@chakra-ui/react";
import { UseGames, UseGenres } from "../services/types";
import Sidebar from "./Sidebar";
import Filters from "./filtersGroup/Filters";
import GameGrid from "./gameCards/GameGrid";
import useGenres from "../hooks/UseGenres";
import { useState } from "react";

const Body = ({ gamesError, games, gamesIsLoading, parameters, setParams }: UseGames) => {
  const { genresError, genres, genresIsLoading }: UseGenres = useGenres();
  const [activeGenre, setActiveGenre] = useState("");
  return (
    <>
      <Show above="993px">
        <Grid templateColumns={"repeat(10, 1fr)"} mx="20px">
          <GridItem colSpan={{ base: 10, lg: 3, xl: 2 }} colStart={{ base: 10, lg: 1 }} colEnd={10}>
            <Sidebar
              genresError={genresError}
              genres={genres}
              genresIsLoading={genresIsLoading}
              parameters={parameters}
              setParams={setParams}
              setActiveGenre={setActiveGenre}
            />
          </GridItem>
          <GridItem colSpan={{ base: 10, lg: 7, xl: 8 }}>
            <Heading size={"3xl"}>{activeGenre ? activeGenre : "Games"}</Heading>
            <Filters my="20px" parameters={parameters} setParams={setParams} />
            <GameGrid gamesError={gamesError} games={games} gamesIsLoading={gamesIsLoading} />
          </GridItem>
        </Grid>
      </Show>
      <Show below="992px">
        <Flex flexDirection={"column"} mx="20px">
          <Heading size={"3xl"}>{activeGenre ? activeGenre : "Games"}</Heading>
          <Flex
            gap={"20px"}
            my="30px"
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Sidebar
              genresError={genresError}
              genres={genres}
              genresIsLoading={genresIsLoading}
              parameters={parameters}
              setParams={setParams}
              setActiveGenre={setActiveGenre}
            />
            <Filters parameters={parameters} setParams={setParams} />
          </Flex>

          <GameGrid gamesError={gamesError} games={games} gamesIsLoading={gamesIsLoading} />
        </Flex>
      </Show>
    </>
  );
};

export default Body;
