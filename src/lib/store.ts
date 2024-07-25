import { configureStore } from "@reduxjs/toolkit";
import salesSlice from "./features/sales/salesSlice";

export const store = configureStore({
  reducer: { sales: salesSlice },
});

// Store 타입 정의
type AppStore = typeof store;
type RootState = ReturnType<AppStore["getState"]>;
type AppDispatch = AppStore["dispatch"];

export type { RootState, AppDispatch };
