type ProductType = {
  id: number
  cart: string
  slug: string
  name: string
  image: {
    mobile: string
    tablet: string
    desktop: string
  }
  category: string
  categoryImage: {
    mobile: string
    tablet: string
    desktop: string
  }
  new: boolean
  price: number
  description: string
  features: string
  includes: {
    quantity: number
    item: string
  }[]
  gallery: {
    first: {
      mobile: string
      tablet: string
      desktop: string
    }
    second: {
      mobile: string
      tablet: string
      desktop: string
    }
    third: {
      mobile: string
      tablet: string
      desktop: string
    }
  }
  others: {
    slug: string
    name: string
    image: {
      mobile: string
      tablet: string
      desktop: string
    }
  }[]
}

type inCartType = {
  name: string
  image: string
  price: number
  amount: number
}

type ProductsContextType = {
  products: ProductType[]
  categoryList: string[]
  inCartProducts: inCartType[]
  setInCartProducts: React.Dispatch<React.SetStateAction<inCartType[]>>
}

export type { ProductsContextType, ProductType, inCartType }
