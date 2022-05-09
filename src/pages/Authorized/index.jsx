import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useToken from "hooks/useToken";
import AuthorizedLayout from "layouts/Authorized";

const LazyDashboard = React.lazy(() => import("./Dashboard"));

const Authorized = () => {
  const { hasToken } = useToken();

  return (
    <AuthorizedLayout>
      <Routes>
        {!hasToken() && (
          <Route index element={<Navigate to="/sign-in" replace />} />
        )}
        <Route path="/settings" element={<div>SETTINGS</div>} />
        <Route path="/jobs" element={<div>JOBS</div>} />
        <Route index element={<LazyDashboard />} />
      </Routes>
    </AuthorizedLayout>
  );
};

export default Authorized;
