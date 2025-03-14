import Link from "next/link"
import { ArrowRight, Building, Hospital, Landmark, ShoppingBag, Briefcase, GraduationCap } from "lucide-react"
import { Heading, BodyText } from "@/components/base-styles"

export const metadata = {
  title: "Industries We Serve",
  description:
    "Explore our specialized cybersecurity solutions for various industries including finance, healthcare, government, retail, manufacturing, and education.",
}

export default function IndustriesPage() {
  const industries = [
    {
      id: 1,
      name: "Finance",
      description:
        "Secure financial data and comply with regulations like PCI DSS, SOX, and GLBA. Our solutions help financial institutions protect sensitive customer information and maintain regulatory compliance.",
      icon: <Landmark className="h-10 w-10 text-accent" />,
      features: [
        "Secure payment processing systems",
        "Fraud detection and prevention",
        "Regulatory compliance (PCI DSS, SOX, GLBA)",
        "Secure mobile banking solutions",
        "Third-party risk management",
      ],
      link: "/industries/finance",
    },
    {
      id: 2,
      name: "Healthcare",
      description:
        "Protect patient data and ensure HIPAA compliance with our specialized security solutions. We help healthcare providers safeguard electronic health records and medical devices.",
      icon: <Hospital className="h-10 w-10 text-accent" />,
      features: [
        "HIPAA compliance solutions",
        "Medical device security",
        "Electronic health record protection",
        "Telemedicine security",
        "Healthcare IoT security",
      ],
      link: "/industries/healthcare",
    },
    {
      id: 3,
      name: "Government",
      description:
        "Secure sensitive government information with FedRAMP and FISMA compliant solutions. Our team helps government agencies protect critical infrastructure and sensitive data.",
      icon: <Building className="h-10 w-10 text-accent" />,
      features: [
        "FedRAMP compliance",
        "FISMA compliance",
        "Critical infrastructure protection",
        "Secure government cloud solutions",
        "Classified data protection",
      ],
      link: "/industries/government",
    },
    {
      id: 4,
      name: "Retail",
      description:
        "Protect customer data and payment information from breaches and cyber attacks. Our retail security solutions help maintain customer trust and protect your brand reputation.",
      icon: <ShoppingBag className="h-10 w-10 text-accent" />,
      features: [
        "E-commerce security",
        "Point-of-sale system protection",
        "Customer data protection",
        "Supply chain security",
        "PCI DSS compliance",
      ],
      link: "/industries/retail",
    },
    {
      id: 5,
      name: "Manufacturing",
      description:
        "Secure industrial control systems and protect intellectual property from threats. Our manufacturing security solutions help prevent operational disruptions and protect trade secrets.",
      icon: <Briefcase className="h-10 w-10 text-accent" />,
      features: [
        "Industrial control system security",
        "Intellectual property protection",
        "Supply chain security",
        "OT/IT convergence security",
        "Manufacturing IoT security",
      ],
      link: "/industries/manufacturing",
    },
    {
      id: 6,
      name: "Education",
      description:
        "Protect student data and research information with comprehensive security solutions. We help educational institutions secure sensitive information and maintain compliance with regulations.",
      icon: <GraduationCap className="h-10 w-10 text-accent" />,
      features: [
        "Student data protection",
        "Research data security",
        "FERPA compliance",
        "Campus network security",
        "Educational technology security",
      ],
      link: "/industries/education",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Industries We Serve</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Specialized cybersecurity solutions tailored to the unique challenges of your industry
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

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="p-8">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">{industry.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-4">{industry.name}</h3>
                  <p className="text-muted-foreground mb-6">{industry.description}</p>

                  <h4 className="font-heading font-medium text-primary mb-4">Key Security Solutions:</h4>
                  <ul className="space-y-2 mb-8">
                    {industry.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <ArrowRight className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={industry.link}
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-4xl text-primary mb-4">Industry Security Challenges</Heading>
            <BodyText className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Different industries face unique cybersecurity challenges that require specialized solutions
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-accent mb-2">76%</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">Financial Institutions</h3>
              <p className="text-muted-foreground">
                of financial institutions experienced a significant cyber attack in the past year
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-accent mb-2">$9.2M</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">Healthcare Organizations</h3>
              <p className="text-muted-foreground">
                average cost of a data breach for healthcare organizations, the highest of any industry
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-accent mb-2">68%</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">Government Agencies</h3>
              <p className="text-muted-foreground">
                of government agencies report being targeted by nation-state actors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Need a Customized Security Solution?</h2>
            <p className="text-xl mb-10 opacity-90 font-body">
              Contact our team to discuss how we can tailor our cybersecurity services to your specific industry
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/solutions"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all"
              >
                Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

