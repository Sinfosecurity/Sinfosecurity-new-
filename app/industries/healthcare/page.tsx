import Link from "next/link"
import { ArrowRight, Shield, Hospital, FileText, AlertTriangle, Server } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Healthcare Industry Cybersecurity | Supreme Information Security LLC",
  description:
    "Specialized cybersecurity solutions for healthcare organizations. Protect patient data and ensure HIPAA compliance.",
}

export default function HealthcareIndustryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="inline-block bg-blue-700/20 px-4 py-2 rounded-full mb-4">
                <p className="text-blue-300 font-medium text-sm flex items-center">
                  <Hospital className="h-4 w-4 mr-2" /> Industry Solutions
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Healthcare Cybersecurity</h1>
              <p className="text-xl text-blue-100 mb-8">
                Protect patient data and ensure HIPAA compliance with our specialized healthcare security solutions. We
                help hospitals, clinics, and healthcare providers safeguard electronic health records and medical
                devices.
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
                alt="Healthcare Cybersecurity"
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
            The healthcare industry faces unique cybersecurity challenges that require specialized solutions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Patient Data Protection</h3>
              <p className="text-gray-700">
                Safeguarding sensitive patient health information from unauthorized access and breaches.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">HIPAA Compliance</h3>
              <p className="text-gray-700">
                Meeting and maintaining compliance with HIPAA and other healthcare regulations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Server className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Medical Device Security</h3>
              <p className="text-gray-700">Securing connected medical devices and IoT equipment from cyber threats.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <AlertTriangle className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ransomware Protection</h3>
              <p className="text-gray-700">
                Defending against ransomware attacks that can disrupt critical healthcare services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Telemedicine Security</h3>
              <p className="text-gray-700">
                Ensuring secure remote healthcare services and protecting patient-provider communications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <AlertTriangle className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Third-Party Risk</h3>
              <p className="text-gray-700">
                Managing security risks from healthcare vendors, partners, and service providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Healthcare Security Approach</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Healthcare Security Approach"
                className="rounded-lg shadow-lg w-full"
                width={500}
                height={400}
              />
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Healthcare Data Protection</h3>
                <p className="text-gray-700 mb-4">
                  We implement comprehensive solutions to protect electronic health records and patient information with
                  advanced encryption and access controls.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">HIPAA Compliance Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Our specialized security solutions help healthcare organizations meet HIPAA requirements and other
                  regulatory standards.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Medical Device Security</h3>
                <p className="text-gray-700 mb-4">
                  We secure connected medical devices and healthcare IoT equipment against vulnerabilities and cyber
                  threats.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Security Assessments</h3>
                <p className="text-gray-700 mb-4">
                  Our comprehensive security assessments are tailored specifically for healthcare institutions to
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Healthcare Success Story</h2>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Hospital Network Case Study"
                  className="rounded-lg shadow-md w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Hospital Network Secures Patient Data</h3>
                <p className="text-gray-700 mb-4">
                  A healthcare system with multiple hospitals and clinics was struggling with securing patient data
                  across their network. They faced challenges with legacy systems, connected medical devices, and
                  maintaining HIPAA compliance.
                </p>
                <p className="text-gray-700 mb-4">
                  We implemented a comprehensive healthcare security program that included network segmentation, data
                  encryption, access controls, and continuous monitoring. We also conducted security assessments of
                  their EHR systems and medical devices.
                </p>
                <p className="text-gray-700 mb-6">
                  The result: Achieved 100% HIPAA compliance across all facilities, secured over 5,000 connected medical
                  devices, and 70% reduction in security vulnerabilities.
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Healthcare Organization?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss how we can help protect your patient data and ensure HIPAA compliance with
            solutions tailored for the healthcare industry.
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

