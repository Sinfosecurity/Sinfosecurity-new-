import { Shield, CheckCircle, ArrowRight, FileText, Search, AlertTriangle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Security Assessment Services | Supreme Information Security LLC",
  description:
    "Identify vulnerabilities, evaluate risks, and strengthen your security posture with our expert assessment services.",
}

export default function SecurityAssessmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="inline-block bg-blue-700/20 px-4 py-2 rounded-full mb-4">
                <p className="text-blue-300 font-medium text-sm flex items-center">
                  <Shield className="h-4 w-4 mr-2" /> Security Service
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive Security Assessment</h1>
              <p className="text-xl text-blue-100 mb-8">
                Identify vulnerabilities, evaluate risks, and strengthen your security posture with our expert
                assessment services. Our thorough evaluations help you understand and address security gaps before they
                can be exploited.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                >
                  Schedule an Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#assessment-types"
                  className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Security Assessment"
                className="rounded-lg shadow-xl w-full"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Security Assessment Matters</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            In today's rapidly evolving threat landscape, understanding your security posture is critical. Our security
            assessment services provide a comprehensive evaluation of your organization's security controls, identifying
            vulnerabilities before they can be exploited by malicious actors.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Search className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Proactive Risk Identification</h3>
              <p className="text-gray-700">
                Identify security gaps and vulnerabilities before they can be exploited, allowing you to address issues
                before they lead to breaches.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <AlertTriangle className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Regulatory Compliance</h3>
              <p className="text-gray-700">
                Ensure your organization meets industry regulations and standards, avoiding costly penalties and
                maintaining customer trust.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Strategic Security Planning</h3>
              <p className="text-gray-700">
                Develop informed security strategies based on real data about your current security posture and specific
                organizational risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Types Section */}
      <section id="assessment-types" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Assessment Services</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Supreme Information Security LLC offers a comprehensive range of security assessment services tailored to
            your organization's specific needs and industry requirements.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Vulnerability Assessment</h3>
              <p className="text-gray-700 mb-4">
                A systematic review of security weaknesses in your information systems. We identify, quantify, and
                prioritize vulnerabilities in your systems and applications.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Comprehensive scanning of networks, systems, and applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Detailed vulnerability reports with severity ratings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Prioritized remediation recommendations</span>
                </li>
              </ul>
              <Link
                href="/contact?service=vulnerability-assessment"
                className="bg-blue-700 text-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium inline-flex items-center w-full justify-center transition-colors"
              >
                Request Vulnerability Assessment
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <AlertTriangle className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Penetration Testing</h3>
              <p className="text-gray-700 mb-4">
                Simulated attacks to identify exploitable vulnerabilities in your systems. Our ethical hackers use the
                same techniques as malicious actors to test your defenses.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Network, web application, and wireless penetration testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Social engineering assessments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Detailed exploitation reports with proof of concept</span>
                </li>
              </ul>
              <Link
                href="/contact?service=penetration-testing"
                className="bg-blue-700 text-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium inline-flex items-center w-full justify-center transition-colors"
              >
                Request Penetration Testing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Assessment Process</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Assessment Process"
                className="rounded-lg shadow-lg w-full"
                width={500}
                height={400}
              />
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Scoping and Planning</h3>
                <p className="text-gray-700 mb-4">
                  We work with you to define the scope, objectives, and methodology of the assessment, ensuring
                  alignment with your business goals.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Assessment Execution</h3>
                <p className="text-gray-700 mb-4">
                  Our security experts conduct the assessment using industry-leading tools and methodologies,
                  identifying vulnerabilities and security gaps.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Analysis and Reporting</h3>
                <p className="text-gray-700 mb-4">
                  We analyze findings, prioritize risks, and develop a comprehensive report with detailed remediation
                  recommendations.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Remediation Support</h3>
                <p className="text-gray-700 mb-4">
                  We provide guidance and support for implementing remediation measures, ensuring security improvements
                  are effective and sustainable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Security Assessment Success Story</h2>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Healthcare Client"
                  className="rounded-lg shadow-md w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Healthcare Provider Achieves Compliance</h3>
                <p className="text-gray-700 mb-4">
                  A regional healthcare provider with multiple facilities was struggling to meet HIPAA compliance
                  requirements and protect sensitive patient data. They needed a comprehensive security assessment to
                  identify vulnerabilities and develop a remediation roadmap.
                </p>
                <p className="text-gray-700 mb-4">
                  Supreme Information Security LLC conducted a thorough security assessment including vulnerability
                  scanning, penetration testing, and compliance gap analysis. We provided a detailed report with
                  prioritized remediation steps.
                </p>
                <p className="text-gray-700 mb-6">
                  The result: The healthcare provider achieved full HIPAA compliance, remediated critical
                  vulnerabilities, and implemented a continuous security monitoring program. They now have a robust
                  security posture that protects patient data and meets regulatory requirements.
                </p>
                <Link
                  href="/contact"
                  className="bg-blue-700 text-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
                >
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Strengthen Your Security Posture?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to schedule a consultation and learn how our security assessment services can help protect
            your organization from evolving threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/resources"
              className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

