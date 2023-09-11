import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Header from "../Components/Hero/Header"
import ByOne from "../Components/ByOne/ByOne"
import AllProducts from "../Components/AllProducts/AllProducts"
import Bring from "../Components/Bring/Bring"
import Footer from "../Components/Footer/Footer"
import { useProducts } from "../Context/ProductsContext"
function Layout() {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const { cartIsOpen, mobileMenuIsOpen } = useProducts()

  console.log(!(mobileMenuIsOpen || cartIsOpen))

  useEffect(() => {
    if (cartIsOpen || mobileMenuIsOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [cartIsOpen, mobileMenuIsOpen])

  return (
    <>
      <Header />
      <Outlet />
      <AllProducts />
      {isHomePage && <ByOne />}
      <Bring />

      <div
        className={`absolute ${
          !(mobileMenuIsOpen || cartIsOpen) && "hidden"
        } fixed inset-0 h-[90vhs] bottom-0 top-24 w-full bg-black/30  cursor-pointer`}
      ></div>

      <Footer />
    </>
  )
}

export default Layout
