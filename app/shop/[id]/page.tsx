"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart, ArrowLeft } from "lucide-react"

const products = [
  {
    id: "1",
    name: "Atlas Mountain Wildflower Honey",
    price: 24.99,
    image: "https://cdn.shopify.com/s/files/1/0403/0041/3085/products/RawHoneycombJar_15874b68-e356-46a9-9278-2af2980a251f.png?v=1604420597",
    description: "Pure wildflower honey from the Atlas Mountains with a delicate floral taste. By IC GoldHoney.",
    weight: "500g",
    origin: "Atlas Mountains",
  },
  {
    id: "2",
    name: "Argan Blossom Honey",
    price: 34.99,
    image: "https://www.smileyhoney.com/cdn/shop/files/Honey_and_Comb_Combo-4469972_590x.jpg?v=1728558799",
    description: "Rare honey from argan tree blossoms with unique nutty undertones. By IC GoldHoney.",
    weight: "250g",
    origin: "Essaouira Region",
  },
  {
    id: "3",
    name: "Eucalyptus Honey",
    price: 28.99,
    image: "http://ashevillebeecharmer.com/wp-content/uploads/wildflower-honey-w-comb-1.jpg",
    description: "Refreshing eucalyptus honey with natural antiseptic properties. By IC GoldHoney.",
    weight: "500g",
    origin: "Middle Atlas",
  },
  {
    id: "4",
    name: "Orange Blossom Honey",
    price: 26.99,
    image: "https://cdn.shopify.com/s/files/1/0403/0041/3085/products/RawHoneycombJar_15874b68-e356-46a9-9278-2af2980a251f.png?v=1604420597",
    description: "Sweet citrus honey from orange groves with a bright, fresh flavor. By IC GoldHoney.",
    weight: "500g",
    origin: "Souss Valley",
  },
  {
    id: "5",
    name: "Thyme Honey",
    price: 32.99,
    image: "https://www.smileyhoney.com/cdn/shop/files/Honey_and_Comb_Combo-4469972_590x.jpg?v=1728558799",
    description: "Aromatic thyme honey with herbal notes and medicinal properties. By IC GoldHoney.",
    weight: "250g",
    origin: "High Atlas",
  },
  {
    id: "6",
    name: "Lavender Honey",
    price: 29.99,
    image: "http://ashevillebeecharmer.com/wp-content/uploads/wildflower-honey-w-comb-1.jpg",
    description: "Delicate lavender honey with a subtle floral aroma and calming properties. By IC GoldHoney.",
    weight: "500g",
    origin: "Middle Atlas",
  },
]

export default function SingleProductPage() {
  const router = useRouter()
  const params = useParams()
  const { id } = params
  const [product, setProduct] = useState<any>(null)
  const [isInCart, setIsInCart] = useState(false)
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    const found = products.find((p) => p.id === id)
    setProduct(found)
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    setIsInCart(cart.some((item: any) => item.id === id))
    const favs = JSON.parse(localStorage.getItem("favourites") || "[]")
    setIsFav(favs.some((item: any) => item.id === id))
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-gray-600">Product not found.</p>
      </div>
    )
  }

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

  const handleFavourite = () => {
    let favs = JSON.parse(localStorage.getItem("favourites") || "[]")
    if (isFav) {
      favs = favs.filter((item: any) => item.id !== product.id)
      setIsFav(false)
    } else {
      favs.push(product)
      setIsFav(true)
    }
    localStorage.setItem("favourites", JSON.stringify(favs))
    window.dispatchEvent(new Event("cart-fav-update"))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex flex-col items-center py-8 px-2">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 h-80 md:h-auto flex items-center justify-center bg-amber-50">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain w-full h-full p-8"
            priority
          />
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white"
            onClick={handleFavourite}
          >
            <Heart className={`h-6 w-6 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        </div>
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <Button
              variant="ghost"
              className="mb-4 flex items-center text-amber-600 hover:text-amber-800"
              onClick={() => router.push("/shop")}
            >
              <ArrowLeft className="h-5 w-5 mr-2" /> Back to Shop
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Badge className="bg-amber-100 text-amber-800">Weight: {product.weight}</Badge>
              <Badge className="bg-amber-100 text-amber-800">Origin: {product.origin}</Badge>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-3xl font-bold text-amber-600">${product.price}</span>
            </div>
          </div>
          <Button
            className="w-full bg-amber-600 hover:bg-amber-700 text-lg font-semibold py-4"
            onClick={handleAddToCart}
            disabled={isInCart}
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            {isInCart ? "Added to Cart" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  )
} 