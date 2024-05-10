import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home/home";
import Dress from "../pages/category/dress/dress";
import Accessory from "../pages/category/accessory/accessory";
import Sport from "../pages/category/sport/sport";
import Alai from "../pages/Hero/about-alai/alai";
import Provil from "../pages/Profil/profil";
import { useMainContext } from "../context/AuthContext";

const MainRoutes = () => {
  const { user } = useMainContext();
  const nav = useNavigate();

  function profilRouter() {
    if (user) {
      nav("/profil");
      return;
    }
    nav("/");
  }

  const PUBLIC = [
    { path: "/", element: <Home />, key: 1 },
    {
      path: "/profil",
      element: (
        <profilRouter>
          <Provil />
        </profilRouter>
      ),
      key: 2,
    },
  ];
  const CATEGORY = [
    { path: "alai", element: <Alai />, key: 1 },
    { path: "dress", element: <Dress />, key: 1 },
    { path: "accsessory", element: <Accessory />, key: 1 },
    { path: "sport", element: <Sport />, key: 1 },
  ];
  const PROFIL = [];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
      {CATEGORY.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
      {PROFIL.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
