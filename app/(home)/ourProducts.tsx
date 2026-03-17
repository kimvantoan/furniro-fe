"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/common/product-card";
import { products } from "@/data/productData";

export default function OurProducts() {
  const [showAll, setShowAll] = useState(false);
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 text-center mb-10">
          Sản phẩm của chúng tôi
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Show More */}
        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white
              px-14 py-5 text-sm font-semibold rounded-none tracking-wide transition-colors duration-200"
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      </div>
    </section>
  );
}
