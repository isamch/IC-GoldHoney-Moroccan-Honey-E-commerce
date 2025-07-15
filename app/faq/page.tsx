import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle, Phone, Mail } from "lucide-react"

export default function FAQ() {
  const faqs = [
    {
      category: "Product Information",
      questions: [
        {
          question: "Is your honey 100% natural and pure?",
          answer:
            "Yes, absolutely! All our honey is 100% natural, pure, and unprocessed. We source directly from traditional Moroccan beekeepers who use sustainable practices. Our honey contains no artificial additives, preservatives, or sweeteners.",
        },
        {
          question: "What makes Moroccan honey special?",
          answer:
            "Moroccan honey is unique due to the diverse flora of the Atlas Mountains and the traditional beekeeping methods passed down through generations. The varied landscape produces honey with complex flavor profiles that you won't find anywhere else in the world. IC GoldHoney brings you this authentic experience.",
        },
        {
          question: "How should I store my honey?",
          answer:
            "Store your honey in a cool, dry place at room temperature. Avoid refrigeration as it can cause crystallization. Properly stored honey has an indefinite shelf life. If crystallization occurs, gently warm the jar in warm water to return it to liquid form.",
        },
        {
          question: "What are the health benefits of your honey?",
          answer:
            "Our natural honey contains antioxidants, enzymes, and minerals. Different varieties offer specific benefits: eucalyptus honey has antiseptic properties, thyme honey supports respiratory health, and all our honey varieties can help with seasonal allergies when consumed regularly.",
        },
      ],
    },
    {
      category: "Ordering & Shipping",
      questions: [
        {
          question: "Do you offer international shipping?",
          answer:
            "Yes, we ship worldwide! Shipping costs and delivery times vary by location. We offer free shipping on orders over $50 within the US, Canada, and Europe. For other regions, shipping costs are calculated at checkout.",
        },
        {
          question: "How long does shipping take?",
          answer:
            "Domestic orders (US) typically arrive within 3-5 business days. International orders take 7-14 business days depending on the destination. We provide tracking information for all orders.",
        },
        {
          question: "How is the honey packaged for shipping?",
          answer:
            "We use protective packaging to ensure your honey arrives safely. Each jar is wrapped in bubble wrap and placed in a sturdy box with additional padding. We've never had a jar break during shipping!",
        },
        {
          question: "Can I track my order?",
          answer:
            "Yes! Once your order ships, you'll receive a tracking number via email. You can use this to monitor your package's progress until it reaches your door.",
        },
      ],
    },
    {
      category: "Quality & Authenticity",
      questions: [
        {
          question: "How do you ensure the quality of your honey?",
          answer:
            "Every batch undergoes rigorous testing for purity, moisture content, and authenticity. We work only with certified beekeepers and conduct regular quality audits. Each jar comes with a quality guarantee.",
        },
        {
          question: "Do you have organic certification?",
          answer:
            "While our honey is produced using organic practices, formal organic certification is complex in Morocco. However, our beekeepers follow traditional, chemical-free methods, and our honey is tested to ensure it meets the highest purity standards.",
        },
        {
          question: "What if I'm not satisfied with my purchase?",
          answer:
            "We offer a 30-day satisfaction guarantee. If you're not completely happy with your honey, contact us for a full refund or exchange. Your satisfaction is our top priority.",
        },
      ],
    },
    {
      category: "Usage & Recipes",
      questions: [
        {
          question: "Can I use your honey for cooking and baking?",
          answer:
            "Our honey is perfect for cooking and baking. It adds natural sweetness and unique flavors to recipes. Try our orange blossom honey in desserts or thyme honey in savory dishes.",
        },
        {
          question: "Which honey variety should I choose?",
          answer:
            "It depends on your taste preferences! Wildflower honey is great for beginners with its balanced flavor. Eucalyptus is refreshing and medicinal. Argan blossom is rare and nutty. Orange blossom is bright and citrusy. We recommend trying our variety pack!",
        },
        {
          question: "How much honey should I consume daily?",
          answer:
            "A tablespoon (21g) per day is a good amount for most adults to enjoy the health benefits. You can have it straight, in tea, on toast, or mixed into yogurt. Always consult your healthcare provider if you have specific health concerns.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 mb-4">🤔 Got Questions?</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our Moroccan honey, shipping, and more.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqs.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="bg-white">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-2 h-8 bg-amber-600 rounded-full mr-3"></div>
                  {section.category}
                </h2>

                <Accordion type="single" collapsible className="w-full">
                  {section.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${sectionIndex}-${index}`}>
                      <AccordionTrigger className="text-left hover:text-amber-600">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our customer service team is here to help!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <MessageCircle className="h-5 w-5 text-amber-600" />
                <span>Live Chat</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Phone className="h-5 w-5 text-amber-600" />
                <span>+212 123 456 789</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Mail className="h-5 w-5 text-amber-600" />
                <span>info@honeymaroc.com</span>
              </div>
            </div>

            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/about">About Our Honey</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/reviews">Customer Reviews</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
