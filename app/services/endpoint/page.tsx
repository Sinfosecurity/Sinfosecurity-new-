import type { Metadata } from "next"
import { Shield, Monitor, Lock, RefreshCw, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Endpoint Protection Services | Supreme Information Security LLC",
  description:
    "Advanced endpoint protection solutions to secure your devices against malware, ransomware, and other cyber threats.",
}

export default function EndpointProtectionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Endpoint Protection Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Secure your organization's endpoints with our comprehensive protection solutions that defend against advanced
          threats, malware, and ransomware attacks.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Threat Protection</h3>
                <p className="text-gray-600">
                  AI-powered detection of known and unknown threats, including zero-day exploits.
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
                <h3 className="text-xl font-bold mb-2">Ransomware Prevention</h3>
                <p className="text-gray-600">
                  Proactive protection against ransomware with behavior-based detection and rollback capabilities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Monitor className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Centralized Management</h3>
                <p className="text-gray-600">
                  Unified console for policy management, monitoring, and response across all endpoints.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Solution Components */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Endpoint Protection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Next-Gen Antivirus",
              description:
                "Advanced malware detection and prevention using machine learning and behavioral analysis to stop known and unknown threats.",
              icon: <Shield className="h-6 w-6 text-red-600" />,
            },
            {
              title: "Endpoint Detection & Response (EDR)",
              description:
                "Continuous monitoring and response capabilities to detect, investigate, and remediate advanced threats across all endpoints.",
              icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
            },
            {
              title: "Application Control",
              description:
                "Prevent unauthorized applications from running with granular control over what software can execute on your endpoints.",
              icon: <Lock className="h-6 w-6 text-red-600" />,
            },
            {
              title: "Device Control",
              description:
                "Manage and restrict the use of removable media and peripheral devices to prevent data loss and malware introduction.",
              icon: <Monitor className="h-6 w-6 text-red-600" />,
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
              description: "Evaluate your current endpoint security posture and identify protection requirements.",
              icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
            },
            {
              step: "2",
              title: "Deployment",
              description: "Seamless rollout of endpoint protection solutions with minimal disruption.",
              icon: <Monitor className="h-6 w-6 text-red-600" />,
            },
            {
              step: "3",
              title: "Configuration",
              description: "Optimize security policies based on your organization's specific needs and risk profile.",
              icon: <Lock className="h-6 w-6 text-red-600" />,
            },
            {
              step: "4",
              title: "Monitoring & Management",
              description: "Ongoing oversight and maintenance to ensure continuous protection.",
              icon: <RefreshCw className="h-6 w-6 text-red-600" />,
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
        <h2 className="text-3xl font-bold mb-4">Secure Your Endpoints Today</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Protect your organization from advanced threats with our comprehensive endpoint protection services.
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

