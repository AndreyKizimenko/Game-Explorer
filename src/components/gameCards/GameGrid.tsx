import { Center, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GridCard from "./GridCard";
import useGames from "../../hooks/UseGames";
import InfiniteScroll from "react-infinite-scroll-component";
import generateSkeleton from "../../services/loadingSkeletons";


const GameGrid = () => {
  
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  
  return (
    <>
      {isLoading && (
        <SimpleGrid minChildWidth="300px" spacing={"20px"}>
          {generateSkeleton(20, "260px")}
        </SimpleGrid>
      )}
      {error && <Text>Encountered {error.message}</Text>}
      {data && (
        <>
          <InfiniteScroll
            dataLength={data.pages.reduce((total, page) => total + page.results.length, 0)}
            next={fetchNextPage}
            hasMore={hasNextPage} // Replace with a condition based on your data source
            loader={
              <Center height="50px">
                <Heading mb={12} as="h3" size="m">
                <Spinner />
                </Heading>
              </Center>
            }
            endMessage={
              <Center height="50px">
                <Heading mb={12} as="h3" size="m">
                  These are all the games for this filter
                </Heading>
              </Center>
            }
          >
            <SimpleGrid minChildWidth="300px" spacing={"20px"} mb={10}>
              <GridCard
                gamesError={error?.message}
                gamesData={data?.pages}
                gamesIsLoading={isLoading}
              />
            </SimpleGrid>
          </InfiniteScroll>
        </>
      )}
    </>
  );
};

export default GameGrid;
