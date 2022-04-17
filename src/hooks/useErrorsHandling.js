const useErrorsHandling = () => {
  const handleFormValidationErrors = (errors) => {
    console.log(errors);
  };

  return { handleFormValidationErrors };
};

export default useErrorsHandling;
