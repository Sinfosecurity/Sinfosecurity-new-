import Link from "next/link"
import { ArrowRight, Shield, Clock, Server, Bell, CheckCircle } from "lucide-react"
import { Heading, BodyText } from "@/components/base-styles"

export const metadata = {
  title: "Managed Security Services | Supreme Information Security",
  description:
    "24/7 security monitoring and management services to protect your organization from cyber threats around the clock.",
}

export default function ManagedSecurityPage() {
  const features = [
    {
      title: "24/7 Security Monitoring",
      description:
        "Continuous monitoring of your systems and networks to detect and respond to security threats in real-time",
      icon: <Clock className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Threat Detection & Response",
      description: "Proactive identification and rapid response to security incidents to minimize potential damage",
      icon: <Bell className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Security Infrastructure Management",
      description: "Expert management of your security infrastructure including firewalls, IDS/IPS, and SIEM systems",
      icon: <Server className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Vulnerability Management",
      description: "Regular scanning and remediation of vulnerabilities to reduce your attack surface",
      icon: <Shield className="h-10 w-10 text-red-600" />,
    },
  ]

  const benefits = [
    "Access to security experts 24/7/365",
    "Reduced risk of successful cyber attacks",
    "Lower costs compared to in-house security operations",
    "Faster detection and response to security incidents",
    "Improved compliance with regulatory requirements",
    "Regular security reporting and insights",
    "Proactive threat hunting and vulnerability management",
    "Scalable security operations that grow with your business",
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Managed Security Services</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              24/7 security monitoring and management to protect your organization from evolving cyber threats
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

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block bg-red-600/20 px-4 py-2 rounded-full mb-4">
                <p className="text-red-600 font-medium text-sm flex items-center">
                  <Shield className="h-4 w-4 mr-2" /> 24/7 Protection
                </p>
              </div>
              <Heading className="text-3xl md:text-4xl text-primary mb-6">Comprehensive Managed Security</Heading>
              <BodyText className="text-muted-foreground mb-6">
                Our Managed Security Services provide around-the-clock protection for your organization's digital
                assets. With a team of experienced security professionals monitoring your systems 24/7, we detect and
                respond to threats before they can impact your business.
              </BodyText>
              <BodyText className="text-muted-foreground mb-6">
                We leverage advanced security technologies and proven methodologies to deliver comprehensive protection
                against the full spectrum of cyber threats. Our security operations center (SOC) serves as an extension
                of your team, providing the expertise and resources needed to maintain a strong security posture.
              </BodyText>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="bg-transparent border border-red-600 text-red-600 hover:bg-red-600/10 px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  All Services
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Managed Security Services"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-4xl text-primary mb-4">Key Features</Heading>
            <BodyText className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our managed security services include a comprehensive suite of features to protect your organization
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-red-600/10 p-4 rounded-full mb-6">{feature.icon}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-4xl text-primary mb-4">How Our Managed Security Works</Heading>
            <BodyText className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proactive approach to security monitoring and management
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md relative border border-gray-200">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4 mt-4 text-center">Collect</h3>
              <p className="text-muted-foreground text-center">
                We collect security data from across your environment, including logs, network traffic, and endpoint
                activities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative border border-gray-200">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4 mt-4 text-center">Analyze</h3>
              <p className="text-muted-foreground text-center">
                Our advanced security analytics platform analyzes the data to identify potential threats and anomalies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative border border-gray-200">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4 mt-4 text-center">Respond</h3>
              <p className="text-muted-foreground text-center">
                Our security experts respond to identified threats according to established procedures and best
                practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Benefits of Managed Security"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <Heading className="text-3xl md:text-4xl text-primary mb-6">
                Benefits of Our Managed Security Services
              </Heading>
              <BodyText className="text-muted-foreground mb-6">
                Our managed security services provide numerous advantages for organizations of all sizes, from small
                businesses to large enterprises. By partnering with us, you gain access to security expertise and
                technologies that would be difficult and costly to develop in-house.
              </BodyText>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-4xl text-primary mb-4">Service Tiers</Heading>
            <BodyText className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible service options to meet your specific security needs and budget
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">Essential</h3>
                <p className="text-muted-foreground">For small businesses and startups</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "24/7 security monitoring",
                  "Basic threat detection",
                  "Email security",
                  "Monthly security reports",
                  "8x5 support",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center gap-2 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-red-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">Advanced</h3>
                <p className="text-muted-foreground">For mid-sized organizations</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "24/7 security monitoring",
                  "Advanced threat detection",
                  "Email and web security",
                  "Vulnerability management",
                  "Weekly security reports",
                  "24/7 support",
                  "Incident response",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center gap-2 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">Enterprise</h3>
                <p className="text-muted-foreground">For large organizations with complex needs</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "24/7 security monitoring",
                  "Advanced threat detection and hunting",
                  "Comprehensive security suite",
                  "Dedicated security team",
                  "Custom security dashboards",
                  "Daily security reports",
                  "24/7 priority support",
                  "Advanced incident response",
                  "Security strategy consulting",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center gap-2 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready for 24/7 Security Protection?</h2>
            <p className="text-xl mb-10 opacity-90 font-body">
              Contact our team today to discuss how our managed security services can help protect your organization
              from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all"
              >
                Schedule a Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

