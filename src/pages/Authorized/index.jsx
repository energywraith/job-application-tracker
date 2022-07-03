import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useToken from "hooks/useToken";
import AuthorizedLayout from "layouts/Authorized";

import useAuthorized from "./useAuthorized";
import { menuItems } from "./index.consts";

const LazyDashboard = React.lazy(() => import("./Dashboard"));

const Authorized = () => {
  const { hasToken } = useToken();
  const { isLoggingOut, onLogout } = useAuthorized();

  return (
    <AuthorizedLayout
      menuItems={menuItems}
      isLoading={isLoggingOut}
      onLogout={onLogout}
    >
      <Suspense>
        <Routes>
          {!hasToken() && (
            <Route index element={<Navigate to="/sign-in" replace />} />
          )}
          <Route path="/settings" element={<div>SETTINGS</div>} />
          <Route path="/jobs" element={<div>JOBS</div>} />
          <Route index element={<LazyDashboard />} />
        </Routes>
      </Suspense>
    </AuthorizedLayout>
  );
};

export default Authorized;
