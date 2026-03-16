"use client";

import { cn } from "@/lib/utils";
import { ProductDetail } from "@/types/product";
import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ product } : { product: ProductDetail }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-3">
        {product.images.map((src, i) => (
          <button
            key={i}
            onClick={() => setSelectedImage(i)}
            className={cn(
              "relative w-[76px] h-[76px] rounded-lg overflow-hidden bg-[#F9F1E7] shrink-0 border-2 transition-colors duration-200",
              selectedImage === i ? "border-primary" : "border-transparent"
            )}
          >
            <Image
              src={src}
              alt={`${product.name} ${i + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative w-[420px] h-[420px] rounded-xl overflow-hidden bg-[#F9F1E7]">
        <Image
          src={product.images[selectedImage]}
          alt={product.name}
          fill
          className="object-contain p-4 transition-opacity duration-300"
          priority
        />
      </div>
    </div>
  );
}
