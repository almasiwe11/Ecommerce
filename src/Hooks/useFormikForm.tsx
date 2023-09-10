import { useFormik } from "formik"
import * as Yup from "yup"
import { FormTypes } from "../Modules/FormTypes"

const initialValues: FormTypes = {
  name: "",
  email: "",
  phone: "",
  address: "",
  zipCode: "",
  city: "",
  country: "",
  paymentMethod: "e-Money",
  "e-money number": "",
  "e-money Pin": "",
}

type useFormikFormProps = {
  onSubmit: () => void
}

export function useFormikForm({ onSubmit }: useFormikFormProps) {
  const validate = {
    name: Yup.string().required("Name cannot be empty"),
    email: Yup.string()
      .required("Email cannot be empty")
      .email("Looks like this is not an email")
      .test("valid-email", "Looks like this is not an email", (value) => {
        if (!value) return false
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        return emailRegex.test(value)
      }),
    phone: Yup.string()
      .required("Phone cannot be empty")
      .matches(/^\+\d{4}-\d{2}-\d{4}$/, "Right format +1234-56-7890"),
    address: Yup.string().required("Address cannot be empty"),
    zipCode: Yup.string().required("ZIP Code cannot be empty"),
    city: Yup.string().required("City cannot be empty"),
    country: Yup.string().required("Country cannot be empty"),
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validate),
    onSubmit: onSubmit,
  })

  return formik
}
