import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { useCart } from "./contexts/cart-context";
import Link from "next/link";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const { cartItems, removeFromCart } = useCart();
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-[400px] bg-white shadow-xl z-50 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-6">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="flex gap-4 py-4 border-b"
                >
                  <div className="relative h-20 w-20 flex-shrink-0 bg-[#F9F1E7] rounded-lg overflow-hidden">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <h3 className="font-medium truncate">{item.title}</h3>
                      <button
                        onClick={() =>
                          removeFromCart(item.id, item.size, item.color)
                        }
                        className="text-gray-400 hover:text-gray-600 ml-2 flex-shrink-0"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Size: {item.size} • Color: {item.color}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-sm">x {item.quantity}</p>
                      <p className="font-medium">
                        Rs. {formatPrice(item.price)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t p-6">
              <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span className="font-medium">Rs. {formatPrice(subtotal)}</span>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="/Cart">
                  <Button variant="outline" className="w-full">
                    View Cart
                  </Button>
                </Link>
                <Link href="/CheckOut">
                  <Button className="w-full">Checkout</Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
