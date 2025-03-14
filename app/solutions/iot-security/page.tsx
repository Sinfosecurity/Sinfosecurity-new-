import Link from "next/link"
import { ArrowRight, Shield, Cpu, Wifi, Lock, Server, Eye } from "lucide-react"

export const metadata = {
  title: "IoT Security Solutions | Supreme Information Security LLC",
  description: "Secure your Internet of Things devices and infrastructure from emerging threats.",
}

export default function IoTSecurityPage() {
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
                  <Cpu className="h-4 w-4 mr-2" /> Security Service
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">IoT Security</h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8">
                Secure your Internet of Things devices and infrastructure from emerging threats. Our specialized IoT
                security solutions help organizations protect their connected devices and systems.
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
                  alt="IoT Security"
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
              Our comprehensive IoT security solutions include the following features to protect your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Cpu className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">IoT Device Security Assessment</h3>
              <p className="text-gray-600">
                Comprehensive security assessments of IoT devices to identify vulnerabilities and security gaps.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Device Penetration Testing</h3>
              <p className="text-gray-600">
                Specialized penetration testing for smart devices to identify and address security weaknesses.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Server className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industrial IoT Security</h3>
              <p className="text-gray-600">
                Specialized security solutions for industrial IoT systems and operational technology environments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Wifi className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">IoT Network Security</h3>
              <p className="text-gray-600">
                Network security solutions designed specifically for IoT environments and connected devices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure IoT Architecture Design</h3>
              <p className="text-gray-600">
                Design and implementation of secure IoT architectures with built-in security controls.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">IoT Security Monitoring</h3>
              <p className="text-gray-600">
                Continuous monitoring of IoT devices and networks to detect and respond to security incidents.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Our IoT security experts help organizations secure their connected devices and systems against evolving
              threats while enabling the benefits of IoT technology.
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
              How we implement IoT security solutions for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                01
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2 text-center">Discovery</h3>
              <p className="text-gray-600 text-center">
                We identify and inventory all IoT devices and systems in your environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                02
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2 text-center">Assessment</h3>
              <p className="text-gray-600 text-center">
                We evaluate the security posture of your IoT devices and infrastructure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                03
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2 text-center">Implementation</h3>
              <p className="text-gray-600 text-center">
                We deploy security controls and measures to protect your IoT environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                04
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-2 text-center">Monitoring</h3>
              <p className="text-gray-600 text-center">
                We provide continuous monitoring and management of your IoT security.
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
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Secure Your IoT Environment?
                </h2>
                <p className="text-blue-100 max-w-xl">
                  Contact our team today to discuss how our IoT security solutions can help protect your connected
                  devices and systems from emerging threats.
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

