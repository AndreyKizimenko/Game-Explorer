import {
  Heading,
  List,
  Image,
  ListItem,
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
  Show,
} from "@chakra-ui/react";
import { UseGenres } from "../services/types";
import { useRef, useState } from "react";

const Sidebar = ({ genresError, genres, genresIsLoading }: UseGenres) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const [selectedGenre, setGenre] = useState<number>();
  const handleGenreSelect = (id: number) => {
    selectedGenre === id ? setGenre(-1) : setGenre(id);
  };

  const list = (
    <List fontSize={18} spacing="5px">
      {genresError && <Text>Encountered {genresError}</Text>}
      {genresIsLoading && <Text>Fetching data</Text>}
      {genres &&
        genres.map((item) => (
          <ListItem
            mr="10px"
            display={"flex"}
            alignItems={"center"}
            key={item.id}
            color={selectedGenre === item.id ? "green.300" : "inherit"}
            fontSize={selectedGenre === item.id ? "larger" : "inherit"}
            onClick={() => handleGenreSelect(item.id)}
            cursor="pointer"
            sx={{ userSelect: "none" }}
          >
            <Image
              borderRadius={"lg"}
              mb="8px"
              mr="15px"
              w={"40px"}
              h="40px"
              objectFit={"cover"}
              src={item.image_background}
              alt="Game Hub Logo"
            />
            <Text>{item.name}</Text>
          </ListItem>
        ))}
    </List>
  );

  return (
    <>
      <Show above="993px">
        <Heading mb="20px" as="h3" size="lg">
          Genres
        </Heading>
        {list}
      </Show>
      <Show below="992px">
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
      </Show>
    </>
  );
};

export default Sidebar;

/* const genres = [
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
  ]; */
