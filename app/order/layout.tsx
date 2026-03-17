import { SidebarNav } from "@/components/common/sidebar-nav";
import Breadcrumb from "../product/[slug]/bread-crumb";

export default function OrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Lịch sử đơn hàng" }]} />
    <div className="flex h-screen bg-white">
      <SidebarNav />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
    </>
  );
}
