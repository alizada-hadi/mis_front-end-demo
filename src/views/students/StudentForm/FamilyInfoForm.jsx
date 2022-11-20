import React from 'react'
import { Field } from 'formik'
import {
	Input,
	FormItem,
} from 'components/ui'
const FamilyInfoForm = props => {
  const {touched, errors} = props
  return (
    <>
      <div className="md:grid grid-cols-2 gap-4">
      <FormItem
        label="اقارب"
        invalid={errors.relation && touched.relation}
        errorMessage={errors.relation}
      >
        <Field 
					type="text" 
					autoComplete="off" 
					name="relation" 
					placeholder="اقارب" 
					component={Input}
				/>
      </FormItem>
      <FormItem
        label="نام اقارب"
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
        label="آدرس"
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
					placeholder="وظیفه" 
					component={Input}
				/>
      </FormItem>
    </div>
    <div className="md:grid grid-cols-2 gap-4">
      <FormItem
        label="شماره آدرس اول"
        invalid={errors.phone1 && touched.phone1}
        errorMessage={errors.phone1}
      >
        <Field 
					type="text" 
					autoComplete="off" 
					name="phone1" 
					placeholder="شماره آدرس اول" 
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
    </>
  )
}

export default FamilyInfoForm
