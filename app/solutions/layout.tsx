import type React from "react"
import { SolutionsSubNav } from "@/components/solutions-subnav"

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SolutionsSubNav />
      {children}
    </>
  )
}

