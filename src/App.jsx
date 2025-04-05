import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";
// import UserChecking from "./helper.js";

const App = () => {

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
