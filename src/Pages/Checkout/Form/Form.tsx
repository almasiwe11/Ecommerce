import BillingDetails from "./BillingDetails"
import ShippingInfo from "./ShippingInfo"
import PaymentDetails from "./PaymentDetails"
import { FormikTypes } from "../../../Modules/FormTypes"

type PropTypes = {
  formik: FormikTypes
}
function Formm({ formik }: PropTypes) {
  console.log(formik.values)
  return (
    <div className="py-6 md:py-8 px-6 rounded-lg md:flex-grow  flex flex-col bg-white">
      <h1 className="uppercase tracking-wider text-2xl ">checkout</h1>
      <BillingDetails formik={formik} />
      <ShippingInfo formik={formik} />
      <PaymentDetails formik={formik} />
    </div>
  )
}

export default Formm
