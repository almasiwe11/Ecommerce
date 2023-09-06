import { useState } from "react"
import Hamburger from "./Hamburger"
import Logo from "../Svgs/Logo"
import NavMenu from "../NavMenu"
import Cart from "../Svgs/Cart"
import { useLocation } from "react-router"
function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pages: string[] = ["home", "headphones", "speakers", "earphones"]
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  return (
    <div className={`${isHomePage ? "wrapper" : "bg-black"}`}>
      <section className={`wrapper  ${isHomePage && "absolute"}`}>
        <div className="flex items-center   py-8 md:py-10">
          <div className="flex w-full justify-between md:justify-normal">
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

            <Cart style={"group-hover:fill-orange duration-300 ease-in-out "} />
          </div>
        </div>
        <div className=" border border-grayish absolute -left-[5.5%] w-[100vw] lg:left-0 lg:w-full "></div>
      </section>
    </div>
  )
}

export default Header
