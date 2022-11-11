import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetAccountFormData } from "services/StudentService";

export const getForm = createAsyncThunk("studentRegisterForm/data/getForm", async(data) => {
    const response = await apiGetAccountFormData(data)
    return response.data
})

const dataSlice = createSlice({
    name : "studentRegisterForm/data",
    initialState : {
        formData : {
            personalInformation : {
                first_name : "", 
                last_name : "", 
                father_name : "", 
                grand_father_name : "", 
                school : "", 
                score : "", 
                province : "", 
                semester : "", 
                phoneNumber : "", 
                dob : "", 
                gender : "", 
                maritalStatus : ""
            },
            userAccountInformation : {
                email : "", 
                username : "", 
                password : "", 
                password1 : ""
            },
        }, 
        stepStatus : {
            0: { status: 'pending' },
            1: { status: 'pending' }
        }
    }, 
    reducers:{
        setFormData : (state, action) => {
            state.formData = {...state.formData, ...action.payload}
        }, 
        setStepStatus : (state, action) => {
            state.stepStatus = {...state.stepStatus, ...action.payload}
        }, 
    }, 
    extraReducers : {
        [getForm.fulfilled] : (state, action) => {
            state.formData = action.payload.formData
            state.stepStatus = action.payload.stepStatus
        }
    }
})

export const { setFormData, setStepStatus } = dataSlice.actions
export default dataSlice.reducer