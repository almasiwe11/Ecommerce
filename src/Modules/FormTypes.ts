import { FormikProps } from "formik"

type FormTypes = {
  name: string
  email: string
  phone: string
  address: string
  zipCode: string
  city: string
  country: string
  paymentMethod: "e-Money"
  "e-money number"?: string
  "e-money Pin"?: string
}

type FormikTypes = FormikProps<FormTypes>

export type { FormikTypes, FormTypes }
