import ContentBox from "layouts/Unauthorized/ContentBox";

import useSignIn from "./useSignIn";
import fields from "./index.fields";
import validationSchema from "./index.validation";

const SignIn = () => {
  const { onSignIn } = useSignIn();

  return (
    <ContentBox
      title="Sign in"
      submitText="Sign in"
      submittingText="Signing in"
      footerText="Don't have an account?"
      footerActionLinkText="Create one"
      footerActionLinkHref="/register"
      fields={fields}
      validationSchema={validationSchema}
      onSubmit={onSignIn}
    />
  );
};

export default SignIn;
