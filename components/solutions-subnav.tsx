"use client"

import { SubNavigation } from "./sub-navigation"

export function SolutionsSubNav() {
  const items = [
    { title: "All Solutions", href: "/solutions" },
    { title: "Network Security", href: "/solutions/network-security" },
    { title: "Cloud Security", href: "/solutions/cloud-security" },
    { title: "Data Protection", href: "/solutions/data-protection" },
    { title: "Security Assessment", href: "/solutions/security-assessment" },
    { title: "Penetration Testing", href: "/solutions/penetration-testing" },
    { title: "Incident Response", href: "/solutions/incident-response" },
    { title: "Compliance", href: "/solutions/compliance" },
    { title: "Security Training", href: "/solutions/security-training" },
    { title: "IoT Security", href: "/solutions/iot-security" },
  ]

  return <SubNavigation items={items} />
}

