import { ReactNode } from "react"

type Proptypes = {
  children?: ReactNode
  orange?: boolean
  style?: string
}

function Button({ children, orange = false, style }: Proptypes) {
  return (
    <button
      className={`${
        orange &&
        "hover:bg-transparent bg-orange border border-orange text-white hover:text-orange "
      } ${style} py-3 px-6 uppercase mt-6 md:mt-10 tracking-wider duration-300 ease-in-out`}
    >
      {children ? children : "See Product"}
    </button>
  )
}

export default Button
