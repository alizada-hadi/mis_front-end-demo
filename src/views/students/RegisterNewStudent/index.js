import React, { useEffect, useMemo, lazy, Suspense } from 'react'
import { Container, AdaptableCard } from 'components/shared'
import { useDispatch, useSelector } from 'react-redux'
import { getForm, setStepStatus, setFormData } from './store/dataSlice'
import { setCurrentStep } from './store/stateSlice'
import FormStep from './components/FormStep'
import reducer from './store'
import { injectReducer } from 'store/index'


injectReducer("studentRegisterForm", reducer)

const PersonalInformation = lazy(() => import('./components/PersonalInformation'))
const UserAccountInformation = lazy(() => import('./components/UserAccountInformation'))

const DetailForm = () => {
    const dispatch = useDispatch()
    const stepStatus = useSelector(state => state.studentRegisterForm.data.stepStatus)
    const currentStep = useSelector(state => state.studentRegisterForm.state.currentStep)
    const formData = useSelector(state => state.studentRegisterForm.data.formData)

    useEffect(() => {
        dispatch(getForm())
    })

    const handleNextChange = (values, name) => {
        const nextStep = currentStep + 1
        dispatch(setFormData({[name] : values}))
        dispatch(setStepStatus({[currentStep] : {status:'complete'}, [nextStep] : {status : 'current'}}))
        dispatch(setCurrentStep(nextStep))
    }

    const handleBackChange = () => {
        const previousStep = currentStep - 1
        dispatch(setCurrentStep(previousStep))
    }

    const currentStepStatus = useMemo(() => stepStatus[currentStep].status, [stepStatus, currentStep])
  return (
    <Container className="h-full">
        <AdaptableCard className="h-full" bodyClass="h-full">
            <div className='grid lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5 gap-4 h-full'>
                {
                    currentStep !== 1 && (
                        <div className='2xl:col-span-1 xl:col-span-1 lg:col-span-2'>
                            <FormStep
                                currentStep={currentStep}
                                currentStepStatus={currentStepStatus}
                                stepStatus={stepStatus}
                            />
                        </div>
                    )
                }
                <div className={currentStep !== 1 ? '2xl:col-span-4 lg:col-span-3 xl:col-span-2' : 'lg:col-span-5'}>
                    <Suspense fallback={<></>}>
                        {currentStep === 0 && (
                            <PersonalInformation
                                data={formData.personalInformation}
                                onNextChange={handleNextChange}
                                currentStepStatus={currentStepStatus}
                            />
                        )}
                        {currentStep === 1 && (
                            <UserAccountInformation
                                data={formData.userAccountInformation}
                                onNextChange={handleNextChange}
                                onBackChange={handleBackChange}
                                currentStepStatus={currentStepStatus}
                            />
                        )}
                    </Suspense>
                </div>
            </div>
        </AdaptableCard>
    </Container>
  )
}

export default DetailForm
