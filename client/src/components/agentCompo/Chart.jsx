import { Box, Typography } from "@mui/material";
import React from "react"; 
import ChartBox from "./ChartBox";

const Chart = () => {
  return (
    <>
      <Box
        flexWrap={"wrap"}
        bgcolor={"rgba(255, 255, 255, 1)"}
        width={"100%"}
        height={"340px"}
        borderRadius={"20px"}
        p={2}
      >
        <Box
          display={"flex"}
          borderBottom={"1px solid rgba(0, 0, 0, 0.1)"}
          pb={2}
        >
          <Typography
            fontSize={14}
            fontWeight={500}
            color={"rgba(77, 77, 77, 1)"}
          >
            Activity
          </Typography>
          <Typography fontSize={16} fontWeight={500}>
            Timeframe:
          </Typography>
          <select name="">
            <option value="names">All-time</option>
          </select>
        </Box>
        <Box>
          <ChartBox />
        </Box>
      </Box>
    </>
  );
};

export default Chart;
