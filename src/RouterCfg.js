import { lazy } from "react";
import { Navigate } from "react-router-dom";
import About from "./pages/About";
import Home from "./components/Home/Home";
import Header from "./layouts/Header/Header";


/****Layouts*****/
const Layout = lazy(() => import("./layouts/FullLayout/Layout"));

const RouterCfg = [
    {
        path: "/",
        element:<Layout/>,
        children: [
            {
                path: "",
                element: <Home />
            }
        ]
    },
    {
        path: "/about",
        element:<About />
    }

    
];

export default RouterCfg