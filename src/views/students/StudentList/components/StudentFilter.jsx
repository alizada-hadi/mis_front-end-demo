import React, {useState, useRef, forwardRef } from 'react'
import { HiOutlineFilter, HiOutlineSearch } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { getStudents, setFilterData, initialTableData } from '../state/dataSlice'
import { 
    Input,
    Button,
    Checkbox,
    Radio,
    FormItem,
    FormContainer,
	Drawer
} from 'components/ui'
import { Field, Form, Formik } from 'formik'

const FilterForm = forwardRef(({onSubmitComplete}, ref) => {

	const dispatch = useDispatch()

	const filterData = useSelector((state) => state.studentList.data.filterData)


	const handleSubmit = values => {
		onSubmitComplete?.()
		dispatch(setFilterData(values))
		dispatch(getStudents(initialTableData))
	}

	return (
		<Formik
			innerRef={ref}
			enableReinitialize
			initialValues={filterData}
			onSubmit={(values) => {
				handleSubmit(values)
			}}
		>
			{({values, touched, errors }) => (
				<Form>
					<FormContainer>
						<FormItem
							invalid={errors.semester && touched.semester}
							errorMessage={errors.semester}
						>
							<h6 className="mb-4 font-vazir">فلتر بر اساس سمستر</h6>
							<Field name="semester">
								{({ field, form }) => (
									<>
										<Checkbox.Group
											vertical
											onChange={options => form.setFieldValue(field.name, options) } 
											value={values.semester}
										>
											<Checkbox className="mb-3 font-vazir" name={field.name} value="اول">سمستر اول </Checkbox>
											<Checkbox className="mb-3 font-vazir" name={field.name} value="دوم">سمستر دوم </Checkbox>
											<Checkbox className="mb-3 font-vazir" name={field.name} value="سوم">سمستر سوم </Checkbox>
											<Checkbox className="mb-3 font-vazir" name={field.name} value="چهارم">سمستر چهارم </Checkbox>
											<Checkbox className="mb-3 font-vazir" name={field.name} value="پنجم">سمستر پنجم </Checkbox>
											<Checkbox className="mb-3 font-vazir" name={field.name} value="ششم">سمستر ششم </Checkbox>
											<Checkbox className="mb-3 font-vazir" name={field.name} value="هفتم">سمستر هفتم </Checkbox>
											<Checkbox className="font-vazir" name={field.name} value="هشتم">سمستر هشتم </Checkbox>
										</Checkbox.Group>
									</>
								)}
							</Field>
						</FormItem>
						<FormItem
							invalid={errors.status && touched.status}
							errorMessage={errors.status}
						>
							<h6 className="mb-4 font-vazir">فلتر بر اساس وضعیت</h6>
							<Field name="status">
								{({ field, form }) => (
									<>
										<Checkbox.Group
											vertical
											onChange={options => form.setFieldValue(field.name, options) } 
											value={values.status}
										>
											<Checkbox className="mb-3 font-vazir" name={field.name} value="فعال">فعال</Checkbox>
											<Checkbox className="mb-3 font-vazir" name={field.name} value="تعجیل">تعجیل</Checkbox>
											<Checkbox className="mb-3 font-vazir" name={field.name} value="چانس">چانس</Checkbox>
											<Checkbox className="mb-3 font-vazir" name={field.name} value="محروم">محروم</Checkbox>
											<Checkbox className="mb-3 font-vazir" name={field.name} value="ناکام">ناکام</Checkbox>
										</Checkbox.Group>
									</>
								)}
							</Field>
						</FormItem>
						<FormItem
							invalid={errors.gender && touched.gender}
							errorMessage={errors.gender}
						>
							<h6 className="mb-4 font-vazir">فلتر بر اساس جنسیت</h6>
							<Field name="gender">
								{({ field, form }) => (
									<>
                                    <Checkbox.Group
											vertical
											onChange={options => form.setFieldValue(field.name, options) } 
											value={values.gender}
										>
											<Checkbox className="mb-3 font-vazir" name={field.name} value="مرد">مرد</Checkbox>
											<Checkbox className="mb-3 font-vazir" name={field.name} value="زن"> زن</Checkbox>
										</Checkbox.Group>
                                    </>
								)}
							</Field>
						</FormItem>
					</FormContainer>
				</Form>
			)}
		</Formik>
	)
})


const DrawerFooter = ({onSaveClick, onCancel}) => {
	return (
		<div className="text-right w-full">
			<Button size="sm" className="ml-2 font-vazir" onClick={onCancel}>بستن</Button>
			<Button size="sm" variant="solid" className="font-vazir" onClick={onSaveClick}> فیلتر کردن</Button>
		</div>
	)
}


const StudentFilter = () => {
    const formikRef = useRef()
    const [isOpen, setIsOpen] = useState()
    const openDrawer = () => {
		setIsOpen(true)
	}

	const onDrawerClose = () => {
		setIsOpen(false)
	}
    const formSubmit = () => {
		formikRef.current?.submitForm()
	}
  return (
    <>
    <Button 
        size="sm" 
        className="block md:inline-block ltr:md:ml-2 rtl:md:mr-2 md:mb-4 mb-4 font-vazir"
        icon={<HiOutlineFilter />}
        onClick={() => openDrawer()}
    >
        فیلتر
    </Button>
    <Drawer
        title="Filter"
        isOpen={isOpen}
        onClose={onDrawerClose}
        onRequestClose={onDrawerClose}
        footer={<DrawerFooter onCancel={onDrawerClose} onSaveClick={formSubmit} />}
    >
        <FilterForm ref={formikRef} onSubmitComplete={onDrawerClose}/>
    </Drawer>
    </>
  )
}

export default StudentFilter
