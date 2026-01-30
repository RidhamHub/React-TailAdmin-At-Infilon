import React from "react";
import { Outlet } from "react-router-dom";
import Side from "./Side.jsx";
import Nav from "./Nav.jsx";

const Layout = () => {
  return (
    <div className="flex w-full">
      <div>
        <Side />
      </div>
      <div className="flex-1 w-full">
        <Nav />
        <Outlet /> 
      </div>
    </div>
  );
};

export default Layout;
