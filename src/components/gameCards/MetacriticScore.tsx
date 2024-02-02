import { Badge } from "@chakra-ui/react";

interface Props {
  metacriticScore : number
}

const MetacriticScore = ({metacriticScore}: Props) => {
  return (
    <Badge
      textAlign={"center"}
      width={"2em"}
      borderRadius={"md"}
      colorScheme={
        metacriticScore >= 75
          ? "green"
          : metacriticScore < 75 && metacriticScore >= 50
          ? "yellow"
          : "red"
      }
      variant={"subtle"}
      fontSize="1.2em"
    >
      {metacriticScore}
    </Badge>
  );
};

export default MetacriticScore;
