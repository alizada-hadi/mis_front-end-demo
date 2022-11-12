import {
	Button,
	Upload,
	Badge,
	Segment,
	FormItem,
	FormContainer 
} from 'components/ui'
import { SvgIcon, DoubleSidedImage, SegmentItemOption } from 'components/shared'
import { DriversLicenseSvg, PassportSvg, NationalIdSvg } from 'assets/svg'
import classNames from 'classnames'
import { Field, Form, Formik } from 'formik'
import useThemeClass from 'utils/hooks/useThemeClass'

import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
	documentType: Yup.string().required('لطفا نوعیت کارت هویت خود را مشخص کنید. '),
	passportCover: Yup.string().when('documentType', {
		is: 'passport',
		then: Yup.string().required('لطفا عکس صفحه اول پاسپورت خود را آپلود کنید. '),
		otherwise: schema => schema,
	}),
	passportDataPage: Yup.string().when('documentType', {
		is: 'passport',
		then: Yup.string().required('لطفا عکس صفحه دوم پاسپورت خود را آپلود کنید. '),
		otherwise: schema => schema,
	}),
	nationalIdFront: Yup.string().when('documentType', {
		is: 'nationalId',
		then: Yup.string().required('لطفا فایل اسکن شده از تذکره خود را آپلود کنید. '),
		otherwise: schema => schema,
	}),
	nationalIdBack: Yup.string().when('documentType', {
		is: 'nationalId',
		then: Yup.string().required('لطفا صفحه بعدی فایل اسکن شده از تذکره خود را آپلود کنید. '),
		otherwise: schema => schema,
	}),
})

const documentTypes = [
	{ value: 'passport', label: 'پاسپورت', desc: ''},
	{ value: 'nationalId', label: 'تذکره', desc: ''}
]

const documentUploadDescription = {
	passport: [
		'عکس پاسپورت آپلود شده باید شفاف وقابل دید باشد. ',
		'تاریخ پاسپورت محصیل باید سپری نشده باشد. ',
		'معلومات محصیل از قبیل نام، نام پدر، و تاریخ تولد درست باشد. '
	],
	nationalId: [
		'عکس تذکره آپلود شده باید شفاف وقابل دید باشد. ',
		'معلومات محصیل از قبیل نام، نام پدر، و تاریخ تولد درست باشد. '
	]
}

const DocumentTypeIcon = ({type}) => {
	switch (type) {
		case 'passport':
			return <PassportSvg />
		case 'nationalId':
			return <NationalIdSvg />
		default:
			return null
	}
}

const DocumentUploadField = (props) => {

	const { label, name, children, touched, errors } = props

	const onSetFormFile = (form, field, file) => {
		form.setFieldValue(field.name, URL.createObjectURL(file[0]))
	}

	return (
		<FormItem
			label={label}
			invalid={errors[name] && touched[name]}
			errorMessage={errors[name]}
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

const Identification = ({data = {
	documentType: 'passport',
	passportCover: '',
	passportDataPage: '',
	nationalIdFront: '',
	nationalIdBack: '',
}, onNextChange, onBackChange, currentStepStatus}) => {

	const { textTheme, bgTheme } = useThemeClass()

	const onNext = (values, setSubmitting) => {
		onNextChange?.(values, 'identification', setSubmitting)
	} 

	const onBack = () => {
		onBackChange?.()
	}
	
	return (
		<>
			<div className="mb-8">
				<h3 className="mb-2 font-vazir">معلومات هویتی</h3>
				<p>لطفا فایل اسکن شده از کارت های هویتی محصیل را اینجا آپلود کنید. </p>
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
					const validatedProps = { touched, errors }
					return (
						<Form>
							<FormContainer>
								<FormItem
									label="لطفا نوعیت کارت هویت را مشخص کنید. "
									invalid={errors.documentType && touched.documentType}
									errorMessage={errors.documentType}
								>
									<Field name="documentType">
										{({ field, form }) => (
											<Segment
												className="flex xl:items-center flex-col xl:flex-row gap-4"
												value={[field.value]} 
												onChange={val => form.setFieldValue(field.name, val[0])}
											>
												<>
													{documentTypes.map((item, index) => (
														<Segment.Item value={item.value} key={item.value} disabled={item.disabled}>
															{
																({ref, active, value, onSegmentItemClick, disabled}) => {
																	return (
																		<SegmentItemOption
																			ref={ref}
																			active={active}
																			disabled={disabled}
																			className="w-full xl:w-[260px]"
																			onSegmentItemClick={onSegmentItemClick}
																		>
																			<div className="flex items-center">
																				<SvgIcon 
																					className={classNames(
																						'text-4xl ltr:mr-3 rtl:ml-3',
																						active && textTheme
																					)}
																				>
																					<DocumentTypeIcon type={value} />
																				</SvgIcon>
																				<h6 className='font-vazir'>{item.label}</h6>
																			</div>
																		</SegmentItemOption>
																	)
																}
															}
														</Segment.Item>
													))}
												</>
											</Segment>
										)}
									</Field>
								</FormItem>
								<div className="mb-6">
									<h6 className='font-vazir'>برای جلوگیری از تاخیر و همچنان خطا در سیستم لطفا موارد زیر را هنگام آپلود فایل در نظر بگیرید. </h6>
									<ul className="mt-4">
										{documentUploadDescription[values.documentType].map((desc, index) => 
											<li className="mb-2 flex items-center" key={desc + index}>
												<Badge className="rtl:ml-3 ltr:mr-3" innerClass={bgTheme} />
												<span className="font-vazir">{desc}</span>
											</li>
										)}
									</ul>
								</div>
								<div className="grid xl:grid-cols-2 gap-4">
									{values.documentType === 'passport' && (
										<>
											<DocumentUploadField
												name="passportCover"
												label="صفحه اول"
												{...validatedProps}
											>
												<DoubleSidedImage 
													className="mx-auto mb-3" 
													src="/img/thumbs/passport.png"
													darkModeSrc="/img/thumbs/passport-dark.png"
													alt=""
												/>
											</DocumentUploadField>
											<DocumentUploadField
												name="passportDataPage"
												label="صفحه دوم"
												{...validatedProps}
											>
												<DoubleSidedImage 
													className="mx-auto mb-3" 
													src="/img/thumbs/passport-data.png"
													darkModeSrc="/img/thumbs/passport-data-dark.png"
													alt=""
												/>
											</DocumentUploadField>
										</>
									)}
									{values.documentType === 'nationalId' && (
										<>
											<DocumentUploadField
												name="nationalIdFront"
												label="روی تذکره"
												{...validatedProps}
											>
												<DoubleSidedImage 
													className="mx-auto mb-3" 
													src="/img/thumbs/id-card-front.png"
													darkModeSrc="/img/thumbs/id-card-front-dark.png"
													alt=""
												/>
											</DocumentUploadField>
											<DocumentUploadField
												name="nationalIdBack"
												label="پشت تذکره"
												{...validatedProps}
											>
												<DoubleSidedImage 
													className="mx-auto mb-3" 
													src="/img/thumbs/id-card-back.png"
													darkModeSrc="/img/thumbs/id-card-back-dark.png"
													alt=""
												/>
											</DocumentUploadField>
										</>
									)}
									
								</div>
								<div className="flex justify-end gap-2">
									<Button type="button" onClick={onBack} className="font-vazir"> قبلی</Button>
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

export default Identification