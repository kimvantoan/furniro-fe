"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const CartItem = ({ items }: { items: CartItem[] }) => {
  return (
    <>
      {items.length === 0 ? (
        <div className="text-center py-16 text-stone-400 text-sm tracking-wide">
          Your cart is empty.
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] items-center px-6 py-4 hover:bg-stone-50 transition-colors duration-200"
            >
              {/* Product */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 overflow-hidden bg-[#f9f1e7] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <span className="text-stone-500 text-[15px]">{item.name}</span>
              </div>

              {/* Price */}
              <span className="text-stone-500 text-[15px]">
                {formatPrice(item.price)}
              </span>

              {/* Quantity */}
              <div className="flex items-center">
                <div className="flex items-center border border-stone-300 rounded-md overflow-hidden w-fit">
                  <button className="cursor-pointer px-2.5 py-1.5 text-stone-500 hover:bg-stone-100 transition-colors text-sm">
                    −
                  </button>
                  <span className="px-3 py-1.5 text-stone-800 text-sm min-w-[2rem] text-center border-x border-stone-300">
                    {item.quantity}
                  </span>
                  <button className="cursor-pointer px-2.5 py-1.5 text-stone-500 hover:bg-stone-100 transition-colors text-sm">
                    +
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <span className="text-stone-700 font-medium text-[15px]">
                {formatPrice(item.price * item.quantity)}
              </span>

              {/* Delete */}
              <Button variant={"ghost"} className="text-[#b88e2f] hover:text-red-500 transition-colors p-1">
                <Trash2 size={18} />
              </Button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CartItem;
