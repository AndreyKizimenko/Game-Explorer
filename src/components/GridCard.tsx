import { Card, Stack, CardBody, Heading, Image, Flex, Spacer, Badge } from "@chakra-ui/react";
import { FaWindows, FaXbox, FaPlaystation, FaAndroid, FaApple } from "react-icons/fa";
const GridCard = () => {
  return (
    <>
      <Card maxW={"25rem"}>
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Flex gap="5px" alignItems={"center"}>
              <FaWindows size="20px" color="grey" />
              <FaXbox size="20px" color="grey" />
              <FaPlaystation size="20px" color="grey" />
              <FaAndroid size="20px" color="grey" />
              <FaApple size="20px" color="grey" />
              <Spacer />
              <Badge textAlign={"center"} width={"2em"} borderRadius={"md"} colorScheme="green" variant={"subtle"} fontSize='1.2em'>
                92
              </Badge>
            </Flex>
            <Heading size="md">Living room Sofa</Heading>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default GridCard;
