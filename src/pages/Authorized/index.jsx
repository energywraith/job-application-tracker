import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useToken from "hooks/useToken";
import AuthorizedLayout from "layouts/Authorized";

import useTopbar from "hooks/useTopbar";
import useAuthorized from "./useAuthorized";
import { menuItems } from "./index.consts";

const LazyDashboard = React.lazy(() => import("./Dashboard"));
const LazyJobs = React.lazy(() => import("./Jobs"));

const Authorized = () => {
  const { hasToken } = useToken();
  const { isLoggingOut, onLogout } = useAuthorized();

  const { Topbar, TopbarProps } = useTopbar();

  return (
    <AuthorizedLayout
      TopbarComponent={Topbar}
      TopbarProps={TopbarProps}
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
          <Route path="/jobs" element={<LazyJobs />} />
          <Route index element={<LazyDashboard />} />
        </Routes>
      </Suspense>
    </AuthorizedLayout>
  );
};

export default Authorized;
