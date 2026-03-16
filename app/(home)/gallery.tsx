import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/room1.png",
    alt: "Bookshelf room setup",
    className: "col-span-1 row-span-2", 
  },
  {
    id: 2,
    src: "/gallery/room2.png",
    alt: "Desk with laptop and radio",
    className: "col-span-2 row-span-1",
  },
  {
    id: 3,
    src: "/gallery/room3.png",
    alt: "Dining room with chairs",
    className: "col-span-1 row-span-2",
  },
  {
    id: 4,
    src: "/gallery/room4.png",
    alt: "Bedroom setup",
    className: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: "/gallery/room5.png",
    alt: "Brick wall interior",
    className: "col-span-1 row-span-2",
  },
];

export default function Gallery() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="text-center mb-10">
        <p
          className="text-sm text-neutral-500 mb-1"
        >
          Share your setup with
        </p>
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-neutral-900"
        >
          #FuniroFurniture
        </h2>
      </div>

      {/* Masonry-style Grid */}
      <div
        className="grid gap-3 px-2"
        style={{
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "repeat(3, 140px)",
        }}
      >
        {/* Col 1 — tall (row 1-2) */}
        <GalleryItem
          src={galleryImages[0].src}
          alt={galleryImages[0].alt}
          style={{ gridColumn: "1", gridRow: "1 / 3" }}
        />

        {/* Col 2 — wide top (col 2-3, row 1) */}
        <GalleryItem
          src={galleryImages[1].src}
          alt={galleryImages[1].alt}
          style={{ gridColumn: "2 / 4", gridRow: "1" }}
        />

        {/* Col 4 — mid height */}
        <GalleryItem
          src={galleryImages[3].src}
          alt={galleryImages[3].alt}
          style={{ gridColumn: "4", gridRow: "1" }}
        />

        {/* Col 5 — tall (row 1-2) */}
        <GalleryItem
          src={galleryImages[4].src}
          alt={galleryImages[4].alt}
          style={{ gridColumn: "5", gridRow: "1 / 3" }}
        />
        {/* Col 3 tall (row 2-3) */}
        <GalleryItem
          src={galleryImages[2].src}
          alt={galleryImages[2].alt}
          style={{ gridColumn: "3", gridRow: "2 / 4" }}
        />
      </div>
    </section>
  );
}

function GalleryItem({
  src,
  alt,
  style,
}: {
  src: string;
  alt: string;
  style: React.CSSProperties;
}) {
  return (
    <div
      className="relative overflow-hidden group cursor-pointer"
      style={style}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 20vw"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
    </div>
  );
}