import { Field } from "formik"
import { FormikTypes } from "../../../Modules/FormTypes"
import Input from "../../../Components/Input/Input"

type PropTypes = {
  formik: FormikTypes
}

function PaymentDetails({ formik }: PropTypes) {
  return (
    <div className="mt-10">
      <div className="text-orange tracking-wider uppercase">
        Payment Details
      </div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
        <div className="h1 text-bold mt-3">Payment Method</div>
        <div className="flex flex-col gap-4">
          <label className="inline-flex items-center border border-grayish w-full py-2.5 px-5 rounded-lg">
            <Field
              type="radio"
              className="form-radio accent-orange h-5 w-5"
              name="paymentMethod" // Use camelCase for field names
              value="e-Money"
              onBlur={formik.handleBlur}
            />
            <span className="ml-2">e-Money</span>
          </label>

          <label className="inline-flex items-center border border-grayish w-full py-2.5 px-5 rounded-lg">
            <Field
              type="radio"
              className="form-radio accent-orange h-5 w-5"
              name="paymentMethod" // Use camelCase for field names
              value="on-Delivery"
              onBlur={formik.handleBlur}
            />
            <span className="ml-2">Cash on Delivery</span>
          </label>
        </div>
      </div>

      {formik.values.paymentMethod === "e-Money" && (
        <div className="flex mt-4 flex-col md:grid md:grid-cols-2 items-end  gap-4">
          <Input
            name="e-money number"
            formik={formik}
            label="e-Money Number"
            placeholder="238421993"
          ></Input>
          <Input
            name="e-money Pin"
            formik={formik}
            label="e-Money PIN"
            placeholder="8591"
            type="password"
          ></Input>
        </div>
      )}
    </div>
  )
}

export default PaymentDetails
