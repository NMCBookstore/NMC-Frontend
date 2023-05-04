import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";

import { Container } from "@mui/system";





const AdminLayout = () => {
  return (
    <>
      <HeaderAdmin />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default AdminLayout;
