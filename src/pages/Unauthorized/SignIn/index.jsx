import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import ActionLink from "components/ActionLink";
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
    <>
      <Heading as="h1" size="2xl" textShadow="0.3px 0.3px 3px blackAlpha.600">
        Sign in
      </Heading>
      <Box mt={9}>
        <LoginForm onSubmit={onSubmit} />
      </Box>
      <Heading
        as="h2"
        mt={12}
        size="sm"
        textShadow="0.3px 0.3px 3px rgba(0, 0, 0, 0.2)"
        color="whiteAlpha.900"
      >
        <Flex>
          <Text mr={1}>Don't have an account?</Text>
          <ActionLink to="/register" textContent="Create one" />
        </Flex>
      </Heading>
    </>
  );
};

export default SignIn;
