import React from "react";
import Home from "./layoutStaff";
import Heading from "./Heading";
import HeadSelect from "./HeadSelect";
import Data from "./Data";
import { Box } from "@mui/material";
import AgentTable from "./AgentTable"; 
import TenantData from "./tenantData";
import LandloadData from "./LandloadData";
import AccrediteData from "./AccrediteData";

const StaffDashboard = () => {
  return (
    <>
      <Box width={"100%"} maxWidth={"100%"} mx={"auto"}>
        <Home>
          <Heading />
          <Box overflowY={"auto"} flexGrow={1}>
            <Data />
            <HeadSelect />
            <AgentTable />
            <TenantData />
            <LandloadData />
            <AccrediteData />
          </Box>
        </Home>
      </Box>
    </>
  );
};

export default StaffDashboard;
