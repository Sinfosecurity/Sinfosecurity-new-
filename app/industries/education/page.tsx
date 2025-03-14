import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, GraduationCap, Database, Users, Shield, Lock, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Education Industry Cybersecurity | Supreme Information Security LLC",
  description:
    "Specialized cybersecurity solutions for educational institutions. Protect student data, secure research, and ensure compliance with education regulations.",
}

export default function EducationIndustryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Education Cybersecurity Solutions</h1>
              <p className="text-xl text-blue-100 mb-8">
                Protect student data, secure valuable research, and defend against education-targeted threats with our
                specialized security solutions for educational institutions.
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
                alt="Education Cybersecurity"
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
            Key Cybersecurity Challenges in Education
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Database className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Student Data Protection</h3>
              <p className="text-gray-700">
                Safeguarding sensitive student information and ensuring compliance with FERPA and other education
                privacy regulations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <GraduationCap className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Research Security</h3>
              <p className="text-gray-700">
                Protecting valuable research data, intellectual property, and grant-funded projects from theft and
                espionage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Open Network Environments</h3>
              <p className="text-gray-700">
                Securing campus networks that serve thousands of users with diverse devices while maintaining academic
                freedom and accessibility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ransomware Protection</h3>
              <p className="text-gray-700">
                Defending against ransomware attacks that increasingly target educational institutions due to their
                valuable data and limited security resources.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Lock className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Remote Learning Security</h3>
              <p className="text-gray-700">
                Ensuring secure access to online learning platforms and protecting virtual classrooms from disruption
                and unauthorized access.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Compliance Requirements</h3>
              <p className="text-gray-700">
                Meeting various regulatory requirements including FERPA, COPPA, GDPR, and other education-specific data
                protection regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Education Cybersecurity Approach</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Education Security Approach"
                className="rounded-lg shadow-lg w-full"
                width={500}
                height={400}
              />
            </div>
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Comprehensive Security Assessment</h3>
                <p className="text-gray-700 mb-4">
                  We conduct thorough evaluations of your educational institution's security posture, identifying
                  vulnerabilities in networks, applications, and data storage systems.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Data Protection Strategy</h3>
                <p className="text-gray-700 mb-4">
                  We develop robust data protection strategies that safeguard student information, research data, and
                  administrative records while ensuring regulatory compliance.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Secure Access Solutions</h3>
                <p className="text-gray-700 mb-4">
                  We implement secure access controls that balance security with the need for open academic
                  environments, including multi-factor authentication and identity management.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Security Awareness Training</h3>
                <p className="text-gray-700 mb-4">
                  We provide customized security awareness training for faculty, staff, and students to create a
                  security-conscious campus culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Education Success Story</h2>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Education Client"
                  className="rounded-lg shadow-md w-full"
                  width={300}
                  height={300}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">University Strengthens Security Posture</h3>
                <p className="text-gray-700 mb-4">
                  A mid-sized university with 15,000 students faced increasing cybersecurity threats, including targeted
                  phishing campaigns and attempts to access sensitive research data. They needed a comprehensive
                  security solution that would protect their diverse digital assets.
                </p>
                <p className="text-gray-700 mb-4">
                  Supreme Information Security LLC implemented a multi-layered security program that included network
                  segmentation, advanced threat protection, secure research data repositories, and a campus-wide
                  security awareness program.
                </p>
                <p className="text-gray-700 mb-6">
                  The result: 85% reduction in successful phishing attempts, secure protection of valuable research
                  data, and full compliance with FERPA and other education regulations. The university now maintains a
                  strong security posture while preserving academic freedom.
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Secure Your Educational Institution</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with Supreme Information Security LLC to protect student data, secure valuable research, and defend
            against education-targeted cyber threats.
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

