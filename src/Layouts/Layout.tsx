import { Outlet, useLocation } from "react-router-dom"
import Header from "../Components/Hero/Header"
import ByOne from "../Components/ByOne/ByOne"
import AllProducts from "../Components/AllProducts/AllProducts"
import Bring from "../Components/Bring/Bring"
import Footer from "../Components/Footer/Footer"
import Cart from "../Components/Cart/Cart"
function Layout() {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  return (
    <>
      <Header />
      <div className="relative pb-12 md:pb-20">
        <Outlet />
        <AllProducts />
        {isHomePage && <ByOne />}
        <Bring />

        <div
          className={`absolute hidden inset-0 h-full w-full bg-black/30`}
        ></div>
        <Cart />
      </div>

      <Footer />
    </>
  )
}

export default Layout
