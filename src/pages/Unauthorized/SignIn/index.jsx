import { useNavigate } from "react-router-dom";

import ContentBox from "layouts/Unauthorized/ContentBox";
import useToken from "hooks/useToken";
import useUser from "hooks/useUser";
import useQuery from "hooks/useQuery";
import useErrorsHandling from "hooks/useErrorsHandling";

import fields from "./index.fields";
import validationSchema from "./index.validation";

const SignIn = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();
  const { setUser } = useUser();
  const { sendQuery } = useQuery();
  const { handleResponseError, handleFormValidationErrors } =
    useErrorsHandling();

  const onSubmit = (props, methods) =>
    sendQuery("auth/sign-in", {
      method: "POST",
      body: {
        email: props.email,
        password: props.password,
      },
    })
      .then((response) => {
        const { token, expiresAt, user } = response;

        setToken({ token, expiresAt });
        setUser(user);

        navigate("/app", { replace: true });
      })
      .catch((error) => {
        methods.clearErrors();

        if (error.errorType === "AuthError") {
          handleResponseError(error);
        }

        handleFormValidationErrors(error, methods);
      });

  return (
    <ContentBox
      title="Sign in"
      submitText="Sign in"
      submittingText="Signing in"
      fields={fields}
      validationSchema={validationSchema}
      footerText="Don't have an account?"
      footerActionLinkText="Create one"
      footerActionLinkHref="/register"
      onSubmit={onSubmit}
    />
  );
};

export default SignIn;
