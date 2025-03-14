"use client"

import { SubNavigation } from "./sub-navigation"

export function IndustriesSubNav() {
  const items = [
    { title: "All Industries", href: "/industries" },
    { title: "Finance", href: "/industries/finance" },
    { title: "Healthcare", href: "/industries/healthcare" },
    { title: "Government", href: "/industries/government" },
    { title: "Retail", href: "/industries/retail" },
    { title: "Manufacturing", href: "/industries/manufacturing" },
    { title: "Technology", href: "/industries/technology" },
    { title: "Education", href: "/industries/education" },
  ]

  return <SubNavigation items={items} />
}

