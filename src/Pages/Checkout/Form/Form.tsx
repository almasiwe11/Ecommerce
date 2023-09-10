import { useState } from "react"
import BillingDetails from "./BillingDetails"
import ShippingInfo from "./ShippingInfo"
import PaymentDetails from "./PaymentDetails"
import { FormikTypes } from "../../../Modules/FormTypes"

type PropTypes = {
  formik: FormikTypes
}
function Form({ formik }: PropTypes) {
  const [buttonChecked, setButtonChecked] = useState("e-Money")

  return (
    <div className="py-6 md:py-8 px-6 rounded-lg md:flex-grow  flex flex-col bg-white">
      <h1 className="uppercase tracking-wider text-2xl ">checkout</h1>
      <BillingDetails formik={formik} />
      <ShippingInfo formik={formik} />
      <PaymentDetails
        buttonChecked={buttonChecked}
        setButtonChecked={setButtonChecked}
        formik={formik}
      />
    </div>
  )
}

export default Form
