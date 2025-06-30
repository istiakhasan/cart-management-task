import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice"; // ✅ default import gives you just the reducer
import { baseApi } from "./api/baseApi";

export const reducer = combineReducers({
  cart: cartReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});
