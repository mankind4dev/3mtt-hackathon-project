import { Box, Typography } from "@mui/material";
import React from "react"; 
import HeaderSelect from "./HeaderSelect";

export const staffInfo =[
  {
    title: "Total Staff", 
    staffId: "",
    state: "Osun",
    active: "active"
  },
]
export const actives = [
  {
    title: "Staff Information", 
    staffId: "OS/25TT-882358/NG",
    location: "Osun",
    active: "active"
  },
  {
    title: "Total Agents",
    agents: "508",
    state: "Osun",
    percentage: "+48%",
    month: "Since Last Month",
  },
  {
    title: "Total Tenants",
    agents: "3508",
    state: "Osun",
    percentage: "+88%",
    month: "Since Last Month",
  },
  {
    title: "Total Landloard",
    agents: "808",
    state: "Osun",
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
              <Box>

                <Typography
                  fontSize={24}
                  fontWeight={700}
                  color={"rgba(0, 0, 0, 1)"}
                  whiteSpace={"nowrap"}
                  >
                  {active.staffId}
                </Typography>
                <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>

                <Typography
                  fontSize={24}
                  fontWeight={700}
                  color={"rgba(0, 0, 0, 1)"}
                  whiteSpace={"nowrap"}
                  >
                  {active.location}
                </Typography>
                <Typography
                  fontSize={24}
                  fontWeight={700}
                  color={"green"}
                  whiteSpace={"nowrap"}
                  >
                  {active.active}
                </Typography>
                    </Box>
                  </Box>
                
                <Typography
                  fontSize={17}
                  fontWeight={600}
                  color={"rgba(0, 0, 0, 0.5)"}
                >
                  {active.half}
                </Typography>
                <Box width={"100%"} display={"flex"} justifyContent={"space-between"} >

                <Typography
                  fontSize={24}
                  fontWeight={700}
                  color={"rgba(0, 0, 0, 1)"} 
                  >
                  {active.agents}
                </Typography>
                <Typography
                  fontSize={24}
                  fontWeight={700}
                  color={"rgba(0, 0, 0, 1)"} 
                  >
                  {active.state}
                </Typography>
                  </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box> 
    </>
  );
};

export default Data;
