import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container } from "@mui/system";

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>

      <Footer />
    </>
  );
};

export default Layout;
