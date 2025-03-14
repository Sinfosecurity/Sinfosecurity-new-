"use client"

import { Heading, BodyText } from "@/components/base-styles"

export default function TrustBadges() {
  const complianceBadges = [
    { id: 1, name: "ISO 27001", image: "/badges/iso-27001.svg" },
    { id: 2, name: "GDPR Compliant", image: "/badges/gdpr.svg" },
    { id: 3, name: "SOC 2", image: "/badges/soc2.svg" },
    { id: 4, name: "HIPAA Compliant", image: "/badges/hipaa.svg" },
    { id: 5, name: "PCI DSS", image: "/badges/pci-dss.svg" },
  ]

  const clientLogos = [
    { id: 1, name: "Client 1", image: "/clients/client1.svg" },
    { id: 2, name: "Client 2", image: "/clients/client2.svg" },
    { id: 3, name: "Client 3", image: "/clients/client3.svg" },
    { id: 4, name: "Client 4", image: "/clients/client4.svg" },
    { id: 5, name: "Client 5", image: "/clients/client5.svg" },
    { id: 6, name: "Client 6", image: "/clients/client6.svg" },
  ]

  return (
    <div className="space-y-12">
      <div>
        <Heading className="text-2xl font-bold text-primary text-center mb-8">Compliance & Certifications</Heading>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {complianceBadges.map((badge) => (
            <div key={badge.id} className="text-center">
              <img
                src={badge.image || `/placeholder.svg?height=80&width=80&text=${badge.name}`}
                alt={badge.name}
                className="h-16 w-auto mx-auto mb-2 trust-badge"
                onError={(e) => {
                  e.currentTarget.src = `/placeholder.svg?height=80&width=80&text=${badge.name}`
                  e.currentTarget.onerror = null
                }}
              />
              <BodyText className="text-sm font-medium text-muted-foreground">{badge.name}</BodyText>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Heading className="text-2xl font-bold text-primary text-center mb-8">Trusted By</Heading>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clientLogos.map((client) => (
            <div key={client.id}>
              <img
                src={client.image || `/placeholder.svg?height=60&width=120&text=${client.name}`}
                alt={client.name}
                className="h-12 w-auto trust-badge"
                onError={(e) => {
                  e.currentTarget.src = `/placeholder.svg?height=60&width=120&text=${client.name}`
                  e.currentTarget.onerror = null
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

