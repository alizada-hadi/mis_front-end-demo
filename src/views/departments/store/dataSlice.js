import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getDepartmentList,
  createNewDepartment,
} from "../../../services/DepartmentService";

export const getList = createAsyncThunk("departments/getList", async (data) => {
  const response = await getDepartmentList(data);
  return response.data;
});

export const createDepartment = createAsyncThunk(
  "departments/createDepartment",
  async (data) => {
    const response = await createNewDepartment(data);
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "departments/data",
  initialState: {
    loading: false,
    error: null,
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
    [createDepartment.fulfilled]: (state, action) => {
      state.departmentList = [...state.departmentList, action.payload];
      state.error = null;
    },
    [createDepartment.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default dataSlice.reducer;
