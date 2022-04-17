import { Center, Box, Heading, Text } from "@chakra-ui/react";

import Page from "components/Page";
import Form from "components/Form";

import useToken from "hooks/useToken";
import useQuery from "hooks/useQuery";
import useErrorsHandling from "hooks/useErrorsHandling";

const SignIn = () => {
  const { setToken } = useToken();
  const { sendQuery } = useQuery();
  const { handleFormValidationErrors } = useErrorsHandling();

  const fields = [
    {
      name: "email",
      type: "text",
      inputProps: {
        placeholder: "Enter email",
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

  const onSubmit = (props) =>
    sendQuery("auth/login", {
      method: "POST",
      body: {
        email: props.email,
        password: props.password,
      },
    })
      .then((response) => {
        setToken(response);
      })
      .catch((error) => {
        handleFormValidationErrors(error);
      });

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
