import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ClientProductActions from "./ClientProductActions";
import { products, type Product } from "@/app/data/products";

// Helper function to get a product by ID
function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

// Generate static paths for Next.js
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

interface SingleProductPageProps {
  params: { id: string };
}

export default async function SingleProductPage({ params }: SingleProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-gray-600">Product not found.</p>
      </div>
    );
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
        </div>
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <Link href="/shop">
              <Button
                variant="ghost"
                className="mb-4 flex items-center text-amber-600 hover:text-amber-800"
              >
                <ArrowLeft className="h-5 w-5 mr-2" /> Back to Shop
              </Button>
            </Link>
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
          <ClientProductActions product={product} />
        </div>
      </div>
    </div>
  );
}