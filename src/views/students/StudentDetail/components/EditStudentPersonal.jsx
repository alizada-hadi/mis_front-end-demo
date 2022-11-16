import React, { useRef } from 'react'
import { Drawer, Button} from 'components/ui'
import { useDispatch, useSelector } from 'react-redux'
import { closeEditStudentPersonalInfoDialog } from '../store/stateSlice'
import cloneDeep from 'lodash/cloneDeep'
import dayjs from 'dayjs'
import StudentForm from 'views/students/StudentForm'

const DrawerFooter = ({onSaveClick, onCancel}) => {
	return (
		<div className="text-right w-full">
			<Button size="md" className="ml-2 font-vazir" onClick={onCancel}>انصراف</Button>
			<Button size="md" variant="solid" className="font-vazir" onClick={onSaveClick}>ذخیره</Button>
		</div>
	)
}

const EditStudentPersonal = () => {
    const dispatch = useDispatch()
    const formikRef = useRef()
    const dialogOpen = useSelector((state) => state.getStudentDetail.state.editStudentPersonalInfoDialog)
    const student = useSelector(state => state.getStudentDetail.data.student)

    const onDrawerClose = () => {
        dispatch(closeEditStudentPersonalInfoDialog())
    }
    const formSubmit = () => {
		formikRef.current?.submitForm()
	}

    const onFormSubmit = values => {
		const clonedData = cloneDeep(student)
		const { 
			kankor_id, 
            first_name, 
            last_name, 
            father_name, 
            grand_father_name,
            school, 
            score, 
            province,  
            gender, 
            maritalStatus, 
		} = values

		// const basicInfo = {name, email, img }
		const personalInfo = {
			kankor_id, 
            first_name, 
            last_name, 
            father_name, 
            grand_father_name,
            school, 
            score, 
            province,  
            gender, 
            maritalStatus, 
		}
		clonedData.personalInfo = {...clonedData.personalInfo, ...personalInfo}
		const newData = {...clonedData}
		// dispatch(updateProfileData(newData))
		// dispatch(putCustomer(newData))
		onDrawerClose()
	}

    return (
		<Drawer
			isOpen={dialogOpen}
			onClose={onDrawerClose}
			onRequestClose={onDrawerClose}
            width={800}
			closable={false}
			bodyClass="p-0"
			footer={<DrawerFooter onCancel={onDrawerClose}  />}
		>
			<StudentForm ref={formikRef} onFormSubmit={onFormSubmit} student={student} />
		</Drawer>
	)
}

export default EditStudentPersonal