import {
  Heading,
  List,
  Image,
  ListItem,
  useMediaQuery,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

import { useRef, useState } from "react";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isLargerThan62em] = useMediaQuery("(min-width: 62em)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  const [selectedGenre, setGenre] = useState("");
  const genres = [
    "Action-Adventure",
    "Open World",
    "Puzzle",
    "Simulation",
    "Strategy",
    "Sports",
    "Role-Playing Game (RPG)",
    "Platformer",
    "Fighting",
    "Narrative Adventure",
  ];
  const list = (
    <List fontSize={18} spacing="5px">
      {genres.map((item) => (
        <ListItem
          mr="10px"
          display={"flex"}
          alignItems={"center"}
          key={item}
          color={selectedGenre === item ? "green.300" : "inherit"}
          fontSize={selectedGenre === item ? "larger" : "inherit"}
          onClick={() => (selectedGenre === item ? setGenre("") : setGenre(item))}
          cursor="pointer"
          sx={{ userSelect: "none" }}
        >
          <Image mr="10px" w="40px" src="src\assets\logo.webp" alt="Game Hub Logo" />
          <Text>{item}</Text>
        </ListItem>
      ))}
    </List>
  );

  return isLargerThan62em ? (
    <>
      <Heading mb="20px" as="h3" size="lg">
        Genres
      </Heading>
      {list}
    </>
  ) : (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        Genres
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Genres</DrawerHeader>
          <DrawerBody>{list}</DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button>Filter</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
