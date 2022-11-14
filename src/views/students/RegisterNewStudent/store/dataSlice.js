import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetAccountFormData, createNewStudent } from 'services/StudentService'

export const getForm = createAsyncThunk('accountDetailForm/data/getForm', async () => {
    const response = await apiGetAccountFormData()
    return response.data
})

export const createStudent  = createAsyncThunk("accountDetailForm/data/createStudent", async (data) => {
    console.log("submitted data", data);
    const response = await createNewStudent(data)
    return response.data
})

const dataSlice = createSlice({
    name: 'accountDetailForm/data',
    initialState: {
        formData: {
            personalInformation: {
                kankor_id : "",
                firstName: '',
                lastName: '',
                fatherName: '',
                grandFatherName: '',
                school: '',
                score: '',
                department: '',
                province: '',
                gender: '',
                maritalStatus: '',
                semester: '',
                image: '',
            },
            identification: {
                documentType: 'passport',
                passportCover: '',
                passportDataPage: '',
                nationalIdFront: '',
                nationalIdBack: '',
            },
            familyInformation: {
                relation: '',
                addressLine: '',
                relative_name: '',
                occupation: '',
                phone1: '',
                phone2: "",
            },
            userAccountInformation: {
                email: '',
                username: '',
                password: "",
                password1: ''
            },
        },
        stepStatus: {
            0: { status: 'pending' },
            1: { status: 'pending' },
            2: { status: 'pending' },
            3: { status: 'pending' },
            4: { status: 'pending' }
        }
    },
    reducers: {
        setFormData: (state, action) => {
            state.formData = { ...state.formData, ...action.payload }
        },
        setStepStatus: (state, action) => {
            state.stepStatus = { ...state.stepStatus, ...action.payload }
        },
    },
    extraReducers: {
        [getForm.fulfilled]: (state, action) => {
            state.formData = action.payload.formData
            state.stepStatus = action.payload.stepStatus
        },
        [createStudent.fulfilled] : (state, action) => {
            state.student = action.payload
        }
    }
})

export const { setFormData, setStepStatus } = dataSlice.actions

export default dataSlice.reducer
