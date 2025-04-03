import React, { useState } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";
import Home from "./components/Home/Home";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Header />
      {isLogin ? <Outlet /> : <Home />}
      <Footer />
    </>
  );
};

export default App;