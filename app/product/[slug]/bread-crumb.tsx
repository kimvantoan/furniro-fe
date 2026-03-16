"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbSectionProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbSectionProps) {
  return (
    <section className="w-full bg-[#F9F1E7] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2" aria-label="Breadcrumb">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <span key={index} className="flex items-center gap-2">
                {/* Separator — vertical bar before last item */}
                {isLast && items.length > 1 && (
                  <span className="w-px h-4 bg-neutral-400 mx-1" />
                )}

                {isLast ? (
                  // Current page — plain text
                  <span className="text-sm text-neutral-800">{item.label}</span>
                ) : (
                  <>
                    <Link
                      href={item.href ?? "#"}
                      className="text-sm text-neutral-400 hover:text-neutral-700 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                    <ChevronRight size={14} className="text-neutral-400" />
                  </>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
