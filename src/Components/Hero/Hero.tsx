/* import Button from "../Button" */
function Hero(): JSX.Element {
  return (
    <div className="font-manrope bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop md:h-screen h-[40rem] w-screen bg-contain bg-fill md:bg-cover bg-center bg-no-repeat ">
      <div className="flex flex-col items-center wrapper text-center lg:text-left lg:items-start text-white  mt-28 md:mt-56 px-6 lg:px-0   ">
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
        <button className="bg-orange border border-orange py-3 px-6 uppercase mt-6 md:mt-10 tracking-wider duration-300 ease-in-out hover:bg-transparent ">
          See Product
        </button>
      </div>
    </div>
  )
}

export default Hero
