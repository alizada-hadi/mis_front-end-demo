import React, { useEffect, useState } from "react";
import {
  Input,
  Button,
  Avatar,
  FormItem,
  FormContainer,
  hooks,
  DatePicker,
} from "components/ui";
import { Field, Form, Formik } from "formik";
import { HiCheck } from "react-icons/hi";
import { components } from "react-select";
import { toggleNewDepartmentDialog } from "../store/stateSlice";
import { useSelector, useDispatch } from "react-redux";
import cloneDeep from "lodash/cloneDeep";
import * as Yup from "yup";
import { createDepartment } from "../store/dataSlice";

const NewDepartmentForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "").required("نام دیپارتمنت اختیاری نمیباشد. "),
    description: Yup.string().required(
      "توضیحات در مورد دیپارتمنت اختیاری نمیباشد. "
    ),
    created_at: Yup.date(),
  });

  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };

  const dispatch = useDispatch();
  const onSubmit = (formValue, setSubmitting) => {
    setSubmitting(true);
    const { name, description, created_at } = formValue;
    const values = {
      name,
      description,
      created_at,
    };
    dispatch(createDepartment(values));
    dispatch(toggleNewDepartmentDialog(false));
  };
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        created_at: date.toISOString().slice(0, 10),
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        onSubmit(values, setSubmitting);
      }}
    >
      {({ touched, errors, values, resetForm }) => (
        <Form>
          <FormContainer>
            <FormItem
              label="نام دیپارتمنت"
              invalid={errors.name && touched.name}
              errorMessage={errors.name}
            >
              <Field
                type="text"
                autoComplete="off"
                name="name"
                className="font-vazir"
                placeholder="لطفا نام دیپارتمنت را وارد کنید. "
                component={Input}
              />
            </FormItem>
            <FormItem
              label="تاریخ ایجاد دیپارتمنت"
              invalid={errors.created_at && touched.created_at}
              errorMessage={errors.created_at}
            >
              <DatePicker
                placeholder="تاریخ ایجاد دیپارتمنت"
                name="created_at"
                value={date}
                onChange={handleDateChange}
                className="font-vazir"
              />
            </FormItem>
            <FormItem
              label="توضیحات"
              invalid={errors.description && touched.description}
              errorMessage={errors.description}
            >
              <Field
                textArea
                type="text"
                autoComplete="off"
                name="description"
                placeholder="توضیحات در مورد دیپارتمنت... "
                component={Input}
                className="font-vazir"
              />
            </FormItem>
            <Button block variant="solid" type="submit" className="font-vazir">
              ایجاد دیپارتمنت
            </Button>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default NewDepartmentForm;
