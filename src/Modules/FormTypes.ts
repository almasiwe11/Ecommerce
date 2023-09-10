import { FormikProps } from "formik"

type EMoneyPayment = {
  paymentMethod: "e-Money"
  "e-money number": string
  "e-money Pin": string
}

type OnDeliveryPayment = {
  paymentMethod: "on-Delivery"
}

type FormTypes = {
  name: string
  email: string
  phone: string
  address: string
  zipCode: string
  city: string
  country: string
  paymentMethod: "e-Money"
} & (EMoneyPayment | OnDeliveryPayment)

type FormikTypes = FormikProps<FormTypes>

export type { FormikTypes, FormTypes }
