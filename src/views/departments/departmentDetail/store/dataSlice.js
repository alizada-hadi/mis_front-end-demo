import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDepartmentDetail } from "services/DepartmentService";

export const getDepartment = createAsyncThunk(
  "departmentDetail/data/getDepartment",
  async (data) => {
    const response = await getDepartmentDetail(data);
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "departmentDetail/data",
  initialState: {
    loading: false,
    departmentData: {},
  },
  reducers: {},
  extraReducers: {
    [getDepartment.fulfilled]: (state, action) => {
      state.loading = false;
      state.departmentData = action.payload;
    },
    [getDepartment.pending]: (state) => {
      state.loading = true;
    },
  },
});

export default dataSlice.reducer;
