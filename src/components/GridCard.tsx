import { Card, Stack, CardBody, Heading, Image, Flex, Spacer, Badge, Text } from "@chakra-ui/react";
import { FaWindows, FaXbox, FaPlaystation, FaAndroid, FaApple, FaLinux } from "react-icons/fa";
import GameGridProps, { ParentPlatforms, PlatformIconMap } from "../services/types";
import { BsNintendoSwitch } from "react-icons/bs";
import React from "react";
import generateSkeleton from "../services/loadingSkeletons";

const GridCard = ({ gamesError, games, gamesIsLoading }: GameGridProps) => {
  // Initializing a platform > icon map
  const platformIcons: PlatformIconMap = {
    1: <FaWindows size="20px" color="grey" />,
    2: <FaPlaystation size="20px" color="grey" />,
    3: <FaXbox size="20px" color="grey" />,
    4: <FaApple size="20px" color="grey" />,
    8: <FaAndroid size="20px" color="grey" />,
    6: <FaLinux size="20px" color="grey" />,
    7: <BsNintendoSwitch size="20px" color="grey" />,
  };
  // Rendering a list of icons
  const renderPlatformIcons = (platforms: ParentPlatforms[]) => {
    if (platforms) {
      return platforms.map((platform) => {
        const icon = platformIcons[platform.platform.id];
        return icon ? React.cloneElement(icon, { key: platform.platform.id }) : null;
      });
    }
  };

  return (
    <>
      {gamesError && <Text>Encountered {gamesError}</Text>}
      {gamesIsLoading && <>{generateSkeleton(12, "260px")}</>}
      {games?.length === 0 && <Heading>No games found</Heading>}
      {games &&
        games.map((item) => (
          <Card key={item.id} maxW={"680px"}>
            <CardBody>
              <Image src={item.background_image} alt={item.name} borderRadius="lg" />
              <Stack mt="6" spacing="3">
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
