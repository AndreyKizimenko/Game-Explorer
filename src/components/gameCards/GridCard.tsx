import React from "react";
import { Card, Stack, CardBody, Heading, Image, Flex, Spacer, Badge } from "@chakra-ui/react";
import renderPlatformIcons from "./PlatformIcons";
import getCroppedImageUrl from "../../services/image-url";
import { FetchResponse } from "../../services/game-service";
import { Game } from "../../hooks/UseGames";
import { Link } from "react-router-dom";

export interface GameGridProps {
  gamesError?: string;
  gamesData?: FetchResponse<Game>[];
  gamesIsLoading?: boolean;
}

const GridCard = ({ gamesError, gamesData, gamesIsLoading }: GameGridProps) => {
  return (
    <>
      {gamesData?.map((games, index) => (
        <React.Fragment key={index}>
          {!gamesIsLoading && !gamesError && games?.results.length === 0 && (
            <Heading>No games found</Heading>
          )}
          {games &&
            !gamesIsLoading &&
            games.results.map((item) => (
              <Link to={`games/${item.slug}`}>
                <Card
                  key={item.id}
                  maxW={"680px"}
                  _hover={{
                    cursor: "pointer",
                    transform: "scale(1.04)",
                    transition: "transform .15s ease-in",
                  }}
                >
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
              </Link>
            ))}
        </React.Fragment>
      ))}
    </>
  );
};

export default GridCard;
