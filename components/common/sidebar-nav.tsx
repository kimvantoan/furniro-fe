"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, ShoppingBag, Settings, LogOut } from "lucide-react";

export function SidebarNav() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Tài khoản",
      href: "/account",
      icon: LayoutGrid,
    },
    {
      name: "Đơn hàng",
      href: "/order",
      icon: ShoppingBag,
    },
    {
      name: "Cài đặt",
      href: "/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="w-64 border-r border-gray-200 bg-white p-6">
      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2  transition-colors ${
                isActive
                  ? "bg-gray-100 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <button className="text-destructive mt-auto flex w-full items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-50">
        <LogOut className="h-5 w-5" />
        Đăng xuất
      </button>
    </aside>
  );
}
