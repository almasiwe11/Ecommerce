import ArrowRight from "../Svgs/ArrowRight"
import { Link } from "react-router-dom"
function CategoryProduct({
  img,
  alt,
  product,
}: {
  img: string
  alt: string
  product: string
}): JSX.Element {
  return (
    <Link
      to={`/${product}`}
      className=" bg-white-gray  flex flex-col items-center rounded-lg  relative  w-full shadow-sm cursor-pointer "
    >
      <img
        src={img}
        alt={alt}
        className="max-h-[10rem] md:max-h-[12rem] lg:max-h-[14rem] absolute -top-14 lg:-top-24 duration-300 ease-in-out hover:-translate-y-5 cursor-pointer"
      />
      <div className="flex flex-col items-center pt-24 pb-4 uppercase">
        <h1 className="font-semibold tracking-wider mb-4">{product}</h1>
        <button className="uppercase flex items-center gap-3 cursor-pointer">
          <span>shop</span>
          <ArrowRight />
        </button>
      </div>
    </Link>
  )
}

export default CategoryProduct
