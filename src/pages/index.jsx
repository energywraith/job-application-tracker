import { Routes, Route } from "react-router-dom";

import Unauthorized from "./Unauthorized";
import Authorized from "./Authorized";

const Pages = () => {
  return (
    <Routes>
      <Route path="/*" element={<Unauthorized />} />
      <Route path="/app/*" element={<Authorized />} />
    </Routes>
  );
};

export default Pages;
