import ear from "/assets/home/desktop/image-earphones-yx1.jpg"
import eartb from "/assets/home/tablet/image-earphones-yx1.jpg"
import earmb from "/assets/home/mobile/image-earphones-yx1.jpg"
import speakerbig from "/assets/home/desktop/image-speaker-zx9.png"
import speakerbigtb from "/assets/home/tablet/image-speaker-zx9.png"
import speakerbigmb from "/assets/home/mobile/image-speaker-zx9.png"

import RespImage from "../RespImage"
import { useProducts } from "../../Context/ProductsContext"
import ButtonLink from "../ButtonLink"

function ByOne() {
  const { products } = useProducts()
  return (
    <section className="wrapper flex flex-col gap-10  mt-32">
      <div className="bg-orange flex flex-col gap-12 lg:grid lg:grid-cols-2 px-4 md:px-10 pb-12 pt-16 lg:py-36 relative overflow-hidden rounded-xl ">
        <div className="  w-1/2 mx-auto max-w-[14rem] lg:mx-0 lg:absolute lg:-bottom-3 lg:left-24 lg:max-w-[25rem] z-10">
          <RespImage
            mobile={speakerbigmb}
            desktop={speakerbig}
            alt={"Speaker Image"}
            tablet={speakerbigtb}
            style="mx-auto h-full "
          ></RespImage>
        </div>
        <Circles styles="absolute lg:-left-44  md:-top-64 md:-left-28 -top-72 -left-72 scale-[70%] md:scale-100" />

        <div className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-start lg:col-start-2  text-white lg:relative lg:ml-14">
          <h1 className="text-5xl uppercase lg:font-bold lg:text-6xl">
            ZX9 <br></br>Speaker
          </h1>
          <p className="max-w-xs  ">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          {products && (
            <ButtonLink
              product={products.find((pro) => pro.name === "ZX9 Speaker")}
              style="bg-black hover:opacity-80"
            />
          )}
        </div>
      </div>

      <div className="relative h-[21rem] rounded-xl flex items-center overflow-hidden bg-speaker-mobile  bg-center bg-cover bg-no-repeat px-6 md:bg-speaker-tablet lg:bg-speaker-desktop">
        <div className=" flex flex-col gap-6 items-start">
          <h1 className="uppercase font-bold text-4xl">ZX7 Speaker</h1>
          {products && (
            <ButtonLink
              product={products.find((pro) => pro.name === "ZX7 Speaker")}
              style="bg-transparent text-black border border-black hover:bg-black hover:text-white "
            />
          )}
        </div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">
        <RespImage
          mobile={earmb}
          desktop={ear}
          alt={"Speaker Image"}
          tablet={eartb}
          style="mx-auto h-full w-full rounded-xl "
        ></RespImage>
        <div className="bg-white-gray px-6 py-14 flex flex-col gap-8 items-start rounded-xl lg:px-14 lg:py-24">
          <h1 className="uppercase font-bold text-4xl tracking-wider">
            YX1 Earphones
          </h1>
          {products && (
            <ButtonLink
              product={products.find((pro) => pro.id === 1)}
              style="bg-transparent text-black border border-black hover:bg-black hover:text-white "
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default ByOne

function Circles({ styles }: { styles?: string }) {
  return (
    <svg
      width="944"
      height="944"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles}`}
    >
      <g stroke="#FFF" fill="none" fillRule="evenodd" opacity=".202">
        <circle cx="472" cy="472" r="235.5" />
        <circle cx="472" cy="472" r="270.5" />
        <circle cx="472" cy="472" r="471.5" />
      </g>
    </svg>
  )
}
