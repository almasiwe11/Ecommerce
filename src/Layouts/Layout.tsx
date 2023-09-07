import { Outlet, useLocation } from "react-router-dom"
import { useState } from "react"
import Header from "../Components/Hero/Header"
import ByOne from "../Components/ByOne/ByOne"
import AllProducts from "../Components/AllProducts/AllProducts"
import Bring from "../Components/Bring/Bring"
import Footer from "../Components/Footer/Footer"
import Cart from "../Components/Cart/Cart"
function Layout() {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const [cartIsOpen, setCartIsOpen] = useState(false)
  return (
    <>
      <Header cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
      <div className="relative pb-12 md:pb-20">
        <Outlet />
        <AllProducts />
        {isHomePage && <ByOne />}
        <Bring />

        <div
          className={`absolute ${
            !cartIsOpen && "hidden"
          } inset-0 h-full w-full bg-black/30 cursor-pointer`}
        ></div>
        {cartIsOpen && <Cart setCartIsOpen={setCartIsOpen} />}
      </div>

      <Footer />
    </>
  )
}

export default Layout
