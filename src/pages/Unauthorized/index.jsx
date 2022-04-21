import { Routes, Route, Navigate } from "react-router-dom";
import useToken from "hooks/useToken";
import UnauthorizedLayout from "layouts/Unauthorized";

import SignIn from "./SignIn";

const Unauthorized = () => {
  const { hasToken } = useToken();

  const defaultRedirectPath = hasToken() ? "/app" : "/sign-in";

  return (
    <UnauthorizedLayout>
      <Routes>
        <Route index element={<Navigate to={defaultRedirectPath} replace />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </UnauthorizedLayout>
  );
};

export default Unauthorized;
