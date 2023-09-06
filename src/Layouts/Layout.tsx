import { Outlet } from "react-router-dom"
import Header from "../Components/Hero/Header"
import AllProducts from "../Components/AllProducts/AllProducts"
import Bring from "../Components/Bring/Bring"
import Footer from "../Components/Footer/Footer"
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <AllProducts />
      <Bring />
      <Footer />
    </div>
  )
}

export default Layout
