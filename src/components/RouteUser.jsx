import React from "react";
import { Route, Routes } from "react-router-dom";

import HeadlthyMenu from "../pages-user/healthy/HeadlthyMenu"
import HeadlthyList from "../pages-user/healthy/HeadlthyList"
import HeadlthyInfomation from "../pages-user/healthy/HeadlthyInfomation"
const RouteUser = () => {
  return (
    <Routes>
      <Route path="/" element={<HeadlthyMenu />} />
      <Route path="/healthy/infomation" element={<HeadlthyInfomation />} />
      <Route path="/healthy/list" element={<HeadlthyList />} />
    </Routes>
  );
};

export default RouteUser;
