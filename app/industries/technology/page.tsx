import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Code, Database, Cloud, Lock, Shield, Server } from "lucide-react"

export const metadata: Metadata = {
  title: "Technology Industry Cybersecurity | Supreme Information Security LLC",
  description:
    "Specialized cybersecurity solutions for technology companies. Protect intellectual property, secure development environments, and ensure product security.",
}

export default function TechnologyIndustryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Technology Industry Cybersecurity</h1>
              <p className="text-xl text-blue-100 mb-8">
                Protect your intellectual property, secure development environments, and build security into your
                products with our specialized technology security solutions.
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
                alt="Technology Cybersecurity"
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Key Cybersecurity Challenges in Technology
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Code className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Secure Development</h3>
              <p className="text-gray-700">
                Implementing secure coding practices and DevSecOps to build security into products from the beginning of
                the development lifecycle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Database className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">IP Protection</h3>
              <p className="text-gray-700">
                Safeguarding valuable intellectual property, source code, and proprietary algorithms from theft and
                corporate espionage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Cloud className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Cloud Security</h3>
              <p className="text-gray-700">
                Securing cloud infrastructure, services, and applications while maintaining scalability and performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Lock className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Customer Data Protection</h3>
              <p className="text-gray-700">
                Protecting customer data and ensuring compliance with global privacy regulations like GDPR, CCPA, and
                industry-specific requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Third-Party Risk</h3>
              <p className="text-gray-700">
                Managing security risks from third-party integrations, open-source components, and supply chain
                dependencies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Server className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Rapid Innovation Security</h3>
              <p className="text-gray-700">
                Maintaining strong security posture while supporting rapid innovation and agile development
                methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Technology Cybersecurity Approach</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Technology Security Approach"
                className="rounded-lg shadow-lg w-full"
                width={500}
                height={400}
              />
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">DevSecOps Integration</h3>
                <p className="text-gray-700 mb-4">
                  We help you integrate security into your development lifecycle, implementing automated security
                  testing, code scanning, and secure CI/CD pipelines.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Product Security Assessment</h3>
                <p className="text-gray-700 mb-4">
                  Our experts conduct thorough security assessments of your products and services, identifying
                  vulnerabilities before they reach your customers.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Cloud Security Architecture</h3>
                <p className="text-gray-700 mb-4">
                  We design and implement secure cloud architectures that protect your data and applications while
                  maintaining performance and scalability.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Security as a Differentiator</h3>
                <p className="text-gray-700 mb-4">
                  We help you transform security from a cost center to a competitive advantage, enabling you to build
                  trust with customers and partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Technology Success Story</h2>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Technology Client"
                  className="rounded-lg shadow-md w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  SaaS Provider Implements Security by Design
                </h3>
                <p className="text-gray-700 mb-4">
                  A growing SaaS company handling sensitive customer data needed to strengthen their security posture
                  while maintaining their rapid development pace. They faced increasing scrutiny from enterprise
                  customers regarding their security practices.
                </p>
                <p className="text-gray-700 mb-4">
                  Supreme Information Security LLC implemented a comprehensive DevSecOps program, including automated
                  security testing, secure coding training, and a robust cloud security architecture. We also helped
                  them prepare for SOC 2 certification to demonstrate their security commitment to customers.
                </p>
                <p className="text-gray-700 mb-6">
                  The result: 90% reduction in security vulnerabilities in new code, successful SOC 2 Type II
                  certification, and the ability to win enterprise customers who previously had security concerns.
                  Security became a competitive advantage rather than a roadblock.
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Secure Your Technology Business</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with Supreme Information Security LLC to protect your intellectual property, secure your development
            environment, and build security into your products.
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

