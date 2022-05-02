import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import useToken from "hooks/useToken";
import UnauthorizedLayout from "layouts/Unauthorized";

import SignIn from "./SignIn";
import Register from "./Register";

const Unauthorized = () => {
  const navigate = useNavigate();
  const { hasToken } = useToken();

  const defaultRedirectPath = hasToken() ? "/app" : "/sign-in";

  useEffect(() => {
    if (hasToken()) {
      navigate("/app", { replace: true });
    }
  }, []);

  return (
    <UnauthorizedLayout>
      <Routes>
        <Route index element={<Navigate to={defaultRedirectPath} replace />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </UnauthorizedLayout>
  );
};

export default Unauthorized;
