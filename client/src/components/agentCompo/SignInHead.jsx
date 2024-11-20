import { Box, Typography } from "@mui/material";
import React from "react";
import { FaInfoCircle } from "react-icons/fa";

const SignInHead = () => {
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
            p={3}
          >
            <Box display={"flex"}>
              <img src="/renthub.png" alt="renthub-logo" width={70} />
              <img src="/nigeria.png" alt="Nigeria-logo" width={70} />
            </Box>
            <Box className="order-first">
              <Typography
                fontSize={30}
                textTransform={"uppercase"}
                fontWeight={700}
              >
                Sign In
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box px={3} pt={2}>
          <Box display={"flex"} bgcolor={"green"} width={"100%"} px={1} py={1}>
            <Box display={"flex"} gap={5}>
              <FaInfoCircle size={150} alignItems={"center"} color={"yellow"} />
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignContent={"start"}
              >
                <Typography fontSize={30} fontWeight={700} mb={1}>
                  Notice:
                </Typography>
                <Typography fontSize={16} fontWeight={400} mb={1}>
                  Input your imail and password to have access to your account
                </Typography>
                <Typography fontSize={16} fontWeight={400}>
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

export default SignInHead;
