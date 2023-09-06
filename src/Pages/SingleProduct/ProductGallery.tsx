import { ProductType } from "../../Modules/TypesContext"
import RespImage from "../../Components/RespImage"

type PropTypes = {
  thisProduct: ProductType
}

function ProductGallery({ thisProduct }: PropTypes) {
  const { first, second, third } = thisProduct.gallery
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-5 lg:gap-8 mt-16">
      <div className="flex flex-col gap-8">
        <RespImage
          desktop={first.desktop}
          tablet={first.tablet}
          mobile={first.mobile}
          alt={`${thisProduct.name} image`}
          style="rounded-xl w-full"
        />
        <RespImage
          desktop={second.desktop}
          tablet={second.tablet}
          mobile={second.mobile}
          alt={`${thisProduct.name} image`}
          style="rounded-xl w-full"
        />
      </div>
      <RespImage
        desktop={third.desktop}
        tablet={third.tablet}
        mobile={third.mobile}
        alt={`${thisProduct.name} image`}
        style="rounded-xl h-full w-full"
      />
    </div>
  )
}

export default ProductGallery
