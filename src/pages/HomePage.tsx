import { Grid, GridItem, Heading, Flex, Show } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Filters from "../components/filtersGroup/Filters";
import GameGrid from "../components/gameCards/GameGrid";
import { GENRES } from "../constData";
import useFiltersStore from "../filterStore";

const HomePage = () => {
  const genres = useFiltersStore((s) => s.filterParameters.genres);
  const selectedGenre = GENRES.find((genre) => genres === genre.id);
  return (
    <>
      <Show above="993px">
        <Grid templateColumns={"repeat(10, 1fr)"} mx="20px">
          <GridItem colSpan={{ base: 10, lg: 3, xl: 2 }} colStart={{ base: 10, lg: 1 }} colEnd={10}>
            <Sidebar />
          </GridItem>
          <GridItem colSpan={{ base: 10, lg: 7, xl: 8 }}>
            <Heading size={"3xl"}>{genres ? selectedGenre?.name : "Games"}</Heading>
            <Filters my="20px" />
            <GameGrid />
          </GridItem>
        </Grid>
      </Show>
      <Show below="992px">
        <Flex flexDirection={"column"} mx="20px">
          <Heading size={"3xl"}>{genres ? selectedGenre?.name : "Games"}</Heading>
          <Flex
            gap={"20px"}
            my="30px"
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Sidebar />
            <Filters />
          </Flex>

          <GameGrid />
        </Flex>
      </Show>
    </>
  );
};

export default HomePage;
