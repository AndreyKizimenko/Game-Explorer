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
import { SideBarProps } from "../services/types";
import { useRef } from "react";
import generateSkeleton from "../services/loadingSkeletons";
import getCroppedImageUrl from "../services/image-url";


const Sidebar = ({
  genresError,
  genres,
  genresIsLoading,
  parameters,
  setParams,
  setActiveGenre,
}: SideBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleGenreSelect = (name: string, id: number) => {
    setParams((prevValue) => {
      const updatedParams = { ...prevValue };
      if (updatedParams.genres === id) {
        setActiveGenre("");
        delete updatedParams.genres;
      } else {
        setActiveGenre(name);
        updatedParams.genres = id;
      }
      return updatedParams;
    });
  };

  const list = (
    <List fontSize={18} spacing="5px">
      {genresError && <Text>Encountered {genresError}</Text>}
      {genresIsLoading && <>{generateSkeleton(40, "32px", "80%")}</>}
      {genres &&
        genres.map((item) => (
          <ListItem
            mr="10px"
            display={"flex"}
            alignItems={"center"}
            key={item.id}
            onClick={() => handleGenreSelect(item.name, item.id)}
            
            sx={{ userSelect: "none" }}
          >
            <Image
              borderRadius={"lg"}
              mb="8px"
              mr="15px"
              w={"40px"}
              h="40px"
              objectFit={"cover"}
              src={getCroppedImageUrl(item.image_background)}
              alt="Game Hub Logo"
            />
            <Button
              color={parameters.genres === item.id ? "green.300" : "inherit"}
              fontSize={parameters.genres === item.id ? "larger" : "inherit"}
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
