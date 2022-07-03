import ContentBox from "layouts/Unauthorized/ContentBox";

import useRegister from "./useRegister";

import fields from "./index.fields";
import validationSchema from "./index.validation";

const Register = () => {
  const { onRegister } = useRegister();

  return (
    <ContentBox
      title="Sign up"
      submitText="Sign up"
      submittingText="Signing up"
      footerText="Already have an account?"
      footerActionLinkText="Sign in"
      footerActionLinkHref="/sign-in"
      fields={fields}
      validationSchema={validationSchema}
      onSubmit={onRegister}
    />
  );
};

export default Register;
