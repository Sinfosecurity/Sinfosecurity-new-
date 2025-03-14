import Link from "next/link"
import { ArrowRight, Calendar, User, Tag, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Resources & Blog",
  description:
    "Stay informed with the latest cybersecurity insights, trends, and best practices from Supreme Information Security LLC.",
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Cybersecurity Threats Every Business Should Be Aware Of",
      excerpt:
        "Learn about the most common cybersecurity threats facing businesses today and how to protect against them. From ransomware to phishing attacks, we cover the key threats you need to know about.",
      date: "March 15, 2025",
      author: "David Mitchell",
      category: "Threats",
      image: "/placeholder.svg?height=300&width=600",
      slug: "cybersecurity-threats-businesses",
    },
    {
      id: 2,
      title: "The Importance of Regular Security Audits",
      excerpt:
        "Discover why regular security audits are crucial for maintaining a strong security posture and preventing breaches. We explore the key components of an effective security audit and how often you should conduct them.",
      date: "February 28, 2025",
      author: "Elena Rodriguez",
      category: "Best Practices",
      image: "/placeholder.svg?height=300&width=600",
      slug: "importance-security-audits",
    },
    {
      id: 3,
      title: "Implementing Zero Trust Security in Your Organization",
      excerpt:
        "A comprehensive guide to implementing a zero trust security model in your organization. Learn the principles of zero trust and how to apply them to improve your security posture.",
      date: "February 10, 2025",
      author: "James Wilson",
      category: "Strategy",
      image: "/placeholder.svg?height=300&width=600",
      slug: "zero-trust-security-implementation",
    },
    {
      id: 4,
      title: "GDPR Compliance: What You Need to Know",
      excerpt:
        "Navigate the complexities of GDPR compliance with our comprehensive guide. Learn about the key requirements and how to ensure your organization meets them.",
      date: "January 25, 2025",
      author: "Aisha Patel",
      category: "Compliance",
      image: "/placeholder.svg?height=300&width=600",
      slug: "gdpr-compliance-guide",
    },
    {
      id: 5,
      title: "Cloud Security Best Practices for 2025",
      excerpt:
        "Secure your cloud infrastructure with these essential best practices. From access management to data encryption, we cover everything you need to know to protect your cloud environment.",
      date: "January 12, 2025",
      author: "David Mitchell",
      category: "Cloud Security",
      image: "/placeholder.svg?height=300&width=600",
      slug: "cloud-security-best-practices-2025",
    },
    {
      id: 6,
      title: "The Rise of AI-Powered Cyber Attacks",
      excerpt:
        "Explore how artificial intelligence is being used by cybercriminals and how organizations can defend against these sophisticated attacks.",
      date: "December 18, 2024",
      author: "Elena Rodriguez",
      category: "Emerging Threats",
      image: "/placeholder.svg?height=300&width=600",
      slug: "ai-powered-cyber-attacks",
    },
  ]

  const categories = [
    "All Categories",
    "Threats",
    "Best Practices",
    "Strategy",
    "Compliance",
    "Cloud Security",
    "Emerging Threats",
    "Case Studies",
    "Industry News",
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0d1b2a] text-white py-20 md:py-32 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="cyber-grid"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Security Resources & Insights</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Stay informed with the latest cybersecurity trends, best practices, and industry insights
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-20 bg-[#1b263b]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>

                <div className="space-y-12">
                  {blogPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-[#0d1b2a] rounded-lg border border-gray-800 overflow-hidden group hover:border-[#ff7b00]/50 transition-colors"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover min-h-[200px]"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-[#ff7b00]/20 text-[#ff7b00] text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                              <Tag size={12} /> {post.category}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff7b00] transition-colors">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>

                          <p className="text-gray-300 mb-4">{post.excerpt}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <Calendar size={14} />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <User size={14} />
                                <span>{post.author}</span>
                              </div>
                            </div>

                            <Link
                              href={`/blog/${post.slug}`}
                              className="text-[#ff7b00] hover:text-[#e66a00] font-medium flex items-center gap-1"
                            >
                              Read more <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <nav className="flex items-center gap-1">
                    <Button variant="outline" className="border-gray-700 text-white hover:bg-white/10">
                      Previous
                    </Button>
                    <Button variant="outline" className="border-gray-700 bg-white/10 text-white">
                      1
                    </Button>
                    <Button variant="outline" className="border-gray-700 text-white hover:bg-white/10">
                      2
                    </Button>
                    <Button variant="outline" className="border-gray-700 text-white hover:bg-white/10">
                      3
                    </Button>
                    <Button variant="outline" className="border-gray-700 text-white hover:bg-white/10">
                      Next
                    </Button>
                  </nav>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <div className="bg-[#0d1b2a] rounded-lg border border-gray-800 p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Search</h3>
                <div className="flex gap-2">
                  <Input placeholder="Search articles..." className="bg-[#1b263b] border-gray-700 text-white" />
                  <Button className="bg-[#ff7b00] hover:bg-[#e66a00] text-white">
                    <Search size={18} />
                  </Button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-[#0d1b2a] rounded-lg border border-gray-800 p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        href={index === 0 ? "/blog" : `/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`flex items-center justify-between py-2 px-3 rounded-md transition-colors ${
                          index === 0
                            ? "bg-[#ff7b00]/20 text-[#ff7b00]"
                            : "text-gray-300 hover:bg-[#1b263b] hover:text-white"
                        }`}
                      >
                        <span>{category}</span>
                        {index === 0 && <ArrowRight size={14} />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured Resource */}
              <div className="bg-[#0d1b2a] rounded-lg border border-gray-800 overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Cybersecurity Guide"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">2025 Cybersecurity Guide</h3>
                  <p className="text-gray-300 mb-4">
                    Download our comprehensive guide to protecting your organization in 2025 and beyond.
                  </p>
                  <Button className="w-full bg-[#ff7b00] hover:bg-[#e66a00] text-white">Download Free Guide</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#0d1b2a]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#1b263b] rounded-lg p-8 md:p-12 border border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-gray-300">
                  Stay updated with the latest cybersecurity insights, trends, and alerts delivered directly to your
                  inbox.
                </p>
              </div>
              <div className="md:w-1/3 w-full">
                <form className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-[#0d1b2a] border-gray-700 text-white"
                    required
                  />
                  <Button type="submit" className="bg-[#ff7b00] hover:bg-[#e66a00] whitespace-nowrap">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

