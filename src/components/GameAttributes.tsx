import { SimpleGrid, Text } from "@chakra-ui/react";
import CategoryList from "./CategoryList";
import MetacriticScore from "./gameCards/MetacriticScore";
import { Game } from "../entities/Game";

interface Props {
  data: Game;
}

const GameAttributes = ({data}: Props) => {
  return (
    <SimpleGrid as="dl" columns={2} spacing={5}>
      <CategoryList heading="Platforms">
        {data.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </CategoryList>

      <CategoryList heading="Metascore">
        <MetacriticScore metacriticScore={data.metacritic} />
      </CategoryList>

      <CategoryList heading="Genres">
        {data.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </CategoryList>

      <CategoryList heading="Publishers">
        {data.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </CategoryList>
    </SimpleGrid>
  );
};

export default GameAttributes;
