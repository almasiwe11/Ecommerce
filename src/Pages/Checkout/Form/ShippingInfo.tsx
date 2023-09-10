import { FormikTypes } from "../../../Modules/FormTypes"
import Input from "../../../Components/Input/Input"

type PropTypes = {
  formik: FormikTypes
}

function ShippingInfo({ formik }: PropTypes) {
  return (
    <div className="flex flex-col mt-10 gap-4">
      <div className=" text-orange mb-5 tracking-wider uppercase">
        Shipping Info
      </div>

      <Input
        formik={formik}
        label="Address"
        name="address"
        placeholder="1137 Williams Avenue"
      />

      <div className="flex flex-col md:grid md:grid-cols-2 items-end  gap-4">
        <Input
          formik={formik}
          label="ZIP Code"
          name="zipCode"
          placeholder="10001"
        />
        <Input
          formik={formik}
          label="City"
          name="city"
          placeholder="New York"
        />
      </div>

      <Input
        formik={formik}
        label="Country"
        name="country"
        placeholder="United States"
      />
    </div>
  )
}

export default ShippingInfo
