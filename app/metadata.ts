import type { Metadata } from "next"

// Base metadata configuration
export const baseMetadata: Metadata = {
  title: {
    default: "Cybersecurity Solutions for the Digital Age | Supreme Information Security LLC",
    template: "%s | Supreme Information Security LLC",
  },
  description:
    "Enterprise-grade cybersecurity solutions to protect your digital assets against evolving threats. Trusted by leading organizations worldwide.",
  keywords: [
    "cybersecurity",
    "network security",
    "cloud security",
    "data protection",
    "compliance",
    "security assessment",
  ],
  authors: [{ name: "Supreme Information Security LLC" }],
  creator: "Supreme Information Security LLC",
  publisher: "Supreme Information Security LLC",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://supremesecurity.com/",
    title: "Cybersecurity Solutions for the Digital Age | Supreme Information Security LLC",
    description:
      "Enterprise-grade cybersecurity solutions to protect your digital assets against evolving threats. Trusted by leading organizations worldwide.",
    siteName: "Supreme Information Security LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Solutions for the Digital Age | Supreme Information Security LLC",
    description:
      "Enterprise-grade cybersecurity solutions to protect your digital assets against evolving threats. Trusted by leading organizations worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

