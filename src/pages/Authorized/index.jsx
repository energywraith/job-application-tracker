import { Routes, Route, Navigate } from "react-router-dom";
import useToken from "hooks/useToken";

const Authorized = () => {
  const { hasToken } = useToken();

  return (
    <Routes>
      {!hasToken() && (
        <Route index element={<Navigate to="/sign-in" replace />} />
      )}
      <Route index element={<div>Dashboard</div>} />
    </Routes>
  );
};

export default Authorized;
