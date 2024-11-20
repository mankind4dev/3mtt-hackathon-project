import React from "react";
import "./layoutAgent/style.css";
import Home from "./layoutAgent";
import Heading from "./Heading";
import HeadSelect from "./HeadSelect";
import Activity from "./Activity"; 
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import TenantData from "./TenantData";
import LandloardData from "./LandloardData";

const Dashboard = () => {
  return (
    <>
      <Box width={"100%"} mx={"auto"} maxWidth={"100%"} flexWrap={"wrap"}>
        <Home> 
            <Navbar />
            <Box overflowY={"auto"} flexGrow={1}>
              <Heading />
              <HeadSelect />
              <Activity />
              <TenantData />
              <LandloardData /> 
            </Box> 
        </Home>
      </Box>
    </>
  );
};

export default Dashboard;
