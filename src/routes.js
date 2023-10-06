import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Sigin from "./pages/sigin";
import Register from "./pages/register";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Sigin />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
