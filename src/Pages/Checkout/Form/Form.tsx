import { useState } from "react"
import BillingDetails from "./BillingDetails"
import ShippingInfo from "./ShippingInfo"
import PaymentDetails from "./PaymentDetails"

function Form() {
  const [buttonChecked, setButtonChecked] = useState("e-Money")
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
  })

  console.log(formValues)

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target

    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="py-6 md:py-8 px-6 rounded-lg md:flex-grow  flex flex-col bg-white">
      <h1 className="uppercase tracking-wider text-2xl ">checkout</h1>
      <BillingDetails handleFormChange={handleFormChange} />
      <ShippingInfo handleFormChange={handleFormChange} />
      <PaymentDetails
        buttonChecked={buttonChecked}
        setButtonChecked={setButtonChecked}
        handleFormChange={handleFormChange}
      />
    </div>
  )
}

export default Form
