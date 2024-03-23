import React, { useEffect } from "react";


import RouteUser from "../RouteUser";
import "./layout.css";
import { BrowserRouter } from "react-router-dom";
const Layout = () => {
  
  return (
    <div className="layout">
      <BrowserRouter>
        <RouteUser />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
