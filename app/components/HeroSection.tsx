"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Truck, Shield, Award, ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    {
      src: "https://cdn.foreverliving.com/content/products/images/forever_bee_honey__pd_main_512_X_512_1718747712759.jpg",
      alt: "Forever Bee Honey bottle",
      title: "Pure Bee Honey",
      subtitle: "Natural sweetness for your family",
    },
    {
      src: "https://5.imimg.com/data5/IOS/Default/2024/9/454681614/JJ/BH/CF/8127926/product-jpeg-500x500.png",
      alt: "Honey product jar",
      title: "Golden Honey Jar",
      subtitle: "Enjoy the taste of real honey",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/18/04/ed/9b/so-many-honey-products.jpg",
      alt: "Variety of honey products",
      title: "So Many Honey Products",
      subtitle: "A selection for every taste",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-20 overflow-hidden min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="space-y-4">
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 animate-pulse">
                🍯 Premium Moroccan Honey
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                {heroImages[currentSlide].title.split(" ").map((word, index) => (
                  <span key={index} className={index >= 3 ? "text-amber-600" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {heroImages[currentSlide].subtitle}. Harvested by local beekeepers using traditional methods passed down
                through generations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 transform hover:scale-105 transition-all"
              >
                <Link href="/shop">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group bg-transparent">
                <Link href="/about">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Our Story
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2 group">
                <Truck className="h-5 w-5 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-600">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Shield className="h-5 w-5 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-600">100% Natural</span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Award className="h-5 w-5 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-600">Premium Quality</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-2xl">
              <Image
                src={heroImages[currentSlide].src || "/placeholder.svg"}
                alt={heroImages[currentSlide].alt}
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl transition-all duration-1000 hover:scale-105"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-orange-200 rounded-full opacity-20 animate-pulse delay-1000"></div>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-white shadow-lg" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f59e0b' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </section>
  )
}
