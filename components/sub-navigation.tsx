"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface SubNavItem {
  title: string
  href: string
}

interface SubNavigationProps {
  items: SubNavItem[]
  className?: string
}

export function SubNavigation({ items, className }: SubNavigationProps) {
  const pathname = usePathname()

  return (
    <div className={cn("bg-white border-b border-gray-200 sticky top-20 z-40", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="overflow-x-auto">
          <nav className="flex space-x-1 py-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap",
                  pathname === item.href
                    ? "bg-primary text-white"
                    : "text-primary hover:bg-primary/10 hover:text-primary",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

