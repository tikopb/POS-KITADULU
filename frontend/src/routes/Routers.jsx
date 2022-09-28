import React, { useState } from "react";
import { Routes, Route } from "react-router";
import { getToken } from "../utils/Common";
import LoginRoute from "../utils/LoginRoute";
import ProtectedRoute from "../utils/ProtectedRoute";
import Home from "../views/Home";
import ForgetPassword from "../views/Login/ForgetPassword";
import Login from "../views/Login/Login";
import Register from "../views/Login/Register";
import NotFound from "../views/NotFound";
import Pos from "../views/Pos/Pos";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='*' exact element={<NotFound/>}/>
        <Route element={<LoginRoute />} >
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/login/forgetpassword" exact element={<ForgetPassword/>}/>
          <Route path="/login/register" exact element={<Register/>}/>
        </Route>
        <Route element={<ProtectedRoute />} >
          <Route path="/pos" exact element={<Pos/>}/>
          <Route path="/dashboard" exact element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default Routers