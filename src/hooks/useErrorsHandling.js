import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import useToken from "hooks/useToken";
import useUser from "hooks/useUser";
import formatAPIValidationMessage from "utils/formatAPIValidationMessage";

const useErrorsHandling = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { clearToken } = useToken();
  const { clearUser } = useUser();

  // TODO: Universal errors handle
  const handleResponseError = (error) => {
    if (error?.error) {
      toast({
        title: error.error,
        position: "bottom-left",
        status: "error",
        variant: "subtle",
        isClosable: true,
      });
    }
  };

  const handleFormValidationErrors = ({ errorType, error }, methods) => {
    if (errorType === "ValidationError") {
      Object.keys(error).forEach((key) => {
        methods.setError(key, {
          type: "custom",
          message: formatAPIValidationMessage(error[key]),
        });
      });
    }
  };

  const handleUnauthenticated = () => {
    clearToken();
    clearUser();
    toast({
      title: "Your token is expired",
      position: "bottom-left",
      status: "info",
      variant: "subtle",
      isClosable: true,
    });
    navigate("/sign-in", { replace: true });
  };

  return {
    handleResponseError,
    handleFormValidationErrors,
    handleUnauthenticated,
  };
};

export default useErrorsHandling;
