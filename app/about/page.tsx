import Link from "next/link"
import { ArrowRight, Shield, CheckCircle, MapPin } from "lucide-react"
import { Heading, BodyText } from "@/components/base-styles"

export const metadata = {
  title: "About Us",
  description:
    "Learn about Supreme Information Security LLC, our mission, values, and expert team of cybersecurity professionals.",
}

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Adebayo Shobaloju",
      position: "CEO & Founder - PMP, CISA, CISM, CEH, CHFI",
      bio: "Former cybersecurity advisor with 15+ years of experience protecting Fortune 500 companies.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Elena Rodriguez",
      position: "Chief Security Officer",
      bio: "Certified ethical hacker with expertise in penetration testing and vulnerability assessment.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "James Wilson",
      position: "Head of Compliance",
      bio: "Specializes in regulatory compliance across financial, healthcare, and government sectors.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 4,
      name: "Aisha Patel",
      position: "Lead Security Analyst",
      bio: "Expert in threat intelligence and incident response with a background in digital forensics.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">About Us</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Supreme Information Security LLC is a leading cybersecurity firm dedicated to protecting businesses from
              evolving digital threats
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

      {/* Mission & Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src="/placeholder.svg?height=400&width=500" alt="Our Mission" className="rounded-lg shadow-xl" />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block bg-accent/20 px-4 py-2 rounded-full mb-4">
                <p className="text-accent font-medium text-sm flex items-center">
                  <Shield className="h-4 w-4 mr-2" /> Our Mission
                </p>
              </div>
              <Heading className="text-3xl md:text-4xl text-primary mb-6">Securing the Digital Future</Heading>
              <BodyText className="text-muted-foreground mb-6">
                Founded in 2020, Supreme Information Security LLC was established with a clear mission: to provide
                enterprise-grade security solutions to businesses of all sizes. We believe that every organization
                deserves access to top-tier cybersecurity protection, regardless of size or budget.
              </BodyText>
              <BodyText className="text-muted-foreground mb-6">
                Our team of certified security experts has decades of combined experience in protecting critical
                infrastructure and sensitive data. We stay at the forefront of emerging threats and technologies to
                ensure our clients receive the most effective protection available.
              </BodyText>

              <h3 className="text-xl font-heading font-bold text-primary mb-4">Our Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-primary font-medium">Integrity</span>
                    <p className="text-muted-foreground text-sm">
                      We operate with complete transparency and honesty in all our client relationships.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-primary font-medium">Excellence</span>
                    <p className="text-muted-foreground text-sm">
                      We strive for excellence in every security solution we deliver.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-primary font-medium">Innovation</span>
                    <p className="text-muted-foreground text-sm">
                      We continuously evolve our approaches to stay ahead of emerging threats.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-primary font-medium">Client Focus</span>
                    <p className="text-muted-foreground text-sm">
                      We tailor our security solutions to meet the specific needs of each client.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-4xl text-primary mb-4">Our Expert Team</Heading>
            <BodyText className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the security professionals dedicated to protecting your business
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent mb-3">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-4xl text-primary mb-4">Our Locations</Heading>
            <BodyText className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serving clients globally with offices in key locations
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">Headquarters</h3>
              <p className="text-muted-foreground mb-4">
                1234 Cyber Street, Suite 500
                <br />
                Tech City, CA 90210
                <br />
                United States
              </p>
              <Link href="/contact" className="text-accent hover:text-accent/80 font-medium">
                Get Directions
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">European Office</h3>
              <p className="text-muted-foreground mb-4">
                45 Security Boulevard
                <br />
                London, EC2A 4BQ
                <br />
                United Kingdom
              </p>
              <Link href="/contact" className="text-accent hover:text-accent/80 font-medium">
                Get Directions
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">African Office</h3>
              <p className="text-muted-foreground mb-4">
                27 Innovation Drive
                <br />
                Lagos, 101233
                <br />
                Nigeria
              </p>
              <Link href="/contact" className="text-accent hover:text-accent/80 font-medium">
                Get Directions
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">Asia-Pacific Office</h3>
              <p className="text-muted-foreground mb-4">
                88 Cyber Tower, Level 32
                <br />
                Singapore, 018956
                <br />
                Singapore
              </p>
              <Link href="/contact" className="text-accent hover:text-accent/80 font-medium">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-10 opacity-90 font-body">
              Contact our team today to discuss how we can help protect your organization from cyber threats.
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

