import { useNavigate } from "react-router-dom";

import ContentBox from "layouts/Unauthorized/ContentBox";
import useQuery from "hooks/useQuery";
import useErrorsHandling from "hooks/useErrorsHandling";

import fields from "./index.fields";
import validationSchema from "./index.validation";

const Register = () => {
  const navigate = useNavigate();
  const { sendQuery } = useQuery();
  const { handleFormValidationErrors } = useErrorsHandling();

  const onSubmit = (props, methods) => {
    const [firstName, lastName] = props.fullName.split(" ");

    sendQuery("auth/sign-up", {
      method: "POST",
      body: {
        firstName,
        lastName,
        email: props.email,
        password: props.password,
      },
    })
      .then(() => {
        navigate("/sign-in", { replace: true });
      })
      .catch((error) => {
        methods.clearErrors();
        handleFormValidationErrors(error, methods);
      });
  };

  return (
    <ContentBox
      title="Register"
      submitText="Sign up"
      submittingText="Signing up"
      fields={fields}
      validationSchema={validationSchema}
      footerText="Already have an account?"
      footerActionLinkText="Sign in"
      footerActionLinkHref="/sign-in"
      onSubmit={onSubmit}
    />
  );
};

export default Register;
