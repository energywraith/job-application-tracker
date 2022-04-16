import { Routes, Route } from "react-router-dom";

const Authorized = () => {
  return (
    <Routes>
      <Route index element={<div>Dashboard</div>} />
    </Routes>
  );
};

export default Authorized;
