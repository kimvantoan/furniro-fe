import Link from "next/link";

const navLinks = [
  { label: "Trang chủ", href: "/" },
  { label: "Của hàng", href: "/shop" },
  { label: "Liên hệ", href: "/contact" },
];

const helpLinks = [
  { label: "Payment Options", href: "/payment-options" },
  { label: "Returns", href: "/returns" },
  { label: "Privacy Policies", href: "/privacy-policies" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-14">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <span
                className="text-2xl font-extrabold text-neutral-900 tracking-tight"
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
                    className="text-sm font-semibold text-neutral-800 hover:text-primary transition-colors duration-200"
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