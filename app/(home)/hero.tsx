import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full h-150 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Scandinavian interior background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content Card — right side */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end">
        <div
          className="bg-[#FFF8E7]/90 backdrop-blur-[2px] rounded-sm px-10 py-12 max-w-[440px] w-full
            shadow-[0_4px_40px_rgba(0,0,0,0.06)]
            animate-fade-in-up"
        >
          {/* Eyebrow */}
          <p
            className="text-xs tracking-[0.18em] text-neutral-500 mb-3 uppercase"
          >
            New Arrival
          </p>

          {/* Heading */}
          <h1
            className="text-[2.25rem] sm:text-[2.5rem] font-extrabold leading-[1.15] text-primary mb-5"
          >
            Discover Our
            <br />
            New Collection
          </h1>

          {/* Description */}
          <p className="text-sm text-neutral-600 leading-relaxed mb-8 max-w-[340px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          {/* CTA Button */}
          <Link href="/shop">
            <Button
              className="
                px-10 py-6 text-xs font-bold tracking-[0.2em] uppercase
                rounded-none transition-all duration-300
                hover:shadow-lg hover:shadow-[#B88E2F]/30
                hover:-translate-y-0.5
              "
            >
              Buy Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}