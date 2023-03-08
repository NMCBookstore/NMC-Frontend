import React from "react";
import { useRoutes,BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import RouterCfg from "./RouterCfg";
import Layout from "./layouts/FullLayout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home  from "./components/Home/Home";


const App = () => {
    const routing = useRoutes(RouterCfg);
    return <> {routing}</>;
}

export default App



// function App() {
//     return (    
//     <>
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element = {<Home />} />
//                     <Route path="about" element = {<About />} />
//                     <Route path="contact" element = {<Contact />} />

//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     </>
//     );
// }

// export default App;