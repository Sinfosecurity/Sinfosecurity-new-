import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Factory, Shield, Cpu, Network, Lock, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Manufacturing Industry Cybersecurity | Supreme Information Security LLC",
  description:
    "Specialized cybersecurity solutions for manufacturing. Protect industrial control systems, secure intellectual property, and ensure operational continuity.",
}

export default function ManufacturingIndustryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Manufacturing Cybersecurity Solutions</h1>
              <p className="text-xl text-blue-100 mb-8">
                Protect your industrial control systems, secure intellectual property, and ensure operational continuity
                with our specialized manufacturing security solutions.
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
                alt="Manufacturing Cybersecurity"
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
            Key Cybersecurity Challenges in Manufacturing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Factory className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">OT/IT Convergence</h3>
              <p className="text-gray-700">
                Securing both operational technology (OT) and information technology (IT) systems as they become
                increasingly interconnected.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Cpu className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Industrial Control Systems</h3>
              <p className="text-gray-700">
                Protecting SCADA systems, PLCs, and other industrial control systems from targeted attacks and
                operational disruptions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Intellectual Property Protection</h3>
              <p className="text-gray-700">
                Safeguarding valuable intellectual property, designs, and manufacturing processes from theft and
                industrial espionage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Network className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Supply Chain Security</h3>
              <p className="text-gray-700">
                Ensuring security across the entire manufacturing supply chain to prevent third-party vulnerabilities
                and disruptions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Lock className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Legacy System Security</h3>
              <p className="text-gray-700">
                Protecting older manufacturing equipment and systems that were not designed with cybersecurity in mind.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <AlertTriangle className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Operational Continuity</h3>
              <p className="text-gray-700">
                Maintaining continuous operations and preventing costly downtime due to cybersecurity incidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Manufacturing Cybersecurity Approach
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Manufacturing Security Approach"
                className="rounded-lg shadow-lg w-full"
                width={500}
                height={400}
              />
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">OT/IT Security Integration</h3>
                <p className="text-gray-700 mb-4">
                  We develop comprehensive security strategies that bridge the gap between operational technology and
                  information technology systems.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Industrial Control System Protection</h3>
                <p className="text-gray-700 mb-4">
                  Our specialized team secures SCADA systems, PLCs, and other industrial control systems against
                  targeted attacks and vulnerabilities.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">IP and Trade Secret Security</h3>
                <p className="text-gray-700 mb-4">
                  We implement robust data protection measures to safeguard your intellectual property, designs, and
                  manufacturing processes.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Security by Design</h3>
                <p className="text-gray-700 mb-4">
                  We help you integrate security into new manufacturing processes and systems from the beginning, rather
                  than as an afterthought.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Manufacturing Success Story</h2>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Manufacturing Client"
                  className="rounded-lg shadow-md w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  Precision Parts Manufacturer Secures Industrial Systems
                </h3>
                <p className="text-gray-700 mb-4">
                  A leading precision parts manufacturer with multiple facilities faced increasing cybersecurity risks
                  as they modernized their production lines. They needed to protect both their industrial control
                  systems and intellectual property.
                </p>
                <p className="text-gray-700 mb-4">
                  Supreme Information Security LLC implemented a comprehensive OT/IT security program that included
                  network segmentation, industrial firewall deployment, secure remote access solutions, and continuous
                  monitoring of control systems.
                </p>
                <p className="text-gray-700 mb-6">
                  The result: Zero security-related downtime over 18 months, protection of critical manufacturing
                  processes, and secure integration of new smart manufacturing technologies without compromising
                  security.
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Secure Your Manufacturing Operations</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with Supreme Information Security LLC to protect your industrial systems, intellectual property, and
            ensure operational continuity.
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

