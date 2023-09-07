import { useParams } from "react-router"
import { useProducts } from "../../Context/ProductsContext"
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Features from "./Features"
import Product from "./Product"
import ProductGallery from "./ProductGallery"
import Others from "./Others"

function SingleProduct() {
  const navigate = useNavigate()
  const { product } = useParams()
  const { products } = useProducts()
  const thisProduct = products.find((gear) => gear.slug === product)!
  const scrollRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (product) {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [product])

  const [amount, setAmount] = useState(1)
  return (
    <div className="wrapper pt-24 ">
      <span
        className="text-grayish cursor-pointer "
        onClick={() => navigate(-1)}
        ref={scrollRef}
      >
        Go Back
      </span>
      {thisProduct && (
        <>
          <Product
            thisProduct={thisProduct}
            amount={amount}
            setAmount={setAmount}
          />
          <Features thisProduct={thisProduct} />
          <ProductGallery thisProduct={thisProduct} />
          <Others thisProduct={thisProduct} />
        </>
      )}
    </div>
  )
}

export default SingleProduct
