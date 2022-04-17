import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import useToken from "hooks/useToken";

import SignIn from "./SignIn";

const Unauthorized = () => {
  const { hasToken } = useToken();

  const defaultRedirectPath = hasToken() ? "/app" : "/sign-in";

  return (
    <Routes>
      <Route index element={<Navigate to={defaultRedirectPath} replace />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};

export default Unauthorized;
