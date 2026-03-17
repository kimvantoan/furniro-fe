import ProductGrid from "@/components/common/grid-product"
import Breadcrumb from "../product/[slug]/bread-crumb"
import { products } from "@/data/productData"

const Wishlist = () => {
  return (
    <div>
        <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Yêu thích" }]} />
        <ProductGrid products={products} />
    </div>
  )
}

export default Wishlist