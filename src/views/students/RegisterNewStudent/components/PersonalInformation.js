import { 
	Input,
	Button,
	Select,
	FormItem,
	FormContainer, 
	Upload
} from 'components/ui'
import { Field, Form, Formik } from 'formik'
import { statusOptions, provinces, semesters, availableDepartments, studentStatus, genderOptions } from '../constants'
import { components } from 'react-select'
import * as Yup from 'yup'
import { DoubleSidedImage } from 'components/shared'



const StudentAvatarUploadField = (props) => {
	const { label, name, children, touched, errors } = props
	const onSetFormFile = (form, field, file) => {
		form.setFieldValue(field?.name, URL.createObjectURL(file[0]))
	}

	return (
		<FormItem
			label={label}
		>
			<Field name={name}>
				{({ field, form }) => (
					<Upload
						draggable
						className="cursor-pointer h-[300px]"
						onChange={files => onSetFormFile(form, field, files)}
						onFileRemove={files => onSetFormFile(form, field, files)}
						showList={false}
						uploadLimit={1}
					>
						{
							field.value ?
							<img className="p-3 max-h-[300px]" src={field.value} alt="" />
							:
							<div className="text-center">
								{children}
								<p className="font-semibold">
									<span className="text-gray-800 dark:text-white font-vazir">فایل خود را کشیده و اینجا رها کنید. یا </span>
									<span className="text-blue-500 font-vazir"> در فولدر خود جستجو کنید. </span>
								</p>
								<p className="mt-1 opacity-60 dark:text-white font-vazir">فایل درست: jpeg, png</p>
							</div>
						}
					</Upload>
				)}
			</Field>
		</FormItem>
	)
}


const validationSchema = Yup.object().shape({
	kankor_id: Yup.string().required('آی دی کانکور محصیل الزامی میباشد. '),
	firstName: Yup.string().required('لطفا نام محصیل را وارد کنید. '),
	lastName: Yup.string().required('لطفا تخلص محصیل را وارد کنید. '),
	fatherName: Yup.string().required('لطفا نام پدر محصیل را وارد کنید. '),
	grandFatherName: Yup.string().required('لطفا نام پدر کلان محصیل را وارد کنید. '),
	school: Yup.string().required('لطفا مکتب دوره لیسه محصیل را وارد کنید. '),
	score: Yup.string().required('لطفا نمره کانکور محصیل را وارد کنید. '),
	province: Yup.string().required('لطفا ولایت اصلی محصیل را انتخاب کنید. '),
	department: Yup.string().required('لطفا دیپارتمنت مربوطه را انتخاب کنید. '),
	// dob: Yup.string(),
	gender: Yup.string().required('لطفا جنسیت محصیل را انتخاب کنید. '),
	status: Yup.string().required("لطفا وضعیت کنونی محصیل را انتخاب کنید. "),
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
	status : "",
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
										className="font-vazir"
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
											className="font-vazir"
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
									label="وضعیت"
									invalid={errors.status && touched.status}
									errorMessage={errors.status}
								>
									<Field name="status">
										{({ field, form }) => (
											<Select
												placeholder="وضعیت"
												field={field}
												form={form}
												options={studentStatus}
												value={studentStatus.filter(status => status.value === values.status)}
												onChange={status => form.setFieldValue(field.name, status.value)}
											/>
										)}
									</Field>
								</FormItem>

								<div className="md:grid grid-cols-2 gap-4">
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

								<FormItem
									label="دیپارتمنت"
									invalid={errors.department && touched.department}
									errorMessage={errors.department}
								>
									<Field name="department">
										{({ field, form }) => (
											<Select
												placeholder="دیپارتمنت"
												field={field}
												form={form}
												options={availableDepartments}
												value={availableDepartments.filter(department => department.value === values.department)}
												onChange={department => form.setFieldValue(field.name, department.value)}
											/>
										)}
									</Field>
								</FormItem>

								</div>
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
													className="font-vazir"
													form={form}
													options={statusOptions}
													value={statusOptions.filter(status => status.value === values.maritalStatus)}
													onChange={status => form.setFieldValue(field.name, status.value)}
												/>
											)}
										</Field>
									</FormItem>

									<StudentAvatarUploadField
									name="image"
									label="عکس محصیل"
									{...validationSchema}
									>
										<DoubleSidedImage 
											className="mx-auto mb-3" 
											src="/img/thumbs/passport.png"
											darkModeSrc="/img/thumbs/passport-dark.png"
											alt=""
										/>
									</StudentAvatarUploadField>
									
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