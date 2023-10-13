import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProductsProvider } from "./Context/ProductsContext"
import { Suspense, lazy } from "react"
import Fallback from "./Components/Fallback"

const Home = lazy(() => import("./Pages/Home"))
const Layout = lazy(() => import("./Layouts/Layout"))
const Category = lazy(() => import("./Pages/Category/Category"))
const SingleProduct = lazy(() => import("./Pages/SingleProduct/SingleProduct"))
const CheckoutLayout = lazy(() => import("./Pages/Checkout/CheckoutLayout"))

function App() {
  return (
    <div className="font-manrope">
      <ProductsProvider>
        <BrowserRouter>
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/:category" element={<Category />} />
                <Route path="/:category/:product" element={<SingleProduct />} />
              </Route>
              <Route path="/checkout" element={<CheckoutLayout />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ProductsProvider>
    </div>
  )
}

export default App
