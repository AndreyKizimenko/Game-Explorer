import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/UseGameDetails";
import { Heading, Spinner, Text, Flex } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGameDetails(slug!);

  return (
    <>
      {error && <Text>Encountered {error.message}</Text>}
      {isLoading && <Spinner mx={"20px"} />}
      {data && (
        <>
          <Flex flexDirection={"column"} mx="90px">
            <Heading>{data.name}</Heading>
            <ExpandableText text={data.description_raw} length={300} />
            <GameAttributes data={data} />
            <GameTrailer id={data.id} />
            <GameScreenshots id={data.id} />
          </Flex>
        </>
      )}
    </>
  );
};

export default GameDetailsPage;
