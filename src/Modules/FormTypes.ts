import { FormikProps } from "formik"

type FormTypes = {
  name: string
  email: string
  phone: string
  address: string
  zipCode: string
  city: string
  country: string
}

type FormikTypes = FormikProps<FormTypes>

export type { FormikTypes, FormTypes }
