import { FormikTypes } from "../../../Modules/FormTypes"

type PropTypes = {
  formik: FormikTypes
}

function ShippingInfo({ formik }: PropTypes) {
  return (
    <div className="flex flex-col mt-10 gap-4">
      <div className=" text-orange mb-5 tracking-wider uppercase">
        Shipping Info
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="font-bold">Address</h2>
        <input
          value={formik.values.address}
          onChange={formik.handleChange}
          name="address"
          type="text"
          placeholder="1137 Williams Avenue"
          className="border border-grayish rounded-lg py-2.5 px-5"
        />
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">ZIP Code</h2>
          <input
            value={formik.values.zipCode}
            onChange={formik.handleChange}
            name="zipCode"
            type="text"
            placeholder="10001"
            className="border border-grayish rounded-lg py-2.5 px-5"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">City</h2>
          <input
            value={formik.values.city}
            onChange={formik.handleChange}
            name="city"
            type="text"
            placeholder="New York"
            className="border border-grayish rounded-lg py-2.5 px-5"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="font-bold">County</h2>
        <input
          value={formik.values.country}
          onChange={formik.handleChange}
          name="country"
          type="text"
          placeholder="United States"
          className="border border-grayish rounded-lg py-2.5 px-5"
        />
      </div>
    </div>
  )
}

export default ShippingInfo
