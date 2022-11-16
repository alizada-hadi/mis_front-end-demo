import { createSlice } from "@reduxjs/toolkit";


const stateSlice = createSlice({
    name : "getStudentDetail/state", 
    initialState : {
        editStudentPersonalInfoDialog : false,
        editStudentIdentificationInfoDialog : false,
    }, 
    reducers : {
        openEditStudentPersonalInfoDialog  : state => {
            console.log(state);
            state.editStudentPersonalInfoDialog = true
        }, 
        closeEditStudentPersonalInfoDialog  : state => {
            state.editStudentPersonalInfoDialog = false
        }
    }
})

export const {openEditStudentPersonalInfoDialog, closeEditStudentPersonalInfoDialog} = stateSlice.actions
export default stateSlice.reducer