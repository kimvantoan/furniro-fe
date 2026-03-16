import Breadcrumb from "../product/[slug]/bread-crumb";
import FeatureBanner from "@/components/common/feature-banner";
import GridProduct from "./grid-product";

const ShopPage = () => {
  return (
    <div>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
      <GridProduct />
      <FeatureBanner />
    </div>
  );
};

export default ShopPage;
