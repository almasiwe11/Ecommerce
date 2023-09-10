import Form from "./Form/Form"
import Cart from "../../Components/Cart/Cart"
import { useFormikForm } from "../../Hooks/useFormikForm"
function Checkout() {
  const formik = useFormikForm({
    onSubmit: () => {
      alert("hi")
    },
  })

  console.log(formik.errors)
  return (
    <section className=" bg-white md:bg-white-gray h-full py-10 md:py-16 lg:py-32">
      <form
        onSubmit={formik.handleSubmit}
        className="md:wrapper  flex-flex gap-6 md:justify-between"
      >
        <Form formik={formik} />
        <Cart checkout={true} />
      </form>
    </section>
  )
}

export default Checkout
