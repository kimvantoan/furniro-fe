"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProductDetail } from "@/types/product";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const ProductOption = ({ product }: { product: ProductDetail }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="flex flex-col gap-2 mt-1">
        <span className="text-sm text-neutral-400">Kích thước</span>
        <div className="flex items-center gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={cn(
                "w-10 h-10 text-sm font-medium rounded-md transition-colors duration-200",
                selectedSize === size
                  ? "bg-primary text-white"
                  : "bg-[#F9F1E7] text-neutral-700 hover:bg-primary/20"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="flex flex-col gap-2">
        <span className="text-sm text-neutral-400">Màu sắc</span>
        <div className="flex items-center gap-3">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              style={{ backgroundColor: color }}
              className={cn(
                "w-8 h-8 rounded-full transition-all duration-200",
                selectedColor === color
                  ? "ring-2 ring-offset-2 ring-neutral-400"
                  : "hover:ring-2 hover:ring-offset-2 hover:ring-neutral-300"
              )}
            />
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="flex flex-col gap-2">
        {/* Quantity */}
        <span className="text-sm text-neutral-400">Số lượng</span>
        <div className="flex items-center border border-neutral-300 rounded-lg w-fit">
          <Button
            variant={"ghost"}
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            <Minus size={14} />
          </Button>
          <span className="px-5 py-3 text-sm font-semibold text-neutral-800 min-w-[40px] text-center">
            {quantity}
          </span>
          <Button variant={"ghost"} onClick={() => setQuantity((q) => q + 1)}>
            <Plus size={14} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductOption;
