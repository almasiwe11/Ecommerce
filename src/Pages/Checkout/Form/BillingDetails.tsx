type PropTypes = {
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function BillingDetails({ handleFormChange }: PropTypes) {
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
            type="text"
            placeholder="Aleksei"
            className="border border-grayish rounded-lg py-2.5 px-5"
            onChange={handleFormChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">Email Address</h2>
          <input
            name="email"
            type="text"
            placeholder="alexei@gmail.com"
            className="border border-grayish rounded-lg py-2.5 px-5"
            onChange={handleFormChange}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="font-bold">Phone Number</h2>
        <input
          name="phone"
          type="text"
          placeholder="+1(202)555-0136"
          className="border border-grayish rounded-lg py-2.5 px-5"
          onChange={handleFormChange}
        />
      </div>
    </div>
  )
}

export default BillingDetails
