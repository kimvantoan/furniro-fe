import FeatureBanner from "@/components/common/feature-banner";
import Breadcrumb from "../product/[slug]/bread-crumb";
import CartItem from "./cart-item";
import CartTotal from "./cart-total";

const items: CartItem[] = [
  {
    id: 1,
    name: "Asgaard sofa",
    image: "/sofa-product.png",
    price: 250000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Asgaard sofa",
    image: "/sofa-product.png",
    price: 250000,
    quantity: 1,
  },
];

export default function CartSection() {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cart" }]} />
      {/* Cart Section */}
      <section className="w-full max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Cart Table */}
          <div className="flex-1 w-full">
            {/* Table Header */}
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] bg-[#f9f1e7] px-6 py-4 mb-4">
              {["Product", "Price", "Quantity", "Subtotal", ""].map((h, i) => (
                <span
                  key={i}
                  className="text-stone-800 font-semibold text-sm tracking-wide"
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Cart Items */}
            <CartItem items={items} />
          </div>

          {/* Cart Totals */}
          <CartTotal subtotal={subtotal} />
        </div>
      </section>

      {/* Features Banner */}
      <FeatureBanner />
    </div>
  );
}
