'use client'

import { HiOutlineTrash } from "react-icons/hi2"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { useCart } from "../Components/contexts/cart-context"
import Link from "next/link"

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart()
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      
      <div className="container mx-auto mt-10 px-4 pb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            {cartItems.length === 0 ? (
              <div className="text-center py-12 bg-[#FDF9F0] rounded-lg">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link href="/Shop">
                  <Button variant="outline">Continue Shopping</Button>
                </Link>
              </div>
            ) : (
              <div className="bg-[#FDF9F0] rounded-lg">
                {/* Mobile View */}
                <div className="block lg:hidden">
                  {cartItems.map((item) => (
                    <div 
                      key={`${item.id}-${item.size}-${item.color}`}
                      className="p-4 border-b border-gray-200 last:border-b-0"
                    >
                      <div className="flex gap-4">
                        <div className="relative h-24 w-24 flex-shrink-0 bg-white rounded-lg overflow-hidden">
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-500 mb-2">
                            Size: {item.size} • Color: {item.color}
                          </p>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-sm text-gray-500">Price: Rs. {formatPrice(item.price)}</p>
                              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                              <p className="font-medium mt-1">Total: Rs. {formatPrice(item.price * item.quantity)}</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id, item.size, item.color)}
                              className="p-2 hover:bg-white rounded-lg transition-colors"
                            >
                              <HiOutlineTrash className="w-5 h-5 text-gray-500" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop View */}
                <div className="hidden lg:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-4 text-lg font-sans font-semibold">Product</th>
                        <th className="text-left p-4 text-lg font-sans font-semibold">Price</th>
                        <th className="text-left p-4 text-lg font-sans font-semibold">Quantity</th>
                        <th className="text-left p-4 text-lg font-sans font-semibold">Subtotal</th>
                        <th className="p-4"><span className="sr-only">Actions</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={`${item.id}-${item.size}-${item.color}`} className="border-b border-gray-200">
                          <td className="p-4">
                            <div className="flex items-center gap-4">
                              <div className="relative h-20 w-20 flex-shrink-0 bg-white rounded-lg overflow-hidden">
                                <Image
                                  src={item.thumbnail}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-medium">{item.title}</h3>
                                <p className="text-sm text-gray-500">
                                  Size: {item.size} • Color: {item.color}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">Rs. {formatPrice(item.price)}</td>
                          <td className="p-4">{item.quantity}</td>
                          <td className="p-4">Rs. {formatPrice(item.price * item.quantity)}</td>
                          <td className="p-4">
                            <button
                              onClick={() => removeFromCart(item.id, item.size, item.color)}
                              className="p-2 hover:bg-white rounded-lg transition-colors"
                            >
                              <HiOutlineTrash className="w-5 h-5 text-gray-500" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Cart Totals */}
          <div className="lg:w-80">
            <div className="bg-[#FDF9F0] rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Cart Totals</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>Rs. {formatPrice(subtotal)}</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-[#B88E2F]">Rs. {formatPrice(subtotal)}</span>
                  </div>
                </div>
                <Link href="/CheckOut" className="block w-full">
                  <Button className="w-full bg-[#B88E2F] hover:bg-[#A67E2A] text-white">
                    Check Out
                  </Button>
                </Link>
              </div>
            </div>

            {/* Free Delivery Notice */}
            <div className="mt-6 bg-[#FDF9F0] rounded-lg p-4 flex items-start gap-3">
              <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#B88E2F" strokeWidth="2"/>
                  <path d="M12 16V12M12 8H12.01" stroke="#B88E2F" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-sm text-gray-600">
                Free delivery for all orders over Rs. 50,000. For more information about delivery methods and times
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

