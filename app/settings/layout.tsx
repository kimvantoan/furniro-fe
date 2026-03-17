import { SidebarNav } from "@/components/common/sidebar-nav";
import Breadcrumb from "../product/[slug]/bread-crumb";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Trang chủ", href: "/" }, { label: "Cài đặt" }]}
      />
      <div className="flex h-screen bg-white">
        <SidebarNav />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </>
  );
}
