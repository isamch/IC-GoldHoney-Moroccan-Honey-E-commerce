import Image from "next/image";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.id === params.id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites") || "[]");
    setIsLiked(favs.some((item) => item.id === product.id));
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setIsInCart(cart.some((item) => item.id === product.id));
  }, [product.id]);

  const handleFavorite = () => {
    let favs = JSON.parse(localStorage.getItem("favourites") || "[]");
    const index = favs.findIndex((item) => item.id === product.id);
    if (index === -1) {
      favs.push(product);
    } else {
      favs.splice(index, 1);
    }
    localStorage.setItem("favourites", JSON.stringify(favs));
    setIsLiked(!isLiked);
  };

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const index = cart.findIndex((item) => item.id === product.id);
    if (index === -1) {
      cart.push(product);
    } else {
      cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setIsInCart(!isInCart);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="text-yellow-500">{product.rating}</span>
            </div>
            <span className="text-gray-600">({product.reviews} reviews)</span>
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900">${product.price}</span>
            <span className="ml-2 text-gray-500">/ {product.weight}</span>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Product Details</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Category:</span> {product.category}</p>
              <p><span className="font-medium">Origin:</span> {product.origin}</p>
              <p><span className="font-medium">Weight:</span> {product.weight}</p>
              <p className={`${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                <span className="font-medium">Stock:</span> {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              className="flex-1 bg-amber-600 hover:bg-amber-700"
              onClick={handleAddToCart}
              disabled={isInCart}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {isInCart ? "Added to Cart" : "Add to Cart"}
            </Button>
            <Button
              className="flex-1 bg-white hover:bg-gray-50"
              onClick={handleFavorite}
            >
              <Heart className={`h-5 w-5 mr-2 ${isLiked ? 'text-red-500' : 'text-gray-400'}`} />
              {isLiked ? "In Favorites" : "Add to Favorites"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
