"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import type { Product } from "@/app/data/products";

interface ClientProductActionsProps {
  product: Product;
}

export default function ClientProductActions({ product }: ClientProductActionsProps) {
  const [isInCart, setIsInCart] = useState(false);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setIsInCart(cart.some((item: any) => item.id === product.id));
    const favs = JSON.parse(localStorage.getItem("favourites") || "[]");
    setIsFav(favs.some((item: any) => item.id === product.id));
  }, [product.id]);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((item: any) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setIsInCart(true);
    window.dispatchEvent(new Event("cart-fav-update"));
  };

  const handleFavourite = () => {
    let favs = JSON.parse(localStorage.getItem("favourites") || "[]");
    if (isFav) {
      favs = favs.filter((item: any) => item.id !== product.id);
      setIsFav(false);
    } else {
      favs.push(product);
      setIsFav(true);
    }
    localStorage.setItem("favourites", JSON.stringify(favs));
    window.dispatchEvent(new Event("cart-fav-update"));
  };

  return (
    <div className="flex items-center gap-4 mt-4">
      <Button
        variant="secondary"
        size="icon"
        className="bg-white/90 hover:bg-white"
        onClick={handleFavourite}
      >
        <Heart className={`h-6 w-6 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
      </Button>
      <Button
        className="w-full bg-amber-600 hover:bg-amber-700 text-lg font-semibold py-4"
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        {isInCart ? "Added to Cart" : "Add to Cart"}
      </Button>
    </div>
  );
} 