import Breadcrumb from "../product/[slug]/bread-crumb";
import { BillingForm } from "./bill-detail";

export default function CheckoutPage() {
  return (
    <div className="space-y-8 mb-8">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Checkout" }]}
      />
      <BillingForm />
    </div>
  );
}
