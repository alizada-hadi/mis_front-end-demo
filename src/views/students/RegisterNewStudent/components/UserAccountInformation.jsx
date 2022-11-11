import React from 'react'
import { 
	Input,
	Button,
	Checkbox,
	Select,
	FormItem,
	FormContainer 
} from 'components/ui'
import { Field, Form, Formik } from 'formik'
import { components } from 'react-select'
import * as Yup from 'yup'
const { SingleValue  } = components

const validationSchema = Yup.object().shape({
    email : Yup.string().required("لطفا ایمیل محصیل را وارد کنید. "), 
    username : Yup.string().required("لطفا نام کاربری محصیل را وارد کنید. "), 
    password: Yup.string().required('لطفا رمز ورود را وارد کنید. '),
	password1: Yup.string().oneOf([Yup.ref('password'), null], 'رمز ورود شما با همدیگر مطابقت نمیکند. ')
})



const UserAccountInformation = ({data = {
    email : "", 
    username : "", 
    password : "", 
    password1 : ""
}, onNextChange, onBackChange, currentStepStatus}) => {
    const onNext = (values, setSubmitting) => {
        onNextChange?.(values, 'userAccountInformation', setSubmitting)
    }
    const onBack = () => {
        onBackChange?.()
    }
  return (
    <>
    <div className="mb-8">
        <h3 className="mb-2 font-vazir">مشخصات کاربری محصیل</h3>
        <p className='font-vazir'>مشخصات کاربری محصیل</p>
    </div>
    <Formik
    initialValues={data}
    enableReinitialize={true}
    validationSchema={validationSchema}
    onSubmit={(values, {setSubmitting}) => {
        setSubmitting(true)
        setTimeout(() => {
            onNext(values, setSubmitting)
        }, 1000)
    }}
    >
        {({values, touched, errors, isSubmitting}) => {
            return (
                <Form>
                    <FormContainer>
                        <FormItem
                        label="ایمیل"
                        invalid={errors.email && touched.email}
                        errorMessage={errors.email}
                        >
                            <Field
                            type="email"
                            autoComplete="off"
                            name="email"
                            placeholder="ایمیل آدرس"
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
                            placeholder="ایمیل آدرس"
                            component={Input}
                            />
                        </FormItem>
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
                            placeholder="رمز ورود را دوباره وارد کنید. "
                            component={Input}
                            />
                        </FormItem>
                        <div className="flex justify-end gap-2">
                            <Button type="button" onClick={onBack}>Back</Button>
                            <Button loading={isSubmitting} variant="solid" type="submit">
                                {currentStepStatus === 'complete' ? 'Save' : 'Next'}
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
