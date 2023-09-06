import { useParams } from "react-router"
import { useProducts } from "../../Context/ProductsContext"
import { useState } from "react"
import Features from "./Features"
import Product from "./Product"
import ProductGallery from "./ProductGallery"

function SingleProduct() {
  const { product } = useParams()
  const { products } = useProducts()
  const thisProduct = products.find((gear) => gear.slug === product)!

  const [amount, setAmount] = useState(1)
  return (
    <div className="wrapper mt-24">
      <span className="text-grayish ">Go Back</span>
      {thisProduct && (
        <>
          <Product
            thisProduct={thisProduct}
            amount={amount}
            setAmount={setAmount}
          />
          <Features thisProduct={thisProduct} />
          <ProductGallery thisProduct={thisProduct} />
        </>
      )}
    </div>
  )
}

export default SingleProduct
