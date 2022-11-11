import React from 'react'
import { 
	Input,
	Button,
	DatePicker,
	Select,
	FormItem,
	FormContainer 
} from 'components/ui'
import { Field, Form, Formik } from 'formik'
import NumberFormat from 'react-number-format'
import { components } from 'react-select'
import { statusOptions, provinces } from '../constants'
import * as Yup from 'yup'
const { SingleValue  } = components

const genderOptions = [
	{ label: 'مرد', value: 'M' },
	{ label: 'زن', value: 'F' },
]


const semesterOptions = [
	{ label: 'اول', value: 'F' },
	{ label: 'دوم', value: 'S' },
	{ label: 'سوم', value: 'T' },
	{ label: 'چهارم', value: 'FO' },
	{ label: 'پنجم', value: 'FI' },
	{ label: 'ششم', value: 'SX' },
	{ label: 'هفتم', value: 'SN' },
	{ label: 'هشتم', value: 'E' },
	
]

const NumberInput = props => {
	return <Input {...props} value={props.field.value} />
}

const NumberFormatInput = ({onValueChange, ...rest}) => {
	return (
		<NumberFormat 
			customInput={Input}
			type="text"
			onValueChange={onValueChange}
			autoComplete="off"
			{...rest}
		/>
	)
}

const validationSchema = Yup.object().shape({
	kankor_id: Yup.string().required('لطفا آی دی کانکور محصیل را وارد کنید. '),
	first_name: Yup.string().required('لطفا نام محصل را وارد کنید. '),
	last_name: Yup.string().required('لطفا تخلص شاگرد را وارد کنید. '),
	father_name: Yup.string().required('لطفا نام پدر محصل را وارد کنید. '),
	grand_father_name: Yup.string().required('لطفا نام پدر کلان محصل را وارد کنید. '),
	school: Yup.string().required('لطفا نام مکتب دوره لیسه محصل را وارد کنید. '),
	score: Yup.string().required('لطفا نمره کانکور محصیل را وارد کنید.  '),
	province: Yup.string().required('لطفا ولایت مربوطه محصیل را انتخاب کنید. '),
	semester: Yup.string().required('لطفا سمستر محصیل را انتخاب کنید. '),
	phoneNumber: Yup.string(),
	dob: Yup.string(),
	gender: Yup.string().required('لطفا جنسیت محصیل را مشخص کنید. '),
	maritalStatus: Yup.string().required('لطفا حالت مدنی محصیل را انتخاب کنید. '),
})

