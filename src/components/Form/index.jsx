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
  defaultValues,
  formWrapperProps,
  buttonProps,
  loadingText,
  submitText,
  horizontal,
  onChange,
  onSubmit,
}) => {
  const {
    getValues,
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    defaultValues,
  });

  const handleSubmitWithMethods = handleSubmit((props) =>
    onSubmit(props, { setError, clearErrors })
  );

  return (
    <form
      onChange={() => onChange(getValues())}
      onSubmit={handleSubmitWithMethods}
    >
      <Box
        display="flex"
        flexDirection={!horizontal && "column"}
        {...formWrapperProps}
      >
        {fields.map((field, index) => (
          <FormControl
            isInvalid={errors[field.name]}
            key={field.name}
            mt={!horizontal && index !== 0 && 6}
            mr={horizontal && index !== fields.length - 1 && 3}
            width="auto"
          >
            <FormLabel htmlFor={field.name}>{field.inputProps.label}</FormLabel>
            <Field
              type={field.type}
              name={field.name}
              inputProps={field.inputProps}
              defaultValue={defaultValues[field.name]}
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
        {submitText && (
          <Submit
            buttonProps={buttonProps}
            isLoading={isSubmitting}
            loadingText={loadingText}
            submitText={submitText}
          />
        )}
      </Box>
    </form>
  );
};

Form.propTypes = formShape;

Form.defaultProps = {
  fields: [],
  validationSchema: undefined,
  defaultValues: {},
  formWrapperProps: {},
  buttonProps: {},
  loadingText: "",
  submitText: "",
  onChange: noop,
  onSubmit: noop,
};

export default Form;
