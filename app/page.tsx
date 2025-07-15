import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ArrowRight } from "lucide-react"
import ImageGallery from "./components/ImageGallery"
import ProductShowcase from "./components/ProductShowcase"
import HeroSection from "./components/HeroSection"

export default function Home() {
  const featuredProducts = [
    {
      id: "1",
      name: "Atlas Mountain Wildflower Honey",
      price: 24.99,
      image: "https://www.factssa.com/wp-content/uploads/2018/10/FACTS-honey-types-WEB.jpg",
      description: "Pure wildflower honey from the Atlas Mountains with a delicate floral taste and natural sweetness.",
      weight: "500g",
      origin: "Atlas Mountains",
      rating: 4.9,
      reviews: 127,
    },
    {
      id: "2",
      name: "Argan Blossom Honey",
      price: 34.99,
      image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324966/raw-honey-vs-regular-honey-on-table.jpg",
      description: "Rare honey from argan tree blossoms with unique nutty undertones and exceptional purity.",
      weight: "250g",
      origin: "Essaouira Region",
      rating: 4.8,
      reviews: 89,
    },
    {
      id: "3",
      name: "Eucalyptus Honey",
      price: 28.99,
      image: "https://theolivehive.com/cdn/shop/files/Screenshot2024-03-17182850.png?v=1710714547&width=1946",
      description: "Refreshing eucalyptus honey with natural antiseptic properties and cooling sensation.",
      weight: "500g",
      origin: "Middle Atlas",
      rating: 4.7,
      reviews: 156,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "The most delicious honey I've ever tasted! Pure and authentic.",
      location: "New York, USA",
    },
    {
      name: "Ahmed Hassan",
      rating: 5,
      comment: "Reminds me of my childhood in Morocco. Absolutely authentic!",
      location: "London, UK",
    },
    {
      name: "Maria Garcia",
      rating: 5,
      comment: "Perfect for my morning tea. The quality is exceptional.",
      location: "Barcelona, Spain",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular honey varieties from IC GoldHoney, each with its unique flavor profile and health benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductShowcase key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers who love our authentic Moroccan honey from IC GoldHoney.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <ImageGallery />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Taste the Authentic Morocco?</h2>
          <p className="text-xl mb-8 opacity-90">
            Order now and get free shipping on orders over $50. Experience the pure taste of Atlas Mountain honey with IC GoldHoney.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100">
            <Link href="/shop">
              Start Shopping <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
