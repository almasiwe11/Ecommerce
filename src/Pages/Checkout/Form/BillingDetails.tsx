import { FormikTypes } from "../../../Modules/FormTypes"
import Input from "../../../Components/Input/Input"

type PropTypes = {
  formik: FormikTypes
}

function BillingDetails({ formik }: PropTypes) {
  return (
    <div className="flex flex-col gap-3 mt-10 ">
      <div className=" text-orange tracking-wider uppercase">
        Billing details
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 md:items-end   gap-4 ">
        <Input
          formik={formik}
          label="Name"
          name="name"
          placeholder="Alexei Ward"
        />
        <Input
          formik={formik}
          label="Email Address"
          name="email"
          placeholder="alexei@mail.com"
        />
      </div>

      <Input
        formik={formik}
        label="Phone Number"
        name="phone"
        placeholder="+1202-555-0136"
      />
    </div>
  )
}

export default BillingDetails
