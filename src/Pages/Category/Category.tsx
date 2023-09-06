import { useProducts } from "../../Context/ProductsContext"
import ProductCategory from "./ProductCategory"
import { useParams } from "react-router"

function Category() {
  const { products } = useProducts()
  const { category } = useParams()
  const thisCategory = products.filter(
    (product) => product.category === category
  )

  thisCategory.sort((a, b) => (a.new === b.new ? 0 : a ? -1 : 1))

  return (
    <section>
      <div className="bg-black h-[30vh]  md:h-[40vh] flex-center">
        <h1 className="text-4xl text-white uppercase tracking-wider pt-16">
          headphones
        </h1>
      </div>
      <div className="flex flex-col lg:gap-16 mt-12 pb-16">
        {thisCategory.map((product, i) => (
          <div key={product.id}>
            <ProductCategory product={product} index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Category
