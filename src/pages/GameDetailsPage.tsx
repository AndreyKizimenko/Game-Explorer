import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/UseGameDetails";
import { Heading, Spinner, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";
import { useEffect } from "react";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGameDetails(slug!);

  useEffect(() => {
    if (data) {
      document.title = `${data.name} - Details`;
    }
  }, [data]);

  return (
    <>
      {error && <Text>Encountered {error.message}</Text>}
      {isLoading && <Spinner mx={"20px"} />}
      {data && (
        <>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={"20px"} mx="20px">
            <Flex flexDirection={"column"} gap={"20px"}>
              <Heading >{data.name}</Heading>
              <ExpandableText text={data.description_raw} length={600} />
              <GameAttributes data={data} />
            </Flex>
            <Flex flexDirection={"column"} gap={"20px"}>
              <GameTrailer id={data.id} />
              <GameScreenshots id={data.id} />
            </Flex>
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default GameDetailsPage;
