import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO, TechStart Inc.",
      content:
        "Supreme Information Security transformed our cybersecurity posture. Their team identified vulnerabilities we weren't even aware of and implemented robust solutions that have kept us protected.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "IT Director, Global Finance",
      content:
        "As a financial institution, security is our top priority. The team at Supreme has been instrumental in ensuring our systems meet all compliance requirements while staying ahead of emerging threats.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Jessica Williams",
      position: "CEO, Healthcare Solutions",
      content:
        "Working with Supreme Information Security has given us peace of mind. Their 24/7 monitoring and rapid response to potential threats has been invaluable to our healthcare organization.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-20 bg-[#0d1b2a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#1b263b] p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#ff7b00] fill-[#ff7b00]" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

