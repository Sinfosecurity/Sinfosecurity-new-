import Link from "next/link"
import { ArrowRight, Shield, AlertTriangle, Clock, Server, Lock, FileText } from "lucide-react"

export const metadata = {
  title: "Incident Response Services | Supreme Information Security LLC",
  description: "Rapid response to security incidents with our 24/7 incident response team.",
}

export default function IncidentResponsePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block bg-blue-700/50 px-4 py-2 rounded-full mb-4">
                <p className="text-blue-100 font-medium text-sm flex items-center">
                  <Server className="h-4 w-4 mr-2" /> Security Service
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Incident Response</h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Rapid response to security incidents with our 24/7 incident response team. We help organizations prepare
                for, detect, contain, and recover from cybersecurity incidents quickly and effectively.
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
                  className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
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
                  alt="Incident Response"
                  className="relative rounded-lg shadow-2xl"
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
              Our comprehensive incident response services include the following features to protect your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Response Team</h3>
              <p className="text-gray-600">
                Round-the-clock availability of security experts to respond to incidents at any time, minimizing damage
                and downtime.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <AlertTriangle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Incident Detection</h3>
              <p className="text-gray-600">
                Advanced monitoring and detection capabilities to identify security incidents quickly before they cause
                significant damage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Containment Strategies</h3>
              <p className="text-gray-600">
                Rapid implementation of containment measures to limit the impact of security incidents and prevent
                further damage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Server className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Forensic Investigation</h3>
              <p className="text-gray-600">
                Thorough investigation to determine the scope, source, and impact of security incidents for complete
                remediation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recovery Support</h3>
              <p className="text-gray-600">
                Expert guidance and assistance in recovering systems and data after an incident to restore normal
                operations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Post-Incident Analysis</h3>
              <p className="text-gray-600">
                Comprehensive review and lessons learned to prevent similar incidents in the future and strengthen your
                security posture.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Our incident response team has experience handling a wide range of security incidents, from ransomware
              attacks and data breaches to insider threats and DDoS attacks.
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
            <p className="text-gray-600 max-w-2xl mx-auto">How we handle security incidents for your organization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-white font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4 text-center">Preparation</h3>
              <p className="text-gray-600 text-center">
                We develop incident response plans and establish procedures before incidents occur.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-white font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4 text-center">Detection</h3>
              <p className="text-gray-600 text-center">
                We identify and validate security incidents through monitoring and analysis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-white font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4 text-center">Containment</h3>
              <p className="text-gray-600 text-center">
                We implement measures to isolate affected systems and prevent further damage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-white font-bold">04</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4 text-center">Recovery</h3>
              <p className="text-gray-600 text-center">
                We restore systems and data to normal operations with enhanced security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-blue-700/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Experiencing a Security Incident?</h2>
                <p className="text-blue-100 max-w-xl">
                  Contact our emergency response team immediately for rapid assistance. We're available 24/7 to help
                  contain and resolve security incidents.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Emergency Response
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/client-portal"
                  className="bg-transparent border border-white hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
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

