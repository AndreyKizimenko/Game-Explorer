import { Image, SimpleGrid } from "@chakra-ui/react";
import UseGameScreenshots from "../hooks/UseGameScreenshots";

interface Props {
  id: number;
}

const GameScreenshots = ({ id }: Props) => {
  const { data, error, isLoading } = UseGameScreenshots(id);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: "10px", md: "20px" }}>
        {data?.results.map((screenshot) => (
          <Image key={screenshot.id} src={screenshot.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
