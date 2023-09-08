import Form from "./Form/Form"
import Summary from "./Summary"
function Checkout() {
  return (
    <section className=" bg-white md:bg-white-gray h-full py-10 md:py-16 lg:py-32">
      <div className="md:wrapper  flex flex-col md:flex-row">
        <Form />
        <Summary />
      </div>
    </section>
  )
}

export default Checkout
