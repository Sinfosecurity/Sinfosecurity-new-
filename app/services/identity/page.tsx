import type { Metadata } from "next"
import { UserCheck, Lock, Shield, Fingerprint, CheckCircle, Key } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Identity Management Services | Supreme Information Security LLC",
  description:
    "Comprehensive identity and access management solutions to secure user identities and control access to your systems and data.",
}

export default function IdentityManagementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Identity Management Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Secure and streamline access to your organization's resources with our comprehensive identity and access
          management solutions.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <UserCheck className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Single Sign-On (SSO)</h3>
                <p className="text-gray-600">
                  Streamline access with one set of credentials for multiple applications and services.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Fingerprint className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Multi-Factor Authentication</h3>
                <p className="text-gray-600">
                  Add additional layers of security beyond passwords to verify user identities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Lock className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Privileged Access Management</h3>
                <p className="text-gray-600">
                  Secure, control, and monitor access to critical systems and sensitive data.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Solution Components */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Identity Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Identity Governance & Administration",
              description:
                "Manage user identities, entitlements, and access policies across your organization with automated workflows.",
              icon: <UserCheck className="h-6 w-6 text-red-600" />,
            },
            {
              title: "Access Management",
              description:
                "Control and monitor user access to applications and resources with SSO, MFA, and adaptive authentication.",
              icon: <Lock className="h-6 w-6 text-red-600" />,
            },
            {
              title: "Directory Services",
              description:
                "Centralize user identity information and authentication with robust directory services and federation.",
              icon: <Shield className="h-6 w-6 text-red-600" />,
            },
            {
              title: "Privileged Account Management",
              description:
                "Secure privileged accounts with password vaulting, session monitoring, and just-in-time access.",
              icon: <Key className="h-6 w-6 text-red-600" />,
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
              description: "Evaluate your current identity infrastructure and access requirements.",
              icon: <UserCheck className="h-6 w-6 text-red-600" />,
            },
            {
              step: "2",
              title: "Design",
              description: "Create a tailored identity architecture that meets your security and business needs.",
              icon: <Shield className="h-6 w-6 text-red-600" />,
            },
            {
              step: "3",
              title: "Implementation",
              description: "Deploy identity solutions with integration to your existing systems and applications.",
              icon: <Lock className="h-6 w-6 text-red-600" />,
            },
            {
              step: "4",
              title: "Governance",
              description: "Establish ongoing processes for identity lifecycle management and access reviews.",
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
        <h2 className="text-3xl font-bold mb-4">Secure Your Digital Identities</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Implement robust identity management to protect your organization while enhancing user experience.
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

