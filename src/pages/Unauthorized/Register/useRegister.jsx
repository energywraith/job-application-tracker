import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import useQuery from "hooks/useQuery";
import useErrorsHandling from "hooks/useErrorsHandling";

const useRegister = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { sendQuery } = useQuery();
  const { handleResponseError, handleFormValidationErrors } =
    useErrorsHandling();

  const onRegister = (props, methods) => {
    const [firstName, lastName] = props.fullName.split(" ");

    sendQuery("auth/sign-up", {
      method: "POST",
      body: {
        firstName,
        lastName,
        email: props.email,
        password: props.password,
      },
    })
      .then(() => {
        toast({
          title: "Your account has been succesfully created.",
          position: "bottom-left",
          status: "success",
          variant: "subtle",
          isClosable: true,
        });
        navigate("/sign-in", { replace: true });
      })
      .catch((error) => {
        methods.clearErrors();

        if (error.errorType === "ResourceExistsError") {
          handleResponseError(error);
        }

        handleFormValidationErrors(error, methods);
      });
  };

  return { onRegister };
};

export default useRegister;
