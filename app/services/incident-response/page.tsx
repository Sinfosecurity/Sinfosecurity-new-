import type { Metadata } from "next"
import { Shield, AlertTriangle, Clock, Users, Server, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Incident Response Services | Supreme Information Security LLC",
  description:
    "Our incident response team provides 24/7 support to help your organization detect, contain, and recover from security breaches quickly and effectively.",
}

export default function IncidentResponsePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Incident Response Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          When security incidents occur, every minute counts. Our expert incident response team provides rapid
          containment and remediation to minimize damage and restore operations.
        </p>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rapid Response</h3>
                <p className="text-gray-600">
                  Our 24/7 incident response team is ready to deploy within minutes of breach detection.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Containment & Eradication</h3>
                <p className="text-gray-600">
                  We quickly isolate affected systems and remove malicious actors from your environment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-600">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Server className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Recovery & Remediation</h3>
                <p className="text-gray-600">
                  We help restore systems and implement measures to prevent future incidents.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Incident Response Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Detection & Analysis",
              description: "Identify the breach, assess its scope, and determine affected systems.",
              icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
            },
            {
              step: "2",
              title: "Containment",
              description: "Isolate affected systems to prevent lateral movement and further damage.",
              icon: <Shield className="h-6 w-6 text-red-600" />,
            },
            {
              step: "3",
              title: "Eradication",
              description: "Remove malicious code, close vulnerabilities, and secure the environment.",
              icon: <CheckCircle className="h-6 w-6 text-red-600" />,
            },
            {
              step: "4",
              title: "Recovery & Lessons Learned",
              description: "Restore systems and implement improvements to prevent future incidents.",
              icon: <Server className="h-6 w-6 text-red-600" />,
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

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Incident Response Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Responders</h3>
                <p className="text-gray-600">
                  Our team consists of certified security professionals with extensive experience in incident response,
                  digital forensics, and threat hunting. They've handled incidents across various industries and threat
                  types.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
                <p className="text-gray-600">
                  Security incidents don't wait for business hours. Our team is available around the clock, ready to
                  respond to critical incidents at a moment's notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-600 text-white p-8 md:p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready for Rapid Response?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Don't wait until a breach occurs. Prepare your organization with our incident response services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-white text-red-600 hover:bg-gray-100">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
          <Button asChild variant="outline" className="border-white text-white hover:bg-red-700">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

