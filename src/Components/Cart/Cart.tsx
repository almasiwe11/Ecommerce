import { useRef, useEffect, useState } from "react"
import ButtonLink from "../ButtonLink"
import { useProducts } from "../../Context/ProductsContext"
import CartProduct from "./CartProduct"
import { Link } from "react-router-dom"

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

  function calcTotal(): number {
    const total = inCartProducts.reduce((acc, item) => {
      return (acc += item.price * item.amount)
    }, 0)
    return total
  }

  const total = calcTotal()

  return (
    <section
      ref={cartRef}
      className={`fixed  right-40 top-24 z-50 p-6 overflow-auto bg-white rounded-xl w-[26rem]`}
      style={{ maxHeight: "calc(100vh - 100px)" }}
    >
      <div className=" flex flex-col  gap-6">
        <div className="flex justify-between">
          <h1 className="uppercase tracking-wider font-bold font-lg">cart</h1>
          <div
            onClick={() => setInCartProducts([])}
            className="text-orange ease-in-out cursor-pointer duration-300 hover:underline"
          >
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
          <span>$ {total} </span>
        </div>

        {inCartProducts.length > 0 ? (
          <Link to="/checkout">
            <button
              onClick={() => {
                setCartIsOpen(false)
              }}
              className={`${"hover:bg-transparent bg-orange border border-orange text-white hover:text-orange "}  py-3 px-6 uppercase  tracking-wider duration-300 ease-in-out`}
            >
              checkout
            </button>
          </Link>
        ) : (
          <button
            onClick={() => {
              setCartIsOpen(false)
            }}
            className={`${"hover:bg-transparent bg-orange border border-orange text-white hover:text-orange "}  py-3 px-6 uppercase  tracking-wider duration-300 ease-in-out`}
          >
            back
          </button>
        )}
      </div>
    </section>
  )
}

export default Cart
