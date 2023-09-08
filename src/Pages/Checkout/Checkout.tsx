import Form from "./Form/Form"
import Cart from "../../Components/Cart/Cart"
function Checkout() {
  return (
    <section className=" bg-white md:bg-white-gray h-full py-10 md:py-16 lg:py-32">
      <div className="md:wrapper  flex-flex gap-6 md:justify-between">
        <Form />
        <Cart checkout={true} />
      </div>
    </section>
  )
}

export default Checkout
