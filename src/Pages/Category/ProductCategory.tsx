import ButtonLink from "../../Components/ButtonLink"
import RespImage from "../../Components/RespImage"
import { ProductType } from "../../Modules/TypesContext"
function ProductCategory({
  product,
  index,
}: {
  product: ProductType
  index: number
}) {
  let odd = false
  if (index % 2 === 1) odd = true

  return (
    <div className="flex flex-col gap-12 lg:gap-20 lg:grid lg:grid-cols-2 mt-24 wrapper ">
      <div className={`w-full ${odd && "lg:order-2"}`}>
        <RespImage
          desktop={product.categoryImage.desktop}
          mobile={product.categoryImage.mobile}
          tablet={product.categoryImage.tablet}
          alt={`${product.name} image`}
          style="rounded-xl w-full "
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left gap-8">
        {product.new && (
          <span className="text-orange uppercase tracking-[9px]">
            new product
          </span>
        )}

        <h1 className="font-big">{product.name}</h1>
        <p className="text-grayish">{product.description}</p>
        <ButtonLink orange={true} product={product} />
      </div>
    </div>
  )
}

export default ProductCategory
