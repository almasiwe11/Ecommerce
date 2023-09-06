import { useParams } from "react-router"

function SingleProduct() {
  const { products } = useParams()
  return <div>{products}</div>
}

export default SingleProduct
