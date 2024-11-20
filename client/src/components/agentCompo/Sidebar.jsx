import { Avatar, Box, Typography } from "@mui/material";
import {Link} from "react-router-dom";
import dash from "/nigeria.png";

export const sidebarList = [
  {
    tittle: "Dashboard",
    iconImg: dash,
    link: "/agent-dashboard",
  },
  {
    tittle: "Create Lists",
    iconImg: dash,
    link: "/create-lists",
  },
  {
    tittle: "Apartment Lists",
    iconImg: dash,
    link: "/apartment-list",
  },
  {
    tittle: "Payment History",
    iconImg: dash,
    link: "/payment-history",
  },
  {
    tittle: "People",
    iconImg: dash,
    link: "/people",
  },
];

export const notify = [
  {
    tittle: "Notifications",
    iconImg: dash,
    link: "/notifications",
  },
];

export const support = [
  {
    tittle: "Support",
    iconImg: dash,
    link: "/suport",
  },
  {
    tittle: "Faqs",
    iconImg: dash,
    link: "/fags",
  },
];

const Sidebar = () => {
  return (
    <>
      <Box
        width={{ lg: "100%" }}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Link to="/">
          <div className="flex justify-center text-center w-full h-full border-b-2 bg-[rgb(194,191,191)] shadow-md">
            <div className="flex text-center justify-center p-4 ">
              <img
                src="./renthub1.png"
                alt=""
                width={"90px"}
                height={"30px"}
                className="rounded-lg"
              />
              <img src="./nigeria.png" alt="" width={"60px"} height={"30px"} />
            </div>
          </div>
        </Link>
        <Box
          sx={{
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            borderBottom={"1px solid rgba(229, 229, 229, 1)"}
          ></Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            borderBottom={"1px solid rgba(229, 229, 229, 1)"}
            width={"100%"}
            pt={2}
            pb={1}
            px={2}
            pr={2}
          >
            <Avatar src="/images/user.png" sx={{ width: 66, height: 66 }} />
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={0.5}
              pt={1}
              mx={2}
            >
              <Typography
                fontSize={14}
                fontWeight={600}
                color={"rgba(0, 0, 0, 1)"}
              >
                Lukmans
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={400}
                color={"rgba(0, 0, 0, 0.5)"}
              >
                test@gmail.com
              </Typography>
            </Box>
          </Box>
          <Box px={2} pt={2}>
            {sidebarList.map((lists, index) => (
              <Link to={lists.link}>
                <Box
                  key={index}
                  display={"flex"}
                  alignItems={"center"}
                  mb={2}
                  px={2}
                  color={"rgba(0, 0, 0, 0.7)"}
                  sx={{
                    color: "rgba(0, 0, 0, 0.7)",
                    "&:hover": {
                      bgcolor: "rgba(27, 89, 248, 0.1)",
                      borderRadius: "5px",
                    },
                  }}
                >
                  <img
                    src={lists.iconImg}
                    alt={lists.name}
                    width={24}
                    height={24}
                  />
                  <Link underline="none" to={lists.link}>
                    <Typography>{lists.icon}</Typography>
                    <Typography
                      p={1}
                      fontSize={14}
                      fontWeight={500}
                      style={{ cursor: "pointer" }}
                    >
                      {lists.tittle}
                    </Typography>
                  </Link>
                </Box>
              </Link>
            ))}
          </Box>
          <Box px={3}>
            <Typography
              color={"rgba(0, 0, 0, 0.5)"}
              fontSize={16}
              fontWeight={600}
              mt={2}
            >
              Notifications
            </Typography>
            {notify.map((notice, index) => (
              <Box
                mt={1}
                pl={2}
                pr={1}
                key={index}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{
                  color: "rgba(0, 0, 0, 0.7)",
                  "&:hover": {
                    bgcolor: "rgba(27, 89, 248, 0.1)",
                    borderRadius: "5px",
                  },
                }}
              >
                <img
                  src={notice.iconImg}
                  alt={notice.tittle}
                  width={24}
                  height={24}
                />
                <Link underline="none" to={notice.link}>
                  <Typography
                    p={1}
                    fontSize={14}
                    fontWeight={500}
                    style={{ cursor: "pointer" }}
                  >
                    {notice.tittle}
                  </Typography>
                </Link>
                <Box
                  display={"flex"}
                  fontSize={"15px"}
                  p={1}
                  width={"20px"}
                  height={"20px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"50%"}
                  bgcolor={"red"}
                  color={"white"}
                >
                  4
                </Box>
              </Box>
            ))}
          </Box>
          <Box px={3} mb={2}>
            <Typography
              color={"rgba(0, 0, 0, 0.5)"}
              fontSize={16}
              fontWeight={600}
              mt={2}
            >
              Support
            </Typography>
            {support.map((suport, index) => (
              <Box
                mt={1}
                px={2}
                key={index}
                display={"flex"}
                alignItems={"center"}
                sx={{
                  color: "rgba(0, 0, 0, 0.7)",
                  "&:hover": {
                    bgcolor: "rgba(27, 89, 248, 0.1)",
                    borderRadius: "5px",
                  },
                }}
              >
                <img
                  src={suport.iconImg}
                  alt={suport.tittle}
                  width={24}
                  height={24}
                />
                <Link underline="none" to={suport.link}>
                  <Typography
                    p={1}
                    fontSize={14}
                    fontWeight={500}
                    style={{ cursor: "pointer" }}
                  >
                    {suport.tittle}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            borderTop={"1px solid rgba(229, 229, 229, 1)"}
            width={"100%"}
            pt={2}
            pb={5}
          >
            <Avatar src="/public/nigeria.png" sx={{ width: 86, height: 86 }} />

            <Box
              display={"flex"}
              gap={0.5}
              pt={1}
              alignItems={"center"}
              whiteSpace={"nowrap"}
            >
              <Typography
                fontSize={18}
                fontWeight={600}
                color={"rgba(0, 0, 0, 1)"}
              >
                Renthub
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={400}
                alignItems={"center"}
                color={"rgba(0, 0, 0, 0.5)"}
              >
                &copy; 2024 Right reserved
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
