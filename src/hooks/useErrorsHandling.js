import { useNavigate } from "react-router-dom";

import useToken from "hooks/useToken";
import useUser from "hooks/useUser";
import formatAPIValidationMessage from "utils/formatAPIValidationMessage";

const useErrorsHandling = () => {
  const navigate = useNavigate();
  const { clearToken } = useToken();
  const { clearUser } = useUser();

  // TODO: Universal errors handle
  const handleResponseError = (_error) => {};

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
    navigate("/sign-in", { replace: true });
  };

  return {
    handleResponseError,
    handleFormValidationErrors,
    handleUnauthenticated,
  };
};

export default useErrorsHandling;
