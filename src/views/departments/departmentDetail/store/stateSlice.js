import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "departmentDetail/state",
  initialState: {
    editDepartmentDialog: false,
  },
  reducers: {
    openEditDepartmentDialog: (state) => {
      state.editDepartmentDialog = false;
    },
  },
});

export const { openEditDepartmentDialog } = stateSlice.actions;
export default stateSlice.reducer;
