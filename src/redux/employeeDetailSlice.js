import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedEmployee: 0,
};

export const employeeDetailSlice = createSlice({
  name: "common",
  initialState,

  reducers: {
    setSelectedEmployee: (state, action) => {
      state.selectedEmployee = action.payload;
    },
  },
});

export const { setSelectedEmployee } = employeeDetailSlice.actions;

export default employeeDetailSlice.reducer;
