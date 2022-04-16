import { useForm } from "react-hook-form";
import { Box, Button } from "@chakra-ui/react";

import Field from "components/Field";

const Form = ({
  fields,
  formWrapperProps,
  buttonProps,
  loadingText,
  submitText,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" {...formWrapperProps}>
        {fields.map((field, index) => (
          <Field
            key={field.name}
            type={field.type}
            inputProps={{
              mt: index !== 0 && 4,
              ...field.inputProps,
            }}
            error={errors[field.name]}
            {...register(field.name)}
          />
        ))}
        <Button
          isLoading={isSubmitting}
          loadingText={loadingText}
          mt="10"
          colorScheme="blue"
          type="submit"
          alignSelf="flex-end"
          {...buttonProps}
        >
          {submitText}
        </Button>
      </Box>
    </form>
  );
};

export default Form;
