import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Box,
  Button,
} from "@chakra-ui/react";

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
    setError,
    clearErrors,
    formState: { isSubmitting, errors },
  } = useForm();

  const handleSubmitWithMethods = handleSubmit((props) =>
    onSubmit(props, { setError, clearErrors })
  );

  return (
    <form onSubmit={handleSubmitWithMethods}>
      <Box display="flex" flexDirection="column" {...formWrapperProps}>
        {fields.map((field, index) => (
          <FormControl
            isInvalid={errors[field.name]}
            key={field.name}
            mt={index !== 0 && 4}
          >
            <FormLabel htmlFor={field.name}>{field.inputProps.label}</FormLabel>
            <Field
              type={field.type}
              name={field.name}
              inputProps={field.inputProps}
              {...register(field.name)}
            />
            {!errors[field.name] ? (
              <FormHelperText>{field.inputProps.helperText}</FormHelperText>
            ) : (
              <FormErrorMessage>{errors[field.name]?.message}</FormErrorMessage>
            )}
          </FormControl>
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
