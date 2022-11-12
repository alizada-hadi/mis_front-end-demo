import { 
	Input,
	InputGroup,
	Button,
	DatePicker,
	Select,
	FormItem,
	FormContainer, 
	Upload
} from 'components/ui'
import { Field, Form, Formik } from 'formik'
import NumberFormat from 'react-number-format'
import { countryList } from 'constants/countries.constant'
import { statusOptions, provinces, semesters } from '../constants'
import { components } from 'react-select'
import * as Yup from 'yup'

const { SingleValue  } = components

const genderOptions = [
	{ label: 'مرد', value: 'M' },
	{ label: 'زن', value: 'F' },
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

const PhoneSelectOption = ({innerProps, data, isSelected}) => {
	return (
		<div 
			className={`cursor-pointer flex items-center justify-between p-2 ${isSelected ? 'bg-gray-100 dark:bg-gray-500' : 'hover:bg-gray-50 dark:hover:bg-gray-600'}`} 
			{...innerProps}
		>
			<div className="flex items-center gap-2">
				<span>({data.value}) {data.dialCode}</span>
			</div>
		</div>
	)
}

const PhoneControl = ({ children, ...props }) => {	
	const selected = props.getValue()[0]
	return (
		<SingleValue {...props}>
			{selected && <span>{selected.dialCode}</span>}
		</SingleValue >
	)
}


/*
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

*/

const validationSchema = Yup.object().shape({
	kankor_id: Yup.string().required('آی دی کانکور محصیل الزامی میباشد. '),
	firstName: Yup.string().required('لطفا نام محصیل را وارد کنید. '),
	lastName: Yup.string().required('لطفا تخلص محصیل را وارد کنید. '),
	fatherName: Yup.string().required('لطفا نام پدر محصیل را وارد کنید. '),
	grandFatherName: Yup.string().required('لطفا نام پدر کلان محصیل را وارد کنید. '),
	school: Yup.string().required('لطفا مکتب دوره لیسه محصیل را وارد کنید. '),
	score: Yup.string().required('لطفا نمره کانکور محصیل را وارد کنید. '),
	province: Yup.string().required('لطفا ولایت اصلی محصیل را انتخاب کنید. '),
	// dob: Yup.string(),
	gender: Yup.string().required('لطفا جنسیت محصیل را انتخاب کنید. '),
	maritalStatus: Yup.string(),
	semester : Yup.string().required("لطفا سمستر مربوطه محصیل را انتخاب کنید. "), 
	image : Yup.string()
})

const personalInformation = ({data = {
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
}, onNextChange, currentStepStatus}) => {
	const onNext = (values, setSubmitting) => {
		onNextChange?.(values, 'personalInformation', setSubmitting)
	} 

	return (
		<>
			<div className="mb-8">
				<h3 className="mb-2 font-vazir">معلومات شخصی</h3>
				<p className='font-vazir'>معلومات شخصی محصیل را اینجا وارد کنید. </p>
			</div>
			<Formik
				initialValues={data}
				enableReinitialize={true}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(true)
					setTimeout(() => {
						onNext(values, setSubmitting)
					}, 1000)
				}}
			>
				{({ values, touched, errors, isSubmitting }) => {
					return (
						<Form>
							<FormContainer>
								<FormItem
								label="آی دی کانکور"
								invalid={errors.kankor_id && touched.kankor_id}
								errorMessage={errors.kankor_id}
								>
									<Field
										type="text"
										autoComplete="off"
										name="kankor_id"
										placeholder="آی دی کانکور"
										component={Input}
									/>
								</FormItem>
								<div className="md:grid grid-cols-2 gap-4">
									<FormItem
										label="نام"
										invalid={errors.firstName && touched.firstName}
										errorMessage={errors.firstName}
									>
										<Field 
											type="text" 
											autoComplete="off" 
											name="firstName" 
											placeholder="نام محصیل" 
											component={Input} 
										/>
									</FormItem>
									<FormItem
										label="تخلص"
										invalid={errors.lastName && touched.lastName}
										errorMessage={errors.lastName}
									>
										<Field 
											type="text" 
											autoComplete="off" 
											name="lastName" 
											placeholder="تخلص" 
											component={Input} 
										/>
									</FormItem>
								</div>

								<div className="md:grid grid-cols-2 gap-4">
									<FormItem
										label="نام پدر"
										invalid={errors.fatherName && touched.fatherName}
										errorMessage={errors.fatherName}
									>
										<Field 
											type="text" 
											autoComplete="off" 
											name="fatherName" 
											placeholder=" نام پدر" 
											component={Input} 
										/>
									</FormItem>
									<FormItem
										label="نام پدر کلان"
										invalid={errors.grandFatherName && touched.grandFatherName}
										errorMessage={errors.grandFatherName}
									>
										<Field 
											type="text" 
											autoComplete="off" 
											name="grandFatherName" 
											placeholder="نام پدر کلان" 
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
										label="مکتب دوره لیسه"
										invalid={errors.school && touched.school}
										errorMessage={errors.school}
									>
										<Field 
											type="text" 
											autoComplete="off" 
											name="school" 
											placeholder="نام مکتب دوره لیسه " 
											component={Input} 
										/>
									</FormItem>
									<FormItem
										label="نمره کانکور"
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
												options={semesters}
												value={semesters.filter(semester => semester.value === values.semester)}
												onChange={semester => form.setFieldValue(field.name, semester.value)}
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
													value={genderOptions.filter(gender => gender.value === values.gender)}
													onChange={gender => form.setFieldValue(field.name, gender.value)}
												/>
											)}
										</Field>
									</FormItem>
								</div>
								
								
								<div className="md:grid grid-cols-2 gap-4">
									<FormItem
										label="حالت مدنی "
										invalid={errors.maritalStatus && touched.maritalStatus}
										errorMessage={errors.maritalStatus}
									>
										<Field name="maritalStatus">
											{({ field, form }) => (
												<Select
													placeholder="حالت مدنی محصیل"
													field={field}
													form={form}
													options={statusOptions}
													value={statusOptions.filter(status => status.value === values.maritalStatus)}
													onChange={status => form.setFieldValue(field.name, status.value)}
												/>
											)}
										</Field>
									</FormItem>
									<FormItem
									label="عکس"
									invalid={errors.image && touched.image}
									errorMessage={errors.image}
									>
										<Field 
											type="file" 
											autoComplete="off" 
											name="image"  
											component={Input} 
										/>
									</FormItem>
								</div>
								
								<div className="flex justify-end gap-2">
									<Button loading={isSubmitting} variant="solid" type="submit" className="font-vazir">
										{currentStepStatus === 'complete' ? 'ذخیره' : 'بعدی'}
									</Button>
								</div>
							</FormContainer>
						</Form>
					)
				}}
			</Formik>
		</>
	)
}

export default personalInformation