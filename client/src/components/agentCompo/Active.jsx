import { Box, Typography } from "@mui/material";
import React from "react";  

export const actives = [
  {
    title: "Agent Information", 
    staffId: "OS/75TT-882302/NG",
    location: "Osun",
    active: "active"
  },
  {
    title: "Total Tenants",
    agents: "89",
    month: "Since Last Month",
  },
  {
    title: "Total Landloards",
    agents: "508",
    percentage: "+48%",
    month: "Since Last Month",
  },
  {
    title: "Total Rents",
    agents: "3508",
    percentage: "+88%",
    month: "Since Last Month",
  },
   
];

const Active = () => {
  return (
    <> 
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
                borderBottom={"1px solid rgba(0, 0, 0, 0.7)"}
                pb={1}
              >
                {active.title}
              </Typography>
              <Typography
                fontSize={20}
                fontWeight={700}
                mt={4}
                color={"rgba(0, 0, 0, 0.7)"}
              >
                {active.staffId}
              </Typography>
              <Box display={"flex"} justifyContent={"space-between"} mt={3}>
              <Typography
                  fontSize={17}
                  fontWeight={600}
                  color={"rgba(0, 0, 0, 0.5)"}
                >
                  {active.location}
                </Typography>
                <Typography
                  fontSize={17}
                  fontWeight={600}
                  color={"green"}
                >
                  {active.active}
                </Typography>
              </Box>
              <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} mt={3}>
                <Typography
                  fontSize={24}
                  fontWeight={700}
                  color={"rgba(0, 0, 0, 1)"}
                >
                  {active.agents}
                </Typography>
                <Typography
                  fontSize={17}
                  fontWeight={600}
                  color={"rgba(0, 0, 0, 0.5)"}
                >
                  {active.month}
                </Typography>
              </Box>
              <Box>
               
              </Box>
            </Box>
          ))}
        </Box>
      </Box> 
    </>
  );
};

export default Active;
