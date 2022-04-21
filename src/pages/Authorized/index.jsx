import { Routes, Route, Navigate } from "react-router-dom";
import useToken from "hooks/useToken";

import Dashboard from "./Dashboard";

const Authorized = () => {
  const { hasToken } = useToken();

  return (
    <Routes>
      {!hasToken() && (
        <Route index element={<Navigate to="/sign-in" replace />} />
      )}
      <Route index element={<Dashboard />} />
    </Routes>
  );
};

export default Authorized;
