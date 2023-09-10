import { FormikProps } from "formik"

type FormTypes = {
  name: string
  email: string
  phone: string
  address: string
  zipCode: string
  city: string
  country: string
  "payment-method": "e-Money" | "on-Delivery"
} & (
  | {
      "payment-method": "e-Money"
      "e-money number": string
      "e-money Pin": string
    }
  | {
      "payment-method": "on-Delivery"
    }
)

type FormikTypes = FormikProps<FormTypes>

export type { FormikTypes, FormTypes }
