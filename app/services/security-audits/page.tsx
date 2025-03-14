import type { Metadata } from "next"
import { ClipboardCheck, Shield, FileCheck, Lock, CheckCircle, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Security Audits | Supreme Information Security LLC",
  description:
    "Comprehensive security audits to identify vulnerabilities, assess compliance, and strengthen your organization's security posture.",
}

export default function SecurityAuditsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Security Audit Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our comprehensive security audits provide a detailed assessment of your organization's security posture,
          identifying vulnerabilities and compliance gaps before they can be exploited.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <ClipboardCheck className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Assessment</h3>
                <p className="text-gray-600">
                  Thorough evaluation of your security controls, policies, and procedures.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <FileCheck className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Compliance Verification</h3>
                <p className="text-gray-600">Ensure adherence to industry standards and regulatory requirements.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <BarChart className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Risk Prioritization</h3>
                <p className="text-gray-600">
                  Identify and prioritize security risks based on potential impact and likelihood.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Audit Types Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Security Audit Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Infrastructure Security Audit",
              description:
                "Comprehensive assessment of network infrastructure, servers, endpoints, and cloud environments to identify security gaps and vulnerabilities.",
              icon: <Shield className="h-6 w-6 text-red-600" />,
            },
            {
              title: "Application Security Audit",
              description:
                "In-depth review of web and mobile applications, APIs, and software development practices to uncover security flaws and weaknesses.",
              icon: <Lock className="h-6 w-6 text-red-600" />,
            },
            {
              title: "Compliance Audit",
              description:
                "Verification of adherence to industry standards and regulations such as GDPR, HIPAA, PCI DSS, SOC 2, and ISO 27001.",
              icon: <ClipboardCheck className="h-6 w-6 text-red-600" />,
            },
            {
              title: "Security Policy Audit",
              description:
                "Review of security policies, procedures, and documentation to ensure they meet industry best practices and organizational needs.",
              icon: <FileCheck className="h-6 w-6 text-red-600" />,
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Audit Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Planning & Scoping",
              description: "Define audit objectives, scope, and methodology based on your organization's needs.",
              icon: <ClipboardCheck className="h-6 w-6 text-red-600" />,
            },
            {
              step: "2",
              title: "Data Collection",
              description: "Gather information through interviews, documentation review, and technical assessments.",
              icon: <FileCheck className="h-6 w-6 text-red-600" />,
            },
            {
              step: "3",
              title: "Analysis & Testing",
              description: "Evaluate security controls and perform tests to identify vulnerabilities and gaps.",
              icon: <Shield className="h-6 w-6 text-red-600" />,
            },
            {
              step: "4",
              title: "Reporting & Recommendations",
              description: "Deliver detailed findings with prioritized recommendations for remediation.",
              icon: <CheckCircle className="h-6 w-6 text-red-600" />,
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="absolute top-4 right-4 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {item.step}
              </div>
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-600 text-white p-8 md:p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your Security Posture?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Our security audit services provide the insights you need to protect your organization from evolving threats.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-white text-red-600 hover:bg-gray-100">
            <Link href="/contact">Schedule an Audit</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-red-700">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

