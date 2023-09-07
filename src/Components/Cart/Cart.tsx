import ButtonLink from "../ButtonLink"

function Cart() {
  return (
    <section className="fixed p-6 bg-cyan-300 rounded-xl w-[24rem] right-40 top-24">
      <div className=" flex flex-col  gap-6">
        <div className="flex justify-between">
          <h1 className="uppercase tracking-wider font-bold font-lg">cart</h1>
          <div className="text-orange ease-in-out cursor-pointer duration-300 hover:underline">
            Remove all
          </div>
        </div>

        <div className="flex justify-between uppercase">
          <div className="text-grayish">Total</div>
          <span>$ 242</span>
        </div>

        <ButtonLink style="uppercase w-full" orange={true}>
          checkout
        </ButtonLink>
      </div>
    </section>
  )
}

export default Cart
