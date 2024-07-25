import { configureStore } from "@reduxjs/toolkit";
import salesSlice from "./features/sales/salesSlice";

export const store = configureStore({
  reducer: { sales: salesSlice },
});

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
