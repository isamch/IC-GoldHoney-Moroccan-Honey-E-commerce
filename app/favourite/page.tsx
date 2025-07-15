"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"

export default function FavouritePage() {
  const [favourites, setFavourites] = useState<any[]>([])

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites") || "[]")
    setFavourites(favs)
  }, [])

  const removeFavourite = (id: string) => {
    const newFavs = favourites.filter((item) => item.id !== id)
    setFavourites(newFavs)
    localStorage.setItem("favourites", JSON.stringify(newFavs))
    window.dispatchEvent(new Event("cart-fav-update"))
  }

  const addToCart = (product: any) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const existing = cart.find((item: any) => item.id === product.id)
    if (existing) {
      existing.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    window.dispatchEvent(new Event("cart-fav-update"))
  }

  if (favourites.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Heart className="h-24 w-24 text-gray-300 mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">No Favourites Yet</h1>
        <p className="text-xl text-gray-600 mb-8">Add products to your favourites to see them here.</p>
        <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
          <Link href="/shop">Browse Products</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Favourites</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favourites.map((product) => (
            <Card key={product.id} className="bg-white">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span>Weight: {product.weight}</span>
                    <span>Origin: {product.origin}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">${product.price}</span>
                    <div className="flex space-x-2">
                      <Button size="icon" variant="outline" onClick={() => addToCart(product)}>
                        <ShoppingCart className="h-5 w-5" />
                      </Button>
                      <Button size="icon" variant="outline" onClick={() => removeFavourite(product.id)}>
                        <Trash2 className="h-5 w-5 text-red-500" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 