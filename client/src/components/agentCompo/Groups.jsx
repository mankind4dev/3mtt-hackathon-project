import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Groups = () => {
  const groupBoard = useSelector((state) => state.leaderBoarder.groups);
  console.log(groupBoard);
  return (
    <>
      <Box
        bgcolor={"rgba(255, 255, 255, 1)"}
        borderRadius={"20px"}
        mt={3}
        p={3}
      >
        <Typography
          fontSize={14}
          fontWeight={600}
          color={"rgba(0, 0, 0, 0.5)"}
          mb={3}
        >
          User Leaderboard
        </Typography>
        <Box>
          {groupBoard.map((leader, index) => (
            <>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                mb={3.5}
                key={index}
              >
                <Box display={"flex"} gap={3}>
                  {/* <img src="images/user.png" alt="user" /> */}
                  <Box>
                    <Typography
                      fontSize={14}
                      fontWeight={600}
                      color={"rgba(0, 0, 0, 1)"}
                    >
                      {leader.title}
                    </Typography>
                    <Typography
                      display={"flex"}
                      whiteSpace={"nowrap"}
                      fontSize={12}
                      fontWeight={500}
                      color={"rgba(0, 0, 0, 0.5)"}
                    >
                      {leader.value}
                      <Typography
                        display={"flex"}
                        whiteSpace={"nowrap"}
                        fontSize={12}
                        fontWeight={500}
                        color={"rgba(0, 0, 0, 0.5)"}
                        mx={0.7}
                      >
                        {leader.percentage}
                      </Typography>
                    </Typography>
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Typography
                    fontSize={16}
                    fontWeight={16}
                    color={"rgba(21, 30, 35, 1)"}
                  >
                    {leader.id}
                  </Typography>
                  <img
                    src="images/up.png"
                    alt="up"
                    width={"12px"}
                    height={"11px"}
                  />
                </Box>
              </Box>
            </>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Groups;
