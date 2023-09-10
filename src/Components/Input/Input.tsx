function Input() {
  return (
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
  )
}

export default Input
