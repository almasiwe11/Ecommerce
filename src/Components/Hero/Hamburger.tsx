import { Dispatch, SetStateAction } from "react"

type PropTypes = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  style: string
}

function Hamburger({ setIsOpen, isOpen, style }: PropTypes) {
  return (
    <button
      type="button"
      className={`z-40 block hamburger group lg:hidden focus:outline-none ${
        isOpen && "open"
      } `}
      onClick={() => setIsOpen((prev: boolean) => !prev)}
    >
      <span className={`${style} hamburger-top`}></span>
      <span className={`${style} hamburger-middle`}></span>
      <span className={`${style} hamburger-bottom`}></span>
    </button>
  )
}

export default Hamburger
