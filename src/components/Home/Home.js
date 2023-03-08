import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <>
    <Box height={100} />
    <div> <h1>Home</h1></div>
    </>

    // <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    //   <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", width:{sx: "auto", md:"30vh"} }}>
    //     <Sidebar />
    //   </Box>
    // </Stack>
    // <Sidebar />
  )
}

export default Home