import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
  validationSchema,
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
  } = useForm({
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
  });

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
            mt={index !== 0 && 6}
          >
            <FormLabel htmlFor={field.name}>{field.inputProps.label}</FormLabel>
            <Field
              type={field.type}
              name={field.name}
              inputProps={field.inputProps}
              {...register(field.name, field.validation)}
            />
            {!errors[field.name] ? (
              <FormHelperText position="absolute" mt="1">
                {field.inputProps.helperText}
              </FormHelperText>
            ) : (
              <FormErrorMessage position="absolute" mt="1">
                {errors[field.name]?.message}
              </FormErrorMessage>
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
