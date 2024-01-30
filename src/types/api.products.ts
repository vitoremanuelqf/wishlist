export interface Size {
  code: string
  label: string
}

export interface Details {
  name: string
  description: string
  available: boolean
  visible: boolean
  size: Size
  sku: string
}

export interface ProductItem {
  code: string
  available: boolean
  visible: boolean
  details: Details
  image?: string
}

export interface ProductType {
  id: string
  name: string
}

export interface Brand {
  id: string
  name: string
}

export interface Department {
  id: string
  name: string
}

export interface Product {
  selectedProduct: string
  department: Department
  brand: Brand
  productType: ProductType
  name: string
  product: ProductItem
  stockAvailable: boolean
}

export interface Root {
  total: number
  pageSize: number
  totalPages: number
  products: Product[]
}
