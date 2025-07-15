import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      date: "March 15, 2024",
      title: "Absolutely Amazing!",
      comment:
        "This is hands down the best honey I've ever tasted. The Atlas Mountain Wildflower variety has such a unique and complex flavor profile. You can really taste the difference quality makes. Will definitely be ordering more!",
      verified: true,
      product: "Atlas Mountain Wildflower Honey",
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      location: "London, UK",
      rating: 5,
      date: "March 10, 2024",
      title: "Reminds me of home",
      comment:
        "As someone who grew up in Morocco, I can confirm this honey is absolutely authentic. The taste brings back childhood memories of visiting my grandmother in the Atlas Mountains. IC GoldHoney has captured the true essence of Moroccan honey.",
      verified: true,
      product: "Argan Blossom Honey",
    },
    {
      id: 3,
      name: "Maria Garcia",
      location: "Barcelona, Spain",
      rating: 5,
      date: "March 8, 2024",
      title: "Perfect for my morning routine",
      comment:
        "I add this honey to my morning tea every day, and it has become an essential part of my routine. The eucalyptus honey has such a refreshing taste and I love knowing it's completely natural and pure.",
      verified: true,
      product: "Eucalyptus Honey",
    },
    {
      id: 4,
      name: "James Wilson",
      location: "Toronto, Canada",
      rating: 5,
      date: "March 5, 2024",
      title: "Exceptional quality",
      comment:
        "The packaging was excellent and the honey arrived in perfect condition. The orange blossom variety has such a bright, citrusy flavor that's unlike anything I've tried before. Customer service was also top-notch.",
      verified: true,
      product: "Orange Blossom Honey",
    },
    {
      id: 5,
      name: "Emma Thompson",
      location: "Sydney, Australia",
      rating: 5,
      date: "March 2, 2024",
      title: "Worth every penny",
      comment:
        "Initially hesitant about the price, but after tasting this honey, I understand why it costs more. The quality is exceptional and you can taste the difference immediately. The thyme honey has incredible depth of flavor.",
      verified: true,
      product: "Thyme Honey",
    },
    {
      id: 6,
      name: "Pierre Dubois",
      location: "Paris, France",
      rating: 5,
      date: "February 28, 2024",
      title: "Magnifique!",
      comment:
        "C'est vraiment du miel exceptionnel! The lavender honey is so delicate and aromatic. I use it in my baking and it elevates every recipe. Fast shipping to France and beautifully packaged.",
      verified: true,
      product: "Lavender Honey",
    },
    {
      id: 7,
      name: "Lisa Chen",
      location: "Singapore",
      rating: 4,
      date: "February 25, 2024",
      title: "Great honey, minor packaging issue",
      comment:
        "The honey itself is fantastic - pure, natural, and delicious. Had a small issue with the jar lid being slightly loose during shipping, but customer service resolved it immediately. The taste more than makes up for it!",
      verified: true,
      product: "Atlas Mountain Wildflower Honey",
    },
    {
      id: 8,
      name: "Michael Brown",
      location: "Los Angeles, USA",
      rating: 5,
      date: "February 22, 2024",
      title: "Health benefits are real",
      comment:
        "I started using this honey for its health benefits and I'm amazed by the results. My seasonal allergies have improved significantly since I started taking a spoonful daily. Plus it tastes incredible!",
      verified: true,
      product: "Eucalyptus Honey",
    },
  ]

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const ratingDistribution = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => r.rating === 4).length,
    3: reviews.filter((r) => r.rating === 3).length,
    2: reviews.filter((r) => r.rating === 2).length,
    1: reviews.filter((r) => r.rating === 1).length,
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about our authentic Moroccan honey.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-amber-600 mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-6 w-6 ${
                      i < Math.floor(averageRating) ? "text-amber-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600">Based on {reviews.length} reviews</p>
            </div>

            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600 w-8">{rating}★</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-amber-400 h-2 rounded-full"
                      style={{
                        width: `${(ratingDistribution[rating as keyof typeof ratingDistribution] / reviews.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-8">{ratingDistribution[rating as keyof typeof ratingDistribution]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified Purchase
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>

                <div className="relative mb-4">
                  <Quote className="absolute -top-1 -left-1 h-4 w-4 text-amber-400 opacity-50" />
                  <p className="text-gray-600 pl-4 italic">{review.comment}</p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    Product: <span className="text-amber-600 font-medium">{review.product}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-amber-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Happy Customers</h2>
          <p className="text-gray-600 mb-6">
            Experience the authentic taste of Morocco with our premium honey collection.
          </p>
          <div className="flex justify-center space-x-4">
            <Badge className="bg-green-100 text-green-800">✓ 100% Satisfaction Guarantee</Badge>
            <Badge className="bg-blue-100 text-blue-800">✓ Free Shipping Over $50</Badge>
            <Badge className="bg-purple-100 text-purple-800">✓ 30-Day Return Policy</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
