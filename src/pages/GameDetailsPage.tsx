import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/UseGameDetails";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGameDetails(slug!);

  return (
    <>
      {error && <Text>Encountered {error.message}</Text>}
      {isLoading && <Spinner mx={"20px"} />}
      {data && (
        <>
          <Heading>{data.name}</Heading>
          <ExpandableText text={data.description_raw} length={300} />
        </>
      )}
    </>
  );
};

export default GameDetailsPage;
