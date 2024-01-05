import { useColorMode, Button, Text, useMediaQuery, Icon} from "@chakra-ui/react";

import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";

const ColorModeSwitch = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)", {
    ssr: true,
    fallback: false,
  });
  const { colorMode, toggleColorMode } = useColorMode();
  return (
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
  );
};

export default ColorModeSwitch;
