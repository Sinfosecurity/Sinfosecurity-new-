import Link from "next/link"
import { ArrowRight, Shield, AlertTriangle, FileText, Server, Users, Globe, Lock, Database, Cpu } from "lucide-react"
import { Heading, BodyText } from "@/components/base-styles"

export const metadata = {
  title: "Our Security Solutions | Supreme Information Security LLC",
  description:
    "Explore our comprehensive cybersecurity services including network security, penetration testing, compliance solutions, and incident response.",
}

export default function SolutionsPage() {
  const services = [
    {
      id: 1,
      name: "Network Security",
      description:
        "Protect your network infrastructure from unauthorized access and cyber threats with our comprehensive network security solutions.",
      icon: <Shield className="h-10 w-10 text-[#ff7b00]" />,
      features: [
        "Firewall configuration and management",
        "Intrusion detection and prevention",
        "Network traffic analysis",
        "VPN implementation and management",
        "Network segmentation",
      ],
      link: "/solutions/network-security",
    },
    {
      id: 2,
      name: "Penetration Testing",
      description:
        "Identify vulnerabilities in your systems before hackers do with our expert penetration testing services.",
      icon: <AlertTriangle className="h-10 w-10 text-[#ff7b00]" />,
      features: [
        "Web application penetration testing",
        "Network penetration testing",
        "Mobile application security testing",
        "Social engineering assessments",
        "Red team exercises",
      ],
      link: "/solutions/penetration-testing",
    },
    {
      id: 3,
      name: "Compliance & Regulatory",
      description: "Meet industry regulations and compliance requirements with our specialized security solutions.",
      icon: <FileText className="h-10 w-10 text-[#ff7b00]" />,
      features: [
        "GDPR compliance",
        "HIPAA security assessments",
        "PCI DSS compliance",
        "SOC 2 preparation",
        "ISO 27001 implementation",
      ],
      link: "/solutions/compliance",
    },
    {
      id: 4,
      name: "Incident Response",
      description: "Rapid response to security incidents with our 24/7 incident response team.",
      icon: <Server className="h-10 w-10 text-[#ff7b00]" />,
      features: [
        "24/7 incident monitoring",
        "Breach containment",
        "Forensic investigation",
        "Malware analysis",
        "Recovery planning",
      ],
      link: "/solutions/incident-response",
    },
    {
      id: 5,
      name: "Security Training",
      description: "Educate your employees on cybersecurity best practices and create a security-aware culture.",
      icon: <Users className="h-10 w-10 text-[#ff7b00]" />,
      features: [
        "Security awareness training",
        "Phishing simulation exercises",
        "Executive security briefings",
        "Developer secure coding training",
        "Customized security workshops",
      ],
      link: "/solutions/security-training",
    },
    {
      id: 6,
      name: "Cloud Security",
      description: "Secure your cloud infrastructure and applications with our specialized cloud security solutions.",
      icon: <Globe className="h-10 w-10 text-[#ff7b00]" />,
      features: [
        "Cloud configuration review",
        "AWS/Azure/GCP security",
        "Cloud access management",
        "Container security",
        "Serverless security",
      ],
      link: "/solutions/cloud-security",
    },
    {
      id: 7,
      name: "Data Protection",
      description: "Protect your sensitive data with encryption, access controls, and data loss prevention strategies.",
      icon: <Database className="h-10 w-10 text-[#ff7b00]" />,
      features: [
        "Data classification",
        "Encryption implementation",
        "Data loss prevention",
        "Database security",
        "Secure data transfer solutions",
      ],
      link: "/solutions/data-protection",
    },
    {
      id: 8,
      name: "IoT Security",
      description: "Secure your Internet of Things devices and infrastructure from emerging threats.",
      icon: <Cpu className="h-10 w-10 text-[#ff7b00]" />,
      features: [
        "IoT device security assessment",
        "Smart device penetration testing",
        "Industrial IoT security",
        "IoT network security",
        "Secure IoT architecture design",
      ],
      link: "/solutions/iot-security",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Our Security Solutions</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Comprehensive cybersecurity solutions tailored to protect your business from evolving threats
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="p-8">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">{service.name}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <h4 className="font-heading font-medium text-primary mb-4">Key Features:</h4>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-4xl text-primary mb-4">Our Security Process</Heading>
            <BodyText className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a comprehensive approach to ensure your organization's security
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full">
                <span className="font-bold">01</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4 mt-2 text-center">Assessment</h3>
              <p className="text-muted-foreground text-center">
                We conduct a thorough assessment of your current security posture to identify vulnerabilities and gaps.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full">
                <span className="font-bold">02</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4 mt-2 text-center">Strategy</h3>
              <p className="text-muted-foreground text-center">
                We develop a customized security strategy tailored to your specific business needs and risk profile.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full">
                <span className="font-bold">03</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4 mt-2 text-center">Implementation</h3>
              <p className="text-muted-foreground text-center">
                We implement security solutions and controls to protect your systems, networks, and data.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full">
                <span className="font-bold">04</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4 mt-2 text-center">Monitoring</h3>
              <p className="text-muted-foreground text-center">
                We provide continuous monitoring and regular security assessments to ensure ongoing protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl mb-10 opacity-90 font-body">
              Contact our team today to discuss how we can help protect your organization from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/client-portal"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all"
              >
                <Lock size={18} />
                Client Portal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

