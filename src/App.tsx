import Layout from "./Layouts/Layout"
import Home from "./Pages/Home"
import Category from "./Pages/Category/Category"
import SingleProduct from "./Pages/SingleProduct/SingleProduct"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProductsProvider } from "./Context/ProductsContext"

function App() {
  return (
    <div className="font-manrope">
      <ProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/:category" element={<Category />} />
              <Route path="/:category/:product" element={<SingleProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </div>
  )
}

export default App
