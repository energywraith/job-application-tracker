import { Routes, Route, Navigate } from "react-router-dom";

import SignIn from "./SignIn";

const Unauthorized = () => {
  return (
    <Routes>
      <Route index element={<Navigate to="/sign-in" replace />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};

export default Unauthorized;
