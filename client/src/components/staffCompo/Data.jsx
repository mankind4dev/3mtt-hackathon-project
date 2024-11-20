import { Box, Typography } from "@mui/material";
import React from "react"; 
import HeaderSelect from "./HeaderSelect";

export const actives = [
  {
    title: "Total Staff",
    agents: "89",
  },
  {
    title: "Total Agents",
    agents: "508",
    percentage: "+48%",
    month: "Since Last Month",
  },
  {
    title: "Total Tenants",
    agents: "3508",
    percentage: "+88%",
    month: "Since Last Month",
  },
  {
    title: "Total Landloard",
    agents: "808",
    percentage: "+68%",
    month: "Since Last Month",
  },
];

const Data = () => {
  return (
    <>
      <HeaderSelect />
      <Box>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"startr"}
          alignItems={"center"}
          px={4} 
          width={"100%"}
          gap={1.8}
        >
          {actives.map((active, index) => (
            <Box
              key={index}
              width={"290px"}
              height={"260px"}
              bgcolor={"rgba(255, 255, 255, 1)"}
              borderRadius={"20px"}
              p={2}
            >
              <Typography
                fontSize={20}
                fontWeight={700}
                color={"rgba(0, 0, 0, 0.7)"}
              >
                {active.title}
              </Typography>
              <Box display={"flex"} alignItems={"center"} mt={3}>
                <Typography
                  fontSize={24}
                  fontWeight={700}
                  color={"rgba(0, 0, 0, 1)"}
                >
                  {active.value}
                </Typography>
                <Typography
                  fontSize={17}
                  fontWeight={600}
                  color={"rgba(0, 0, 0, 0.5)"}
                >
                  {active.half}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box> 
    </>
  );
};

export default Data;
