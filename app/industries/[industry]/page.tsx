import Link from "next/link"
import { ArrowRight, Building, Hospital, Landmark, Shield, AlertTriangle, FileText, Server } from "lucide-react"

export function generateMetadata({ params }: { params: { industry: string } }) {
  // In a real app, you would fetch the industry data based on the slug
  // and generate dynamic metadata
  const industryName = params.industry.charAt(0).toUpperCase() + params.industry.slice(1).replace(/-/g, " ")

  return {
    title: `${industryName} Cybersecurity Solutions`,
    description: `Specialized cybersecurity solutions for the ${industryName} industry. Protect your organization from evolving cyber threats.`,
  }
}

export default function IndustryPage({ params }: { params: { industry: string } }) {
  // In a real app, you would fetch the industry data based on the slug
  const industryData = getIndustryData(params.industry)

  if (!industryData) {
    return (
      <div className="min-h-screen py-20 bg-[#0d1b2a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Industry Not Found</h1>
          <p className="text-gray-300 mb-8">The industry you're looking for doesn't exist or has been moved.</p>
          <Link
            href="/industries"
            className="bg-[#ff7b00] hover:bg-[#e66a00] text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2"
          >
            View All Industries
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
                  {industryData.icon} Industry Solutions
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{industryData.name} Cybersecurity</h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">{industryData.heroDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-[#ff7b00] hover:bg-[#e66a00] text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Get a Security Assessment
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff7b00] to-blue-500 rounded-lg blur opacity-30 animate-pulse"></div>
                <img
                  src={industryData.heroImage || "/placeholder.svg"}
                  alt={`${industryData.name} Cybersecurity`}
                  className="relative rounded-lg shadow-2xl border border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-[#1b263b]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Security Challenges</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The {industryData.name} industry faces unique cybersecurity challenges that require specialized solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryData.challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-[#0d1b2a] p-8 rounded-lg border border-gray-800 hover:border-[#ff7b00]/50 transition-colors"
              >
                <div className="bg-[#ff7b00]/20 p-3 rounded-full w-fit mb-6">{challenge.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{challenge.title}</h3>
                <p className="text-gray-300">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our {industryData.name} Security Solutions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive security solutions tailored specifically for {industryData.name.toLowerCase()} organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryData.solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-[#1b263b] rounded-lg border border-gray-800 overflow-hidden group hover:border-[#ff7b00]/50 transition-colors"
              >
                <div className="p-8">
                  <div className="bg-[#ff7b00]/20 p-4 rounded-full w-fit mb-6 group-hover:bg-[#ff7b00]/30 transition-colors">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>

                  <h4 className="text-white font-medium mb-4">Key Features:</h4>
                  <ul className="space-y-2 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <ArrowRight className="h-5 w-5 text-[#ff7b00] mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={solution.link}
                    className="inline-flex items-center gap-2 bg-[#ff7b00] hover:bg-[#e66a00] text-white px-6 py-3 rounded-md font-medium transition-colors"
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

      {/* Case Study Section */}
      <section className="py-20 bg-[#1b263b]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#0d1b2a] rounded-lg border border-gray-800 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 md:p-12">
                <div className="inline-block bg-[#ff7b00]/20 px-4 py-2 rounded-full mb-4">
                  <p className="text-[#ff7b00] font-medium text-sm">Case Study</p>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{industryData.caseStudy.title}</h2>
                <p className="text-gray-300 mb-6">{industryData.caseStudy.description}</p>

                <h3 className="text-xl font-bold text-white mb-3">The Challenge</h3>
                <p className="text-gray-300 mb-6">{industryData.caseStudy.challenge}</p>

                <h3 className="text-xl font-bold text-white mb-3">Our Solution</h3>
                <p className="text-gray-300 mb-6">{industryData.caseStudy.solution}</p>

                <h3 className="text-xl font-bold text-white mb-3">Results</h3>
                <ul className="space-y-2 mb-8">
                  {industryData.caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <ArrowRight className="h-5 w-5 text-[#ff7b00] mt-0.5 flex-shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#ff7b00] hover:bg-[#e66a00] text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Discuss Your Project
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={industryData.caseStudy.image || "/placeholder.svg"}
                  alt={industryData.caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{industryData.name} Compliance</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We help {industryData.name.toLowerCase()} organizations meet regulatory requirements and industry
              standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industryData.compliance.map((item, index) => (
              <div
                key={index}
                className="bg-[#1b263b] p-6 rounded-lg border border-gray-800 flex flex-col items-center text-center"
              >
                <div className="bg-[#ff7b00]/20 p-3 rounded-full mb-4">
                  <FileText className="h-6 w-6 text-[#ff7b00]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1b263b]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#0d1b2a] rounded-lg p-8 md:p-12 border border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Secure Your {industryData.name} Organization?
                </h2>
                <p className="text-gray-300 max-w-xl">
                  Contact our team today to discuss how we can help protect your organization from cyber threats with
                  solutions tailored for the {industryData.name.toLowerCase()} industry.
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
                  href="/services"
                  className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Helper function to get industry data based on slug
function getIndustryData(slug: string) {
  const industries = {
    finance: {
      name: "Finance",
      icon: <Landmark className="h-4 w-4 mr-2" />,
      heroImage: "/placeholder.svg?height=400&width=500",
      heroDescription:
        "Protect your financial institution from cyber threats with our specialized security solutions. We help banks, credit unions, and financial services companies secure sensitive data and maintain regulatory compliance.",
      challenges: [
        {
          title: "Data Breach Prevention",
          description:
            "Financial institutions are prime targets for data breaches due to the valuable customer and financial data they hold.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Regulatory Compliance",
          description:
            "Meeting complex regulatory requirements like PCI DSS, SOX, GLBA, and international banking regulations.",
          icon: <FileText className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Fraud Prevention",
          description:
            "Protecting against sophisticated fraud attempts targeting financial transactions and customer accounts.",
          icon: <AlertTriangle className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Third-Party Risk",
          description:
            "Managing security risks from third-party vendors and partners with access to financial systems.",
          icon: <Server className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Mobile Banking Security",
          description:
            "Ensuring secure mobile banking applications and protecting customer transactions on mobile devices.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Insider Threats",
          description:
            "Preventing and detecting malicious or accidental insider threats that could compromise financial data.",
          icon: <AlertTriangle className="h-8 w-8 text-[#ff7b00]" />,
        },
      ],
      solutions: [
        {
          title: "Financial Data Protection",
          description:
            "Comprehensive solutions to protect sensitive financial data, customer information, and transaction records.",
          icon: <Shield className="h-10 w-10 text-[#ff7b00]" />,
          features: [
            "Encryption for data at rest and in transit",
            "Data loss prevention (DLP) solutions",
            "Database activity monitoring",
            "Secure file sharing and collaboration",
            "Data classification and protection policies",
          ],
          link: "/services/data-protection",
        },
        {
          title: "Compliance Solutions",
          description:
            "Specialized security solutions to help financial institutions meet regulatory requirements and industry standards.",
          icon: <FileText className="h-10 w-10 text-[#ff7b00]" />,
          features: [
            "PCI DSS compliance",
            "SOX compliance",
            "GLBA compliance",
            "Compliance gap assessments",
            "Automated compliance reporting",
          ],
          link: "/services/compliance",
        },
        {
          title: "Fraud Detection & Prevention",
          description:
            "Advanced solutions to detect and prevent fraudulent activities targeting financial institutions.",
          icon: <AlertTriangle className="h-10 w-10 text-[#ff7b00]" />,
          features: [
            "Real-time transaction monitoring",
            "Behavioral analytics",
            "Fraud pattern detection",
            "Multi-factor authentication",
            "Anti-phishing solutions",
          ],
          link: "/services/threat-protection",
        },
        {
          title: "Financial Security Assessments",
          description: "Comprehensive security assessments tailored specifically for financial institutions.",
          icon: <Server className="h-10 w-10 text-[#ff7b00]" />,
          features: [
            "Network penetration testing",
            "Application security testing",
            "Social engineering assessments",
            "ATM and payment system security",
            "Third-party vendor risk assessments",
          ],
          link: "/services/security-audits",
        },
      ],
      caseStudy: {
        title: "Regional Bank Strengthens Security Posture",
        description:
          "How we helped a regional bank with 50+ branches enhance their security and achieve regulatory compliance.",
        challenge:
          "A regional bank with over 50 branches was struggling to maintain compliance with evolving regulations while facing increasingly sophisticated cyber threats. They needed to strengthen their security posture without disrupting their banking operations.",
        solution:
          "We implemented a comprehensive security program that included network segmentation, enhanced access controls, real-time monitoring, and employee security awareness training. We also conducted regular penetration testing and vulnerability assessments.",
        results: [
          "100% compliance with PCI DSS and GLBA requirements",
          "65% reduction in security incidents within the first year",
          "Successfully passed regulatory audits with zero findings",
          "Enhanced customer trust through improved security measures",
          "Streamlined security operations with automated monitoring and response",
        ],
        image: "/placeholder.svg?height=600&width=600",
      },
      compliance: [
        { name: "PCI DSS", description: "Payment Card Industry Data Security Standard" },
        { name: "SOX", description: "Sarbanes-Oxley Act" },
        { name: "GLBA", description: "Gramm-Leach-Bliley Act" },
        { name: "GDPR", description: "General Data Protection Regulation" },
        { name: "NYDFS", description: "NY Department of Financial Services Cybersecurity Regulation" },
        { name: "FFIEC", description: "Federal Financial Institutions Examination Council" },
        { name: "Basel II", description: "Banking supervision accord" },
        { name: "SWIFT CSP", description: "SWIFT Customer Security Program" },
      ],
    },
    healthcare: {
      name: "Healthcare",
      icon: <Hospital className="h-4 w-4 mr-2" />,
      heroImage: "/placeholder.svg?height=400&width=500",
      heroDescription:
        "Protect patient data and ensure HIPAA compliance with our specialized healthcare security solutions. We help hospitals, clinics, and healthcare providers safeguard electronic health records and medical devices.",
      challenges: [
        {
          title: "Patient Data Protection",
          description: "Safeguarding sensitive patient health information from unauthorized access and breaches.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "HIPAA Compliance",
          description: "Meeting and maintaining compliance with HIPAA and other healthcare regulations.",
          icon: <FileText className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Medical Device Security",
          description: "Securing connected medical devices and IoT equipment from cyber threats.",
          icon: <Server className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Ransomware Protection",
          description: "Defending against ransomware attacks that can disrupt critical healthcare services.",
          icon: <AlertTriangle className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Telemedicine Security",
          description: "Ensuring secure remote healthcare services and protecting patient-provider communications.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Third-Party Risk",
          description: "Managing security risks from healthcare vendors, partners, and service providers.",
          icon: <AlertTriangle className="h-8 w-8 text-[#ff7b00]" />,
        },
      ],
      solutions: [
        {
          title: "Healthcare Data Protection",
          description: "Comprehensive solutions to protect electronic health records and patient information.",
          icon: <Shield className="h-10 w-10 text-[#ff7b00]" />,
          features: [
            "PHI encryption and access controls",
            "Data loss prevention for healthcare",
            "Secure health information exchange",
            "Mobile device management for healthcare",
            "Secure patient portal solutions",
          ],
          link: "/services/data-protection",
        },
        {
          title: "HIPAA Compliance Solutions",
          description: "Specialized security solutions to help healthcare organizations meet HIPAA requirements.",
          icon: <FileText className="h-10 w-10 text-[#ff7b00]" />,
          features: [
            "HIPAA security risk assessments",
            "Compliance gap analysis",
            "Security policy development",
            "HIPAA training programs",
            "Breach notification planning",
          ],
          link: "/services/compliance",
        },
        {
          title: "Medical Device Security",
          description: "Solutions to secure connected medical devices and healthcare IoT equipment.",
          icon: <Server className="h-10 w-10 text-[#ff7b00]" />,
          features: [
            "Medical device inventory and risk assessment",
            "Network segmentation for medical devices",
            "Vulnerability management",
            "Secure configuration management",
            "Continuous monitoring and threat detection",
          ],
          link: "/services/iot-security",
        },
        {
          title: "Healthcare Security Assessments",
          description: "Comprehensive security assessments tailored specifically for healthcare organizations.",
          icon: <AlertTriangle className="h-10 w-10 text-[#ff7b00]" />,
          features: [
            "Healthcare-specific penetration testing",
            "EHR application security testing",
            "Social engineering assessments",
            "Physical security assessments",
            "Third-party vendor risk assessments",
          ],
          link: "/services/security-audits",
        },
      ],
      caseStudy: {
        title: "Hospital Network Secures Patient Data",
        description:
          "How we helped a multi-hospital healthcare system protect patient data and achieve HIPAA compliance.",
        challenge:
          "A healthcare system with multiple hospitals and clinics was struggling with securing patient data across their network. They faced challenges with legacy systems, connected medical devices, and maintaining HIPAA compliance.",
        solution:
          "We implemented a comprehensive healthcare security program that included network segmentation, data encryption, access controls, and continuous monitoring. We also conducted security assessments of their EHR systems and medical devices.",
        results: [
          "Achieved 100% HIPAA compliance across all facilities",
          "Secured over 5,000 connected medical devices",
          "70% reduction in security vulnerabilities",
          "Successfully defended against multiple ransomware attempts",
          "Implemented secure telemedicine solutions during the pandemic",
        ],
        image: "/placeholder.svg?height=600&width=600",
      },
      compliance: [
        { name: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
        { name: "HITECH", description: "Health Information Technology for Economic and Clinical Health Act" },
        { name: "GDPR", description: "General Data Protection Regulation" },
        { name: "FDA", description: "Food and Drug Administration regulations for medical devices" },
        { name: "NIST", description: "National Institute of Standards and Technology frameworks" },
        { name: "HITRUST", description: "Health Information Trust Alliance" },
        { name: "PCI DSS", description: "For healthcare payment processing" },
        { name: "42 CFR Part 2", description: "Confidentiality of Substance Use Disorder Patient Records" },
      ],
    },
    government: {
      name: "Government",
      icon: <Building className="h-4 w-4 mr-2" />,
      heroImage: "/placeholder.svg?height=400&width=500",
      heroDescription:
        "Secure sensitive government information with our FedRAMP and FISMA compliant solutions. We help government agencies protect critical infrastructure and sensitive data from evolving cyber threats.",
      challenges: [
        {
          title: "Critical Infrastructure Protection",
          description: "Safeguarding critical government infrastructure from sophisticated cyber attacks.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Regulatory Compliance",
          description: "Meeting complex regulatory requirements like FedRAMP, FISMA, and CMMC.",
          icon: <FileText className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Nation-State Threats",
          description: "Defending against advanced persistent threats from nation-state actors.",
          icon: <AlertTriangle className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Classified Data Protection",
          description: "Protecting classified and sensitive government information from unauthorized access.",
          icon: <Server className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Legacy System Security",
          description: "Securing legacy systems that are critical to government operations.",
          icon: <Shield className="h-8 w-8 text-[#ff7b00]" />,
        },
        {
          title: "Supply Chain Risk",
          description: "Managing security risks in the government supply chain and contractor ecosystem.",
          icon: <AlertTriangle className="h-8 w-8 text-[#ff7b00]" />,
        },
      ],
      solutions: [
        {
          title: "Government Data Protection",
          description: "Comprehensive solutions to protect sensitive government data and classified information.",
          icon: <Shield className="h-10 w-10 text-[#ff7b00]" />,
          features: [
            "Classified data protection",
            "Data loss prevention for government",
            "Secure information sharing",
            "Mobile device management",
            "Data encryption and access controls",
          ],
          link: "/services/data-protection",
        },
        {
          title: "Compliance Solutions",
          description: "Specialized security solutions to help government agencies meet regulatory requirements.",
          icon: <FileText className="h-10 w-10 text-[#ff7b00]" />,
          features: [
            "FedRAMP compliance",
            "FISMA compliance",
            "CMMC compliance",
            "NIST 800-53 implementation",
            "Continuous monitoring and reporting",
          ],
          link: "/services/compliance",
        },
        {
          title: "Critical Infrastructure Protection",
          description: "Solutions to secure critical government infrastructure from cyber threats.",
          icon: <Server className="h-10 w-10 text-[#ff7b00]" />,
          features: [
            "Infrastructure vulnerability assessments",
            "Network security monitoring",
            "Incident response planning",
            "Secure configuration management",
            "Advanced threat protection",
          ],
          link: "/services/network-security",
        },
        {
          title: "Government Security Assessments",
          description: "Comprehensive security assessments tailored specifically for government agencies.",
          icon: <AlertTriangle className="h-10 w-10 text-[#ff7b00]" />,
          features: [
            "Government-specific penetration testing",
            "Application security assessments",
            "Social engineering assessments",
            "Physical security assessments",
            "Supply chain security assessments",
          ],
          link: "/services/security-audits",
        },
      ],
      caseStudy: {
        title: "State Agency Enhances Security Posture",
        description: "How we helped a state government agency secure sensitive data and achieve regulatory compliance.",
        challenge:
          "A state government agency responsible for managing citizen data was facing increasing cyber threats and struggling to meet federal and state security requirements. They needed to enhance their security posture while maintaining operational efficiency.",
        solution:
          "We implemented a comprehensive security program aligned with NIST frameworks that included network security enhancements, data protection measures, employee training, and continuous monitoring. We also helped them develop an incident response plan.",
        results: [
          "Achieved 100% compliance with state and federal security requirements",
          "80% reduction in security vulnerabilities",
          "Successfully defended against multiple cyber attack attempts",
          "Implemented secure remote work solutions during the pandemic",
          "Established a security operations center for continuous monitoring",
        ],
        image: "/placeholder.svg?height=600&width=600",
      },
      compliance: [
        { name: "FedRAMP", description: "Federal Risk and Authorization Management Program" },
        { name: "FISMA", description: "Federal Information Security Modernization Act" },
        { name: "CMMC", description: "Cybersecurity Maturity Model Certification" },
        { name: "NIST 800-53", description: "Security Controls for Federal Information Systems" },
        { name: "NIST 800-171", description: "Protecting Controlled Unclassified Information" },
        { name: "CJIS", description: "Criminal Justice Information Services Security Policy" },
        { name: "IRS 1075", description: "Tax Information Security Guidelines" },
        { name: "StateRAMP", description: "State Risk and Authorization Management Program" },
      ],
    },
  }

  return industries[slug as keyof typeof industries] || null
}

