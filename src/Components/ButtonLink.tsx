import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { ProductType } from "../Modules/TypesContext"

type Proptypes = {
  children?: ReactNode
  orange?: boolean
  style?: string
  product?: ProductType
}

function ButtonLink({ children, orange = false, style, product }: Proptypes) {
  const { category, slug } = product || {}
  console.log(category, slug)
  return (
    <>
      <Link to={`/${category}/${slug}`}>
        <button
          className={`${
            orange &&
            "bg-orange  border border-orange text-white hover:bg-transparent hover:text-orange "
          } ${style} z-50 py-3 px-6 uppercase cursor-pointer  tracking-wider duration-300 ease-in-out`}
        >
          {children ? children : "See Product"}
        </button>
      </Link>
    </>
  )
}

export default ButtonLink
