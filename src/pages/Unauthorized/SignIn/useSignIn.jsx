import { useNavigate } from "react-router-dom";

import useToken from "hooks/useToken";
import useUser from "hooks/useUser";
import useQuery from "hooks/useQuery";
import useErrorsHandling from "hooks/useErrorsHandling";

const useSignIn = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();
  const { setUser } = useUser();
  const { sendQuery } = useQuery();
  const { handleResponseError, handleFormValidationErrors } =
    useErrorsHandling();

  const onSignIn = (props, methods) =>
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

  return { onSignIn };
};

export default useSignIn;
