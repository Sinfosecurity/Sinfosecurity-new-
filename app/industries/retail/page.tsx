import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, ShieldCheck, Building, CreditCard, Users, Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Retail Industry Cybersecurity Solutions | Supreme Information Security LLC",
  description:
    "Specialized cybersecurity solutions for the retail industry. Protect customer data, secure payment systems, and ensure compliance with PCI DSS.",
}

export default function RetailIndustryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Retail Cybersecurity Solutions</h1>
              <p className="text-xl text-blue-100 mb-8">
                Protect your customers' data, secure payment systems, and defend against retail-specific cyber threats
                with our specialized security solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/solutions"
                  className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Retail Cybersecurity"
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Cybersecurity Challenges in Retail</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <CreditCard className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Payment Card Security</h3>
              <p className="text-gray-700">
                Protecting customer payment information and maintaining PCI DSS compliance to prevent data breaches and
                financial fraud.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Customer Data Protection</h3>
              <p className="text-gray-700">
                Safeguarding sensitive customer information including personal details, purchase history, and loyalty
                program data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Building className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Multi-Channel Security</h3>
              <p className="text-gray-700">
                Securing both physical stores and e-commerce platforms against evolving threats across all retail
                channels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Lock className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Point-of-Sale Security</h3>
              <p className="text-gray-700">
                Protecting POS systems from malware and skimming attacks that can compromise transaction data at the
                point of purchase.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <ShieldCheck className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Supply Chain Security</h3>
              <p className="text-gray-700">
                Ensuring the security of your entire supply chain, from manufacturers to distributors, to prevent
                third-party breaches.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Insider Threat Management</h3>
              <p className="text-gray-700">
                Mitigating risks from employees and contractors who have access to sensitive systems and customer data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Retail Cybersecurity Approach</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Retail Security Approach"
                className="rounded-lg shadow-lg w-full"
                width={500}
                height={400}
              />
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Comprehensive Retail Security Assessment</h3>
                <p className="text-gray-700 mb-4">
                  We conduct thorough evaluations of your retail environment, including POS systems, e-commerce
                  platforms, and physical security controls to identify vulnerabilities.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">PCI DSS Compliance Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Our experts help you achieve and maintain Payment Card Industry Data Security Standard compliance to
                  protect cardholder data and avoid penalties.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Omnichannel Security Strategy</h3>
                <p className="text-gray-700 mb-4">
                  We develop integrated security strategies that protect all your retail channels, from brick-and-mortar
                  stores to mobile apps and e-commerce platforms.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Employee Security Training</h3>
                <p className="text-gray-700 mb-4">
                  We provide customized security awareness training for retail staff to recognize and respond to social
                  engineering attacks and other security threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Retail Success Story</h2>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Retail Client"
                  className="rounded-lg shadow-md w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  National Retail Chain Secures Multi-Channel Operations
                </h3>
                <p className="text-gray-700 mb-4">
                  A national retail chain with over 200 locations faced significant security challenges across their
                  in-store POS systems and growing e-commerce platform. After experiencing a minor data breach, they
                  partnered with Supreme Information Security LLC to overhaul their security posture.
                </p>
                <p className="text-gray-700 mb-4">
                  Our team implemented a comprehensive security program that included PCI DSS compliance remediation,
                  network segmentation, endpoint protection, and employee security awareness training. We also deployed
                  advanced threat detection systems to monitor for suspicious activities across all channels.
                </p>
                <p className="text-gray-700 mb-6">
                  The result: A 95% reduction in security incidents, successful PCI DSS certification, and increased
                  customer trust. The retailer now maintains a robust security posture that scales with their business
                  growth.
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Protect Your Retail Business Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with Supreme Information Security LLC to safeguard your customers' data, secure your payment
            systems, and protect your retail brand reputation.
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
              href="/solutions/security-assessment"
              className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
            >
              Learn About Our Security Assessments
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

