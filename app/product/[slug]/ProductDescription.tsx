"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

const productImages = [
  {
    id: 1,
    src: "/gallery/room1.png",
    alt: "Sofa - Front View",
    label: "Standard",
  },
  {
    id: 2,
    src: "/gallery/room2.png",
    alt: "Sofa - Chaise Configuration",
    label: "With Chaise",
  },
];

export default function ProductDescription() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12">
      <Tabs defaultValue="description" className="w-full">
        {/* Tab Navigation */}
        <TabsList className="w-full bg-transparent border-b border-stone-200 rounded-none h-auto p-0 mb-10 justify-start gap-8">
          {["description", "additional", "reviews"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className={cn(
                "relative pb-4 px-0 rounded-none bg-transparent text-stone-400 font-light text-base tracking-wide",
                "data-[state=active]:text-stone-900 data-[state=active]:font-semibold data-[state=active]:bg-transparent",
                "transition-colors duration-200 hover:text-stone-600"
              )}
            >
              {tab === "description" && "Description"}
              {tab === "additional" && "Additional Information"}
              {tab === "reviews" && (
                <span className="flex items-center gap-2">
                  Reviews
                  <Badge className="bg-stone-900 text-white text-xs px-2 py-0.5 rounded-full font-light">
                    5
                  </Badge>
                </span>
              )}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Description Tab */}
        <TabsContent value="description" className="mt-0">
          {/* Text Content */}
          <div className="space-y-5 mb-10 max-w-3xl">
            <p className="text-stone-500 text-[15px] leading-relaxed tracking-wide">
              Embodying the raw, wayward spirit of rock &lsquo;n&rsquo; roll,
              the Kilburn portable active stereo speaker takes the unmistakable
              look and sound of Marshall, unplugs the chords, and takes the show
              on the road.
            </p>
            <p className="text-stone-500 text-[15px] leading-relaxed  tracking-wide">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {productImages.map((img) => (
              <div
                key={img.id}
                onClick={() =>
                  setActiveImage(activeImage === img.id ? null : img.id)
                }
                className={cn(
                  "group relative bg-[#f5f0eb] rounded-2xl overflow-hidden cursor-pointer",
                  "transition-all duration-300 ease-out",
                  activeImage === img.id
                    ? "ring-2 ring-stone-400 shadow-lg"
                    : "hover:shadow-md"
                )}
              >
                {/* Label badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs tracking-widest uppercase text-stone-400 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    {img.label}
                  </span>
                </div>

                {/* Image container */}
                <div className="relative w-full h-72 flex items-center justify-center px-8 py-10 transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain drop-shadow-md"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Hover overlay line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-stone-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Additional Information Tab */}
        <TabsContent value="additional" className="mt-0">
          <div className="space-y-6">
            {[
              { label: "Weight", value: "Under 7 lbs" },
              { label: "Material", value: "Premium Fabric, Solid Wood Base" },
              { label: "Dimensions", value: "120W × 85D × 75H cm" },
              { label: "Color Options", value: "Ivory, Sage, Charcoal" },
              { label: "Warranty", value: "2 Years" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-center py-4 border-b border-stone-100 group"
              >
                <span className="text-stone-400 text-sm tracking-widest uppercase">
                  {item.label}
                </span>
                <span className="text-stone-700 text-[15px] font-medium group-hover:text-stone-900 transition-colors">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Reviews Tab */}
        <TabsContent value="reviews" className="mt-0">
          <div className="space-y-8">
            {[
              {
                name: "Sophie L.",
                date: "March 2025",
                rating: 5,
                comment:
                  "Absolutely stunning piece. The fabric quality is exceptional and it fits perfectly in my living room.",
              },
              {
                name: "James M.",
                date: "February 2025",
                rating: 4,
                comment:
                  "Great sofa, very comfortable and easy to assemble. Delivery was prompt.",
              },
              {
                name: "Aria T.",
                date: "January 2025",
                rating: 5,
                comment:
                  "The chaise configuration is perfect for reading. Love the minimalist design.",
              },
            ].map((review, i) => (
              <div key={i} className="py-6 border-b border-stone-100">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-stone-800 font-semibold tracking-wide">
                      {review.name}
                    </p>
                    <p className="text-stone-400 text-xs mt-0.5">
                      {review.date}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span
                        key={s}
                        className={cn(
                          "text-base",
                          s < review.rating
                            ? "text-amber-400"
                            : "text-stone-200"
                        )}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-stone-500 text-[15px] leading-relaxed">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
