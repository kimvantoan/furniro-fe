import StarRating from "@/components/common/star-rating";
import { ProductDetail } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";

const ProductInfo = ({ product }: { product: ProductDetail }) => {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-900">
        {product.name}
      </h1>

      {/* Price */}
      <p className="text-2xl font-medium text-neutral-700">
        {formatPrice(product.price)}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-3">
        <StarRating rating={product.rating} />
        <span className="w-px h-4 bg-neutral-300" />
        <span className="text-sm text-neutral-500">
          {product.reviewCount} Customer Review
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-600 leading-relaxed max-w-[420px]">
        {product.description}
      </p>

      <div className="flex flex-col gap-2 text-sm">
        {[
          { label: "SKU", value: product.sku },
          { label: "Category", value: product.category },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-start gap-6">
            <span className="text-neutral-400 w-20 shrink-0">{label}</span>
            <span className="text-neutral-400 shrink-0">:</span>
            <span className="text-neutral-600">{value}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductInfo;
