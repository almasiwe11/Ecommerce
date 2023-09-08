import { useState, useRef } from "react"
import Hamburger from "./Hamburger"
import Logo from "../Svgs/Logo"
import NavMenu from "../NavMenu"
import CartIcon from "../Svgs/CartIcon"
import { useLocation } from "react-router"
import { useParams } from "react-router"
import Cart from "../Cart/Cart"
import { useProducts } from "../../Context/ProductsContext"

function Header({}): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pages: string[] = ["home", "headphones", "speakers", "earphones"]
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const { product } = useParams()
  const { cartIsOpen } = useProducts()
  const iconRef = useRef<SVGSVGElement | null>(null)
  return (
    <div
      className={` lg:border-0 z-50  ${!isHomePage && "bg-black "} ${
        !product && "border-b z-50 border-grayish "
      }`}
    >
      <section className={`wrapper z-50  `}>
        <div className="flex items-center z-50  py-8 md:py-10">
          <div className="flex z-50 w-full justify-between md:justify-normal">
            <Hamburger
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              style={"group-hover:bg-orange bg-white"}
            />
            <div className="md:ml-16 md:mr-auto lg:ml-0 lg:mr-0 ">
              <Logo />
            </div>

            <NavMenu
              list={pages}
              ulStyle="gap-8 uppercase hidden lg:flex ml-[17%] mr-auto "
              liStyle="hover:text-orange ease-in-out duration-300"
            ></NavMenu>

            <CartIcon
              style={"group-hover:fill-orange duration-300 ease-in-out "}
              iconRef={iconRef}
            />
          </div>
        </div>
        <div
          className={`${!product && "border-grayish lg:border z-50 "}`}
        ></div>
        {cartIsOpen && <Cart iconRef={iconRef} />}
      </section>
    </div>
  )
}

export default Header
