import { Grid, GridItem, Heading, Flex, Show } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Filters from "./filtersGroup/Filters";
import GameGrid from "./gameCards/GameGrid";
import { GENRES } from "../constData";
import { QueryParameters } from "../services/types";

const Body = ({ parameters, setParams }: QueryParameters) => {
  const selectedGenre = GENRES.find((genre) => parameters.genres === genre.id);
  return (
    <>
      <Show above="993px">
        <Grid templateColumns={"repeat(10, 1fr)"} mx="20px">
          <GridItem colSpan={{ base: 10, lg: 3, xl: 2 }} colStart={{ base: 10, lg: 1 }} colEnd={10}>
            <Sidebar parameters={parameters} setParams={setParams} />
          </GridItem>
          <GridItem colSpan={{ base: 10, lg: 7, xl: 8 }}>
            <Heading size={"3xl"}>{parameters.genres ? selectedGenre?.name : "Games"}</Heading>
            <Filters my="20px" parameters={parameters} setParams={setParams} />
            <GameGrid parameters={parameters} setParams={setParams}/>
          </GridItem>
        </Grid>
      </Show>
      <Show below="992px">
        <Flex flexDirection={"column"} mx="20px">
          <Heading size={"3xl"}>{parameters.genres ? selectedGenre?.name : "Games"}</Heading>
          <Flex
            gap={"20px"}
            my="30px"
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Sidebar parameters={parameters} setParams={setParams} />
            <Filters parameters={parameters} setParams={setParams} />
          </Flex>

          <GameGrid parameters={parameters} setParams={setParams}/>
          
        </Flex>
      </Show>
    </>
  );
};

export default Body;
