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
  Show,
} from "@chakra-ui/react";
import { SideBarProps } from "../services/types";
import { useRef } from "react";

import getCroppedImageUrl from "../services/image-url";
import { GENRES } from "../constData";

const Sidebar = ({ parameters, setParams }: SideBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleGenreSelect = (id: number) => {
    setParams((prevValue) => {
      const updatedParams = { ...prevValue };
      if (updatedParams.genres === id || id === -1) {
        delete updatedParams.genres;
      } else {
        updatedParams.genres = id;
      }
      return updatedParams;
    });
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
            onClick={() => handleGenreSelect(item.id)}
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
              color={parameters.genres === item.id || (item.id === -1 && !parameters.genres) ? "green.300" : "inherit"}
              fontSize={parameters.genres === item.id || (item.id === -1 && !parameters.genres) ? "larger" : "inherit"}
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
                Close
              </Button>
              <Button onClick={onClose}>Filter</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Show>
    </>
  );
};

export default Sidebar;
