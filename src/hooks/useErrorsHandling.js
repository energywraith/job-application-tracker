import formatAPIValidationMessage from "utils/formatAPIValidationMessage";

const useErrorsHandling = () => {
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

  return { handleResponseError, handleFormValidationErrors };
};

export default useErrorsHandling;
