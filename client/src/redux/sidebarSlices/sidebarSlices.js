import { createSlice } from "@reduxjs/toolkit";
import active from "/nigeria.png"


const initialState = {
    value: 0,
    sidebarTitles: [
      {
        title: "Dashboard",
        iconImg: active,
        link: "/dashboard",
      },
      {
        title: "Creat Lists",
        iconImg: active,
        link: "/create-list",
      },
      {
        title: "Profile",
        iconImg: active,
        link: "/profile",
      },
      {
        title: "Setting",
        iconImg: active,
        link: "/setting",
      },
      {
        title: "Suports",
      },
    ],
  
    sidebarSupports: [
      {
        name: "Support",
        iconImg: active,
        link: "/support",
      },
      {
        name: "Faqs",
        iconImg: active,
        link: "/faqs",
      },
    ],
    sidebarUsers: [
      {
        fullName: "Lukmanss",
        email: "lukmanadeoti@gmail.com",
      },
    ],
  };

  export const sidebarSlices = createSlice({
    name: "sidebars",
    initialState,
    reducers: {},
  });
  
  export const {} = sidebarSlices.actions;
  
  export default sidebarSlices.reducer;