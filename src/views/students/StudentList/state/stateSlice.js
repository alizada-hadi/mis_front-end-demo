import { createSlice } from "@reduxjs/toolkit";


const stateSlice = createSlice({
    name : "studentList/state", 
    initialState : {
        drawerOpen : false, 
        selectedStudent : {}, 
        sortedColumn : () => {}
    },
    reducers : {
        setSelectedStudent : (state, action) => {
            state.selectedStudent = action.payload
        }, 
        setSortedColumn : (state, action) => {
            state.sortedColumn = action.payload
        }, 
        setDrawerOpen : state => {
            state.drawerOpen = true
        }, 
        setDrawerClose : state => {
            state.drawerOpen = false
        }
    }
})


export const {setDrawerClose, setDrawerOpen, setSortedColumn, setSelectedStudent} = stateSlice.actions
export default stateSlice.reducer