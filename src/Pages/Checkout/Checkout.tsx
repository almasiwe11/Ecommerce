import { Formik, Form } from "formik"
import * as Yup from "yup"
import Formm from "./Form/Form"
import Cart from "../../Components/Cart/Cart"
import { FormTypes } from "../../Modules/FormTypes"

function Checkout() {
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
    paymentMethod: Yup.string(),
    country: Yup.string().required("Country cannot be empty"),
    "e-money number": Yup.string().test({
      name: "conditional-validation",
      exclusive: false,
      test: function (value) {
        const isEMoneyPayment = this.parent.paymentMethod === "e-Money"
        if (isEMoneyPayment) {
          if (!value) {
            return this.createError({
              path: this.path,
              message: "Required for e-Money",
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
    }),
    "e-money Pin": Yup.string().test({
      name: "conditional-validation",
      exclusive: false,
      test: function (value) {
        const isEMoneyPayment = this.parent.paymentMethod === "e-Money"
        if (isEMoneyPayment) {
          if (!value) {
            return this.createError({
              path: this.path,
              message: "Required for e-Money",
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
    }),
  }

  const onSubmit = () => {
    alert("hi")
  }

  return (
    <section className="bg-white md:bg-white-gray h-full py-10 md:py-16 lg:py-32">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object(validate)}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="md:wrapper flex flex-gap-6 md:justify-between">
            <Formm formik={formik} />
            <Cart checkout={true} />
          </Form>
        )}
      </Formik>
    </section>
  )
}

export default Checkout
