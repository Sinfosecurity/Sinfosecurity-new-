import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Cybersecurity Threats Every Business Should Be Aware Of",
      excerpt:
        "Learn about the most common cybersecurity threats facing businesses today and how to protect against them.",
      date: "March 15, 2025",
      image: "/placeholder.svg?height=200&width=400",
      slug: "cybersecurity-threats-businesses",
    },
    {
      id: 2,
      title: "The Importance of Regular Security Audits",
      excerpt:
        "Discover why regular security audits are crucial for maintaining a strong security posture and preventing breaches.",
      date: "February 28, 2025",
      image: "/placeholder.svg?height=200&width=400",
      slug: "importance-security-audits",
    },
    {
      id: 3,
      title: "Implementing Zero Trust Security in Your Organization",
      excerpt: "A comprehensive guide to implementing a zero trust security model in your organization.",
      date: "February 10, 2025",
      image: "/placeholder.svg?height=200&width=400",
      slug: "zero-trust-security-implementation",
    },
  ]

  return (
    <section className="py-20 bg-[#0d1b2a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Security Insights</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stay informed with our latest articles and updates on cybersecurity trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-[#1b263b] rounded-lg overflow-hidden">
              <div className="relative h-48">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-[#ff7b00] text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#ff7b00] hover:text-[#e66a00] font-medium flex items-center gap-2"
                >
                  Read more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="bg-transparent border border-[#ff7b00] text-[#ff7b00] hover:bg-[#ff7b00] hover:text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-colors"
          >
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

