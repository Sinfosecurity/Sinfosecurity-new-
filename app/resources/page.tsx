import Link from "next/link"
import { ArrowRight, Calendar, User, Tag, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Heading, BodyText } from "@/components/base-styles"

export const metadata = {
  title: "Resources & Insights",
  description:
    "Stay informed with the latest cybersecurity insights, trends, and best practices from Supreme Security.",
}

export default function ResourcesPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Cybersecurity Threats Every Business Should Be Aware Of",
      excerpt:
        "Learn about the most common cybersecurity threats facing businesses today and how to protect against them.",
      date: "March 15, 2025",
      author: "David Mitchell",
      category: "Threats",
      image: "/placeholder.svg?height=200&width=400",
      slug: "cybersecurity-threats-businesses",
    },
    {
      id: 2,
      title: "The Importance of Regular Security Audits",
      excerpt:
        "Discover why regular security audits are crucial for maintaining a strong security posture and preventing breaches.",
      date: "February 28, 2025",
      author: "Elena Rodriguez",
      category: "Best Practices",
      image: "/placeholder.svg?height=200&width=400",
      slug: "importance-security-audits",
    },
    {
      id: 3,
      title: "Implementing Zero Trust Security in Your Organization",
      excerpt: "A comprehensive guide to implementing a zero trust security model in your organization.",
      date: "February 10, 2025",
      author: "James Wilson",
      category: "Strategy",
      image: "/placeholder.svg?height=200&width=400",
      slug: "zero-trust-security-implementation",
    },
  ]

  const whitepapers = [
    {
      id: 1,
      title: "The State of Cybersecurity 2025",
      description:
        "A comprehensive analysis of current cybersecurity trends, challenges, and predictions for the future.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/resources/whitepapers/state-of-cybersecurity-2025",
    },
    {
      id: 2,
      title: "Zero Trust Architecture Implementation Guide",
      description: "A step-by-step guide to implementing zero trust security architecture in your organization.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/resources/whitepapers/zero-trust-implementation-guide",
    },
    {
      id: 3,
      title: "Cloud Security Best Practices",
      description: "Essential security practices for protecting your cloud infrastructure and applications.",
      image: "/placeholder.svg?height=200&width=300",
      link: "/resources/whitepapers/cloud-security-best-practices",
    },
  ]

  const webinars = [
    {
      id: 1,
      title: "Defending Against Ransomware in 2025",
      date: "April 15, 2025",
      time: "11:00 AM - 12:00 PM EST",
      speaker: "Elena Rodriguez, CSO",
      image: "/placeholder.svg?height=200&width=300",
      link: "/resources/webinars/defending-against-ransomware",
    },
    {
      id: 2,
      title: "Securing Your Remote Workforce",
      date: "May 10, 2025",
      time: "2:00 PM - 3:00 PM EST",
      speaker: "David Mitchell, CEO",
      image: "/placeholder.svg?height=200&width=300",
      link: "/resources/webinars/securing-remote-workforce",
    },
    {
      id: 3,
      title: "Compliance Challenges for Financial Institutions",
      date: "June 5, 2025",
      time: "1:00 PM - 2:00 PM EST",
      speaker: "James Wilson, Head of Compliance",
      image: "/placeholder.svg?height=200&width=300",
      link: "/resources/webinars/financial-compliance-challenges",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Security Resources & Insights
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Stay informed with the latest cybersecurity trends, best practices, and industry insights
            </p>
            <div className="max-w-xl mx-auto">
              <div className="flex gap-2">
                <Input
                  placeholder="Search resources..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  <Search size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Abstract background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-20"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-20"></div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-12">
            <Heading className="text-3xl md:text-4xl text-primary">Latest Articles</Heading>
            <Link href="/blog" className="text-accent hover:text-accent/80 font-medium flex items-center gap-2">
              View All Articles <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-accent text-white text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <Tag size={12} /> {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-accent hover:text-accent/80 font-medium flex items-center gap-1"
                    >
                      Read more <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Heading className="text-3xl md:text-4xl text-primary mb-4">Whitepapers & Guides</Heading>
            <BodyText className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth research and comprehensive guides on cybersecurity topics
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whitepapers.map((whitepaper) => (
              <div
                key={whitepaper.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40">
                  <img
                    src={whitepaper.image || "/placeholder.svg"}
                    alt={whitepaper.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    <Link href={whitepaper.link}>{whitepaper.title}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">{whitepaper.description}</p>
                  <Link
                    href={whitepaper.link}
                    className="text-accent hover:text-accent/80 font-medium flex items-center gap-1"
                  >
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Heading className="text-3xl md:text-4xl text-primary mb-4">Upcoming Webinars</Heading>
            <BodyText className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our security experts for live discussions on important cybersecurity topics
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webinars.map((webinar) => (
              <div
                key={webinar.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40">
                  <img
                    src={webinar.image || "/placeholder.svg"}
                    alt={webinar.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    <Link href={webinar.link}>{webinar.title}</Link>
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <Calendar size={14} />
                    <span>{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <User size={14} />
                    <span>{webinar.speaker}</span>
                  </div>
                  <Link
                    href={webinar.link}
                    className="text-accent hover:text-accent/80 font-medium flex items-center gap-1"
                  >
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

