import Link from "next/link"
import { ArrowRight, Shield, AlertTriangle, Server, Lock, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Penetration Testing Services | Supreme Information Security LLC",
  description:
    "Identify vulnerabilities in your systems before hackers do with our expert penetration testing services.",
}

export default function PenetrationTestingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="inline-block bg-blue-700/20 px-4 py-2 rounded-full mb-4">
                <p className="text-blue-300 font-medium text-sm flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" /> Security Service
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Penetration Testing</h1>
              <p className="text-xl text-blue-100 mb-8">
                Identify vulnerabilities in your systems before hackers do with our expert penetration testing services.
                Our rigorous security assessments help you uncover weaknesses and fortify your defenses against
                potential cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                >
                  All Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Penetration Testing"
                className="rounded-lg shadow-xl w-full"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Features</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Our comprehensive penetration testing services include the following features to protect your business
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Web Application Penetration Testing</h3>
              <p className="text-gray-700">
                Assess and secure your web applications against common vulnerabilities, including SQL injection, XSS,
                and authentication flaws.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Server className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Network Penetration Testing</h3>
              <p className="text-gray-700">
                Simulate real-world attacks to identify and remediate network security gaps before malicious actors
                exploit them.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Lock className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Mobile Application Security Testing</h3>
              <p className="text-gray-700">
                Evaluate the security posture of your mobile applications, ensuring protection against data leaks,
                insecure APIs, and other threats.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Social Engineering Assessments</h3>
              <p className="text-gray-700">
                Test your organization's human security defenses through phishing simulations, impersonation attempts,
                and awareness training.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <AlertTriangle className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Red Team Exercises</h3>
              <p className="text-gray-700">
                Conduct full-scope attack simulations to assess your organization's ability to detect, respond to, and
                mitigate cyber threats.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              Our team of cybersecurity experts delivers actionable insights and remediation strategies to strengthen
              your security posture and protect your business from evolving threats.
            </p>
            <Link
              href="/contact"
              className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-colors"
            >
              Schedule a Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Penetration Testing Approach"
                className="rounded-lg shadow-lg w-full"
                width={500}
                height={400}
              />
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Scoping</h3>
                <p className="text-gray-700 mb-4">
                  We define the scope and objectives of the penetration test based on your specific needs and business
                  requirements.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Reconnaissance</h3>
                <p className="text-gray-700 mb-4">
                  We gather information about target systems to identify potential vulnerabilities and entry points.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Testing</h3>
                <p className="text-gray-700 mb-4">
                  We conduct controlled exploitation of vulnerabilities to assess potential impact and security risks.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Reporting</h3>
                <p className="text-gray-700 mb-4">
                  We deliver detailed findings with clear remediation recommendations and actionable insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Penetration Testing Success Story</h2>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Penetration Testing Client"
                  className="rounded-lg shadow-md w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">E-commerce Platform Secures Customer Data</h3>
                <p className="text-gray-700 mb-4">
                  A growing e-commerce company handling sensitive customer payment information needed to ensure their
                  platform was secure against potential attacks. They were preparing for a major expansion and needed to
                  validate their security posture.
                </p>
                <p className="text-gray-700 mb-4">
                  Supreme Information Security LLC conducted comprehensive penetration testing of their web
                  applications, APIs, and infrastructure. Our team identified several critical vulnerabilities that
                  could have led to customer data exposure.
                </p>
                <p className="text-gray-700 mb-6">
                  The result: All critical vulnerabilities were remediated before the platform expansion, preventing
                  potential data breaches. The company implemented our security recommendations and established an
                  ongoing security testing program.
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Test Your Defenses?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss how our penetration testing services can help identify vulnerabilities and
            strengthen your security posture.
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
              href="/client-portal"
              className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
            >
              <Lock size={18} className="mr-2" />
              Client Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

