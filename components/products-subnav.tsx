"use client"

import { SubNavigation } from "./sub-navigation"

export function ProductsSubnav() {
  const items = [
    { title: "All Products", href: "/products" },
    { title: "Endpoint Protection", href: "/products/endpoint" },
    { title: "Next-Gen Firewall", href: "/products/firewall" },
    { title: "SIEM Solutions", href: "/products/siem" },
    { title: "Data Encryption", href: "/products/encryption" },
    { title: "Identity Management", href: "/products/identity" },
  ]

  return <SubNavigation items={items} />
}

