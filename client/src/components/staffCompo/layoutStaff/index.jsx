import React from "react";  
import { Box } from "@mui/material";
import Sidebar from "../Sidebar";
import "./style.css"

const Home = ({ children }) => {
  return (
    <>
      <Box display={"flex"}   position={"relative"} bgcolor={"rgba(249, 249, 249, 1)"} fontFamily={"Inter"}>
        <Box
          display={"flex"}
          position={"sticky"}
          top={0}
          width={{ lg: "246px", md: "200", sm: "150", base: "100" }}
          height={"100vh"}
          bgcolor={"rgba(255, 255, 255, 1)"}
          border={"1px solid rgba(239, 240, 246, 1)"}
          borderRadius={"20px"} 
        >
          <Sidebar />
        </Box>
        <Box width={"100%"} flexWrap={"wrap"}   >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Home;
