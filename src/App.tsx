import Layout from "./Layouts/Layout"
import Home from "./Pages/Home"
import Headphones from "./Pages/Headphones/Headphones"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { ProductsProvider } from "./Context/ProductsContext"

function App() {
  return (
    <div className="font-manrope">
      <ProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </div>
  )
}

export default App
