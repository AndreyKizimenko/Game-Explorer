import { Button, SimpleGrid } from "@chakra-ui/react";
import GridCard from "./GridCard";
import { QueryParameters } from "../../services/types";
import useGames from "../../hooks/UseGames";

const GameGrid = ({ parameters }: QueryParameters) => {
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGames(parameters);

  return (
    <>
      <SimpleGrid minChildWidth="300px" spacing={"20px"}>
        <GridCard gamesError={error?.message} gamesData={data?.pages} gamesIsLoading={isLoading} />
      </SimpleGrid>
      
      <Button
        isLoading={isFetchingNextPage}
        loadingText='Loading...'
        isDisabled={!hasNextPage}
        my={8}
        p={6}
        fontSize={"lg"}
        colorScheme="gray"
        onClick={() => fetchNextPage()}
      >
        {!hasNextPage ? "No pages available" : "Load more"}
      </Button>
    </>
  );
};

export default GameGrid;
