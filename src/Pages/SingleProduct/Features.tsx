import { ProductType } from "../../Modules/TypesContext"

type PropTypes = {
  thisProduct: ProductType
}

function Features({ thisProduct }: PropTypes) {
  const includes = thisProduct.includes
  return (
    <div className=" flex-flex mt-20 lg:gap-36 gap-8">
      <div>
        <h1 className="text-3xl tracking-wider uppercase mb-6 font-bold">
          Features
        </h1>
        <p className="text-grayish max-w-xl whitespace-pre-line">
          {thisProduct.features}
        </p>
      </div>
      <div>
        <h1 className="text-3xl tracking-wider uppercase mb-6 font-bold">
          in the box
        </h1>
        <ul className="flex flex-col gap-2">
          {includes.map((bonus) => (
            <li key={bonus.item} className="flex gap-5">
              <span className="text-orange">{bonus.quantity}X</span>
              <p className="text-grayish capitalize">{bonus.item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Features
