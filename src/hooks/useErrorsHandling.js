import formatAPIValidationMessage from "utils/formatAPIValidationMessage";

const useErrorsHandling = () => {
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

  return { handleFormValidationErrors };
};

export default useErrorsHandling;
