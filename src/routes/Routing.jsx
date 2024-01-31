import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Footer from "../components/footer/Footer";
import ProtectedRoute from "./ProtectedRoute";
import AddCategory from "../admin/category/AddCategory";
import ViewCategory from "../admin/viewCategory/ViewCategory";

const Routing = () => {
    const token = localStorage.getItem("authToken")
    console.log("5555555555",token)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="" element={<Login />} />
          <Route  path="viewCategory" element={<ViewCategory />} />
          <Route  path="footer" element={<Footer />} />
          <Route exact path="/register/:userId" element={<Register/>}/>
          <Route exact path="category" element={<ProtectedRoute
          >
            <AddCategory/>
          </ProtectedRoute>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
