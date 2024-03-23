import {
  Heading,
  List,
  Image,
  ListItem,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Show,
} from "@chakra-ui/react";
import { useRef } from "react";
import getCroppedImageUrl from "../services/image-url";
import { GENRES } from "../constData";
import useFiltersStore from "../filterStore";

const Sidebar = () => {
  const genres = useFiltersStore((s) => s.filterParameters.genres);
  const setGenres = useFiltersStore((s) => s.setGenres);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleGenreSelect = (id: number) => {
    if (genres === id || id === -1) {
      setGenres(undefined);
    }
    else {
      setGenres(id);
    }
    
  };

  const list = (
    <List fontSize={18} spacing="5px">
      {GENRES &&
        GENRES.map((item) => (
          <ListItem
            mr="10px"
            display={"flex"}
            alignItems={"center"} 
            key={item.id}
            onClick={() => {
              handleGenreSelect(item.id), onClose();
            }}
            sx={{ userSelect: "none" }}
          >
            <Image
              borderRadius={"lg"}
              mb="8px"
              mr="15px"
              w={"40px"}
              h="40px"
              objectFit={"cover"}
              src={
                item.id === -1 ? item.image_background : getCroppedImageUrl(item.image_background)
              }
              alt="Game Hub Logo"
            />
            <Button
              color={genres === item.id || (item.id === -1 && !genres) ? "green.300" : "inherit"}
              fontSize={genres === item.id || (item.id === -1 && !genres) ? "larger" : "inherit"}
              variant={"link"}
            >
              {item.name}
            </Button>
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
        <Button ref={btnRef} onClick={onOpen} py={6}>
          Genres
        </Button>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Genres</DrawerHeader>
            <DrawerBody>{list}</DrawerBody>
          </DrawerContent>
        </Drawer>
      </Show>
    </>
  );
};

export default Sidebar;
