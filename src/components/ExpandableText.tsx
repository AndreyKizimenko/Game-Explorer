import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
  length: number;
}

const ExpandableText = ({ text, length }: Props) => {
  const [textExpanded, setTextExpanded] = useState(false);

  if (text.length <= length) {
    return <Text>{text}</Text>;
  }
  return (
    <>
      {!textExpanded ? (
        <Text>
          {text.slice(0, length)}...
          <Button
            ml="5px"
            size={"xs"}
            colorScheme="yellow"
            fontWeight={"bold"}
            onClick={() => {
              setTextExpanded(!textExpanded);
            }}
          >
            Show more
          </Button>
        </Text>
      ) : (
        <>
          <Text>
            {text}
            <Button
              ml="5px"
              size={"xs"}
              colorScheme="yellow"
              fontWeight={"bold"}
              onClick={() => {
                setTextExpanded(!textExpanded);
              }}
            >
              Show less
            </Button>
          </Text>
        </>
      )}
    </>
  );
};

export default ExpandableText;
