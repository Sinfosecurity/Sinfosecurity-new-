import Link from "next/link"
import { ArrowRight, Shield, Building, FileText, AlertTriangle, Server } from "lucide-react"

export const metadata = {
  title: "Government Industry Cybersecurity | Supreme Information Security LLC",
  description:
    "Specialized cybersecurity solutions for government agencies. Secure sensitive government information with FedRAMP and FISMA compliant solutions.",
}

export default function GovernmentIndustryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="cyber-grid"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block bg-blue-700/40 px-4 py-2 rounded-full mb-4">
                <p className="text-blue-100 font-medium text-sm flex items-center">
                  <Building className="h-4 w-4 mr-2" /> Industry Solutions
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Government Cybersecurity</h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Secure sensitive government information with our FedRAMP and FISMA compliant solutions. We help
                government agencies protect critical infrastructure and sensitive data from evolving cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Get a Security Assessment
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-30 animate-pulse"></div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Government Cybersecurity"
                  className="relative rounded-lg shadow-2xl border border-blue-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Security Challenges</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The government sector faces unique cybersecurity challenges that require specialized solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Critical Infrastructure Protection</h3>
              <p className="text-gray-600">
                Safeguarding critical government infrastructure from sophisticated cyber attacks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
              <p className="text-gray-600">Meeting complex regulatory requirements like FedRAMP, FISMA, and CMMC.</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <AlertTriangle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nation-State Threats</h3>
              <p className="text-gray-600">Defending against advanced persistent threats from nation-state actors.</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Server className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Classified Data Protection</h3>
              <p className="text-gray-600">
                Protecting classified and sensitive government information from unauthorized access.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Legacy System Security</h3>
              <p className="text-gray-600">Securing legacy systems that are critical to government operations.</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <AlertTriangle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supply Chain Risk</h3>
              <p className="text-gray-600">
                Managing security risks in the government supply chain and contractor ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Government Security Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive security solutions tailored specifically for government agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="p-8">
                <div className="bg-blue-100 p-4 rounded-full w-fit mb-6 group-hover:bg-blue-200 transition-colors">
                  <Shield className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Government Data Protection</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive solutions to protect sensitive government data and classified information.
                </p>

                <h4 className="text-gray-900 font-medium mb-4">Key Features:</h4>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Classified data protection</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Data loss prevention for government</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Secure information sharing</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Mobile device management</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Data encryption and access controls</span>
                  </li>
                </ul>

                <Link
                  href="/services/data-protection"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="p-8">
                <div className="bg-blue-100 p-4 rounded-full w-fit mb-6 group-hover:bg-blue-200 transition-colors">
                  <FileText className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Specialized security solutions to help government agencies meet regulatory requirements.
                </p>

                <h4 className="text-gray-900 font-medium mb-4">Key Features:</h4>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>FedRAMP compliance</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>FISMA compliance</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>CMMC compliance</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>NIST 800-53 implementation</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Continuous monitoring and reporting</span>
                  </li>
                </ul>

                <Link
                  href="/services/compliance"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="p-8">
                <div className="bg-blue-100 p-4 rounded-full w-fit mb-6 group-hover:bg-blue-200 transition-colors">
                  <Server className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Critical Infrastructure Protection</h3>
                <p className="text-gray-600 mb-6">
                  Solutions to secure critical government infrastructure from cyber threats.
                </p>

                <h4 className="text-gray-900 font-medium mb-4">Key Features:</h4>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Infrastructure vulnerability assessments</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Network security monitoring</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Incident response planning</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Secure configuration management</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Advanced threat protection</span>
                  </li>
                </ul>

                <Link
                  href="/services/network-security"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="p-8">
                <div className="bg-blue-100 p-4 rounded-full w-fit mb-6 group-hover:bg-blue-200 transition-colors">
                  <AlertTriangle className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Government Security Assessments</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive security assessments tailored specifically for government agencies.
                </p>

                <h4 className="text-gray-900 font-medium mb-4">Key Features:</h4>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Government-specific penetration testing</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Application security assessments</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Social engineering assessments</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Physical security assessments</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Supply chain security assessments</span>
                  </li>
                </ul>

                <Link
                  href="/services/security-audits"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 md:p-12">
                <div className="inline-block bg-blue-100 px-4 py-2 rounded-full mb-4">
                  <p className="text-blue-600 font-medium text-sm">Case Study</p>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  State Agency Enhances Security Posture
                </h2>
                <p className="text-gray-600 mb-6">
                  How we helped a state government agency secure sensitive data and achieve regulatory compliance.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
                <p className="text-gray-600 mb-6">
                  A state government agency responsible for managing citizen data was facing increasing cyber threats
                  and struggling to meet federal and state security requirements. They needed to enhance their security
                  posture while maintaining operational efficiency.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Solution</h3>
                <p className="text-gray-600 mb-6">
                  We implemented a comprehensive security program aligned with NIST frameworks that included network
                  security enhancements, data protection measures, employee training, and continuous monitoring. We also
                  helped them develop an incident response plan.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-3">Results</h3>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Achieved 100% compliance with state and federal security requirements</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>80% reduction in security vulnerabilities</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Successfully defended against multiple cyber attack attempts</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Implemented secure remote work solutions during the pandemic</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Established a security operations center for continuous monitoring</span>
                  </li>
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Discuss Your Project
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="State Agency Case Study"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Government Compliance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We help government agencies meet regulatory requirements and industry standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">FedRAMP</h3>
              <p className="text-gray-600 text-sm">Federal Risk and Authorization Management Program</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">FISMA</h3>
              <p className="text-gray-600 text-sm">Federal Information Security Modernization Act</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">CMMC</h3>
              <p className="text-gray-600 text-sm">Cybersecurity Maturity Model Certification</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">NIST 800-53</h3>
              <p className="text-gray-600 text-sm">Security Controls for Federal Information Systems</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">NIST 800-171</h3>
              <p className="text-gray-600 text-sm">Protecting Controlled Unclassified Information</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">CJIS</h3>
              <p className="text-gray-600 text-sm">Criminal Justice Information Services Security Policy</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">IRS 1075</h3>
              <p className="text-gray-600 text-sm">Tax Information Security Guidelines</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">StateRAMP</h3>
              <p className="text-gray-600 text-sm">State Risk and Authorization Management Program</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-blue-700/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Secure Your Government Agency?
                </h2>
                <p className="text-blue-100 max-w-xl">
                  Contact our team today to discuss how we can help protect your sensitive data and critical
                  infrastructure with solutions tailored for government agencies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
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

