import { Flex, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";
import { Link } from "react-router-dom";


const NavBar = () => {
  
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
        <Link to="/">
          <Image
            minW={{ base: "48px", lg: "56px" }}
            maxW={{ base: "48px", lg: "56px" }}
            borderRadius={"lg"}
            src="https://th.bing.com/th/id/OIG.nPux433GhcS7OBkyat9H?pid=ImgGn"
            alt="Game Hub Logo"
          ></Image>
        </Link>
        <Search />

        <ColorModeSwitch />
      </Flex>
    </>
  );
};

export default NavBar;
