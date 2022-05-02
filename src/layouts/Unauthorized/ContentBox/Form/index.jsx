import FormComponent from "components/Form";

const Form = ({
  submitText,
  submittingText,
  fields,
  validationSchema,
  onSubmit,
}) => {
  const styledFields = fields.map((field) => ({
    ...field,
    inputProps: {
      ...field.inputProps,
      bgGradient: "linear(to-br, slateBlue.100, solidBlue.0)",
      borderColor: "whiteAlpha.300",
      paddingY: 6,
      color: "white",
      _hover: {
        borderColor: "whiteAlpha.400",
      },
    },
  }));

  return (
    <FormComponent
      fields={styledFields}
      loadingText={submittingText}
      submitText={submitText}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      buttonProps={{
        paddingX: 6,
        paddingY: 6,
        mt: 12,
        fontSize: "xl",
        boxShadow: "0 0 3px rgba(0, 0, 0, 0.1)",
        bg: "discoCyan.500",
        _hover: {
          bg: "discoCyan.300",
        },
        _active: {
          bg: "discoCyan.200",
        },
        width: { base: "100%", md: "auto" },
      }}
    />
  );
};

export default Form;
