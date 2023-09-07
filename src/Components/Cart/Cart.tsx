import { useRef, useEffect } from "react"
import ButtonLink from "../ButtonLink"
import { useProducts } from "../../Context/ProductsContext"
import CartProduct from "./CartProduct"

type PropTypes = {
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Cart({ setCartIsOpen }: PropTypes) {
  const cartRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!cartRef?.current?.contains(e.target as Node)) {
        setCartIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  const { inCartProducts, setInCartProducts } = useProducts()

  return (
    <section
      ref={cartRef}
      className="fixed p-6 overflow-auto bg-white rounded-xl w-[26rem] right-40 top-24"
      style={{ maxHeight: "calc(100vh - 100px)" }}
    >
      <div className=" flex flex-col  gap-6">
        <div className="flex justify-between">
          <h1 className="uppercase tracking-wider font-bold font-lg">cart</h1>
          <div className="text-orange ease-in-out cursor-pointer duration-300 hover:underline">
            Remove all
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          {inCartProducts.map((product) => (
            <CartProduct key={product.name} product={product}></CartProduct>
          ))}
        </div>

        <div className="flex justify-between uppercase">
          <div className="text-grayish">Total</div>
          <span>$ 242</span>
        </div>

        <button
          className={`${"hover:bg-transparent bg-orange border border-orange text-white hover:text-orange "}  py-3 px-6 uppercase  tracking-wider duration-300 ease-in-out`}
        >
          checkout
        </button>
      </div>
    </section>
  )
}

export default Cart
