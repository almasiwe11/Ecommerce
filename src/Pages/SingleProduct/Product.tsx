import RespImage from "../../Components/RespImage"
import AmountInput from "./AmountInput"
import { ProductType } from "../../Modules/TypesContext"
import ButtonAddCart from "../../Components/ButtonAddCart"

type PropTypes = {
  amount: number
  setAmount: React.Dispatch<React.SetStateAction<number>>
  thisProduct: ProductType
}

function Product({ thisProduct, amount, setAmount }: PropTypes) {
  return (
    <div className="flex flex-col gap-10 md:gap-0 md:grid md:grid-cols-2 mt-10 ">
      <RespImage
        desktop={thisProduct.image.desktop}
        mobile={thisProduct.image.mobile}
        tablet={thisProduct.image.mobile}
        alt={`${thisProduct.name} image`}
        style="rounded-xl"
      />

      <div className="flex flex-col gap-6 justify-center md:pl-12 lg:pl-32">
        <h5 className="text-orange uppercase tracking-[8px]">
          {thisProduct.new && "new product"}
        </h5>
        <h1 className="font-big font-bold">{thisProduct.name}</h1>
        <p className="text-grayish">{thisProduct.description}</p>
        <h2 className="font-bold text-xl">$ {thisProduct.price}</h2>

        <div className="flex  items-center gap-5">
          <AmountInput amount={amount} setAmount={setAmount} />
          <ButtonAddCart amount={amount} thisProduct={thisProduct} />
        </div>
      </div>
    </div>
  )
}

export default Product
