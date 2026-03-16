"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeftRight, Heart, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/utils/formatPrice";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative bg-[#F4F5F7] overflow-hidden flex flex-col">
      {/* Image wrapper */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Badge */}
        {product.badge === "new" && (
          <span className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#2EC1AC] text-white text-xs font-bold flex items-center justify-center z-10">
            New
          </span>
        )}
        {product.badge === "discount" && product.discountPercent && (
          <span className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#E97171] text-white text-xs font-bold flex items-center justify-center z-10">
            -{product.discountPercent}%
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-neutral-800/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 z-20">
          {/* Add to cart */}
          <Button
            className="bg-white text-primary hover:bg-primary hover:text-white font-semibold text-sm px-8 py-2 rounded-none transition-colors duration-200 w-44"
            onClick={() => {}}
          >
            Add to cart
          </Button>

          {/* Action row */}
          <div className="flex items-center gap-4 text-white text-xs font-medium">
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <Share2 size={14} />
              Share
            </button>
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <ArrowLeftRight size={14} />
              Compare
            </button>
            <button
              className={cn(
                "flex items-center gap-1 transition-colors",
                liked ? "text-red-400" : "hover:text-primary"
              )}
              onClick={() => setLiked((v) => !v)}
            >
              <Heart size={14} fill={liked ? "currentColor" : "none"} />
              Like
            </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-base font-semibold text-neutral-800">
          {product.name}
        </h3>
        <p className="text-sm text-neutral-500">{product.description}</p>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-base font-bold text-neutral-800">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-neutral-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
