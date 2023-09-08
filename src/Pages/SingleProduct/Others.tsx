import { ProductType } from "../../Modules/TypesContext"
import RespImage from "../../Components/RespImage"
import ButtonLink from "../../Components/ButtonLink"
import { useProducts } from "../../Context/ProductsContext"
type PropTypes = {
  thisProduct: ProductType
}

function Others({ thisProduct }: PropTypes) {
  const { products } = useProducts()
  const others = thisProduct.others
  return (
    <div className=" mt-52">
      <h1 className="uppercase mb-12 text-3xl font-bold tracking-wider text-center">
        you may also like
      </h1>
      <div className="flex gap-6 flex-col md:flex-row">
        {others.map((other) => {
          const theProduct = products.find((pro) => pro.slug === other.slug)

          return (
            <div className="flex flex-col gap-8 items-center" key={other.slug}>
              <RespImage
                desktop={other.image.desktop}
                tablet={other.image.tablet}
                mobile={other.image.mobile}
                alt={`${other.name} image`}
                style="rounded-xl"
              />
              <h1 className="uppercase  text-2xl font-bold tracking-wider text-center">
                {other.name}
              </h1>

              <ButtonLink orange={true} product={theProduct} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Others
