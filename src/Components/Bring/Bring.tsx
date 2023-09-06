import best from "/assets/shared/desktop/image-best-gear.jpg"
import bestmb from "/assets/shared/mobile/image-best-gear.jpg"
import besttb from "/assets/shared/tablet/image-best-gear.jpg"

import RespImage from "../RespImage"

function Bring() {
  return (
    <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 wrapper mt-32">
      <div className="flex flex-col text-center lg:text-left justify-center gap-8 lg:pr-16 order-1 lg:-order-1  ">
        <h1 className="uppercase text-3xl lg:text-4xl tracking-wider font-bold ">
          Bring you the <span className="text-orange"> best</span> audio gear
        </h1>
        <p className="text-grayish">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <RespImage
        mobile={bestmb}
        desktop={best}
        tablet={besttb}
        alt="image of a person listening to music"
        style="w-full rounded-xl "
      />
    </div>
  )
}

export default Bring
