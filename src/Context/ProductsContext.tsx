import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"
import ProductsContextType from "../Modules/TypesContext"

const ProductsContext = createContext<ProductsContextType[] | null>(null)

function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<ProductsContextType[]>([])

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("http://localhost:8000/products")
        if (!res.ok) {
          throw new Error("Failed to fetch data")
        }
        const data = await res.json()

        setProducts(data)
      } catch (e) {
        console.error("Error fetching data:", e)
      }
    }

    getProducts()
  }, [])

  return (
    <ProductsContext.Provider value={products}>
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
