import * as yup from "yup";

import Form from "components/Form";

const LoginForm = ({ onSubmit }) => {
  const fields = [
    {
      name: "email",
      type: "text",
      inputProps: {
        label: "Email address",
        placeholder: "Enter email address",
        bg: "white",
        color: "black",
      },
    },
    {
      name: "password",
      type: "password",
      inputProps: {
        label: "Password",
        placeholder: "Enter password",
        bg: "white",
        color: "black",
      },
    },
  ];

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Email must be a valid email.")
      .required("Email is not allowed to be empty."),
    password: yup
      .string()
      .min(5, "Password must be at least 5 characters.")
      .required("Password is not allowed to be empty."),
  });

  return (
    <Form
      fields={fields}
      loadingText="Signing in"
      submitText="Sign in"
      validationSchema={schema}
      onSubmit={onSubmit}
      buttonProps={{
        paddingX: 6,
        paddingY: 4,
        boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
      }}
    />
  );
};

export default LoginForm;
