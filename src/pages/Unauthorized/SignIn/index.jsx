import { Center, Box, Heading, Text } from "@chakra-ui/react";

import Page from "components/Page";
import Form from "components/Form";

const SignIn = () => {
  const fields = [
    {
      name: "username",
      type: "text",
      inputProps: {
        placeholder: "Enter username",
        bg: "white",
      },
    },
    {
      name: "password",
      type: "password",
      inputProps: {
        placeholder: "Enter password",
        bg: "white",
      },
    },
  ];

  const onSubmit = async (props) => {
    // Just for testing
    const res = await fetch("https://randomuser.me/api/");
    const { results } = await res.json();
    console.log(results);
  };

  return (
    <Page>
      <Center h="100vh">
        <Box
          display="flex"
          flexDirection="column"
          paddingX={6}
          paddingY={12}
          bg="gray.50"
          boxShadow="0px 0px 3px rgba(0, 0, 0, 0.2)"
          width={500}
          borderRadius={4}
        >
          <Heading as="h1" size="lg">
            Sign in
          </Heading>
          <Text mt={3}>
            Don't you have account yet? Use the registration form.
          </Text>
          <Box mt={9}>
            <Form
              fields={fields}
              loadingText="Signing in"
              submitText="Sign in"
              onSubmit={onSubmit}
            />
          </Box>
        </Box>
      </Center>
    </Page>
  );
};

export default SignIn;
