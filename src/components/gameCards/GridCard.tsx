import { Card, Stack, CardBody, Heading, Image, Flex, Spacer, Badge, Text } from "@chakra-ui/react";
import GameGridProps from "../../services/types";
import generateSkeleton from "../../services/loadingSkeletons";
import renderPlatformIcons from "./PlatformIcons";
import getCroppedImageUrl from "../../services/image-url";

const GridCard = ({ gamesError, games, gamesIsLoading }: GameGridProps) => {
  return (
    <>
      {gamesError && <Text>Encountered {gamesError}</Text>}
      {gamesIsLoading && <>{generateSkeleton(12, "260px")}</>}
      {!gamesIsLoading && !gamesError && games?.length === 0 && <Heading>No games found</Heading>}
      {games &&
        !gamesIsLoading &&
        games.map((item) => (
          <Card key={item.id} maxW={"680px"}>
            <Image
              src={getCroppedImageUrl(item.background_image)}
              alt={item.name}
              borderRadius="lg"
            />
            <CardBody>
              <Stack spacing="3">
                <Flex gap="5px" alignItems={"center"}>
                  {renderPlatformIcons(item.parent_platforms)}
                  <Spacer />
                  <Badge
                    textAlign={"center"}
                    width={"2em"}
                    borderRadius={"md"}
                    colorScheme="green"
                    variant={"subtle"}
                    fontSize="1.2em"
                  >
                    {item.metacritic}
                  </Badge>
                </Flex>
                <Heading size="md">{item.name}</Heading>
              </Stack>
            </CardBody>
          </Card>
        ))}
    </>
  );
};

export default GridCard;
