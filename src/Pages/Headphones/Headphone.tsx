import Button from "../../Components/Button"
import RespImage from "../../Components/RespImage"
import { ProductType } from "../../Modules/TypesContext"
function Headphone({
  headphone,
  index,
}: {
  headphone: ProductType
  index: number
}) {
  let odd = false
  if (index % 2 === 1) odd = true

  return (
    <div className="flex flex-col gap-12 lg:gap-20 lg:grid lg:grid-cols-2 mt-24 wrapper ">
      <div className={`w-full ${odd && "lg:order-2"}`}>
        <RespImage
          desktop={headphone.categoryImage.desktop}
          mobile={headphone.categoryImage.mobile}
          tablet={headphone.categoryImage.tablet}
          alt={`${headphone.name} image`}
          style="rounded-xl w-full "
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left gap-8">
        {headphone.new && (
          <span className="text-orange uppercase tracking-[9px]">
            new product
          </span>
        )}

        <h1 className="font-big">{headphone.name}</h1>
        <p className="text-grayish">{headphone.description}</p>
        <Button orange={true} />
      </div>
    </div>
  )
}

export default Headphone
