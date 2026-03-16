"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import ProductCard from "@/components/common/product-card";
import { products } from "@/data/productData";

const ITEMS_PER_PAGE = 16;
const TOTAL_PAGES = 3;

export default function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const visible = products.slice(start, start + ITEMS_PER_PAGE);

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-14 font-['Lato',sans-serif]">
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 mt-14">
        {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={cn(
              "w-10 h-10 rounded-md text-sm font-medium transition-colors duration-200",
              currentPage === page
                ? "bg-[#b88e2f] text-white"
                : "bg-[#f9f1e7] text-stone-700 hover:bg-[#b88e2f] hover:text-white"
            )}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, TOTAL_PAGES))}
          className="px-5 h-10 rounded-md bg-[#f9f1e7] text-stone-700 text-sm font-medium hover:bg-[#b88e2f] hover:text-white transition-colors duration-200"
        >
          Next
        </button>
      </div>
    </section>
  );
}
