import { useProducts } from "../../Context/ProductsContext"
import CartProduct from "../../Components/Cart/CartProduct"
import { Link } from "react-router-dom"

function Thanks() {
  const { inCartProducts, setInCartProducts } = useProducts()
  const firstItem = inCartProducts[0]

  function calcTotal(): number {
    const total = inCartProducts.reduce((acc, item) => {
      return (acc += item.price * item.amount)
    }, 0)
    return total
  }

  return (
    <div className="fixed flex-center top-0 h-screen z-50  w-screen">
      <div className="bg-white w-[90%] max-w-xl p-6 md:p-9 lg:p-11 md:py-12 flex flex-col gap-5">
        <CheckMark />
        <h1 className="font-bold text-3xl uppercase">
          Thank you <br></br> for your order
        </h1>

        <p className="text-grayish">
          You will receive an email confirmation shortly.
        </p>

        <div className="flex flex-col md:grid md:grid-cols-2">
          <div className="bg-white-gray p-3 rounded-t-lg md:rounded-l-lg">
            <CartProduct product={firstItem} checkout={true} />
            <hr></hr>
            <div className="py-2">
              {inCartProducts.length > 1 && (
                <p className="text-center text-grayish">
                  and {inCartProducts.length - 1} other item(s)
                </p>
              )}
            </div>
          </div>
          <div className="bg-black py-4 text-white rounded-b-lg md:rounded-r-lg px-7 flex gap-3 flex-col justify-center">
            <h1 className="uppercase text-grayish text-xl">grand total</h1>
            <h2 className="text-white text-xl">$ {calcTotal() + 50}</h2>
          </div>
        </div>
        <Link to="/">
          <button
            onClick={() => setInCartProducts([])}
            className="bg-orange mt-3 text-white py-3 flex-center uppercase text-l w-full"
          >
            back to home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Thanks

function CheckMark() {
  return (
    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <circle fill="#D87D4A" cx="32" cy="32" r="32" />
        <path
          stroke="#FFF"
          stroke-width="4"
          d="m20.754 33.333 6.751 6.751 15.804-15.803"
        />
      </g>
    </svg>
  )
}
