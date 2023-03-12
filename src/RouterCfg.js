import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./layouts/Header/Header";

/****Layouts*****/
const Layout = lazy(() => import("./layouts/FullLayout/Layout"));

/****Routes*****/

const About = lazy(() => import("./pages/About"));
const UserLogin = lazy(() => import("./views/UserLogin"));
const UserRegister = lazy(() => import("./views/UserRegister"));

/****Routes*****/

const RouterCfg = [
  {path: "login",element: <UserLogin />,},
  {path: "register", element: <UserRegister /> },

  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
    ],
  },

  {
    path: "/user",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "about", element: <About /> },
    ],
  },
];

export default RouterCfg;
