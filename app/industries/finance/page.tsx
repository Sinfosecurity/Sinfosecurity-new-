import Link from "next/link"
import { ArrowRight, Shield, Landmark, FileText, AlertTriangle, Lock, Server } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Finance Industry Cybersecurity | Supreme Information Security LLC",
  description:
    "Specialized cybersecurity solutions for financial institutions. Protect sensitive financial data and maintain regulatory compliance.",
}

export default function FinanceIndustryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="inline-block bg-blue-700/20 px-4 py-2 rounded-full mb-4">
                <p className="text-blue-300 font-medium text-sm flex items-center">
                  <Landmark className="h-4 w-4 mr-2" /> Industry Solutions
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Finance Cybersecurity</h1>
              <p className="text-xl text-blue-100 mb-8">
                Protect your financial institution from cyber threats with our specialized security solutions. We help
                banks, credit unions, and financial services companies secure sensitive customer data and maintain
                regulatory compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                >
                  Get a Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Finance Cybersecurity"
                className="rounded-lg shadow-xl w-full"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Security Challenges</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            The finance industry faces unique cybersecurity challenges that require specialized solutions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Data Breach Prevention</h3>
              <p className="text-gray-700">
                Financial institutions are prime targets for data breaches due to the valuable customer and financial
                data they hold.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Regulatory Compliance</h3>
              <p className="text-gray-700">
                Meeting complex regulatory requirements like PCI DSS, SOX, GLBA, and international banking regulations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <AlertTriangle className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Fraud Prevention</h3>
              <p className="text-gray-700">
                Protecting against sophisticated fraud attempts targeting financial transactions and customer accounts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Server className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Third-Party Risk</h3>
              <p className="text-gray-700">
                Managing security risks from third-party vendors and partners with access to financial systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Lock className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Mobile Banking Security</h3>
              <p className="text-gray-700">
                Ensuring secure mobile banking applications and protecting customer transactions on mobile devices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <AlertTriangle className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Insider Threats</h3>
              <p className="text-gray-700">
                Preventing and detecting malicious or accidental insider threats that could compromise financial data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Finance Security Approach</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Finance Security Approach"
                className="rounded-lg shadow-lg w-full"
                width={500}
                height={400}
              />
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Financial Data Protection</h3>
                <p className="text-gray-700 mb-4">
                  We implement comprehensive solutions to protect sensitive financial data, customer information, and
                  transaction records with advanced encryption and access controls.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Compliance Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Our specialized security solutions help financial institutions meet regulatory requirements and
                  industry standards like PCI DSS, SOX, and GLBA.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Fraud Detection & Prevention</h3>
                <p className="text-gray-700 mb-4">
                  We deploy advanced solutions to detect and prevent fraudulent activities targeting financial
                  institutions with real-time monitoring and behavioral analytics.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Security Assessments</h3>
                <p className="text-gray-700 mb-4">
                  Our comprehensive security assessments are tailored specifically for financial institutions to
                  identify vulnerabilities before they can be exploited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Finance Success Story</h2>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Regional Bank Case Study"
                  className="rounded-lg shadow-md w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Regional Bank Strengthens Security Posture
                </h3>
                <p className="text-gray-700 mb-4">
                  A regional bank with over 50 branches was struggling to maintain compliance with evolving regulations
                  while facing increasingly sophisticated cyber threats. They needed to strengthen their security
                  posture without disrupting their banking operations.
                </p>
                <p className="text-gray-700 mb-4">
                  We implemented a comprehensive security program that included network segmentation, enhanced access
                  controls, real-time monitoring, and employee security awareness training. We also conducted regular
                  penetration testing and vulnerability assessments.
                </p>
                <p className="text-gray-700 mb-6">
                  The result: 100% compliance with PCI DSS and GLBA requirements, 65% reduction in security incidents
                  within the first year, and successfully passed regulatory audits with zero findings.
                </p>
                <Link
                  href="/contact"
                  className="bg-blue-700 text-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Finance Compliance</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            We help financial organizations meet regulatory requirements and industry standards
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FileText className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">PCI DSS</h3>
              <p className="text-gray-700 text-sm">Payment Card Industry Data Security Standard</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FileText className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">SOX</h3>
              <p className="text-gray-700 text-sm">Sarbanes-Oxley Act</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FileText className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">GLBA</h3>
              <p className="text-gray-700 text-sm">Gramm-Leach-Bliley Act</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <FileText className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">GDPR</h3>
              <p className="text-gray-700 text-sm">General Data Protection Regulation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Financial Institution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss how we can help protect your organization from cyber threats with
            solutions tailored for the finance industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

