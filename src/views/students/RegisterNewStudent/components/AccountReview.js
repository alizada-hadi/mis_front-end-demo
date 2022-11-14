import React from 'react'
import { DoubleSidedImage} from 'components/shared'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Notification, toast } from 'components/ui'
import { createStudent } from '../store/dataSlice'

const AccountReview = ({onBackChange}) => {
	const onShowNotification = (type) => {
		toast.push(
			<Notification title="ثبت شاگرد" type={type} className="font-vazir">
				شاگرد جدید موفقانه ثبت سیستم گردید. 
			</Notification>
		)
	}
	const dispatch = useDispatch()
	const onBack = () => {
		onBackChange?.()
	}
	const formData = useSelector((state) => state.accountDetailForm.data.formData)

	const handleSubmit = () => {
		dispatch(createStudent(formData))
		window.location.reload(false)
	}
	const submitAndNotficicationHandler = () => {
		handleSubmit()
		onShowNotification("success")
	}
	return (
		<div className="text-center h-full flex flex-col justify-center">
			<DoubleSidedImage 
				className="mb-6 mx-auto" 
				src="/img/others/pending-approval.png"
				darkModeSrc="/img/others/pending-approval-dark.png"
				alt=""
			/>
			<h4 className="mb-4 font-vazir">مراحل تکمیل شد</h4>
			<p className='font-vazir'>
				لطفا مراحل را دوباره بررسی کرده و در صورت عدم اشتباهی فورم را ارسال کنید.  
				<br/> 
				<span className='text-green-500'>لطفا صفحه را ریفرش نکنید. </span>
			</p>

			<div className='flex items-center w-xl mx-auto mt-10'>
				<Button type="button" onClick={onBack} className="font-vazir">برگشت</Button>
				<Button type="button" onClick={submitAndNotficicationHandler} variant="solid" className="font-vazir mr-4">ذخیره</Button>
			</div>
			
		</div>
	)
}

export default AccountReview