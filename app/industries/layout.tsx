import type React from "react"
import { IndustriesSubNav } from "@/components/industries-subnav"

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <IndustriesSubNav />
      {children}
    </>
  )
}

