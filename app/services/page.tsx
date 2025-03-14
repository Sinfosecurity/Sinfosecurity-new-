import Link from "next/link"
import { ArrowRight, Shield, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Security Services | Supreme Information Security",
  description:
    "Explore our comprehensive range of cybersecurity services designed to protect your organization from evolving threats.",
}

export default function ServicesPage() {
  const services = [
    {
      id: "consulting",
      title: "Security Consulting",
      description:
        "Expert guidance on security strategy, architecture, and best practices tailored to your business needs.",
      features: [
        "Security architecture review",
        "Risk assessment",
        "Compliance guidance",
        "Security roadmap development",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "managed-security",
      title: "Managed Security",
      description: "24/7 monitoring and management of your security infrastructure by our team of experts.",
      features: [
        "Continuous monitoring",
        "Threat detection and response",
        "Security device management",
        "Regular security reporting",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "incident-response",
      title: "Incident Response",
      description: "Rapid response to security incidents to minimize damage and restore normal operations quickly.",
      features: ["24/7 emergency response", "Incident containment", "Forensic investigation", "Recovery assistance"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "security-audits",
      title: "Security Audits",
      description: "Comprehensive assessment of your security posture to identify vulnerabilities and compliance gaps.",
      features: [
        "Infrastructure security audit",
        "Application security testing",
        "Compliance gap analysis",
        "Remediation recommendations",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "vulnerability-management",
      title: "Vulnerability Management",
      description: "Ongoing identification, assessment, and remediation of security vulnerabilities.",
      features: [
        "Vulnerability scanning",
        "Prioritization of findings",
        "Remediation guidance",
        "Continuous monitoring",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Security Services</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Comprehensive cybersecurity services designed to protect your organization at every level
            </p>
          </div>
        </div>

        {/* Abstract background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-20"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-20"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-auto"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="inline-block bg-red-600/20 px-4 py-2 rounded-full mb-4">
                    <p className="text-red-600 font-medium text-sm flex items-center">
                      <Shield className="h-4 w-4 mr-2" /> Professional Service
                    </p>
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <h3 className="text-lg font-medium text-primary mb-3">Key Features:</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.id}`}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium flex items-center gap-2 w-fit transition-all"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our team today to discuss how our security services can help protect your organization from cyber
              threats.
            </p>
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all mx-auto w-fit"
            >
              Schedule a Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

