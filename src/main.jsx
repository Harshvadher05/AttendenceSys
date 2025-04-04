import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import InnerHome from "./components/Home/InnerHome.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Profile from "./components/Profile/Profile.jsx"
import Signup from "./components/Login-SignUP/SignUP.jsx";
import Login from "./components/Login-SignUP/login.jsx";
import Sem1 from "./components/Semesters/Sem1.jsx";
import Sem2 from "./components/Semesters/Sem2.jsx";
import Sem3 from "./components/Semesters/Sem3.jsx";
import Sem4 from "./components/Semesters/Sem4.jsx";
import Sem5 from "./components/Semesters/Sem5.jsx";
import Sem6 from "./components/Semesters/Sem6.jsx";
import Sem7 from "./components/Semesters/Sem7.jsx";
import Sem8 from "./components/Semesters/Sem8.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="home" element={<Home />} />
      <Route path="innerhome" element={<InnerHome />} />
      <Route path="innerhome/sem1" element={<Sem1 />} />
      <Route path="innerhome/sem2" element={<Sem2 />} />
      <Route path="innerhome/sem3" element={<Sem3 />} />
      <Route path="innerhome/sem4" element={<Sem4 />} />
      <Route path="innerhome/sem5" element={<Sem5 />} />
      <Route path="innerhome/sem6" element={<Sem6 />} />
      <Route path="innerhome/sem7" element={<Sem7 />} />
      <Route path="innerhome/sem8" element={<Sem8 />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

);
