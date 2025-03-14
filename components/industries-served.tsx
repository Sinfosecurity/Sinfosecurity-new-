import Link from "next/link"
import { ArrowRight, Building, Hospital, Landmark, ShoppingBag, Briefcase, GraduationCap } from "lucide-react"

export default function IndustriesServed() {
  const industries = [
    {
      id: 1,
      name: "Finance",
      description: "Secure financial data and comply with regulations like PCI DSS, SOX, and GLBA.",
      icon: <Landmark className="h-10 w-10 text-[#ff7b00]" />,
      link: "/industries/finance",
    },
    {
      id: 2,
      name: "Healthcare",
      description: "Protect patient data and ensure HIPAA compliance with our specialized security solutions.",
      icon: <Hospital className="h-10 w-10 text-[#ff7b00]" />,
      link: "/industries/healthcare",
    },
    {
      id: 3,
      name: "Government",
      description: "Secure sensitive government information with FedRAMP and FISMA compliant solutions.",
      icon: <Building className="h-10 w-10 text-[#ff7b00]" />,
      link: "/industries/government",
    },
    {
      id: 4,
      name: "Retail",
      description: "Protect customer data and payment information from breaches and cyber attacks.",
      icon: <ShoppingBag className="h-10 w-10 text-[#ff7b00]" />,
      link: "/industries/retail",
    },
    {
      id: 5,
      name: "Manufacturing",
      description: "Secure industrial control systems and protect intellectual property from threats.",
      icon: <Briefcase className="h-10 w-10 text-[#ff7b00]" />,
      link: "/industries/manufacturing",
    },
    {
      id: 6,
      name: "Education",
      description: "Protect student data and research information with comprehensive security solutions.",
      icon: <GraduationCap className="h-10 w-10 text-[#ff7b00]" />,
      link: "/industries/education",
    },
  ]

  return (
    <section className="py-20 bg-[#0d1b2a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We provide specialized cybersecurity solutions for various industries, each with unique security challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="bg-[#1b263b] p-8 rounded-lg border border-gray-800 hover:border-[#ff7b00]/50 transition-colors group"
            >
              <div className="mb-6">{industry.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
              <p className="text-gray-300 mb-6">{industry.description}</p>
              <Link
                href={industry.link}
                className="text-[#ff7b00] group-hover:text-[#e66a00] font-medium flex items-center gap-2"
              >
                Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

