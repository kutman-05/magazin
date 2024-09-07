import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home/home";
import Dress from "../pages/category/dress/dress";
import Accessory from "../pages/category/accessory/accessory";
import Sport from "../pages/category/sport/sport";
import Alai from "../pages/Hero/about-alai/alai";
import Provil from "../pages/Profil/profil";
import { useMainContext } from "../context/AuthContext";
import Catch from "../pages/category/catch/catch";
import Mebel from "../pages/category/Mebel/Mebel";
import Ayil from "../pages/category/Village/Village";
import Vilage from "../pages/category/Village/Village";
import Books from "../pages/category/Books/Books";
import Naushnik from "../pages/category/Naushnik/Naushnik";
import Beauty from "../pages/category/Beauty/Beauty";
import Cars from "../pages/category/Car/Cars";
import Tehnica from "../pages/category/tehnica/tehnica";
import { Construction } from "@mui/icons-material";
import Constructions from "../pages/category/Construction/Construction";

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
    { path: "catch", element: <Catch />, key: 1 },
    { path: "mebel", element: <Mebel />, key: 1 },
    { path: "village", element: <Vilage />, key: 1 },
    { path: "books", element: <Books />, key: 1 },
    { path: "naushnik", element: <Naushnik />, key: 1 },
    { path: "beauty", element: <Beauty />, key: 1 },
    { path: "cars", element: <Cars />, key: 1 },
    { path: "tehnica", element: <Tehnica />, key: 1 },
    { path: "construction", element: <Constructions />, key: 1 },
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
