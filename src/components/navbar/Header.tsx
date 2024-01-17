import { Flex, Image, Link } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";
import { FiltersProps } from "../../services/types";

const Header = ({ setParams, parameters }: FiltersProps) => {
  
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
            minW={{ base: "48px", lg: "56px" }}
            maxW={{ base: "48px", lg: "56px" }}
            borderRadius={"lg"}
            src="https://th.bing.com/th/id/OIG.nPux433GhcS7OBkyat9H?pid=ImgGn"
            alt="Game Hub Logo"
          ></Image>
        </Link>
        <Search setParams={setParams} parameters={parameters} />

        <ColorModeSwitch />
      </Flex>
    </>
  );
};

export default Header;
