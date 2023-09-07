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
  return (
    <>
      <Link to={`/${category}/${slug}`}>
        <button
          className={`${
            orange &&
            "hover:bg-transparent bg-orange border border-orange text-white hover:text-orange "
          } ${style} py-3 px-6 uppercase  tracking-wider duration-300 ease-in-out`}
        >
          {children ? children : "See Product"}
        </button>
      </Link>
    </>
  )
}

export default ButtonLink
