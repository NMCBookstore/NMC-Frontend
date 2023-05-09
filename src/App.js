import React from "react";
import { useRoutes,BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import RouterCfg from "./RouterCfg";
import Layout from "./layouts/FullLayout/Layout";
import Home  from "./components/Home/Home";



const App = () => {
    const routing = useRoutes(RouterCfg);
    return <> {routing}</>;
}

export default App