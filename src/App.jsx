import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";
import Home from "./components/Home/Home";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="overflow-x-hidden">
      <Header />
      {isLogin ? <Outlet /> : <Home />}
      <Footer />
    </div>
  );
};

export default App;
