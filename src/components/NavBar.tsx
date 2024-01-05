import { Flex, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

const Header = () => {
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
            src={logo}
            alt="Game Hub Logo"
          ></Image>
        </Link>
        <Search />

        <ColorModeSwitch />
      </Flex>
    </>
  );
};

export default Header;
