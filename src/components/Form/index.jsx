import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";

import Field from "components/Field";
import noop from "utils/noop";

import Submit from "./Submit";
import { formShape } from "./index.shape";

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
        <Submit
          buttonProps={buttonProps}
          isLoading={isSubmitting}
          loadingText={loadingText}
          submitText={submitText}
        />
      </Box>
    </form>
  );
};

Form.propTypes = formShape;

Form.defaultProps = {
  fields: [],
  validationSchema: undefined,
  formWrapperProps: {},
  buttonProps: {},
  loadingText: "",
  submitText: "",
  onSubmit: noop,
};

export default Form;
