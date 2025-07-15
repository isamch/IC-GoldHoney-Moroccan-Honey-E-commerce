"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ImageGallery() {
  const [currentImage, setCurrentImage] = useState(0)

  const galleryImages = [
    {
      src: "https://cdn.foreverliving.com/content/products/images/forever_bee_honey__pd_main_512_X_512_1718747712759.jpg",
      alt: "Forever Bee Honey bottle",
      title: "Pure Bee Honey",
      description: "Natural sweetness for your family.",
    },
    {
      src: "https://5.imimg.com/data5/IOS/Default/2024/9/454681614/JJ/BH/CF/8127926/product-jpeg-500x500.png",
      alt: "Honey product jar",
      title: "Golden Honey Jar",
      description: "Enjoy the taste of real honey.",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/18/04/ed/9b/so-many-honey-products.jpg",
      alt: "Variety of honey products",
      title: "So Many Honey Products",
      description: "A selection for every taste.",
    },
    {
      src: "https://media.istockphoto.com/id/177791359/photo/honey-and-pollen.jpg?s=612x612&w=0&k=20&c=TqcfI9YPf-iviib3P3DSIHJNpCtVz_IlAUTKnWKO5OY=",
      alt: "Honey and pollen",
      title: "Honey and Pollen",
      description: "Honey with natural pollen for extra nutrition.",
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 mb-4">📸 Our Story in Pictures</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">From Mountains to Your Table</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the journey of our honey from the pristine Atlas Mountains to your home.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src={galleryImages[currentImage].src || "/placeholder.svg"}
                  alt={galleryImages[currentImage].alt}
                  fill
                  className="object-cover"
                />

                {/* Navigation Buttons */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>

                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{galleryImages[currentImage].title}</h3>
                  <p className="text-white/90">{galleryImages[currentImage].description}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImage ? "bg-amber-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
