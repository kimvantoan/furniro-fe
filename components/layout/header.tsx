"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Heart, ShoppingCart, UserCircle2, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <FurniroLogo />
          <span
            className="text-[1.45rem] font-extrabold tracking-tight text-neutral-900"
          >
            Furniro
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-full ${
                  activeLink === link.label
                    ? "text-neutral-900 after:w-full"
                    : "text-neutral-600"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Icons */}
        <div className="flex items-center gap-1">
          <NavIconButton icon={<UserCircle2 size={20} />} label="Account" href="/account" badge={1} />
          <NavIconButton icon={<Search size={20} />} label="Search" href="/search" />
          <NavIconButton icon={<Heart size={20} />} label="Wishlist" href="/wishlist" />
          <NavIconButton icon={<ShoppingCart size={20} />} label="Cart" href="/cart" />

          {/* Mobile Menu */}
          <div className="md:hidden ml-1">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-neutral-600 hover:text-primary">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 pt-10">
                <div className="flex items-center gap-2.5 mb-8">
                  <FurniroLogo />
                  <span
                    className="text-xl font-extrabold text-neutral-900"
                  >
                    Furniro
                  </span>
                </div>
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 hover:bg-amber-50 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-neutral-100 flex gap-4">
                  {[
                    { icon: <Search size={18} />, label: "Search" },
                    { icon: <Heart size={18} />, label: "Wishlist" },
                    { icon: <ShoppingCart size={18} />, label: "Cart" },
                  ].map((item) => (
                    <Button
                      key={item.label}
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-1.5 text-xs text-neutral-600 border-neutral-200 hover:border-primary hover:text-primary"
                    >
                      {item.icon}
                      {item.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavIconButton({
  icon,
  label,
  href,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: number;
}) {
  return (
    <Link href={href} aria-label={label}>
      <Button
        variant="ghost"
        size="icon"
        className="relative hidden md:inline-flex text-neutral-600 hover:text-primary hover:bg-amber-50 transition-colors"
      >
        {icon}
        {badge != null && badge > 0 && (
          <Badge
            className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-primary text-white border-0 rounded-full"
          >
            {badge}
          </Badge>
        )}
      </Button>
    </Link>
  );
}

function FurniroLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Left triangle */}
      <path d="M4 34 L16 8 L20 16 L10 34 Z" fill="#B88E2F" />
      {/* Right triangle (lighter) */}
      <path d="M20 16 L24 8 L36 34 L22 34 Z" fill="#D4A853" />
      {/* Small inner accent */}
      <path d="M16 28 L20 16 L24 28 Z" fill="#8B6914" opacity="0.6" />
    </svg>
  );
}