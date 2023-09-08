import BillingDetails from "./BillingDetails"
import ShippingInfo from "./ShippingInfo"
import PaymentDetails from "./PaymentDetails"

function Form() {
  return (
    <div className="py-6 md:py-8 px-6 rounded-lg  flex flex-col bg-white">
      <h1 className="uppercase tracking-wider text-2xl ">checkout</h1>
      <BillingDetails />
      <ShippingInfo />
      <PaymentDetails />
    </div>
  )
}

export default Form
