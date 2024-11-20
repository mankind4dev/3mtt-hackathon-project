import { Box, Typography } from "@mui/material";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const SignUpHead = () => {
  return (
    <>
      <Box width={"100%"}>
        <Box
          width={"100%"}
          bgcolor={"rgb(234, 201, 201)"}
          className="rounded-[15px] rounded-b-none"
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={5}
          >
            <Box display={"flex"}>
              <img src="/renthub.png" alt="renthub-logo" width={70} />
              <img src="/nigeria.png" alt="Nigeria-logo" width={70} />
            </Box>
            <Box order={"2"} className="order-last">
              <Typography
                fontSize={30}
                textTransform={"uppercase"}
                fontWeight={700}
              >
                Sign Up
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box px={3} pt={5}>
          <Box display={"flex"} bgcolor={"green"} width={"100%"} px={3} py={2}>
            <Box display={"flex"} gap={10}>
              <FaInfoCircle size={250} alignItems={"center"} color={"yellow"} />
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignContent={"start"}
              >
                <Typography fontSize={30} fontWeight={700} mb={1}>
                  Notice:
                </Typography>
                <Typography fontSize={20} fontWeight={400} mb={1}>
                  Please ensure all details entered are accurate and truthful.
                  Providing false information may result in penalties in
                  accordance with the laws of the Federal Republic of Nigeria.
                </Typography>
                <Typography fontSize={20} fontWeight={400}>
                  Please double-check all entries to avoid issues later. Honesty
                  is key!
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignUpHead;
