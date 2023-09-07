import ears from "/assets/shared/desktop/image-category-thumbnail-earphones.png"
import headphones from "/assets/shared/desktop/image-category-thumbnail-headphones.png"
import speakers from "/assets/shared/desktop/image-category-thumbnail-speakers.png"
import CategoryProduct from "../CategoryProduct/CategoryProduct"
// import { useProducts } from "../../Context/ProductsContext"

function AllProducts() {
  /*   const { products } = useProducts()
  const uniqueCategories = Array.from(
    new Set(products.map((obj) => obj.category))
  ).map((category) => {
    return products.find((obj) => obj.category === category)
  }) */
  return (
    <div className="flex flex-col md:flex-row gap-16 mt-24 lg:mt-52 wrapper md:gap-6 lg:gap-8 md:justify-between mb-12">
      <CategoryProduct
        product={"headphones"}
        img={headphones}
        alt={"headphones image"}
      />
      <CategoryProduct
        product={"speakers"}
        img={speakers}
        alt={"speakers image"}
      />
      <CategoryProduct product={"earphones"} img={ears} alt={"ears image"} />
    </div>
  )
}

export default AllProducts
