import { useRef, useEffect } from "react"
import { useProducts } from "../../Context/ProductsContext"
import CartProduct from "./CartProduct"
import { Link } from "react-router-dom"

type PropTypes = {
  checkout?: boolean
  iconRef?: any
}

function Cart({ checkout = false, iconRef }: PropTypes) {
  const cartRef = useRef<HTMLElement | null>(null)

  const { setCartIsOpen, cartIsOpen } = useProducts()

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (setCartIsOpen === undefined) return
      if (!iconRef) return
      if (
        !cartRef?.current?.contains(e.target as Node) &&
        !iconRef?.current?.contains(e.target as Node)
      ) {
        setCartIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [cartIsOpen, setCartIsOpen, iconRef])

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
      className={`${
        !checkout && "fixed  right-40 top-24 z-50 w-[26rem]"
      } p-6 overflow-auto bg-white rounded-xl `}
      style={!checkout ? { maxHeight: "calc(100vh - 100px)" } : {}}
    >
      <div className=" flex flex-col  gap-6">
        {!checkout ? (
          <div className="flex justify-between">
            <h1 className="uppercase tracking-wider font-bold font-lg">cart</h1>
            <div
              onClick={() => setInCartProducts([])}
              className="text-orange ease-in-out cursor-pointer duration-300 hover:underline"
            >
              Remove all
            </div>
          </div>
        ) : (
          <h1 className="font-bold text-xl">Summary</h1>
        )}
        {inCartProducts.length > 0 ? (
          <div className="flex flex-col gap-4 ">
            {inCartProducts.map((product) => (
              <CartProduct
                key={product.name}
                product={product}
                checkout={checkout}
              ></CartProduct>
            ))}
          </div>
        ) : (
          <p className="font-bold text-center text-xl">Your cart is empty</p>
        )}

        <div className="flex flex-col gap-2">
          <div className="flex justify-between uppercase">
            <div className="text-grayish">Total</div>
            <span className="font-bold">$ {total} </span>
          </div>
          {checkout && (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between uppercase">
                <div className="text-grayish">Shipping</div>
                <span className="font-bold">$ 50 </span>
              </div>
              <div className="flex justify-between uppercase">
                <div className="text-grayish">VAT (included)</div>
                <span className="font-bold">$ {Math.round(total * 0.2)} </span>
              </div>

              <div className="flex justify-between uppercase mt-4">
                <div className="text-grayish">Grand Total</div>
                <span className="text-orange">$ {total + 50} </span>
              </div>
            </div>
          )}
        </div>

        {!checkout && (
          <>
            {inCartProducts.length > 0 ? (
              <Link to="/checkout">
                <button
                  onClick={() => {
                    if (setCartIsOpen === undefined) return
                    setCartIsOpen(false)
                  }}
                  className={`${"hover:bg-transparent bg-orange border border-orange text-white hover:text-orange "}  py-3 px-6 uppercase  tracking-wider duration-300  w-full ease-in-out`}
                >
                  checkout
                </button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  if (setCartIsOpen === undefined) return
                  setCartIsOpen(false)
                }}
                className={`${"hover:bg-transparent bg-orange border border-orange text-white hover:text-orange "}  py-3 px-6 uppercase  tracking-wider duration-300 w-full  ease-in-out`}
              >
                back
              </button>
            )}
          </>
        )}

        {checkout && (
          <button
            className={`${"hover:bg-transparent bg-orange border border-orange text-white hover:text-orange "}  py-3 px-6 uppercase  tracking-wider duration-300 ease-in-out`}
            type={checkout ? "submit" : "button"}
          >
            continue & pay
          </button>
        )}
      </div>
    </section>
  )
}

export default Cart
