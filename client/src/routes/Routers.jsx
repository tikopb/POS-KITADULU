import React from "react";
import { Routes, Route } from "react-router";
import Home from "../views/Home";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import Pos from "../views/Pos";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='*' exact element={<NotFound/>}/>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/pos" exact element={<Pos/>}/>
      </Routes>
    </>
  )
}

export default Routers