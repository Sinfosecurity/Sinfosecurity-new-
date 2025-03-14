import type { Metadata } from "next"
import { Shield, Network, Lock, BarChart, CheckCircle, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Next-Gen Firewall Services | Supreme Information Security LLC",
  description:
    "Advanced firewall solutions that provide deep packet inspection, application control, and threat prevention for your network.",
}

export default function FirewallPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Next-Gen Firewall Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Protect your network with advanced firewall solutions that go beyond traditional port and protocol inspection
          to provide comprehensive visibility and control over applications, users, and content.
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
                <h3 className="text-xl font-bold mb-2">Advanced Threat Prevention</h3>
                <p className="text-gray-600">
                  Integrated intrusion prevention, anti-malware, and sandboxing capabilities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Network className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Application Control</h3>
                <p className="text-gray-600">
                  Granular visibility and control over applications regardless of port, protocol, or encryption.
                </p>
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
                <h3 className="text-xl font-bold mb-2">Real-time Analytics</h3>
                <p className="text-gray-600">
                  Comprehensive visibility into network traffic with detailed reporting and analytics.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Solution Components */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Firewall Protection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Deep Packet Inspection",
              description:
                "Examine the contents of network packets to identify and block malicious traffic, even when encrypted.",
              icon: <Network className="h-6 w-6 text-red-600" />,
            },
            {
              title: "User Identity Awareness",
              description:
                "Apply security policies based on user identity, not just IP addresses, for more precise control.",
              icon: <Lock className="h-6 w-6 text-red-600" />,
            },
            {
              title: "SSL/TLS Inspection",
              description:
                "Decrypt and inspect encrypted traffic to detect and prevent hidden threats and data exfiltration.",
              icon: <Shield className="h-6 w-6 text-red-600" />,
            },
            {
              title: "SD-WAN Integration",
              description: "Combine security and network optimization for branch offices and remote locations.",
              icon: <BarChart className="h-6 w-6 text-red-600" />,
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
              description: "Evaluate your current network security posture and traffic patterns.",
              icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
            },
            {
              step: "2",
              title: "Design",
              description: "Create a tailored firewall architecture that meets your security requirements.",
              icon: <Network className="h-6 w-6 text-red-600" />,
            },
            {
              step: "3",
              title: "Deployment",
              description: "Implement the solution with minimal disruption to your operations.",
              icon: <Shield className="h-6 w-6 text-red-600" />,
            },
            {
              step: "4",
              title: "Optimization",
              description: "Fine-tune policies and rules based on your specific traffic patterns and security needs.",
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
        <h2 className="text-3xl font-bold mb-4">Strengthen Your Network Security</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Protect your organization from advanced threats with our next-generation firewall solutions.
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

