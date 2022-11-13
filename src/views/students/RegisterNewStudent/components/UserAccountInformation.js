import React from 'react'
import { 
	Input,
	Button,
	Checkbox,
	Select,
	FormItem,
	FormContainer 
} from 'components/ui'
import { Field, Form, Formik, getIn } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
	email : Yup.string().email().required("لطفا ایمیل فعال محصیل را وارد کنید. "), 
	username : Yup.string().required("لطفا نام کاربری محصیل را وارد کنید. "), 
	password : Yup.string().required("لطفا رمز ورود محصیل را وارد کنید. "),
	password1 : Yup.string().oneOf([Yup.ref('password'), null], 'رمز ورود باید با هم مطابقت کند. ').required("")

})

const UserAccountInformation = ({data = {
	email: '',
	username: '',
	password: "",
	password1: ''
}, onNextChange, onBackChange, currentStepStatus }) => {

	const onNext = (values, setSubmitting) => {
		onNextChange?.(values, 'userAccountInformation', setSubmitting)
	}

	const onBack = () => {
		onBackChange?.()
	}

	return (
		<>
			<div className="mb-8">
				<h3 className="mb-2 font-vazir">مشخصات حساب کاربری محصیل</h3>
				<p className='font-vazir'>لطفا مشخصات کاربری محصیل را وارد کنید. </p>
			</div>
			<Formik
				initialValues={data}
				enableReinitialize
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
								<div>
									<div className="md:grid grid-cols-2 gap-4">
										<FormItem
											label="آدرس ایمیل"
											invalid={errors.email && touched.email}
											errorMessage={errors.email}
										>
											<Field 
													type="email" 
													autoComplete="off" 
													name="email" 
													placeholder="email@gmail.com" 
													component={Input} 
												/>
										</FormItem>

										<FormItem
											label="نام کاربری"
											invalid={errors.username && touched.username}
											errorMessage={errors.username}
										>
											<Field 
													type="text" 
													autoComplete="off" 
													name="username" 
													placeholder="نام کاربری محصیل" 
													component={Input} 
												/>
										</FormItem>
										
									</div>

									<div className="md:grid grid-cols-2 gap-4">
										<FormItem
											label="رمز ورود"
											invalid={errors.password && touched.password}
											errorMessage={errors.password}
										>
											<Field 
													type="password" 
													autoComplete="off" 
													name="password" 
													placeholder="رمز ورود" 
													component={Input} 
												/>
										</FormItem>

										<FormItem
											label="تکرار رمز ورود"
											invalid={errors.password1 && touched.password1}
											errorMessage={errors.password1}
										>
											<Field 
													type="password" 
													autoComplete="off" 
													name="password1" 
													placeholder="تکرار رمز ورود " 
													component={Input} 
												/>
										</FormItem>
										
									</div>
								</div>
								<div className="flex justify-end gap-2">
									<Button type="button" onClick={onBack} className="font-vazir">قبلی</Button>
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

export default UserAccountInformation