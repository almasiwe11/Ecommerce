function PaymentDetails() {
  return (
    <div className="mt-10">
      <div className=" text-orange  tracking-wider uppercase">
        Payment Details
      </div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
        <div className="h1 text-bold mt-3">Payment Method</div>
        <div className="flex flex-col gap-4">
          <label className="inline-flex items-center border border-grayish w-full py-2.5 px-5 rounded-lg">
            <input
              type="radio"
              className="form-radio text-indigo-600 h-5 w-5"
              name="radio-option"
              value="option1"
            />
            <span className="ml-2">e-Money</span>
          </label>

          <label className="inline-flex items-center border border-grayish w-full py-2.5 px-5 rounded-lg">
            <input
              type="radio"
              className="form-radio text-indigo-600 h-5 w-5"
              name="radio-option"
              value="option1"
            />
            <span className="ml-2">Cash on Delivery</span>
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-6 md:flex-row">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">e-Money Number</h2>
          <input
            type="text"
            placeholder="238521993"
            className="border border-grayish rounded-lg py-2.5 px-5"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="font-bold">e-Money Pin</h2>
          <input
            type="text"
            placeholder="6891"
            className="border border-grayish rounded-lg py-2.5 px-5"
          />
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails
