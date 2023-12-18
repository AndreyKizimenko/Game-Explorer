import { Grid, GridItem, SimpleGrid, Heading, Flex, Show } from "@chakra-ui/react";

import Sidebar from "./Sidebar";
import Filters from "./Filters";
import GridCard from "./GridCard";

const Body = () => {
  return (
    <>
      <Show above="993px">
        <Grid templateColumns={"repeat(10, 1fr)"} mx="20px">
          <GridItem colSpan={{ base: 10, lg: 3, xl: 2 }} colStart={{ base: 10, lg: 1 }} colEnd={10}>
            <Sidebar />
          </GridItem>
          <GridItem colSpan={{ base: 10, lg: 7, xl: 8 }}>
            <Heading size={"3xl"}>Games</Heading>
            <Filters my="20px" />
            <SimpleGrid minChildWidth="300px" spacing={"20px"}>
              <GridCard />
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Show>
      <Show below="992px">
        <Flex flexDirection={"column"} mx="20px">
          <Heading size={"3xl"}>Games</Heading>
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

          <SimpleGrid minChildWidth="300px" spacing={"20px"}>
            <GridCard />
            <GridCard />
            <GridCard />
            
          </SimpleGrid>
        </Flex>
      </Show>
    </>
  );
};

export default Body;
