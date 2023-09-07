import { useProducts } from "../Context/ProductsContext"
import { ProductType, inCartType } from "../Modules/TypesContext"

type PropTypes = {
  amount: number
  thisProduct: ProductType
}

function ButtonAddCart({ amount, thisProduct }: PropTypes) {
  const { setInCartProducts } = useProducts()

  function handleAddToCart() {
    console.log(thisProduct)
    const addingProduct: inCartType = {
      image: thisProduct.cart,
      name: thisProduct.name,
      price: thisProduct.price,
      amount: amount,
    }

    setInCartProducts((prev) => [...prev, addingProduct])
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`
        " bg-orange border border-orange text-white hover:bg-transparent hover:text-orange "
       py-3 px-6 uppercase  tracking-wider duration-300 ease-in-out`}
    >
      add to cart
    </button>
  )
}

export default ButtonAddCart
