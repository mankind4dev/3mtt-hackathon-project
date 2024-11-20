import { Box } from "@mui/material";
import React from "react";
import Weaks from "./Weaks";
import Strongest from "./Strongest"; 

const Topics = () => {
  return (
    <>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        px={4}
        pt={4}
        width={"100%"} 
        gap={2}
      >
        <Box flex={1}>
          <Weaks />
        </Box>
        <Box flex={1}>
          <Strongest />
        </Box>
      </Box>
    </>
  );
};

export default Topics;
