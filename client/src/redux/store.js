import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import videoReducer from "./videoSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    video: videoReducer,
  },
});
