import Link from "next/link"
import { Shield, Cloud, Lock, ChevronRight, BarChart3, Users, Award } from "lucide-react"
import TrustBadges from "@/components/trust-badges"
import { Heading, BodyText } from "@/components/base-styles"
import { HomeClientComponents } from "./home-client"
import { HeroCarouselClient } from "./hero-carousel-client"
import { CaseStudiesClient } from "./case-studies-client"
import { ThreatStatsClient } from "./threat-stats-client"
import { TeamCertificationsClient } from "./team-certifications-client"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Carousel */}
      <HeroCarouselClient />

      {/* Excellence in Cybersecurity Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Excellence in Cybersecurity</h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">Innovate, Secure, Protect</p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Supreme Information Security, a leading cybersecurity solutions provider, is committed to delivering
              excellence in digital protection. With a strong focus on innovation, expertise, and customer-centricity
              through tailored security services, Supreme provides comprehensive and cutting-edge solutions to meet the
              unique security needs of its clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-4xl text-blackbox-black mb-4">Our Security Solutions</Heading>
            <BodyText className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive cybersecurity services tailored to protect your organization from evolving threats
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 service-card">
              <div className="bg-blackbox-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="text-blackbox-red h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-blackbox-black mb-4">Network Security</h3>
              <BodyText className="text-gray-600 mb-6">
                Protect your network infrastructure from unauthorized access and cyber threats with advanced firewall
                configurations and intrusion detection systems.
              </BodyText>
              <Link
                href="/solutions/network-security"
                className="text-blackbox-red hover:text-blackbox-red/80 font-medium flex items-center gap-2"
              >
                Learn more <ChevronRight size={16} />
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 service-card">
              <div className="bg-blackbox-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Cloud className="text-blackbox-red h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-blackbox-black mb-4">Cloud Security</h3>
              <BodyText className="text-gray-600 mb-6">
                Secure your cloud infrastructure and applications with our specialized cloud security solutions designed
                for AWS, Azure, and Google Cloud.
              </BodyText>
              <Link
                href="/solutions/cloud-security"
                className="text-blackbox-red hover:text-blackbox-red/80 font-medium flex items-center gap-2"
              >
                Learn more <ChevronRight size={16} />
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 service-card">
              <div className="bg-blackbox-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Lock className="text-blackbox-red h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-blackbox-black mb-4">Data Protection</h3>
              <BodyText className="text-gray-600 mb-6">
                Implement robust data protection strategies including encryption, access controls, and data loss
                prevention to safeguard your sensitive information.
              </BodyText>
              <Link
                href="/solutions/data-protection"
                className="text-blackbox-red hover:text-blackbox-red/80 font-medium flex items-center gap-2"
              >
                Learn more <ChevronRight size={16} />
              </Link>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-8 service-card">
              <div className="bg-blackbox-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BarChart3 className="text-blackbox-red h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-blackbox-black mb-4">Security Assessment</h3>
              <BodyText className="text-gray-600 mb-6">
                Comprehensive security assessments including penetration testing, vulnerability scanning, and risk
                analysis to identify and address security gaps.
              </BodyText>
              <Link
                href="/solutions/security-assessment"
                className="text-blackbox-red hover:text-blackbox-red/80 font-medium flex items-center gap-2"
              >
                Learn more <ChevronRight size={16} />
              </Link>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-lg shadow-md p-8 service-card">
              <div className="bg-blackbox-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="text-blackbox-red h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-blackbox-black mb-4">Security Training</h3>
              <BodyText className="text-gray-600 mb-6">
                Educate your employees on cybersecurity best practices and create a security-aware culture through our
                comprehensive training programs.
              </BodyText>
              <Link
                href="/solutions/security-training"
                className="text-blackbox-red hover:text-blackbox-red/80 font-medium flex items-center gap-2"
              >
                Learn more <ChevronRight size={16} />
              </Link>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white rounded-lg shadow-md p-8 service-card">
              <div className="bg-blackbox-red/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="text-blackbox-red h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-blackbox-black mb-4">Compliance Solutions</h3>
              <BodyText className="text-gray-600 mb-6">
                Meet industry regulations and compliance requirements with our specialized security solutions for GDPR,
                HIPAA, PCI DSS, and more.
              </BodyText>
              <Link
                href="/solutions/compliance"
                className="text-blackbox-red hover:text-blackbox-red/80 font-medium flex items-center gap-2"
              >
                Learn more <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/solutions"
              className="bg-blackbox-red hover:bg-blackbox-red/90 text-white px-8 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-all"
            >
              View All Solutions
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Cyber Threat Landscape */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-4xl text-blackbox-black mb-4">Cyber Threat Landscape</Heading>
            <BodyText className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed about the latest cybersecurity threats and trends affecting organizations worldwide
            </BodyText>
          </div>

          <ThreatStatsClient />
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <TrustBadges />
        </div>
      </section>

      {/* Client Components (Cyber Threat Map and Live Chat) */}
      <HomeClientComponents />

      {/* Team Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-4xl text-blackbox-black mb-4">Our Expert Team</Heading>
            <BodyText className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our security professionals hold industry-leading certifications and have decades of combined experience
            </BodyText>
          </div>

          <TeamCertificationsClient />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-4xl text-blackbox-black mb-4">Success Stories</Heading>
            <BodyText className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how we've helped organizations strengthen their security posture and protect their digital assets
            </BodyText>
          </div>

          <CaseStudiesClient />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blackbox-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Secure Your Organization?</h2>
            <p className="text-xl mb-10 opacity-90 font-body">
              Contact our security experts today to discuss how we can help protect your business from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blackbox-red hover:bg-blackbox-red/90 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all"
              >
                Schedule a Consultation
                <ChevronRight size={18} />
              </Link>
              <Link
                href="/solutions"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

