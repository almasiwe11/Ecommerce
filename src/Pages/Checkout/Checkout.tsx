import { useState } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import Formm from "./Form/Form"
import Cart from "../../Components/Cart/Cart"
import { initialValues, validate } from "./FormikLogic"
import Thanks from "./Thanks"

function Checkout() {
  const [success, setSuccess] = useState(false)

  const onSubmit = () => {
    setSuccess(true)
  }

  return (
    <section className="bg-white relative md:bg-white-gray h-full py-10 md:py-16 lg:py-32">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object(validate)}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="md:wrapper flex flex-gap-6 md:justify-between">
            <Formm formik={formik} />
            <Cart checkout={true} />
          </Form>
        )}
      </Formik>
      {success && (
        <>
          <div className="bg-black/30 absolute inset-0 h-full"></div>
          <Thanks />
        </>
      )}
    </section>
  )
}

export default Checkout
