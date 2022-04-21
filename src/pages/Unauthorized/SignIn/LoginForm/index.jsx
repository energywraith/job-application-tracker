import Form from "components/Form";

import fields from "./index.fields";
import validationSchema from "./index.validation";

const LoginForm = ({ onSubmit }) => {
  return (
    <Form
      fields={fields}
      loadingText="Signing in"
      submitText="Sign in"
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

export default LoginForm;
