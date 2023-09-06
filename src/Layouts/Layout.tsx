import { Outlet, useLocation } from "react-router-dom"
import Header from "../Components/Hero/Header"
import ByOne from "../Components/ByOne/ByOne"
import AllProducts from "../Components/AllProducts/AllProducts"
import Bring from "../Components/Bring/Bring"
import Footer from "../Components/Footer/Footer"
function Layout() {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  return (
    <>
      <Header />
      <Outlet />
      <AllProducts />
      {isHomePage && <ByOne />}
      <Bring />
      <Footer />
    </>
  )
}

export default Layout
