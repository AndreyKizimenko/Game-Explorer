import { Icon, Search2Icon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  useColorMode,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";

const Header = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        alignItems={"center"}
        as="nav"
        justify={"space-between"}
        gap={"10px"}
        mt="10px"
        mx="20px"
        mb="30px"
      >
        <Link href="/">
          <Image
            minW={{ base: "48px", lg: "64px" }}
            maxW={{ base: "48px", lg: "64px" }}
            src="src\assets\logo.webp"
            alt="Game Hub Logo"
          ></Image>
        </Link>
        <InputGroup>
          <InputLeftElement>
            <Search2Icon />
          </InputLeftElement>
          <Input placeholder="Search" />
        </InputGroup>

        <Button
          onClick={toggleColorMode}
          width={{ base: "5em", md: "10em" }}
          flexShrink={{ base: 1, md: 0 }}
        >
          {colorMode === "light" ? (
            <>
              <Icon color="gray" mr="5px" boxSize={10} as={PiToggleLeftFill} />
              <Text>{isLargerThan768 ? "Light Mode" : ""}</Text>
            </>
          ) : (
            <>
              <Icon color="green.300" mr="5px" boxSize={10} as={PiToggleRightFill} />
              <Text>{isLargerThan768 ? "Dark Mode" : ""}</Text>
            </>
          )}
        </Button>
      </Flex>
    </>
  );
};

export default Header;
