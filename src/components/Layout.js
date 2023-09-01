import React from "react";
import { Outlet } from "react-router-dom";
import { Navber, Footer } from "./index";
const Layout = () => {
  // it is a layout for intire app
  return (
    <>
      <Navber />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
