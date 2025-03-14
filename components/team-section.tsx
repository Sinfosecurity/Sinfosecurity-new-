import { Linkedin, Twitter } from "lucide-react"

export default function TeamSection() {
  const team = [
    {
      id: 1,
      name: "Adebayo Shobaloju",
      position: "CEO & Founder - PMP, CISA, CISM, CEH, CHFI",
      bio: "Former cybersecurity advisor with 15+ years of experience protecting Fortune 500 companies.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 2,
      name: "Elena Rodriguez",
      position: "Chief Security Officer",
      bio: "Certified ethical hacker with expertise in penetration testing and vulnerability assessment.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 3,
      name: "James Wilson",
      position: "Head of Compliance",
      bio: "Specializes in regulatory compliance across financial, healthcare, and government sectors.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      id: 4,
      name: "Aisha Patel",
      position: "Lead Security Analyst",
      bio: "Expert in threat intelligence and incident response with a background in digital forensics.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section className="py-20 bg-[#1b263b]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expert Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the security professionals dedicated to protecting your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.id} className="bg-[#0d1b2a] rounded-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="bg-white/20 p-2 rounded-full hover:bg-[#ff7b00]/80 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="bg-white/20 p-2 rounded-full hover:bg-[#ff7b00]/80 transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#ff7b00] mb-3">{member.position}</p>
                <p className="text-gray-300">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