const PersonalInformation = ({data = {
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
}, onNextChange, currentStepStatus}) => {
    const onNext = (values, setSubmitting) => {
		onNextChange?.(values, 'personalInformation', setSubmitting)
	} 

  return (
    <>
    <div className="mb-8">
        <h3 className="mb-2 font-vazir">مشخصات شخصی</h3>
        <p className='font-vazir'>مشخصات شخصی محصل</p>
    </div>
    <Formik
        initialValues={data}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit = {(values, {setSubmitting}) => {
            console.log(" hello form submitted ");
            setSubmitting(true)
            setTimeout(() => {
                onNext(values, setSubmitting)
            }, 1000)
        }} 

    >
        {
            ({values, touched, errors, isSubmitting}) => {
                return (
                    <Form>
                        <FormContainer>
                            <div className='md:grid grid-cols-2 gap-4'>
                                <FormItem
                                label="نام"
                                invalid={errors.first_name && touched.first_name}
                                errorMessage={errors.first_name}
                                >
                                    <Field 
                                    type="text"
                                    autoComplete="off"
                                    name="first_name"
                                    placeholder="نام"
                                    component={Input}
                                     />
                                </FormItem>
                                <FormItem
                                label="تخلص"
                                invalid={errors.last_name && touched.last_name}
                                errorMessage={errors.last_name}
                                >
                                    <Field 
                                    type="text"
                                    autoComplete="off"
                                    name="last_name"
                                    placeholder="تخلص"
                                    component={Input}
                                     />
                                </FormItem>
                            </div>
                            <div className='md:grid grid-cols-2 gap-4'>
                                <FormItem
                                label="نام پدر"
                                invalid={errors.father_name && touched.father_name}
                                errorMessage={errors.father_name}
                                >
                                    <Field 
                                    type="text"
                                    autoComplete="off"
                                    name="father_name"
                                    placeholder="نام پدر"
                                    component={Input}
                                     />
                                </FormItem>
                                <FormItem
                                label="نام پدر کلان"
                                invalid={errors.grand_father_name && touched.grand_father_name}
                                errorMessage={errors.grand_father_name}
                                >
                                    <Field 
                                    type="text"
                                    autoComplete="off"
                                    name="grand_father_name"
                                    placeholder="نام پدر کلان"
                                    component={Input}
                                     />
                                </FormItem>
                            </div>
                            <div className="md:grid grid-cols-2 gap-4">
                            <FormItem
                                label="مکتب"
                                invalid={errors.school && touched.school}
                                errorMessage={errors.school}
                                >
                                    <Field 
                                    type="text"
                                    autoComplete="off"
                                    name="school"
                                    placeholder="مکتب دوره لیسه"
                                    component={Input}
                                     />
                                </FormItem>
                                <FormItem
                                label="تمره کانکور"
                                invalid={errors.score && touched.score}
                                errorMessage={errors.score}
                                >
                                    <Field 
                                    type="text"
                                    autoComplete="off"
                                    name="score"
                                    placeholder="نمره کانکور"
                                    component={Input}
                                     />
                                </FormItem>
                            </div>

                            <FormItem
                                label="ولایت"
                                invalid={errors.province && touched.province}
                                errorMessage={errors.province}
                            >
                                <Field name="province">
										{({ field, form }) => (
											<Select
												placeholder="ولایت"
												field={field}
												form={form}
												options={provinces}
												value={provinces.filter(province => province.value === values.province)}
												onChange={province => form.setFieldValue(field.name, province.value)}
											/>
										)}
                                </Field>
                            </FormItem>

                            <div className="md:grid grid-cols-2 gap-4">
                            <FormItem
                                label="سمستر"
                                invalid={errors.semester && touched.semester}
                                errorMessage={errors.semester}
                                >
                                   <Field name="semester">
										{({ field, form }) => (
											<Select
												placeholder="سمستر"
												field={field}
												form={form}
												options={semesterOptions}
												value={semesterOptions.filter(semester => semester.value === values.semester)}
												onChange={semester => form.setFieldValue(field.name, semester.value)}
											/>
										)}
                                </Field> 
                                </FormItem>
                                <FormItem
                                label="حالت مدنی"
                                invalid={errors.maritalStatus && touched.maritalStatus}
                                errorMessage={errors.maritalStatus}
                                >
                                    <Field name="maritalStatus">
                                        {({ field, form }) => (
                                            <Select
                                                placeholder="حالت مدنی"
                                                field={field}
                                                form={form}
                                                options={statusOptions}
                                                value={statusOptions.filter(status => status.value === values.maritalStatus)}
                                                onChange={status => form.setFieldValue(field.name, status.value)}
                                            />
                                        )}
                                    </Field>
                                </FormItem>
                            </div>

                            <div className="md:grid grid-cols-2 gap-4">
                            <FormItem
                                label="تاریخ تولد"
                                invalid={errors.dob && touched.dob}
                                errorMessage={errors.dob}
                                >
                                   <Field name="dob" placeholder="Date">
                                        {({ field, form }) => (
                                            <DatePicker 
                                                field={field}
                                                form={form}
                                                value={field.value}
                                                onChange={(date) => {
                                                    form.setFieldValue(field.name, date)
                                                }}
                                            /> 
                                        )}
                                    </Field>
                                </FormItem>
                                <FormItem
                                label="جنسیت"
                                invalid={errors.gender && touched.gender}
                                errorMessage={errors.gender}
                                >
                                    <Field name="gender">
                                        {({ field, form }) => (
                                            <Select
                                                placeholder="جنسیت"
                                                field={field}
                                                form={form}
                                                options={genderOptions}
                                                value={genderOptions.filter(status => status.value === values.gender)}
                                                onChange={status => form.setFieldValue(field.name, status.value)}
                                            />
                                        )}
                                    </Field>
                                </FormItem>
                            </div>

                            <FormItem
                            label="شماره تماس"
                            invalid={errors.phoneNumber && touched.phoneNumber}
                            errorMessage={errors.phoneNumber}
                            >
                            <Field name="phoneNumber">
                                {({ field, form }) => {
                                    return (
                                        <NumberFormatInput
                                            form={form}
                                            field={field}
                                            customInput={NumberInput}
                                            placeholder="شماره تماس"
                                            onValueChange={e => {
                                                form.setFieldValue(field.name, e.value)
                                            }}
                                        />
                                    ) 
                                }}
                            </Field>
                            </FormItem>
                            <div className="flex justify-end gap-2">
                                <Button loading={isSubmitting} variant="solid" type="submit" className="font-vazir">
                                    {currentStepStatus === 'complete' ? 'ذخیره کردن' : 'بعدی'}
                                </Button>
                            </div>
                        </FormContainer>
                    </Form>
                )
            }
        }
    </Formik>
    </>
  )
}

export default PersonalInformation
