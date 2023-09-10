import { FormikTypes, FormTypes } from "../../Modules/FormTypes"

type PropTypes = {
  formik: FormikTypes
  name: keyof FormTypes
  placeholder: string
  label: string
  type?: string
}

function Input({ formik, name, placeholder, label, type = "text" }: PropTypes) {
  const inputStyle = ` ${
    hasError(name) ? "border-2 border-red" : ""
  } border border-grayish rounded-lg py-2.5 px-5`

  function hasError(input: keyof FormTypes) {
    return formik.errors[input] && formik.touched[input]
  }

  return (
    <div className="flex flex-col gap-1  ">
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className={`${hasError(name) ? "text-red" : ""} text-sm`}
        >
          {label}
        </label>
        <span
          className={`${
            hasError(name) ? "block" : "hidden"
          } text-red text-end text-sm`}
        >
          {formik.errors[name]}
        </span>
      </div>
      <input
        value={formik.values[name]}
        onChange={formik.handleChange}
        name={name}
        type={type}
        placeholder={placeholder}
        className={inputStyle}
        onBlur={formik.handleBlur}
      />
    </div>
  )
}

export default Input
