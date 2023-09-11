import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"
import {
  ProductsContextType,
  ProductType,
  inCartType,
} from "../Modules/TypesContext"

import data from "../../Data/data.json"

const ProductsContext = createContext<ProductsContextType | null>(null)

function ProductsProvider({ children }: { children: ReactNode }) {
  const [products] = useState<ProductType[]>(data.products)
  const [categoryList] = useState<string[]>([])
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  const [inCartProducts, setInCartProducts] =
    useState<inCartType[]>(storageGetProducts)

  useEffect(() => {
    localStorage.setItem("inCart", JSON.stringify(inCartProducts))
  }, [inCartProducts])

  /*   useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("http://localhost:8000/products")
        if (!res.ok) {
          throw new Error("Failed to fetch data")
        }
        const data: ProductType[] = await res.json()

        setProducts(data)
        const categories = new Set(data.map((product) => product.category))
        setCategoryList([...categories])
      } catch (e) {
        console.error("Error fetching data:", e)
      }
    }

    getProducts()
  }, []) */

  function storageGetProducts(): inCartType[] {
    const items = JSON.parse(localStorage.getItem("inCart") || "[]")
    return items
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        categoryList,
        inCartProducts,
        cartIsOpen,
        setCartIsOpen,
        setInCartProducts,
        mobileMenuIsOpen,
        setMobileMenuIsOpen,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

function useProducts() {
  const context = useContext(ProductsContext)
  if (context === null) {
    throw new Error("useProducts must be used within a ProductsProvider")
  }
  return context
}

export { ProductsProvider, useProducts }
