import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Strongest = () => {
  const actives = useSelector((state) => state.topic.strongest);
  console.log(actives);
  return (
    <>
      <Box
        bgcolor={" rgba(239, 240, 246, 1)"}
        borderRadius={"20px"}
        width={"100%"}
        height={"280px"}
        p={3}
      >
        <Box width={"100%"}>
          <Typography
            fontSize={14}
            fontWeight={600}
            color={"rgba(0, 0, 0, 0.5)"}
            mb={4}
          >
            Weakest Topics
          </Typography>
          <Box gap={4}>
            {actives.map((strongest, index) => (
              <>
                <Box display={"flex"} gap={2} mb={4}>
                  <Box>
                    <img
                      src={strongest.imgSrc}
                      alt="food"
                      width={"50px"}
                      height={"32px"}
                    />
                  </Box>
                  <Box
                    width={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                  >
                    <Typography fontSize={14} fontWeight={600} mb={1}>
                      {strongest.title}
                    </Typography>
                    <Box
                      position={"relative"}
                      bgcolor={strongest.graphColor}
                      height={"10px"}
                      borderRadius={"100px"}
                    >
                      <Box
                        position={"absolute"}
                        zIndex={99}
                        top={0}
                        bottom={0}
                        width={strongest.value}
                        bgcolor={strongest.graphBgColor}
                        borderRadius={"100px"}
                      ></Box>
                    </Box>
                  </Box>
                  <Box display={"flex"} alignItems={"end"} gap={0.8}>
                    <Typography
                      fontSize={14}
                      fontWeight={500}
                      color={"rgba(0, 0, 0, 0.7)"}
                    >
                      {strongest.percentage}
                    </Typography>
                    <Typography
                      fontSize={14}
                      fontWeight={600}
                      color={"rgba(0, 0, 0, 0.2)"}
                    >
                      {strongest.status}
                    </Typography>
                  </Box>
                </Box>
              </>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Strongest;
