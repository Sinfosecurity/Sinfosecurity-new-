import Link from "next/link"
import { ArrowRight, Shield, AlertTriangle, FileText, Server, Lock, Network, Wifi, Globe } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Network Security Solutions | Supreme Information Security LLC",
  description:
    "Protect your network infrastructure from unauthorized access and cyber threats with our comprehensive network security solutions.",
}

export default function NetworkSecurityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="inline-block bg-blue-700/20 px-4 py-2 rounded-full mb-4">
                <p className="text-blue-300 font-medium text-sm flex items-center">
                  <Shield className="h-4 w-4 mr-2" /> Security Solution
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Network Security</h1>
              <p className="text-xl text-blue-100 mb-8">
                Protect your network infrastructure from unauthorized access and cyber threats with our comprehensive
                network security solutions. Our advanced security measures ensure the integrity, confidentiality, and
                availability of your network.
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
                  href="/solutions"
                  className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
                >
                  All Solutions
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Network Security"
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
            Our comprehensive network security solutions include the following features to protect your business
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Next-Generation Firewall</h3>
              <p className="text-gray-700">
                Advanced firewall protection that combines traditional firewall capabilities with intrusion prevention,
                application awareness, and intelligence from outside the firewall.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <AlertTriangle className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Intrusion Detection & Prevention</h3>
              <p className="text-gray-700">
                Real-time monitoring and prevention of malicious activities with cutting-edge intrusion detection and
                prevention systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Network className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Network Segmentation</h3>
              <p className="text-gray-700">
                Strategic division of your network into isolated segments to enhance security and prevent unauthorized
                lateral movement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Lock className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Secure Remote Access</h3>
              <p className="text-gray-700">
                Encrypted VPN solutions and zero-trust network access to ensure secure communication between remote
                users and your network.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Wifi className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Wireless Network Security</h3>
              <p className="text-gray-700">
                Comprehensive protection for your wireless networks against unauthorized access and rogue devices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Globe className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">DDoS Protection</h3>
              <p className="text-gray-700">
                Advanced defense against distributed denial-of-service attacks to maintain network availability.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              Our team of experts provides tailored security solutions to meet your organization's specific needs,
              ensuring a robust and resilient network infrastructure.
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Network Security Approach</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Network Security Approach"
                className="rounded-lg shadow-lg w-full"
                width={500}
                height={400}
              />
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Comprehensive Assessment</h3>
                <p className="text-gray-700 mb-4">
                  We begin with a thorough assessment of your current network infrastructure, identifying
                  vulnerabilities and security gaps that could be exploited.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Custom Security Architecture</h3>
                <p className="text-gray-700 mb-4">
                  We design a tailored security architecture based on your specific network requirements, business
                  needs, and risk profile.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Strategic Implementation</h3>
                <p className="text-gray-700 mb-4">
                  We deploy security solutions with minimal disruption to your operations, ensuring a smooth transition
                  and immediate protection.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Continuous Monitoring</h3>
                <p className="text-gray-700 mb-4">
                  We provide ongoing monitoring and management to ensure continuous protection and rapid response to
                  emerging threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Benefits of Our Network Security Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Enhanced Protection</h3>
              <p className="text-gray-700">
                Comprehensive defense against a wide range of cyber threats, from common malware to sophisticated
                targeted attacks.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Server className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Business Continuity</h3>
              <p className="text-gray-700">
                Minimize downtime and ensure continuous operations with robust network security measures and rapid
                incident response.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Regulatory Compliance</h3>
              <p className="text-gray-700">
                Meet industry regulations and compliance requirements with comprehensive network security controls and
                documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Network Security Success Story</h2>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Network Security Client"
                  className="rounded-lg shadow-md w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Financial Institution Strengthens Network Defenses
                </h3>
                <p className="text-gray-700 mb-4">
                  A regional financial institution with multiple branches was experiencing frequent security incidents
                  and struggled to maintain regulatory compliance. They needed a comprehensive network security solution
                  to protect sensitive financial data.
                </p>
                <p className="text-gray-700 mb-4">
                  Supreme Information Security LLC implemented a multi-layered security approach including
                  next-generation firewalls, network segmentation, intrusion detection systems, and 24/7 monitoring
                  services.
                </p>
                <p className="text-gray-700 mb-6">
                  The result: 95% reduction in security incidents, full compliance with financial regulations, and
                  enhanced protection of customer data. The institution now has a robust security posture that adapts to
                  evolving threats.
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Secure Your Network?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss how our network security solutions can help protect your organization from
            cyber threats.
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
              href="/solutions"
              className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center transition-colors"
            >
              Explore All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

