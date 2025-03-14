import Link from "next/link"
import { ArrowRight, Shield, Cloud, Database, Lock, Server, Globe } from "lucide-react"

export const metadata = {
  title: "Cloud Security Solutions | Supreme Information Security LLC",
  description: "Secure your cloud infrastructure and applications with our specialized cloud security solutions.",
}

export default function CloudSecurityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block bg-blue-700/50 px-4 py-2 rounded-full mb-4">
                <p className="text-blue-100 font-medium text-sm flex items-center">
                  <Globe className="h-4 w-4 mr-2" /> Security Solution
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Cloud Security</h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Secure your cloud infrastructure and applications with our specialized cloud security solutions. We help
                organizations safely migrate to and operate in cloud environments while maintaining robust security
                controls.
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
                  href="/solutions"
                  className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  All Solutions
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-30 animate-pulse"></div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Cloud Security"
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
              Our comprehensive cloud security solutions include the following features to protect your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Cloud className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Configuration Review</h3>
              <p className="text-gray-600">
                Comprehensive assessment of your cloud environment configurations to identify security gaps and
                misconfigurations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Cloud Security</h3>
              <p className="text-gray-600">
                Specialized security solutions for AWS, Azure, Google Cloud, and other cloud platforms to ensure
                consistent protection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Access Management</h3>
              <p className="text-gray-600">
                Implementation of robust identity and access management controls to prevent unauthorized access to cloud
                resources.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Protection in the Cloud</h3>
              <p className="text-gray-600">
                Encryption, data loss prevention, and secure data storage solutions to protect sensitive information in
                cloud environments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Server className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Container Security</h3>
              <p className="text-gray-600">
                Specialized security for Docker, Kubernetes, and other container technologies to protect microservices
                architectures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Serverless Security</h3>
              <p className="text-gray-600">
                Security solutions for serverless architectures like AWS Lambda, Azure Functions, and Google Cloud
                Functions.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Our cloud security experts help organizations securely adopt cloud technologies while maintaining
              compliance with industry regulations and best practices.
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
              How we implement cloud security solutions for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-white font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4 text-center">Assessment</h3>
              <p className="text-gray-600 text-center">
                We evaluate your current cloud environment and security controls to identify vulnerabilities and risks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-white font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4 text-center">Architecture</h3>
              <p className="text-gray-600 text-center">
                We design secure cloud architectures that align with your business requirements and security objectives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-white font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4 text-center">Implementation</h3>
              <p className="text-gray-600 text-center">
                We deploy security controls and configurations to protect your cloud environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white">
                <span className="text-white font-bold">04</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-4 text-center">Monitoring</h3>
              <p className="text-gray-600 text-center">
                We provide continuous monitoring and management of your cloud security posture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Cloud Security Challenges Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Cloud Security Challenges</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our solutions address these critical cloud security challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Misconfiguration Risks</h3>
                  <p className="text-gray-600">
                    Cloud environments are often vulnerable to misconfigurations that can expose sensitive data or
                    create security gaps.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Identity and Access Management</h3>
                  <p className="text-gray-600">
                    Managing who has access to what resources in the cloud can be complex and lead to excessive
                    permissions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Data Protection</h3>
                  <p className="text-gray-600">
                    Ensuring data is encrypted, properly stored, and protected from unauthorized access in cloud
                    environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Compliance in the Cloud</h3>
                  <p className="text-gray-600">
                    Meeting regulatory requirements and industry standards when data and applications are hosted in the
                    cloud.
                  </p>
                </div>
              </div>
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
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Secure Your Cloud?</h2>
                <p className="text-blue-100 max-w-xl">
                  Contact our team today to discuss how our cloud security solutions can help protect your
                  organization's cloud infrastructure and applications.
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
                  href="/solutions"
                  className="bg-transparent border border-white hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Lock size={18} />
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

