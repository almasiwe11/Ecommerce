import * as Yup from "yup"
import { FormTypes } from "../../Modules/FormTypes"

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

const createConditionalValidation = (errorMessage: string) =>
  Yup.string().test({
    name: "conditional-validation",
    exclusive: false,
    test: function (value) {
      const isEMoneyPayment = this.parent.paymentMethod === "e-Money"
      if (isEMoneyPayment) {
        if (!value) {
          return this.createError({
            path: this.path,
            message: errorMessage,
          })
        }

        if (!/^\d+$/.test(value)) {
          return this.createError({
            path: this.path,
            message: "Must be a number",
          })
        }
      }
      return true
    },
  })

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
    .matches(/^(\+\d{4}-\d{3}-\d{4}|\+\d{12}|\d{11})$/, "Wrong Format"),
  address: Yup.string()
    .required("Address cannot be empty")
    .matches(/^\d+\s[A-Za-z]/, "Wrong Format"),
  zipCode: Yup.string().required("ZIP Code cannot be empty"),
  city: Yup.string().required("City cannot be empty"),
  paymentMethod: Yup.string(),
  country: Yup.string().required("Country cannot be empty"),
  "e-money number": createConditionalValidation("Required for e-Money"),
  "e-money Pin": createConditionalValidation("Required for e-Money"),
}

export { initialValues, validate }
