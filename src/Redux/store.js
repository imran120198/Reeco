import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./Order";

export const store = configureStore({
  reducer: {
    orderApp: orderReducer,
  },
});
