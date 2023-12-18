import { Grid, GridItem, SimpleGrid, Heading, useMediaQuery, Flex } from "@chakra-ui/react";

import Sidebar from "./Sidebar";
import Filters from "./Filters";
import GridCard from "./GridCard";

const Body = () => {
  const [isLargerThan62em] = useMediaQuery("(min-width: 62em)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  if (isLargerThan62em) {
    return (
      <Grid templateColumns={"repeat(10, 1fr)"} mx="20px">
        <GridItem colSpan={{ base: 10, lg: 3, xl: 2 }} colStart={{ base: 10, lg: 1 }} colEnd={10}>
          <Sidebar />
        </GridItem>
        <GridItem colSpan={{ base: 10, lg: 7, xl: 8 }}>
          <Heading size={"3xl"}>Games</Heading>
          <Filters my="20px" />
          <SimpleGrid minChildWidth="300px" spacing={"20px"}>
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
          </SimpleGrid>
        </GridItem>
      </Grid>
    );
  } else {
    return (
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
          <GridCard />
          <GridCard />
          <GridCard />
          <GridCard />
          <GridCard />
          <GridCard />
        </SimpleGrid>
      </Flex>
    );
  }
};

export default Body;
