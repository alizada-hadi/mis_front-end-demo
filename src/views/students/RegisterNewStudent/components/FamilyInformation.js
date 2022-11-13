import React from 'react'
import { 
	Input,
	Button,
	FormItem,
	FormContainer 
} from 'components/ui'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
	relation: Yup.string().required('نوعیت ارتباط با محصیل'),
	relative_name: Yup.string().required('نام ولی یا فامیل محصیل '),
	addressLine: Yup.string().required('لطفا محل سکونت را مشخص کنید. '),
	occupation: Yup.string().required('لطفا شغل ولی محصیل را وارد کنید. '),
	phone1:  Yup.string().required('لطفا شماره تماس فعال ولی محصیل را وارد کنید. '),
	phone2: Yup.string(),
	
})

const FamilyInformation = ({ data = {
	relation: '',
	addressLine: '',
	relative_name: '',
	occupation: '',
	phone1: '',
	phone2: ''
}, onNextChange, onBackChange, currentStepStatus }) => {

	const onNext = (values, setSubmitting) => {
		onNextChange?.(values, 'familyInformation', setSubmitting)
	} 

	const onBack = () => {
		onBackChange?.()
	}

	return (
		<>
			<div className="mb-8">
				<h3 className="mb-2 font-vazir">مشخصات اقارب محصیل</h3>
				<p className='font-vazir'>لطفا معلومات ولی / اقارب محصیل را وارد کنید. </p>
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
				{({ values, touched, errors, setFieldValue, isSubmitting }) => {
					return (
						<Form>
							<FormContainer>
							<div className="md:grid grid-cols-2 gap-4">
								<FormItem
								label="ارتباط با محصیل"
								invalid={errors.relation && touched.relation}
								errorMessage={errors.relation}
								>
								<Field 
									type="text" 
									autoComplete="off" 
									name="relation" 
									placeholder="برادر / پدر" 
									component={Input} 
								/>
								</FormItem>
								<FormItem
								label="نام"
								invalid={errors.relative_name && touched.relative_name}
								errorMessage={errors.relative_name}
								>
								<Field 
									type="text" 
									autoComplete="off" 
									name="relative_name" 
									placeholder="نام اقارب" 
									component={Input} 
								/>
								</FormItem>
							</div>
							<div className="md:grid grid-cols-2 gap-4">
								<FormItem
								label="آدرس محل سکونت"
								invalid={errors.addressLine && touched.addressLine}
								errorMessage={errors.addressLine}
								>
								<Field 
									type="text" 
									autoComplete="off" 
									name="addressLine" 
									placeholder="آدرس" 
									component={Input} 
								/>
								</FormItem>
								<FormItem
								label="وظیفه"
								invalid={errors.occupation && touched.occupation}
								errorMessage={errors.occupation}
								>
								<Field 
									type="text" 
									autoComplete="off" 
									name="occupation" 
									placeholder="وظیفه / اشتغال" 
									component={Input} 
								/>
								</FormItem>
							</div>
							<div className="md:grid grid-cols-2 gap-4">
								<FormItem
								label="شماره تماس اول"
								invalid={errors.phone1 && touched.phone1}
								errorMessage={errors.phone1}
								>
								<Field 
									type="text" 
									autoComplete="off" 
									name="phone1" 
									placeholder="شماره تماس اول" 
									component={Input} 
								/>
								</FormItem>
								<FormItem
								label="شماره تماس دوم"
								invalid={errors.phone2 && touched.phone2}
								errorMessage={errors.phone2}
								>
								<Field 
									type="text" 
									autoComplete="off" 
									name="phone2" 
									placeholder="شماره تماس دوم" 
									component={Input} 
								/>
								</FormItem>
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

export default FamilyInformation