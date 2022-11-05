import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDepartmentList } from "../../../services/DepartmentService";

export const getList = createAsyncThunk("departments/getList", async () => {
  const response = await getDepartmentList();
  return response.data;
});

const dataSlice = createSlice({
  name: "departments/data",
  initialState: {
    loading: false,
    departmentList: [],
  },
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, action) => {
      state.departmentList = action.payload;
      state.loading = false;
    },
    [getList.pending]: (state) => {
      state.loading = true;
    },
  },
});

export default dataSlice.reducer;
