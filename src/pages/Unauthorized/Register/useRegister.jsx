import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import useErrorsHandling from "hooks/useErrorsHandling";
import useAuth from "services/auth";

const useRegister = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { Register } = useAuth();
  const { handleResponseError, handleFormValidationErrors } =
    useErrorsHandling();

  const onRegister = async (props, methods) => {
    const [firstName, lastName] = props.fullName.split(" ");

    try {
      await Register({
        firstName,
        lastName,
        email: props.email,
        password: props.password,
      });

      toast({
        title: "Your account has been succesfully created.",
        position: "bottom-left",
        status: "success",
        variant: "subtle",
        isClosable: true,
      });

      navigate("/sign-in", { replace: true });
    } catch (error) {
      methods.clearErrors();

      if (error.errorType === "ResourceExistsError") {
        handleResponseError(error);
      }

      handleFormValidationErrors(error, methods);
    }
  };

  return { onRegister };
};

export default useRegister;
