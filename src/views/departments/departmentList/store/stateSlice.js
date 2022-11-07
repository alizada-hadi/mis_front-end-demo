import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "departments/state",
  initialState: {
    view: "grid",
    query: {
      order: "asc",
      search: "",
    },
    newDepartmentDialog: false,
  },
  reducers: {
    toggleView: (state, action) => {
      state.view = action.payload;
    },
    toggleSort: (state, action) => {
      state.query.order = action.payload;
    },
    setSearch: (state, action) => {
      state.query.search = action.payload;
    },
    toggleNewDepartmentDialog: (state, action) => {
      state.newDepartmentDialog = action.payload;
    },
  },
});

export const { toggleView, toggleSort, toggleNewDepartmentDialog, setSearch } =
  stateSlice.actions;
export default stateSlice.reducer;
