import Link from "next/link"
import { ArrowRight, Shield } from "lucide-react"

export const metadata = {
  title: "Security Products | Supreme Information Security",
  description:
    "Explore our comprehensive range of cybersecurity products designed to protect your organization from evolving threats.",
}

export default function ProductsPage() {
  const products = [
    {
      id: "endpoint",
      title: "Endpoint Protection",
      description: "Advanced protection for all your endpoints against malware, ransomware, and zero-day threats.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "firewall",
      title: "Next-Gen Firewall",
      description: "Intelligent network security with deep packet inspection and advanced threat prevention.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "siem",
      title: "SIEM Solutions",
      description: "Security information and event management for real-time monitoring and threat detection.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "encryption",
      title: "Data Encryption",
      description: "Enterprise-grade encryption solutions to protect sensitive data at rest and in transit.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "identity",
      title: "Identity Management",
      description: "Secure access management with multi-factor authentication and single sign-on capabilities.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Security Products</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Cutting-edge cybersecurity products designed to protect your organization from evolving digital threats
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

      {/* Products Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Link
                    href={`/products/${product.id}`}
                    className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-red-600/20 px-4 py-2 rounded-full mb-4">
              <p className="text-red-600 font-medium text-sm flex items-center">
                <Shield className="h-4 w-4 mr-2" /> Enterprise Solutions
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Need a Custom Security Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our security experts can help you design a comprehensive security strategy tailored to your organization's
              specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600/10 px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

