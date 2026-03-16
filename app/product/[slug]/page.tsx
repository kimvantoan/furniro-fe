import { Button } from "@/components/ui/button";
import Breadcrumb from "./bread-crumb";
import ProductGallery from "./product-gallery";
import { ProductDetail } from "@/types/product";
import ProductInfo from "./product-info";
import ProductOption from "./product-option";
import ProductDescription from "./ProductDescription";

const defaultProduct: ProductDetail = {
  id: 1,
  name: "Asgaard sofa",
  price: 250000,
  rating: 4.5,
  reviewCount: 5,
  description:
    "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
  sizes: ["L", "XL", "XS"],
  colors: ["#9747FF", "#000000", "#B88E2F"],
  images: [
    "/gallery/room1.png",
    "/gallery/room2.png",
    "/gallery/room3.png",
    "/gallery/room4.png",
  ],
  sku: "SS001",
  category: "Sofas",
  tags: ["Sofa", "Chair", "Home", "Shop"],
};

// ─── Product Detail Section ───────────────────────────────────────────────────
interface ProductDetailSectionProps {
  product?: ProductDetail;
}

export default function ProductDetailSection({
  product = defaultProduct,
}: ProductDetailSectionProps) {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: product.name }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* ── Left: Image Gallery ── */}
          <ProductGallery product={product} />

          {/* ── Right: Product Info ── */}
          <div className="flex-1 flex flex-col gap-4">
            <ProductInfo product={product} />

            {/* Size */}
            <ProductOption product={product} />

            <Button className="px-8 py-6">Add To Cart</Button>
          </div>
        </div>
      </div>
      <ProductDescription />
    </>
  );
}
