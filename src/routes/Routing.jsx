import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
