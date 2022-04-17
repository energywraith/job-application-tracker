import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Center, Box, Heading, Text } from "@chakra-ui/react";

import Page from "components/Page";
import useToken from "hooks/useToken";
import useQuery from "hooks/useQuery";
import useErrorsHandling from "hooks/useErrorsHandling";
import LoginForm from "./LoginForm";

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
        >
          <Heading as="h1" size="lg">
            Sign in
          </Heading>
          <Text mt={3} color="blackAlpha.800">
            Don't you have account yet? Use the registration form.
          </Text>
          <Box mt={6}>
            <LoginForm onSubmit={onSubmit} />
          </Box>
        </Box>
      </Center>
    </Page>
  );
};

export default SignIn;
