import { ReactNode } from "react"
import { Link } from "react-router-dom"

type Proptypes = {
  children?: ReactNode
  orange?: boolean
  style?: string
  sendHere?: string
  addCart: boolean
}

function ButtonLink({
  children,
  orange = false,
  style,
  sendHere,
  addCart = false,
}: Proptypes) {
  return (
    <>
      {addCart ? (
        <button
          className={`${
            orange &&
            "hover:bg-transparent bg-orange border border-orange text-white hover:text-orange "
          } ${style} py-3 px-6 uppercase  tracking-wider duration-300 ease-in-out`}
        >
          {children ? children : "See Product"}
        </button>
      ) : (
        <Link to={`${sendHere}`}>
          <button
            className={`${
              orange &&
              "hover:bg-transparent bg-orange border border-orange text-white hover:text-orange "
            } ${style} py-3 px-6 uppercase mt-6 md:mt-10 tracking-wider duration-300 ease-in-out`}
          >
            {children ? children : "See Product"}
          </button>
        </Link>
      )}
    </>
  )
}

export default ButtonLink
