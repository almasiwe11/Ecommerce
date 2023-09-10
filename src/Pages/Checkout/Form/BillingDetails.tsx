import { FormikTypes } from "../../../Modules/FormTypes"

type PropTypes = {
  formik: FormikTypes
}

function BillingDetails({ formik }: PropTypes) {
  return (
    <div className="flex flex-col gap-3 mt-10 ">
      <div className=" text-orange tracking-wider uppercase">
        Billing details
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">Name</h2>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            type="text"
            placeholder="Aleksei"
            className="border border-grayish rounded-lg py-2.5 px-5"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">Email Address</h2>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="text"
            placeholder="alexei@gmail.com"
            className="border border-grayish rounded-lg py-2.5 px-5"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="font-bold">Phone Number</h2>
        <input
          value={formik.values.phone}
          onChange={formik.handleChange}
          name="phone"
          type="text"
          placeholder="+1(202)555-0136"
          className="border border-grayish rounded-lg py-2.5 px-5"
        />
      </div>
    </div>
  )
}

export default BillingDetails
