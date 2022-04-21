import * as yup from "yup";

export default yup.object().shape({
  email: yup
    .string()
    .email("Email must be a valid email.")
    .required("Email is not allowed to be empty."),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters.")
    .required("Password is not allowed to be empty."),
});
