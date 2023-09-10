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
}

type useFormikFormProps = {
  onSubmit: () => void
}

export function useFormikForm({ onSubmit }: useFormikFormProps) {
  const validate = {
    name: Yup.string().required("Name cannot bet empty"),
    email: Yup.string()
      .required("Email cannot bet empty")
      .email("Looks like this is not an email")
      .test("valid-email", "Looks like this is not an email", (value) => {
        if (!value) return false
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        return emailRegex.test(value)
      }),
    phone: Yup.string().required("Phone cannot bet empty"),
    address: Yup.string().required("Address cannot bet empty"),
    zipCode: Yup.string().required("zipCode cannot bet empty"),
    city: Yup.string().required("City cannot bet empty"),
    county: Yup.string().required("Country cannot bet empty"),
  }

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validate),
    onSubmit: onSubmit,
  })

  return formik
}
