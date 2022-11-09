import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStudentList, createNewStudent } from "services/StudentService";

export const getStudents = createAsyncThunk("studentList/getStudents", async (data) => {
    const response = await getStudentList(data)
    console.log(data);
    return response.data
})

export const initialTableData = {
    total : 0, 
    pageIndex : 1, 
    pageSize :10, 
    query : "", 
    filter : "",
    sort : {order : "", key : ""}, 
}
export const initialFilterData = {
    status : "",
}
const dataSlice = createSlice({
    name : "studentList/data",
    initialState : {
        loading : false, 
        students : [], 
        tableData : initialTableData, 
        filterData : initialFilterData
    }, 
    reducers :{
        setTableData : (state, action) => {
            state.tableData = action.payload
        }, 
        setStudents  : (state, action) => {
            state.students = action.payload
        }, 
        setFilterData : (state, action) => {
            state.filterData = action.payload
        }
    }, 
    extraReducers : {
        [getStudents.fulfilled] : (state, action) => {
            state.students = action.payload;
            state.tableData.total = action.payload.total;
            state.loading = false;
        }, 
        [getStudents.pending] : state => {
            state.loading = true
        }
    }
})

export const {setTableData, setFilterData, setStudents} = dataSlice.actions
export default dataSlice.reducer