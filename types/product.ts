export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  category: string
  inStock: boolean
  description: string
}

export interface ZRExpressShipping {
  id: string
  type: "standard" | "express" | "same-day"
  name: string
  price: number
  estimatedDays: string
  description: string
}
