import Image from "next/image";
import Link from "next/link";

const ranges = [
  {
    id: 1,
    label: "Dining",
    href: "/shop?category=dining",
    src: "/range/dining.png",
    alt: "Dining room furniture",
  },
  {
    id: 2,
    label: "Living",
    href: "/shop?category=living",
    src: "/range/living.png",
    alt: "Living room furniture",
  },
  {
    id: 3,
    label: "Bedroom",
    href: "/shop?category=bedroom",
    src: "/range/bedroom.png",
    alt: "Bedroom furniture",
  },
];

export default function BrowseRange() {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-2"
          >
            Browse The Range
          </h2>
          <p className="text-sm text-neutral-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ranges.map((item) => (
            <Link key={item.id} href={item.href} className="group flex flex-col items-center gap-3">
              {/* Image */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 90vw, 30vw"
                />
              </div>
              {/* Label */}
              <span
                className="text-base font-semibold text-neutral-800 group-hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}