import { Card, Stack, CardBody, Heading, Image, Flex, Spacer, Badge, Text } from "@chakra-ui/react";
import { FaWindows, FaXbox, FaPlaystation, FaAndroid, FaApple } from "react-icons/fa";
import { UseGames } from "../services/types";

const GridCard = ({gamesError, games, gamesIsLoading} : UseGames) => {
  
  return (
    <>
      {gamesError && <Text>Encountered {gamesError}</Text>}
      {gamesIsLoading && <Text>Fetching data</Text>}
      {games &&
        games.map((item) => (
          <Card key={item.id} maxW={"680px"}>
            <CardBody>
              <Image src={item.background_image} alt={item.name} borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Flex gap="5px" alignItems={"center"}>
                  <FaWindows size="20px" color="grey" />
                  <FaXbox size="20px" color="grey" />
                  <FaPlaystation size="20px" color="grey" />
                  <FaAndroid size="20px" color="grey" />
                  <FaApple size="20px" color="grey" />
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
