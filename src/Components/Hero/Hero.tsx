import { useProducts } from "../../Context/ProductsContext"
import ButtonLink from "../ButtonLink"

/* import Button from "../Button" */
function Hero(): JSX.Element {
  const { products } = useProducts()
  const heroProduct = products.find((pro) => pro.id === 4)!
  return (
    <div className="h-[31rem] md:h-screen z-20   ">
      <div className="absolute top-0 -z-10  md:inset-0 font-manrope bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop h-[35rem] md:h-screen  w-screen bg-contain bg-fill md:bg-cover bg-center bg-no-repeat "></div>

      <div className="flex flex-col items-center wrapper text-center lg:text-left lg:items-start text-white  pt-14 md:pt-5 lg:pt-[8%] px-6 lg:px-0   ">
        <p className="uppercase tracking-[8px]  text-xl text-grayish ">
          new product
        </p>

        <h1 className="text-4xl md:text-6xl tracking-wider mt-4 mb-6 md:mt-6 md:mb-8 font-bold uppercase max-w-sm md:max-w-lg ">
          XX99 mark ii headphones
        </h1>

        <p className="max-w-sm ">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <div className="z-30 ">
          {heroProduct && (
            <ButtonLink product={heroProduct} orange={true} style="mt-8 " />
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
