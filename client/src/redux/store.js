import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/userSlice";
import themeReducer from "./theme/themeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";  
import sidebarSlicesReduce from "./sidebarSlices/sidebarSlices";



const rootReducer = combineReducers({
  users: userReducer,
  theme: themeReducer,
  sidebars: sidebarSlicesReduce,
  // sidebarSlices: sidebarSlicesReducer,
  // sidebar: sidebarReducer,
  // active: activeSliceReducer,
  // dashboardSelect: dashboardSelectSliceReducer,
  // dashboard: dashboardSliceReducer,
  // topic: topicSliceReducer,
  // leaderBoarder: userBoardSliceReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     users: userReducer,
//     theme: themeReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });
