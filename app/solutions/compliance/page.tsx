import Link from "next/link"
import { ArrowRight, Shield, FileText, CheckCircle, Lock, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Compliance & Regulatory Solutions | Supreme Information Security LLC",
  description: "Meet industry regulations and compliance requirements with our specialized security solutions.",
}

export default function CompliancePage() {
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
              <div className="inline-block bg-blue-500/20 px-4 py-2 rounded-full mb-4">
                <p className="text-blue-200 font-medium text-sm flex items-center">
                  <FileText className="h-4 w-4 mr-2" /> Security Service
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Compliance Solutions</h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8">
                Meet industry regulations and compliance requirements with our specialized security solutions. We help
                organizations navigate complex regulatory landscapes while maintaining strong security posture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  All Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-30 animate-pulse"></div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Compliance Solutions"
                  className="relative rounded-lg shadow-2xl border border-blue-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive compliance solutions include the following features to help your business meet
              regulatory requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Gap Analysis</h3>
              <p className="text-gray-600">
                Comprehensive assessment of your current security posture against relevant compliance standards to
                identify gaps and areas for improvement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Policy Development</h3>
              <p className="text-gray-600">
                Creation of customized security policies and procedures aligned with compliance requirements and
                industry best practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <AlertTriangle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Monitoring</h3>
              <p className="text-gray-600">
                Continuous monitoring of security controls to ensure ongoing compliance with regulatory requirements and
                standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Audit Preparation</h3>
              <p className="text-gray-600">
                Expert assistance in preparing for compliance audits and assessments, ensuring you're ready when
                auditors arrive.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Remediation Support</h3>
              <p className="text-gray-600">
                Guidance and implementation support for addressing compliance gaps and deficiencies identified during
                assessments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Reporting</h3>
              <p className="text-gray-600">
                Detailed reporting and documentation to demonstrate compliance to auditors, regulators, and
                stakeholders.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              We support a wide range of compliance standards including GDPR, HIPAA, PCI DSS, SOC 2, ISO 27001, NIST,
              FedRAMP, CMMC, and many industry-specific regulations.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-all"
            >
              Schedule a Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we help your organization achieve and maintain compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2 text-center">Assessment</h3>
              <p className="text-gray-600 text-center">
                We evaluate your current compliance status and identify gaps against relevant standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2 text-center">Planning</h3>
              <p className="text-gray-600 text-center">
                We develop a comprehensive compliance roadmap tailored to your organization.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2 text-center">Implementation</h3>
              <p className="text-gray-600 text-center">
                We deploy necessary controls and processes to achieve compliance objectives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                04
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2 text-center">Validation</h3>
              <p className="text-gray-600 text-center">
                We verify compliance through testing, monitoring, and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-blue-700/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Achieve Compliance?</h2>
                <p className="text-blue-100 max-w-xl">
                  Contact our team today to discuss how our compliance solutions can help your organization meet
                  regulatory requirements and strengthen your security posture.
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
                  href="/client-portal"
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Lock size={18} />
                  Client Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

