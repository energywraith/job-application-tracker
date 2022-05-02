import * as yup from "yup";

export default yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is not allowed to be empty.")
    .test("Has two words", function (val) {
      const [first, last, ...other] = val.split(" ");
      const error = this.createError({
        message: "Full name should consist of two words.",
        path: "fullName",
      });

      if (!first || !last || other.length > 0) {
        return error;
      }

      if (first.length <= 0 || last.length <= 0) {
        return error;
      }

      return true;
    })
    .test("Does not contain numbers", function (val) {
      const [first, last] = val.split(" ");
      const error = this.createError({
        message: "Full name should not have digits.",
        path: "fullName",
      });

      if (/\d/.test(first) || /\d/.test(last)) {
        return error;
      }

      return true;
    }),
  email: yup
    .string()
    .email("Email must be a valid email.")
    .required("Email is not allowed to be empty."),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters.")
    .required("Password is not allowed to be empty."),
  confirmPassword: yup
    .string()
    .when("password", {
      is: (password) => password.length > 0,
      then: yup.string().required("Please repeat your password."),
    })
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
