import React from "react";
import { Routes, Route } from "react-router-dom";

const LazyUnauthorized = React.lazy(() => import("./Unauthorized"));
const LazyAuthorized = React.lazy(() => import("./Authorized"));

const Pages = () => {
  return (
    <Routes>
      <Route path="/*" element={<LazyUnauthorized />} />
      <Route path="/app/*" element={<LazyAuthorized />} />
    </Routes>
  );
};

export default Pages;
