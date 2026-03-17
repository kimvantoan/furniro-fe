import Breadcrumb from "../product/[slug]/bread-crumb";
import FeatureBanner from "@/components/common/feature-banner";
import GridProduct from "../../components/common/grid-product";
import { products } from "@/data/productData";

const ShopPage = () => {
  return (
    <div>
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Cửa hàng" }]} />
      <GridProduct products={products} />
      <FeatureBanner />
    </div>
  );
};

export default ShopPage;
