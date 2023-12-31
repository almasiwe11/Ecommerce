import { useProducts } from "../../Context/ProductsContext"
import { inCartType } from "../../Modules/TypesContext"
import AmountInput from "../../Pages/SingleProduct/AmountInput"
import { useState, useEffect } from "react"
type PropTypes = {
  product: inCartType
  checkout?: boolean
  thanks?: boolean
}

function CartProduct({ product, checkout = false, thanks = false }: PropTypes) {
  const [amount, setAmount] = useState(product.amount)

  const { setInCartProducts } = useProducts()

  useEffect(() => {
    setInCartProducts((prev) => {
      return prev.map((item) => {
        if (item === product) {
          return { ...item, amount: amount }
        } else {
          return item
        }
      })
    })
  }, [amount, setInCartProducts])

  return (
    <div className="flex justify-between items-center">
      <div className={`flex ${thanks ? "gap-2" : "gap-4"} `}>
        <img
          className="max-w-[5rem]"
          src={product.image}
          alt={`${product.name} cart image`}
        />
        <div className="flex flex-col justify-center">
          <div
            className={`font-bold ${
              thanks ? "text-sm" : "text-lg"
            } tracking-wider uppercase`}
          >
            {product.name}
          </div>
          <div className="text-grayish">$ {product.price}</div>
        </div>
      </div>
      {checkout ? (
        <span className="text-grayish">x{amount}</span>
      ) : (
        <AmountInput amount={amount} setAmount={setAmount} />
      )}
    </div>
  )
}

export default CartProduct
