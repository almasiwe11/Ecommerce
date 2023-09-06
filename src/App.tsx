import AllProducts from "./Components/AllProducts/AllProducts"
import ByOne from "./Components/ByOne/ByOne"
import Hero from "./Components/Hero/Hero"
import Bring from "./Components/Bring/Bring"
import Footer from "./Components/Footer/Footer"
import Layout from "./Layouts/Layout"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { ProductsProvider } from "./Context/ProductsContext"

function App() {
  return (
    <div className="font-manrope">
      <ProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}></Route>

            <Hero />
            <ByOne />
            <AllProducts />
            <Bring />
            <Footer />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </div>
  )
}

export default App
