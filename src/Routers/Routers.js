import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import List from "../Components/PropertyList/List";
import Submit from "../Components/Forms/Submit";
import Preview from "../Components/Preview/Preview";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/submit" element={<Submit />} />
      <Route path="/preview" element={<Preview />} />
    </Routes>
  );
};

export default Routers;
