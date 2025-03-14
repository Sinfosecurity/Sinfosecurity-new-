import type { Metadata } from "next"
import { Lock, Shield, Database, FileText, Key } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Data Encryption Services | Supreme Information Security LLC",
  description:
    "Comprehensive data encryption solutions to protect your sensitive information at rest, in transit, and in use.",
}

export default function EncryptionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Encryption Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Protect your organization's sensitive data with our comprehensive encryption solutions that safeguard
          information at rest, in transit, and in use.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Database className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Data-at-Rest Encryption</h3>
                <p className="text-gray-600">
                  Protect stored data on servers, databases, endpoints, and cloud storage.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Data-in-Transit Encryption</h3>
                <p className="text-gray-600">
                  Secure data as it moves across networks, between applications, and to the cloud.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Key className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Key Management</h3>
                <p className="text-gray-600">Centralized management of encryption keys with robust access controls.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Solution Components */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Encryption Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Full Disk Encryption",
              description:
                "Protect all data on endpoints, servers, and storage devices with transparent encryption that secures the entire disk.",
              icon: <Database className="h-6 w-6 text-red-600" />,
            },
            {
              title: "File & Folder Encryption",
              description:
                "Selectively encrypt sensitive files and folders while maintaining user productivity and workflow.",
              icon: <FileText className="h-6 w-6 text-red-600" />,
            },
            {
              title: "Database Encryption",
              description:
                "Secure sensitive data in databases with column-level, file-level, or transparent data encryption.",
              icon: <Lock className="h-6 w-6 text-red-600" />,
            },
            {
              title: "Email & Communication Encryption",
              description: "Protect sensitive information in emails and communications with end-to-end encryption.",
              icon: <Shield className="h-6 w-6 text-red-600" />,
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

      {/* Implementation Process */}
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Implementation Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Assessment",
              description: "Identify sensitive data and evaluate encryption requirements based on your risk profile.",
              icon: <FileText className="h-6 w-6 text-red-600" />,
            },
            {
              step: "2",
              title: "Design",
              description: "Create a tailored encryption strategy that balances security and usability.",
              icon: <Lock className="h-6 w-6 text-red-600" />,
            },
            {
              step: "3",
              title: "Deployment",
              description: "Implement encryption solutions with minimal disruption to your operations.",
              icon: <Shield className="h-6 w-6 text-red-600" />,
            },
            {
              step: "4",
              title: "Key Management",
              description: "Establish secure processes for key generation, storage, rotation, and recovery.",
              icon: <Key className="h-6 w-6 text-red-600" />,
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
        <h2 className="text-3xl font-bold mb-4">Protect Your Sensitive Data</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Implement robust encryption solutions to safeguard your organization's most valuable information.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-white text-red-600 hover:bg-gray-100">
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-red-700">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

