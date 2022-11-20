import React from 'react'
import { Field } from 'formik'
import {
	Input,
	FormItem,
	Avatar,
	Upload, 
	Select
} from 'components/ui'
import {studentStatus, provinces, availableDepartments, semesters, genderOptions, statusOptions } from '../RegisterNewStudent/constants'
import { HiOutlineUser } from 'react-icons/hi'

const PersonalInfoForm = (props) => {
	const { touched, errors, values } = props
	const onSetFormFile = (form, field, file) => {
		form.setFieldValue(field.name, file[0])
	}
  return (
    <>
	<FormItem
		invalid={errors.image && touched.image}
		errorMessage={errors.image}
	>
		<Field name="image">
			{({ field, form }) => {
				const avatarProps = field.value ? { src: field.value } : {}
				return (
					<div className="flex justify-center">
						<Upload
							className="cursor-pointer"
							onChange={files => onSetFormFile(form, field, files)}
							onFileRemove={files => onSetFormFile(form, field, files)}
							showList={false}
							uploadLimit={1}
						>
							<Avatar 
								className="border-2 border-white dark:border-gray-800 shadow-lg"
								size={100} 
								shape="circle"
								icon={<HiOutlineUser />}
								{...avatarProps}  
							/>
						</Upload>
					</div>
				)
			}}
		</Field>
	</FormItem>
		<FormItem
		label="آی دی کانکور"
		invalid={errors.name && touched.name}
		errorMessage={errors.name}
		>
			<Field 
				type="text"
				autoComplete="off"
				name="kankor_id"
				placeholder="آی دی کانکور"
				component={Input}
			></Field>
		</FormItem>
		<div className="md:grid grid-cols-2 gap-4">
			<FormItem
				label="نام"
				invalid={errors.name && touched.name}
				errorMessage={errors.name}
			>
				<Field 
					type="text" 
					autoComplete="off" 
					name="first_name" 
					placeholder="نام محصیل" 
					component={Input}
				/>
			</FormItem>
			<FormItem
				label="تخلص"
				invalid={errors.name && touched.name}
				errorMessage={errors.name}
			>
				<Field 
					type="text" 
					autoComplete="off" 
					name="last_name" 
					placeholder="تخلص محصیل" 
					component={Input}
				/>
			</FormItem>
		</div>

		<div className="md:grid grid-cols-2 gap-4">
			<FormItem
				label="نام پدر"
				invalid={errors.name && touched.name}
				errorMessage={errors.name}
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
				invalid={errors.name && touched.name}
				errorMessage={errors.name}
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
		</div>

		<div className="md:grid grid-cols-2 gap-4">
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
		</div>
		<div className="md:grid grid-cols-2 gap-4">
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
		</div>

		<div className="md:grid grid-cols-2 gap-4">
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
		</div>
		
	</>
  )
}

export default PersonalInfoForm