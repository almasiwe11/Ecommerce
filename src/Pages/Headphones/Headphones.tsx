import { useProducts } from "../../Context/ProductsContext"
import Headphone from "./Headphone"
function Headphones() {
  const { products } = useProducts()
  const headphones = products.filter(
    (product) => product.category === "headphones"
  )
  console.log(headphones)
  return (
    <section>
      <div className="bg-black h-[30vh]  md:h-[40vh] flex-center">
        <h1 className="text-4xl text-white uppercase tracking-wider pt-16">
          headphones
        </h1>
      </div>
      <div className="flex flex-col lg:gap-16 mt-12 pb-16">
        {headphones.map((headphone, i) => (
          <div key={headphone.id}>
            <Headphone headphone={headphone} index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Headphones
