import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/UseGameDetails";

import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGameDetails(slug!);

  if (error || !data) throw error;

  return (
    <>
      {isLoading && <Spinner mx={"20px"} />}
      {data && (
        <>
          <Heading>{data.name}</Heading>
          <Text>{data.description_raw}</Text>
        </>
      )}
    </>
  );
};

export default GameDetailsPage;
