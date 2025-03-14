import Link from "next/link"
import { ArrowRight, Shield, Users, FileText, Clock, CheckCircle } from "lucide-react"
import { Heading, BodyText } from "@/components/base-styles"

export const metadata = {
  title: "Security Consulting Services | Supreme Information Security",
  description:
    "Expert security consulting services to help your organization identify vulnerabilities, develop security strategies, and improve your overall security posture.",
}

export default function ConsultingPage() {
  const benefits = [
    {
      title: "Expert Guidance",
      description: "Access to certified security professionals with years of industry experience",
      icon: <Users className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Customized Solutions",
      description: "Security strategies tailored to your specific business needs and risk profile",
      icon: <Shield className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Comprehensive Assessment",
      description: "Thorough evaluation of your current security posture and vulnerabilities",
      icon: <FileText className="h-10 w-10 text-red-600" />,
    },
    {
      title: "Rapid Implementation",
      description: "Efficient deployment of security improvements with minimal disruption",
      icon: <Clock className="h-10 w-10 text-red-600" />,
    },
  ]

  const process = [
    {
      step: "1",
      title: "Initial Assessment",
      description:
        "We begin with a comprehensive evaluation of your current security posture, identifying vulnerabilities and areas for improvement.",
    },
    {
      step: "2",
      title: "Strategy Development",
      description:
        "Our experts develop a customized security strategy aligned with your business objectives and risk tolerance.",
    },
    {
      step: "3",
      title: "Implementation Planning",
      description:
        "We create a detailed implementation plan with clear timelines, responsibilities, and success metrics.",
    },
    {
      step: "4",
      title: "Execution & Monitoring",
      description: "Our team assists with implementation and provides ongoing monitoring to ensure effectiveness.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Security Consulting Services
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Expert guidance to strengthen your security posture and protect your business from evolving threats
            </p>
          </div>
        </div>

        {/* Abstract background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-20"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-20"></div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Security Consulting"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-red-600/20 px-4 py-2 rounded-full mb-4">
                <p className="text-red-600 font-medium text-sm flex items-center">
                  <Shield className="h-4 w-4 mr-2" /> Expert Security Services
                </p>
              </div>
              <Heading className="text-3xl md:text-4xl text-primary mb-6">Comprehensive Security Consulting</Heading>
              <BodyText className="text-muted-foreground mb-6">
                Our security consulting services provide expert guidance to help your organization identify
                vulnerabilities, develop effective security strategies, and implement robust security controls. We work
                closely with your team to understand your unique business needs and create customized solutions that
                align with your objectives.
              </BodyText>
              <BodyText className="text-muted-foreground mb-6">
                With decades of combined experience in cybersecurity, our consultants bring industry-leading expertise
                to every engagement. We stay at the forefront of emerging threats and technologies to ensure your
                organization receives the most effective and up-to-date security guidance available.
              </BodyText>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/services"
                  className="bg-transparent border border-red-600 text-red-600 hover:bg-red-600/10 px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-4xl text-primary mb-4">Benefits of Our Consulting Services</Heading>
            <BodyText className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how our security consulting services can transform your organization's security posture
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-red-600/10 p-4 rounded-full mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-4xl text-primary mb-4">Our Consulting Process</Heading>
            <BodyText className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to improving your security posture
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md relative border border-gray-200">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4 mt-4 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-4xl text-primary mb-4">Consulting Services We Offer</Heading>
            <BodyText className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security consulting tailored to your needs
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Security Strategy Development</h3>
              <p className="text-muted-foreground mb-4">
                We help you develop a comprehensive security strategy aligned with your business objectives, risk
                tolerance, and compliance requirements.
              </p>
              <ul className="space-y-2">
                {[
                  "Risk assessment and management",
                  "Security roadmap development",
                  "Security policy creation",
                  "Budget planning and optimization",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Security Architecture Review</h3>
              <p className="text-muted-foreground mb-4">
                Our experts evaluate your current security architecture and provide recommendations for improvement
                based on industry best practices.
              </p>
              <ul className="space-y-2">
                {[
                  "Network security assessment",
                  "Cloud security architecture review",
                  "Identity and access management evaluation",
                  "Data protection strategy assessment",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Compliance Consulting</h3>
              <p className="text-muted-foreground mb-4">
                We help you navigate complex regulatory requirements and achieve compliance with relevant standards and
                regulations.
              </p>
              <ul className="space-y-2">
                {[
                  "Gap analysis against compliance frameworks",
                  "Compliance roadmap development",
                  "Policy and procedure development",
                  "Pre-audit preparation and support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Security Program Development</h3>
              <p className="text-muted-foreground mb-4">
                We assist in building comprehensive security programs that address all aspects of information security.
              </p>
              <ul className="space-y-2">
                {[
                  "Security governance framework",
                  "Security awareness and training programs",
                  "Incident response planning",
                  "Security metrics and reporting",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Strengthen Your Security Posture?
            </h2>
            <p className="text-xl mb-10 opacity-90 font-body">
              Contact our team today to discuss how our security consulting services can help protect your organization
              from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all"
              >
                Schedule a Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

