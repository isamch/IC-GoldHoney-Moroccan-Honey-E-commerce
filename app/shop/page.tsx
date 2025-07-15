"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Filter, Heart } from "lucide-react"
import Link from "next/link"

export default function Shop() {
  const [sortBy, setSortBy] = useState("name")
  const [filterBy, setFilterBy] = useState("all")
  const [cart, setCart] = useState<any[]>([])
  const [favourites, setFavourites] = useState<any[]>([])

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"))
    setFavourites(JSON.parse(localStorage.getItem("favourites") || "[]"))
    function updateCounts() {
      setCart(JSON.parse(localStorage.getItem("cart") || "[]"))
      setFavourites(JSON.parse(localStorage.getItem("favourites") || "[]"))
    }
    window.addEventListener("cart-fav-update", updateCounts)
    return () => window.removeEventListener("cart-fav-update", updateCounts)
  }, [])

  const products: any[] = [
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

  const handleAddToCart = (product: any) => {
    let newCart = [...cart]
    const existing = newCart.find((item) => item.id === product.id)
    if (existing) {
      existing.quantity += 1
    } else {
      newCart.push({ ...product, quantity: 1 })
    }
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
    window.dispatchEvent(new Event("cart-fav-update"))
  }

  const handleFavourite = (product: any) => {
    let newFavs = [...favourites]
    const exists = newFavs.find((item) => item.id === product.id)
    if (exists) {
      newFavs = newFavs.filter((item) => item.id !== product.id)
    } else {
      newFavs.push(product)
    }
    setFavourites(newFavs)
    localStorage.setItem("favourites", JSON.stringify(newFavs))
    window.dispatchEvent(new Event("cart-fav-update"))
  }

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
      default:
        return a.name.localeCompare(b.name)
    }
  })

  const filteredProducts = sortedProducts.filter((product) => {
    if (filterBy === "all") return true
    if (filterBy === "premium") return product.price > 30
    if (filterBy === "regular") return product.price <= 30
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Honey Collection</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of natural Moroccan honey from IC GoldHoney, each jar telling a story of tradition and purity.
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="regular">Under $30</SelectItem>
                <SelectItem value="premium">Premium ($30+)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isInCart = cart.some((item) => item.id === product.id)
            const isFav = favourites.some((item) => item.id === product.id)
            return (
              <Link key={product.id} href={`/shop/${product.id}`} className="block group">
                <Card className="group hover:shadow-xl transition-shadow duration-300 bg-white cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.price > 30 && (
                        <Badge className="absolute top-4 left-4 bg-amber-500 hover:bg-amber-600">Premium</Badge>
                      )}
                      <Button
                        variant="secondary"
                        size="icon"
                        className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                        onClick={e => { e.preventDefault(); e.stopPropagation(); handleFavourite(product); }}
                      >
                        <Heart className={`h-5 w-5 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
                      </Button>
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
                        <Button
                          onClick={e => { e.preventDefault(); e.stopPropagation(); handleAddToCart(product); }}
                          className="bg-amber-600 hover:bg-amber-700"
                          disabled={isInCart}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {isInCart ? "Added to Cart" : "Add to Cart"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
