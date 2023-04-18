import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "./homepageSlice";
import employeeDetailSliceReducer from "./employeeDetailSlice";

export const store = configureStore({
  reducer: {
    employeeDetail: employeeDetailSliceReducer,
    homepage: homepageReducer,
  },
});
