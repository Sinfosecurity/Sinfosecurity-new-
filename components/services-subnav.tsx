"use client"

import { SubNavigation } from "./sub-navigation"

export function ServicesSubnav() {
  const items = [
    { title: "All Services", href: "/services" },
    { title: "Security Consulting", href: "/services/consulting" },
    { title: "Managed Security", href: "/services/managed-security" },
    { title: "Incident Response", href: "/services/incident-response" },
    { title: "Security Audits", href: "/services/security-audits" },
    { title: "Vulnerability Management", href: "/services/vulnerability-management" },
    { title: "Endpoint Protection", href: "/services/endpoint" },
    { title: "Next-Gen Firewall", href: "/services/firewall" },
    { title: "SIEM Solutions", href: "/services/siem" },
    { title: "Data Encryption", href: "/services/encryption" },
    { title: "Identity Management", href: "/services/identity" },
  ]

  return <SubNavigation items={items} />
}

