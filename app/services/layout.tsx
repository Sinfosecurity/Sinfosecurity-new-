import type React from "react"
import { ServicesSubnav } from "@/components/services-subnav"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <ServicesSubnav />
      {children}
    </div>
  )
}

