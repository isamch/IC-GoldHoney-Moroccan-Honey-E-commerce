"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Heart, Share2 } from "lucide-react"
import Link from "next/link"

interface ProductShowcaseProps {
  product: {
    id: string
    name: string
    price: number
    image: string
    description: string
    weight: string
    origin: string
    rating: number
    reviews: number
  }
}

export default function ProductShowcase({ product }: ProductShowcaseProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isInCart, setIsInCart] = useState(false)

  // Check if product is in favorites or cart on mount
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites") || "[]")
    setIsLiked(favs.some((item: any) => item.id === product.id))
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    setIsInCart(cart.some((item: any) => item.id === product.id))
  }, [product.id])

  // Add or remove from favorites
  const handleFavorite = () => {
    let favs = JSON.parse(localStorage.getItem("favourites") || "[]")
    if (isLiked) {
      favs = favs.filter((item: any) => item.id !== product.id)
      setIsLiked(false)
    } else {
      favs.push(product)
      setIsLiked(true)
    }
    localStorage.setItem("favourites", JSON.stringify(favs))
    window.dispatchEvent(new Event("cart-fav-update"))
  }

  // Add to cart
  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const existing = cart.find((item: any) => item.id === product.id)
    if (existing) {
      existing.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    setIsInCart(true)
    window.dispatchEvent(new Event("cart-fav-update"))
  }

  return (
    <Link href={`/shop/${product.id}`} className="block group">
      <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer">
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay with actions */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
              <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/90 hover:bg-white"
                  onClick={e => { e.preventDefault(); e.stopPropagation(); handleFavorite(); }}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
                <Button variant="secondary" size="icon" className="bg-white/90 hover:bg-white">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Premium Badge */}
            {product.price > 30 && (
              <Badge className="absolute top-4 left-4 bg-amber-500 hover:bg-amber-600">Premium</Badge>
            )}
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                {product.name}
              </h3>
              <span className="text-2xl font-bold text-amber-600">${product.price}</span>
            </div>

            <p className="text-gray-600 mb-3 text-sm line-clamp-2">{product.description}</p>

            <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
              <span>Weight: {product.weight}</span>
              <span>•</span>
              <span>Origin: {product.origin}</span>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
            </div>

            <Button
              className="w-full bg-amber-600 hover:bg-amber-700 group-hover:bg-amber-700 transition-colors"
              onClick={e => { e.preventDefault(); e.stopPropagation(); handleAddToCart(); }}
              disabled={isInCart}
            >
              {isInCart ? "Added to Cart" : "Add to Cart"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
