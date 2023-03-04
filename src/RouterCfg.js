import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";


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

    
];

export default RouterCfg