import Link from "next/link"
import { ArrowRight, Shield, AlertTriangle, FileText, Server, Lock } from "lucide-react"

export function generateMetadata({ params }: { params: { service: string } }) {
  // In a real app, you would fetch the service data based on the slug
  // and generate dynamic metadata
  const serviceName = params.service
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `${serviceName} | Supreme Information Security LLC`,
    description: `Learn about our ${serviceName.toLowerCase()} services and how we can help protect your business from cyber threats.`,
  }
}

export default function ServicePage({ params }: { params: { service: string } }) {
  // In a real app, you would fetch the service data based on the slug
  const serviceData = getServiceData(params.service)

  if (!serviceData) {
    return (
      <div className="min-h-screen py-20 bg-[#0d1b2a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-300 mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <Link
            href="/services"
            className="bg-[#ff7b00] hover:bg-[#e66a00] text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0d1b2a] text-white py-20 md:py-32 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="cyber-grid"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block bg-[#ff7b00]/20 px-4 py-2 rounded-full mb-4">
                <p className="text-[#ff7b00] font-medium text-sm flex items-center">
                  {serviceData.icon} Security Service
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{serviceData.name}</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">{serviceData.heroDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-[#ff7b00] hover:bg-[#e66a00] text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  All Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff7b00] to-blue-500 rounded-lg blur opacity-30 animate-pulse"></div>
                <img
                  src={serviceData.heroImage || "/placeholder.svg?height=400&width=500"}
                  alt={serviceData.name}
                  className="relative rounded-lg shadow-2xl border border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-[#1b263b]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our {serviceData.name.toLowerCase()} service includes comprehensive features to protect your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0d1b2a] p-8 rounded-lg border border-gray-800 hover:border-[#ff7b00]/50 transition-colors"
              >
                <div className="bg-[#ff7b00]/20 p-3 rounded-full w-fit mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Approach</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              How we implement {serviceData.name.toLowerCase()} solutions for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.process.map((step, index) => (
              <div key={index} className="bg-[#1b263b] p-8 rounded-lg border border-gray-800 relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#0d1b2a] px-4 py-1 rounded-full border border-gray-800">
                  <span className="text-[#ff7b00] font-bold">{(index + 1).toString().padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 mt-2 text-center">{step.title}</h3>
                <p className="text-gray-300 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#1b263b]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={serviceData.benefitsImage || "/placeholder.svg?height=400&width=500"}
                alt="Benefits of our service"
                className="rounded-lg shadow-xl border border-gray-800"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Benefits</h2>
              <p className="text-gray-300 mb-8">{serviceData.benefitsDescription}</p>

              <ul className="space-y-4">
                {serviceData.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-[#ff7b00]/20 p-2 rounded-full mt-0.5">
                      <Shield className="h-5 w-5 text-[#ff7b00]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our {serviceData.name.toLowerCase()} solutions are tailored for various industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {serviceData.industries.map((industry, index) => (
              <Link
                key={index}
                href={`/industries/${industry.slug}`}
                className="bg-[#1b263b] p-6 rounded-lg border border-gray-800 flex flex-col items-center text-center group hover:border-[#ff7b00]/50 transition-colors"
              >
                <div className="bg-[#ff7b00]/20 p-3 rounded-full mb-4 group-hover:bg-[#ff7b00]/30 transition-colors">
                  {industry.icon}
                </div>
                <h3 className="text-white font-medium group-hover:text-[#ff7b00] transition-colors">{industry.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#1b263b]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Common questions about our {serviceData.name.toLowerCase()} services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {serviceData.faqs.map((faq, index) => (
              <div key={index} className="bg-[#0d1b2a] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#1b263b] rounded-lg p-8 md:p-12 border border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-gray-300 max-w-xl">
                  Contact our team today to discuss how our {serviceData.name.toLowerCase()} services can help protect
                  your organization from cyber threats.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-[#ff7b00] hover:bg-[#e66a00] text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/client-portal"
                  className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Lock size={18} />
                  Client Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-[#1b263b]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Related Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore other security services that complement {serviceData.name.toLowerCase()}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceData.relatedServices.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="bg-[#0d1b2a] p-8 rounded-lg border border-gray-800 group hover:border-[#ff7b00]/50 transition-colors"
              >
                <div className="bg-[#ff7b00]/20 p-3 rounded-full w-fit mb-6 group-hover:bg-[#ff7b00]/30 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#ff7b00] transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-[#ff7b00] font-medium flex items-center gap-2">
                  Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

// Helper function to get service data based on slug
function getServiceData(slug: string) {
  const services = {
    "network-security": {
      name: "Network Security",
      icon: <Shield className="h-4 w-4 mr-2" />,
      heroImage: "/placeholder.svg?height=400&width=500",
      heroDescription:
        "Protect your network infrastructure from unauthorized access and cyber threats with our comprehensive network security solutions.",
      features: [
        {
          title: "Firewall Management",
          description: "Advanced firewall configuration, monitoring, and management to protect your network perimeter.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Intrusion Detection",
          description: "Real-time monitoring and detection of suspicious activities and potential network intrusions.",
          icon: <AlertTriangle className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "VPN Solutions",
          description: "Secure remote access solutions for your workforce with enterprise-grade VPN implementation.",
          icon: <Lock className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Network Segmentation",
          description: "Strategic network segmentation to contain breaches and limit lateral movement of threats.",
          icon: <Server className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Wireless Security",
          description: "Secure wireless network implementation with advanced encryption and access controls.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Network Monitoring",
          description: "24/7 monitoring of network traffic and performance to detect and respond to anomalies.",
          icon: <AlertTriangle className="h-8 w-8 text-[#ff7b00]" />,
        },
      ],
      process: [
        {
          title: "Assessment",
          description: "Comprehensive evaluation of your current network infrastructure and security posture.",
        },
        {
          title: "Design",
          description: "Custom security architecture design based on your specific network requirements.",
        },
        {
          title: "Implementation",
          description: "Expert deployment of security solutions with minimal disruption to operations.",
        },
        {
          title: "Monitoring",
          description: "Continuous monitoring and management to ensure ongoing protection.",
        },
      ],
      benefitsImage: "/placeholder.svg?height=400&width=500",
      benefitsDescription:
        "Our network security solutions provide comprehensive protection for your organization's infrastructure, helping you prevent data breaches, maintain compliance, and ensure business continuity.",
      benefits: [
        {
          title: "Prevent Data Breaches",
          description: "Protect sensitive data from unauthorized access and exfiltration.",
        },
        {
          title: "Reduce Security Incidents",
          description: "Proactively identify and address vulnerabilities before they can be exploited.",
        },
        {
          title: "Maintain Compliance",
          description: "Meet regulatory requirements for network security and data protection.",
        },
        {
          title: "Business Continuity",
          description: "Minimize downtime and ensure continuous operations with robust network protection.",
        },
        {
          title: "Enhanced Performance",
          description: "Optimize network performance while maintaining strong security controls.",
        },
      ],
      industries: [
        {
          name: "Finance",
          slug: "finance",
          icon: <Landmark className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Healthcare",
          slug: "healthcare",
          icon: <Hospital className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Government",
          slug: "government",
          icon: <Building className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Retail",
          slug: "retail",
          icon: <ShoppingBag className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Manufacturing",
          slug: "manufacturing",
          icon: <Briefcase className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Education",
          slug: "education",
          icon: <GraduationCap className="h-6 w-6 text-[#ff7b00]" />,
        },
      ],
      faqs: [
        {
          question: "What is included in your network security assessment?",
          answer:
            "Our network security assessment includes a comprehensive evaluation of your network infrastructure, firewall configurations, access controls, VPN setup, wireless security, and network segmentation. We identify vulnerabilities and provide recommendations for improvement.",
        },
        {
          question: "How often should we update our network security?",
          answer:
            "We recommend continuous monitoring and regular updates to your network security. At minimum, you should conduct quarterly reviews of your security configurations and annual comprehensive assessments to address evolving threats.",
        },
        {
          question: "Can you help with cloud network security?",
          answer:
            "Yes, our network security solutions extend to cloud environments. We provide security for hybrid networks, cloud-only infrastructures, and can help secure connections between your on-premises and cloud resources.",
        },
        {
          question: "Do you offer managed network security services?",
          answer:
            "Yes, we offer fully managed network security services that include 24/7 monitoring, regular maintenance, threat detection and response, and ongoing optimization of your security controls.",
        },
      ],
      relatedServices: [
        {
          name: "Penetration Testing",
          slug: "penetration-testing",
          description:
            "Identify vulnerabilities in your systems before hackers do with our expert penetration testing.",
          icon: <AlertTriangle className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          name: "Compliance",
          slug: "compliance",
          description: "Meet industry regulations and compliance requirements with our specialized security solutions.",
          icon: <FileText className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          name: "Incident Response",
          slug: "incident-response",
          description: "Rapid response to security incidents with our 24/7 incident response team.",
          icon: <Server className="h-8 w-8 text-[#ff7b00]" />,
        },
      ],
    },
    "penetration-testing": {
      name: "Penetration Testing",
      icon: <AlertTriangle className="h-4 w-4 mr-2" />,
      heroImage: "/placeholder.svg?height=400&width=500",
      heroDescription:
        "Identify vulnerabilities in your systems before hackers do with our expert penetration testing services. Our ethical hackers simulate real-world attacks to find security weaknesses.",
      features: [
        {
          title: "Web Application Testing",
          description: "Comprehensive testing of web applications to identify security flaws and vulnerabilities.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Network Penetration Testing",
          description:
            "Thorough assessment of network infrastructure to identify potential entry points for attackers.",
          icon: <AlertTriangle className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Mobile App Security Testing",
          description: "In-depth security testing of mobile applications across different platforms and devices.",
          icon: <Lock className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Social Engineering",
          description: "Simulated social engineering attacks to test employee awareness and organizational procedures.",
          icon: <Server className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Red Team Exercises",
          description: "Advanced adversary simulation to test your organization's detection and response capabilities.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Detailed Reporting",
          description: "Comprehensive reports with clear findings, risk ratings, and actionable remediation steps.",
          icon: <FileText className="h-8 w-8 text-[#ff7b00]" />,
        },
      ],
      process: [
        {
          title: "Scoping",
          description: "Define the scope and objectives of the penetration test based on your specific needs.",
        },
        {
          title: "Reconnaissance",
          description: "Gather information about target systems to identify potential vulnerabilities.",
        },
        {
          title: "Testing",
          description: "Conduct controlled exploitation of vulnerabilities to assess potential impact.",
        },
        {
          title: "Reporting",
          description: "Deliver detailed findings with clear remediation recommendations.",
        },
      ],
      benefitsImage: "/placeholder.svg?height=400&width=500",
      benefitsDescription:
        "Our penetration testing services help you identify and address security vulnerabilities before they can be exploited by malicious actors, reducing your risk of data breaches and security incidents.",
      benefits: [
        {
          title: "Identify Real Vulnerabilities",
          description: "Discover actual security weaknesses that could be exploited by attackers.",
        },
        {
          title: "Validate Security Controls",
          description: "Verify the effectiveness of your existing security measures and controls.",
        },
        {
          title: "Meet Compliance Requirements",
          description: "Satisfy regulatory and industry compliance requirements for security testing.",
        },
        {
          title: "Prioritize Remediation",
          description: "Focus your security resources on addressing the most critical vulnerabilities first.",
        },
        {
          title: "Enhance Security Posture",
          description: "Strengthen your overall security posture through regular testing and improvement.",
        },
      ],
      industries: [
        {
          name: "Finance",
          slug: "finance",
          icon: <Landmark className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Healthcare",
          slug: "healthcare",
          icon: <Hospital className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Government",
          slug: "government",
          icon: <Building className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Retail",
          slug: "retail",
          icon: <ShoppingBag className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Manufacturing",
          slug: "manufacturing",
          icon: <Briefcase className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Education",
          slug: "education",
          icon: <GraduationCap className="h-6 w-6 text-[#ff7b00]" />,
        },
      ],
      faqs: [
        {
          question: "How often should we conduct penetration testing?",
          answer:
            "We recommend conducting penetration testing at least annually, as well as after significant changes to your infrastructure, applications, or network. For organizations with high-security requirements, quarterly or bi-annual testing may be more appropriate.",
        },
        {
          question: "What's the difference between a vulnerability scan and a penetration test?",
          answer:
            "A vulnerability scan is an automated process that identifies known vulnerabilities but doesn't exploit them. A penetration test is a more comprehensive assessment where security experts actively attempt to exploit vulnerabilities to determine their real-world impact.",
        },
        {
          question: "Will penetration testing disrupt our operations?",
          answer:
            "We design our penetration tests to minimize disruption to your business operations. Tests can be scheduled during off-hours, and we take precautions to prevent service disruptions. However, some level of risk always exists, which we discuss and plan for during the scoping phase.",
        },
        {
          question: "How do you ensure the security of our data during testing?",
          answer:
            "We follow strict security protocols to protect your data during testing. All our penetration testers sign confidentiality agreements, and we use secure channels for communication and data transfer. We can also provide evidence of our security certifications and insurance coverage.",
        },
      ],
      relatedServices: [
        {
          name: "Network Security",
          slug: "network-security",
          description: "Protect your network infrastructure from unauthorized access and cyber threats.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          name: "Compliance",
          slug: "compliance",
          description: "Meet industry regulations and compliance requirements with our specialized security solutions.",
          icon: <FileText className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          name: "Incident Response",
          slug: "incident-response",
          description: "Rapid response to security incidents with our 24/7 incident response team.",
          icon: <Server className="h-8 w-8 text-[#ff7b00]" />,
        },
      ],
    },
    compliance: {
      name: "Compliance",
      icon: <FileText className="h-4 w-4 mr-2" />,
      heroImage: "/placeholder.svg?height=400&width=500",
      heroDescription:
        "Meet industry regulations and compliance requirements with our specialized security solutions. We help organizations navigate complex regulatory landscapes while maintaining strong security.",
      features: [
        {
          title: "Compliance Gap Analysis",
          description:
            "Comprehensive assessment of your current security posture against relevant compliance standards.",
          icon: <FileText className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Policy Development",
          description: "Creation of customized security policies and procedures aligned with compliance requirements.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Compliance Monitoring",
          description: "Continuous monitoring of security controls to ensure ongoing compliance.",
          icon: <AlertTriangle className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Audit Preparation",
          description: "Expert assistance in preparing for compliance audits and assessments.",
          icon: <Server className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Remediation Support",
          description: "Guidance and implementation support for addressing compliance gaps and deficiencies.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Compliance Reporting",
          description: "Detailed reporting and documentation to demonstrate compliance to auditors and regulators.",
          icon: <FileText className="h-8 w-8 text-[#ff7b00]" />,
        },
      ],
      process: [
        {
          title: "Assessment",
          description: "Evaluate your current compliance status and identify gaps against relevant standards.",
        },
        {
          title: "Planning",
          description: "Develop a comprehensive compliance roadmap tailored to your organization.",
        },
        {
          title: "Implementation",
          description: "Deploy necessary controls and processes to achieve compliance objectives.",
        },
        {
          title: "Validation",
          description: "Verify compliance through testing, monitoring, and documentation.",
        },
      ],
      benefitsImage: "/placeholder.svg?height=400&width=500",
      benefitsDescription:
        "Our compliance solutions help organizations meet regulatory requirements while strengthening their overall security posture, reducing risk, and building trust with customers and partners.",
      benefits: [
        {
          title: "Avoid Penalties",
          description: "Prevent costly fines and penalties associated with compliance violations.",
        },
        {
          title: "Build Trust",
          description: "Demonstrate commitment to security and privacy to customers and partners.",
        },
        {
          title: "Streamline Audits",
          description: "Simplify the audit process with organized documentation and evidence.",
        },
        {
          title: "Reduce Risk",
          description: "Identify and address security gaps through compliance-driven improvements.",
        },
        {
          title: "Competitive Advantage",
          description: "Gain a competitive edge by meeting compliance requirements that others may struggle with.",
        },
      ],
      industries: [
        {
          name: "Finance",
          slug: "finance",
          icon: <Landmark className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Healthcare",
          slug: "healthcare",
          icon: <Hospital className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Government",
          slug: "government",
          icon: <Building className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Retail",
          slug: "retail",
          icon: <ShoppingBag className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Manufacturing",
          slug: "manufacturing",
          icon: <Briefcase className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Education",
          slug: "education",
          icon: <GraduationCap className="h-6 w-6 text-[#ff7b00]" />,
        },
      ],
      faqs: [
        {
          question: "Which compliance standards do you support?",
          answer:
            "We support a wide range of compliance standards including GDPR, HIPAA, PCI DSS, SOC 2, ISO 27001, NIST, FedRAMP, CMMC, and many industry-specific regulations. Our team stays current with evolving compliance requirements.",
        },
        {
          question: "How long does it take to achieve compliance?",
          answer:
            "The timeline for achieving compliance varies depending on your current security posture, the complexity of the standard, and your organization's size. Generally, initial compliance can take 3-12 months, with some more complex standards like ISO 27001 potentially taking longer.",
        },
        {
          question: "Can you help with multiple compliance standards simultaneously?",
          answer:
            "Yes, we specialize in helping organizations meet multiple compliance requirements efficiently. We identify overlapping controls and requirements to streamline the compliance process and reduce redundant efforts.",
        },
        {
          question: "What happens if we fail an audit?",
          answer:
            "If you fail an audit, we provide rapid remediation support to address the identified issues. We help develop and implement corrective action plans, and work with you to prepare for re-assessment or re-audit as quickly as possible.",
        },
      ],
      relatedServices: [
        {
          name: "Network Security",
          slug: "network-security",
          description: "Protect your network infrastructure from unauthorized access and cyber threats.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          name: "Penetration Testing",
          slug: "penetration-testing",
          description:
            "Identify vulnerabilities in your systems before hackers do with our expert penetration testing.",
          icon: <AlertTriangle className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          name: "Incident Response",
          slug: "incident-response",
          description: "Rapid response to security incidents with our 24/7 incident response team.",
          icon: <Server className="h-8 w-8 text-[#ff7b00]" />,
        },
      ],
    },
    "incident-response": {
      name: "Incident Response",
      icon: <Server className="h-4 w-4 mr-2" />,
      heroImage: "/placeholder.svg?height=400&width=500",
      heroDescription:
        "Rapid response to security incidents with our 24/7 incident response team. We help organizations prepare for, detect, contain, and recover from cybersecurity incidents quickly and effectively.",
      features: [
        {
          title: "24/7 Response Team",
          description: "Round-the-clock availability of security experts to respond to incidents at any time.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Incident Detection",
          description: "Advanced monitoring and detection capabilities to identify security incidents quickly.",
          icon: <AlertTriangle className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Containment Strategies",
          description: "Rapid implementation of containment measures to limit the impact of security incidents.",
          icon: <Lock className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Forensic Investigation",
          description: "Thorough investigation to determine the scope, source, and impact of security incidents.",
          icon: <Server className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Recovery Support",
          description: "Expert guidance and assistance in recovering systems and data after an incident.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Post-Incident Analysis",
          description: "Comprehensive review and lessons learned to prevent similar incidents in the future.",
          icon: <FileText className="h-8 w-8 text-[#ff7b00]" />,
        },
      ],
      process: [
        {
          title: "Preparation",
          description: "Develop incident response plans and establish procedures before incidents occur.",
        },
        {
          title: "Detection",
          description: "Identify and validate security incidents through monitoring and analysis.",
        },
        {
          title: "Containment",
          description: "Implement measures to isolate affected systems and prevent further damage.",
        },
        {
          title: "Recovery",
          description: "Restore systems and data to normal operations with enhanced security.",
        },
      ],
      benefitsImage: "/placeholder.svg?height=400&width=500",
      benefitsDescription:
        "Our incident response services help organizations minimize the impact of security incidents, reduce recovery time and costs, and strengthen defenses against future threats.",
      benefits: [
        {
          title: "Minimize Damage",
          description: "Limit the scope and impact of security incidents through rapid response.",
        },
        {
          title: "Reduce Downtime",
          description: "Get systems back online quickly with expert recovery assistance.",
        },
        {
          title: "Preserve Evidence",
          description: "Properly collect and preserve forensic evidence for investigation and legal purposes.",
        },
        {
          title: "Meet Notification Requirements",
          description: "Ensure compliance with breach notification regulations and requirements.",
        },
        {
          title: "Strengthen Defenses",
          description: "Improve security posture based on lessons learned from incidents.",
        },
      ],
      industries: [
        {
          name: "Finance",
          slug: "finance",
          icon: <Landmark className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Healthcare",
          slug: "healthcare",
          icon: <Hospital className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Government",
          slug: "government",
          icon: <Building className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Retail",
          slug: "retail",
          icon: <ShoppingBag className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Manufacturing",
          slug: "manufacturing",
          icon: <Briefcase className="h-6 w-6 text-[#ff7b00]" />,
        },
        {
          name: "Education",
          slug: "education",
          icon: <GraduationCap className="h-6 w-6 text-[#ff7b00]" />,
        },
      ],
      faqs: [
        {
          question: "How quickly can your team respond to an incident?",
          answer:
            "Our incident response team is available 24/7/365. For clients with our managed services, initial response typically begins within 15-30 minutes of incident detection. For new clients experiencing an active incident, we can typically begin remote response within 1-2 hours and on-site response within 24 hours depending on location.",
        },
        {
          question: "What types of incidents do you handle?",
          answer:
            "We handle a wide range of security incidents including data breaches, ransomware attacks, malware infections, insider threats, DDoS attacks, business email compromise, and other cyber threats. Our team has experience with incidents across various industries and threat types.",
        },
        {
          question: "Do you offer incident response planning services?",
          answer:
            "Yes, we provide comprehensive incident response planning services to help organizations prepare before incidents occur. This includes developing incident response plans, conducting tabletop exercises, establishing communication protocols, and training your team on incident response procedures.",
        },
        {
          question: "How do you handle ransomware incidents?",
          answer:
            "For ransomware incidents, we follow a structured approach that includes containing the infection, preserving evidence, identifying the ransomware variant, assessing recovery options, and implementing recovery procedures. We help evaluate whether decryption is possible without paying ransom and assist with secure recovery from backups when available.",
        },
      ],
      relatedServices: [
        {
          name: "Network Security",
          slug: "network-security",
          description: "Protect your network infrastructure from unauthorized access and cyber threats.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          name: "Penetration Testing",
          slug: "penetration-testing",
          description:
            "Identify vulnerabilities in your systems before hackers do with our expert penetration testing.",
          icon: <AlertTriangle className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          name: "Compliance",
          slug: "compliance",
          description: "Meet industry regulations and compliance requirements with our specialized security solutions.",
          icon: <FileText className="h-8 w-8 text-[#ff7b00]" />,
        },
      ],
    },
  }

  return services[slug as keyof typeof services] || null
}

// Import the necessary icons
import { Landmark, Hospital, Building, ShoppingBag, Briefcase, GraduationCap } from "lucide-react"

