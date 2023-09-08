type PropTypes = {
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function ShippingInfo({ handleFormChange }: PropTypes) {
  return (
    <div className="flex flex-col mt-10 gap-4">
      <div className=" text-orange mb-5 tracking-wider uppercase">
        Shipping Info
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="font-bold">Address</h2>
        <input
          onChange={handleFormChange}
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
            onChange={handleFormChange}
            name="zip"
            type="text"
            placeholder="10001"
            className="border border-grayish rounded-lg py-2.5 px-5"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold">City</h2>
          <input
            onChange={handleFormChange}
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
          onChange={handleFormChange}
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