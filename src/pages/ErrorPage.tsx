import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import { Flex, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Flex mx={"20px"} gap={"20px"} direction={"column"}>
        {isRouteErrorResponse(error) ? (
          <>
            <Heading>404 - Page Not Found</Heading>
            <Text>
              Sorry, the page you are looking for cannot be found. Please check the URL or go back
              to the homepage.
            </Text>
          </>
        ) : (
          <>
            <Heading>Oops...</Heading>
            <Text>Sorry, an unexpected error has occurred.</Text>
          </>
        )}
      </Flex>
    </>
  );
};

export default ErrorPage;
