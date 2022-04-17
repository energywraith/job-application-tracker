import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Box, Heading, Text } from "@chakra-ui/react";

import Page from "components/Page";
import Form from "components/Form";
import useToken from "hooks/useToken";
import useQuery from "hooks/useQuery";
import useErrorsHandling from "hooks/useErrorsHandling";

const SignIn = () => {
  const navigate = useNavigate();
  const { setToken, hasToken } = useToken();
  const { sendQuery } = useQuery();
  const { handleFormValidationErrors } = useErrorsHandling();

  useEffect(() => {
    if (hasToken()) {
      navigate("/app", { replace: true });
    }
  }, []);

  const fields = [
    {
      name: "email",
      type: "text",
      inputProps: {
        label: "Email address",
        placeholder: "Enter email address",
        bg: "white",
        color: "black",
      },
    },
    {
      name: "password",
      type: "password",
      inputProps: {
        label: "Password",
        placeholder: "Enter password",
        bg: "white",
        color: "black",
      },
    },
  ];

  const onSubmit = (props, methods) =>
    sendQuery("auth/login", {
      method: "POST",
      body: {
        email: props.email,
        password: props.password,
      },
    })
      .then((response) => {
        setToken(response);
        navigate("/app", { replace: true });
      })
      .catch((error) => {
        methods.clearErrors();
        handleFormValidationErrors(error, methods);
      });

  return (
    <Page>
      <Center
        h="100vh"
        paddingY={10}
        bgGradient="linear(to-tr, cyan.700, blue.800)"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          paddingX={6}
          paddingTop={12}
          paddingBottom={9}
          boxShadow="0px 0px 3px rgba(0, 0, 0, 0.2)"
          width={500}
          borderRadius={6}
          bg="whiteAlpha.900"
          // bgGradient="linear(to-br, whiteAlpha.200,whiteAlpha.100)"
        >
          <Heading as="h1" size="lg">
            Sign in
          </Heading>
          <Text mt={3} color="blackAlpha.800">
            Don't you have account yet? Use the registration form.
          </Text>
          <Box mt={9}>
            <Form
              fields={fields}
              loadingText="Signing in"
              submitText="Sign in"
              onSubmit={onSubmit}
              buttonProps={{
                paddingX: 6,
                paddingY: 4,
                boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Box>
        </Box>
      </Center>
    </Page>
  );
};

export default SignIn;
