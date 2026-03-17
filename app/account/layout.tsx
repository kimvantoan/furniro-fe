import { SidebarNav } from '@/components/common/sidebar-nav';
import { Metadata } from 'next';
import Breadcrumb from '../product/[slug]/bread-crumb';

export const metadata: Metadata = {
  title: 'Tài khoản',
  description: 'Quản lý tài khoản',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Tài khoản" }]} />
    <div className="flex ">
      <SidebarNav />
      <main className="flex-1">{children}</main>
    </div>
    </>
  );
}
