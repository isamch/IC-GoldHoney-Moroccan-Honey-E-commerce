import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, Users, Award, Leaf } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Mountain className="h-8 w-8 text-amber-600" />,
      title: "Atlas Mountain Source",
      description:
        "Our honey is sourced exclusively from the pristine Atlas Mountains, where wildflowers bloom in abundance.",
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Local Beekeepers",
      description:
        "We work directly with traditional Moroccan beekeepers who have perfected their craft over generations.",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Premium Quality",
      description: "Every jar is tested for purity and quality, ensuring you receive only the finest Moroccan honey.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-amber-600" />,
      title: "Sustainable Practices",
      description: "We support sustainable beekeeping practices that protect both the environment and bee populations.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Hive Selection",
      description: "We carefully select hives in the most pristine locations of the Atlas Mountains.",
    },
    {
      step: "02",
      title: "Traditional Harvesting",
      description: "Our beekeepers use time-honored methods to harvest honey without harming the bees.",
    },
    {
      step: "03",
      title: "Natural Processing",
      description: "The honey is minimally processed to preserve its natural enzymes and nutrients.",
    },
    {
      step: "04",
      title: "Quality Testing",
      description: "Each batch undergoes rigorous testing to ensure purity and authenticity.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">🍯 Our Story</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Pure Honey from the Heart of
                <span className="text-amber-600"> Morocco</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                For generations, Moroccan beekeepers have harvested liquid gold from the Atlas Mountains. We continue
                this tradition, bringing you the purest, most authentic honey nature has to offer with IC GoldHoney.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://burtsrx.com/wp-content/uploads/2018/04/Bee-Products.jpg"
                alt="Bee products display"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose IC GoldHoney?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality, tradition, and sustainability sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">From Hive to Home</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how we bring you the finest Moroccan honey through our careful process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-amber-200 -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Commitment to Excellence</h2>
              <p className="text-lg text-gray-600">
                At IC GoldHoney, we believe that the best honey comes from the perfect harmony between nature, tradition,
                and modern quality standards. Every jar represents our dedication to preserving the authentic taste of
                Morocco while supporting local communities.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">100% pure and natural honey</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">No artificial additives or preservatives</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Sustainably sourced from local beekeepers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Rigorous quality testing and certification</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="https://smallscalefarms.ca/cdn/shop/collections/8_1200x1200.png?v=1605814079"
                alt="Honey jars and bottles collection"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
