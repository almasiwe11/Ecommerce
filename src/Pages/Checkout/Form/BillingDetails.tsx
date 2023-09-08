function BillingDetails() {
  return (
    <div className="flex flex-col gap-3 mt-10 ">
      <div className=" text-orange tracking-wider uppercase">
        Billing details
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">Name</h2>
          <input
            type="text"
            placeholder="Aleksei"
            className="border border-grayish rounded-lg py-2.5 px-5"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">Email Address</h2>
          <input
            type="text"
            placeholder="alexei@gmail.com"
            className="border border-grayish rounded-lg py-2.5 px-5"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="font-bold">Phone Number</h2>
        <input
          type="text"
          placeholder="+1(202)555-0136"
          className="border border-grayish rounded-lg py-2.5 px-5"
        />
      </div>
    </div>
  )
}

export default BillingDetails
