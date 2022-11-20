import React, { forwardRef } from 'react'
import { Form, Formik } from 'formik'
import { Tabs, FormContainer, } from 'components/ui'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import * as Yup from 'yup'
import PersonalInfoForm from './PersonalInfoForm'
import FamilyInfoForm from './FamilyInfoForm'
dayjs.extend(customParseFormat)

const validationSchema = Yup.object().shape({
	kankor_id: Yup.string().required('آی دی کانکور'),
	first_name: Yup.string().required('لطفا این فیلد را پر کنید. '),
	last_name: Yup.string().required('لطفا این فیلد را پر کنید. '),
	father_name: Yup.string().required('لطفا این فیلد را پر کنید. '),
	grand_father_name: Yup.string().required('لطفا این فیلد را پر کنید. '),
	school: Yup.string().required('لطفا این فیلد را پر کنید. '),
	score: Yup.string().required('لطفا این فیلد را پر کنید. '),
	province: Yup.string().required('لطفا این فیلد را پر کنید. '),
	gender: Yup.string().required('لطفا این فیلد را پر کنید. '),
	maritalStatus: Yup.string().required('لطفا این فیلد را پر کنید. '),
	
})

const { TabNav, TabList, TabContent } = Tabs

const StudentForm = forwardRef((props, ref) => {
    const { student, onFormSubmit } = props
    return (
        <Formik
            innerRef={ref}
            initialValues={{
                id : student.id || "",
                kankor_id : student.kankor_id || "", 
                first_name : student.first_name || "",
                last_name : student.last_name || "",
                father_name : student.father_name || "",
                grand_father_name : student.grand_father_name || "",
                school : student.school || "",
                score : student.score || "",
                province : student.proince || "",
                gender : student.gender || "",
                maritalStatus : student.maritalStatus || "",
                status : student.status || "",
                department : student?.department?.code || "",
                semester : student.semester || "", 
                image : student.image || "", 

                // family information
                relation : student?.relative?.relation || "",
                relative_name : student.relative.relative_name || "",
                addressLine : student?.relative?.addressLine || "",
                occupation : student?.relative?.occupation || "",
                phone1 : student?.relative?.phone1 || "",
                phone2 : student?.relative?.phone2 || ""
            }}
            validationSchema={validationSchema}
            onSubmit ={(values, {setSubmitting}) => {
                onFormSubmit?.(values)
                setSubmitting(false)
            }}
        >
            {({touched, errors, resetForm, values}) => (
                <Form>
                    <FormContainer>
                        <Tabs defaultValue="personalInfo">
                            <TabList>
                                <TabNav className="font-vazir" value="personalInfo">معلومات شخصی</TabNav>
                                <TabNav className="font-vazir" value="familyInformation">معلومات فامیلی</TabNav>
                            </TabList>
                            <div className="p-6">
								<TabContent value="personalInfo">
									<PersonalInfoForm touched={touched} errors={errors} values={values} />
								</TabContent>
								<TabContent value="familyInformation">
									<FamilyInfoForm touched={touched} errors={errors} />
								</TabContent>
							</div>
                        </Tabs>
                    </FormContainer>
                </Form>
            )}

        </Formik>
    )
})

export default StudentForm