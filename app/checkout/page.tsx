import Breadcrumb from "../product/[slug]/bread-crumb";
import { BillingForm } from "./bill-detail";

export default function CheckoutPage() {
  return (
    <div className="space-y-8 mb-8">
      <Breadcrumb
        items={[{ label: "Trang chủ", href: "/" },{ label: "Giỏ hàng", href: "/cart" }, { label: "Thanh toán" }]}
      />
      <BillingForm />
    </div>
  );
}
