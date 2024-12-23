"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, Minus, Plus, Facebook, Linkedin, Twitter } from 'lucide-react';
import { formatPrice } from "@/lib/utils";
import DynamicProdDesSec from '../Components/DynamicProdDesSec'
import TopPicksForYou from '../Components/TopPicksOfyou';
import { ShoppingCart } from '../Components/ShoppingCart';
import { useCart } from '../Components/contexts/cart-context'

interface Sofa {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  images?: string[];
}

export function SofaDetails({ id }: { id: string }) {
  const [sofa, setSofa] = useState<Sofa | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("purple");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  const { addToCart, isCartOpen, setIsCartOpen,} = useCart();

  useEffect(() => {
    async function fetchSofa() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch sofa details");
        }
        const data = await res.json();
        setSofa(data);
      } catch  {
        setError("Failed to load sofa details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchSofa();
  }, [id]);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (sofa) {
      addToCart({
        id: sofa.id,
        title: sofa.title,
        price: sofa.price,
        quantity: quantity,
        thumbnail: sofa.thumbnail,
        size: selectedSize,
        color: selectedColor
      });
    }
  };

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error || !sofa) {
    return (
      <div className="text-center text-red-500">
        {error || "Sofa not found"}
      </div>
    );
  }

  const images = sofa.images || [sofa.thumbnail];

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center space-x-1 mb-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <Link href="/shop" className="text-gray-500 hover:text-gray-700">
            Shop
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-900">{sofa.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-3/5">
            <div className="flex gap-4">
              <div className="flex flex-col gap-4 w-24">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative aspect-square w-full border rounded-lg overflow-hidden ${
                      activeImage === index ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${sofa.title} - View ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
              <div className="relative aspect-square w-full bg-[#F9F1E7] rounded-lg overflow-hidden">
                <Image
                  src={images[activeImage]}
                  alt={sofa.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <h1 className="text-4xl font-bold mb-4">{sofa.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      star <= 4
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">5 Customer Review</span>
            </div>
            <p className="text-2xl font-bold mb-6">
              Rs. {formatPrice(sofa.price)}
            </p>
            <p className="text-gray-600 mb-8">{sofa.description}</p>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Size</h3>
                <div className="flex gap-4">
                  {["L", "XL", "XS"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg border flex items-center justify-center ${
                        selectedSize === size
                          ? "bg-primary text-white"
                          : "bg-background"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Color</h3>
                <div className="flex gap-4">
                  {[
                    { name: "purple", class: "bg-purple-600" },
                    { name: "black", class: "bg-black" },
                    { name: "gold", class: "bg-yellow-600" },
                  ].map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full ${color.class} ${
                        selectedColor === color.name
                          ? "ring-2 ring-offset-2 ring-primary"
                          : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                  Add To Cart
                </Button>
              </div>
            </div>

            <div className="border-t mt-8 pt-8">
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="text-gray-500 py-2">SKU</td>
                    <td className="py-2">: SS001</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 py-2">Category</td>
                    <td className="py-2">: Sofas</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 py-2">Tags</td>
                    <td className="py-2">: Sofa, Chair, Home</td>
                  </tr>
                  <tr>
                    <td className="text-gray-500 py-2">Share </td>
                    <td className="py-2">
                      <div className="flex items-center gap-2">
                        :<button className="p-2 hover:bg-gray-100 rounded-full">
                          <Facebook className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <Linkedin className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                          <Twitter className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <DynamicProdDesSec/>
      <div className="mb-20">
        <TopPicksForYou heading="Related Products" showParagraph={false}/>
      </div>
      <ShoppingCart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}

