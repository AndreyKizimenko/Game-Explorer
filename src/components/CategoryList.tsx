import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode | ReactNode[];
}

const CategoryList = ({ heading, children }: Props) => {
  return (
    <>
      <Box my={"20px"}>
        <Heading as="dt" size="sm" color="gray.600">
          {heading}
        </Heading>
        <dd>{children}</dd>
      </Box>
    </>
  );
};

export default CategoryList;
