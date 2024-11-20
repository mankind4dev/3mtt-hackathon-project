import { Box, Typography } from "@mui/material";
import React from "react"; 

const HeadSelect = () => {  
  return (
    <>
      <Box
        mt={3}
        m={4}
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={2}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"365px"}
          height={"50px"}
          background={"rgba(255, 255, 255, 1)"}
          border={"1px solid rgba(239, 240, 246, 1)"}
          borderRadius={3}
          pl={1}
          pr={1}
        >
          <Typography fontSize={16} fontWeight={500}>
            State:
          </Typography>
          <select name="">
            <option value="names">Select States</option>
          </select>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"365px"}
          height={"50px"}
          background={"rgba(255, 255, 255, 1)"}
          border={"1px solid rgba(239, 240, 246, 1)"}
          borderRadius={3}
          pl={1}
          pr={1}
        >
          <Typography fontSize={16} fontWeight={500}>
            LGA:
          </Typography>
          <select name="" id="">
            <option value="names">Select Local Government Area</option>
          </select>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"365px"}
          height={"50px"}
          background={"rgba(255, 255, 255, 1)"}
          border={"1px solid rgba(239, 240, 246, 1)"}
          borderRadius={3}
          pl={1}
          pr={1}
        >
          <Typography fontSize={16} fontWeight={500}>
            Streets:
          </Typography>
          <select name="" id="">
            <option value="names">Select Streets</option>
          </select>
        </Box>
      </Box>
    </>
  );
};

export default HeadSelect;
