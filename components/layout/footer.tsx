"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const helpLinks = [
  { label: "Payment Options", href: "/payment-options" },
  { label: "Returns", href: "/returns" },
  { label: "Privacy Policies", href: "/privacy-policies" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // handle subscribe logic
    setEmail("");
  };

  return (
    <footer className="w-full border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-14">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <span
                className="text-2xl font-extrabold text-neutral-900 tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Funiro.
              </span>
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-[180px]">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-medium text-neutral-400 tracking-widest uppercase">
              Links
            </h3>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-neutral-800 hover:text-[#B88E2F] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-medium text-neutral-400 tracking-widest uppercase">
              Help
            </h3>
            <ul className="flex flex-col gap-4">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-neutral-800 hover:text-[#B88E2F] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-medium text-neutral-400 tracking-widest uppercase">
              Newsletter
            </h3>
            <form onSubmit={handleSubscribe} className="flex items-end gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="
                    rounded-none border-0 border-b border-neutral-400
                    bg-transparent px-0 text-sm text-neutral-800
                    placeholder:text-neutral-400
                    focus-visible:ring-0 focus-visible:ring-offset-0
                    focus-visible:border-neutral-800
                    transition-colors duration-200
                    h-8
                  "
                />
              </div>
              <Button
                type="submit"
                variant="ghost"
                className="
                  h-8 px-0 rounded-none
                  text-xs font-bold tracking-widest uppercase
                  text-neutral-800 hover:text-[#B88E2F]
                  border-b border-neutral-800 hover:border-[#B88E2F]
                  bg-transparent hover:bg-transparent
                  transition-colors duration-200
                "
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 py-6">
          <p className="text-sm text-neutral-500">
            2023 furino. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  );
}