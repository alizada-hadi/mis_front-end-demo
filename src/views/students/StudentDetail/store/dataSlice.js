import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetStudentDetail, apiUpdateStudent } from "services/StudentService";


export const studentDetail = createAsyncThunk("getStudentDetail/data", async (data) => {
    const response = await apiGetStudentDetail(data)
    return response.data
})

export const updateStudent = createAsyncThunk("getStudentDetail/studentUpdate/data", async data => {
    const response = await apiUpdateStudent(data)
    return response.data
})

const dataSlice = createSlice({
    name : "getStudentDetail", 
    initialState : {
        student : {}, 
        loading : false, 
        error : null
    },
    reducers : {

    }, 
    extraReducers : {
        [studentDetail.fulfilled] : (state, action) => {
            state.student=action.payload
            state.loading=false
        }, 
        [studentDetail.pending] : (state) => {
            state.loading = true
        }, 
        [studentDetail.rejected] : (state, action) => {
            state.loading = false 
            state.error = action.payload
        }, 
        [updateStudent.fulfilled] : (state, action) => {
            state.loading = false
            state.student = action.payload
        }
    }
})

export default dataSlice.reducer
