import type React from "react"
import type { Metadata } from "next"
import { ServicesSubnav } from "@/components/services-subnav"

export const metadata: Metadata = {
  title: "Services | Supreme Information Security LLC",
  description: "Explore our comprehensive cybersecurity services designed to protect your organization.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesSubnav />
      <main className="flex-1">{children}</main>
    </div>
  )
}

