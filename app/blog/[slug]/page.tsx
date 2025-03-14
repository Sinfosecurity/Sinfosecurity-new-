import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function generateMetadata({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the blog post data based on the slug
  // and generate dynamic metadata
  return {
    title: `Blog Post | Supreme Information Security LLC`,
    description: "Read our latest cybersecurity insights and best practices.",
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the blog post data based on the slug
  const post = {
    title: "5 Cybersecurity Threats Every Business Should Be Aware Of",
    date: "March 15, 2025",
    author: "David Mitchell",
    category: "Threats",
    image: "/placeholder.svg?height=500&width=1200",
    content: `
      <p>In today's digital landscape, cybersecurity threats are constantly evolving, becoming more sophisticated and dangerous. Businesses of all sizes need to stay vigilant and informed about the latest threats to protect their sensitive data, maintain customer trust, and avoid costly breaches.</p>
      
      <h2>1. Ransomware Attacks</h2>
      <p>Ransomware continues to be one of the most prevalent and damaging cyber threats facing businesses today. These attacks encrypt a company's data, rendering it inaccessible until a ransom is paid to the attackers.</p>
      <p>The average cost of a ransomware attack goes beyond the ransom itself, including downtime, lost productivity, recovery costs, and potential reputational damage. Organizations should implement regular backups, keep systems updated, and train employees to recognize phishing attempts that often deliver ransomware.</p>
      
      <h2>2. Phishing and Social Engineering</h2>
      <p>Phishing attacks remain one of the most common entry points for cybercriminals. These attacks use deceptive emails, messages, or websites that appear legitimate to trick users into revealing sensitive information or installing malware.</p>
      <p>Advanced phishing techniques now include spear phishing (targeted attacks on specific individuals) and business email compromise (BEC), where attackers impersonate executives to authorize fraudulent transfers or data access.</p>
      
      <h2>3. Supply Chain Attacks</h2>
      <p>Supply chain attacks target the less-secure elements in a business's supply network to gain access to the primary target. The 2020 SolarWinds attack demonstrated how devastating these attacks can be, affecting thousands of organizations including government agencies.</p>
      <p>Businesses must implement thorough vendor risk assessments and require strong security practices from all partners with access to their systems or data.</p>
      
      <h2>4. Cloud Vulnerabilities</h2>
      <p>As more businesses migrate to cloud services, cloud security has become a critical concern. Misconfigured cloud settings, inadequate access controls, and insecure APIs can all lead to data exposure or breaches.</p>
      <p>Organizations should implement proper cloud security posture management, use strong authentication methods, and regularly audit their cloud configurations and permissions.</p>
      
      <h2>5. IoT Security Risks</h2>
      <p>The proliferation of Internet of Things (IoT) devices in business environments creates new security challenges. Many IoT devices lack robust security features, creating potential entry points for attackers.</p>
      <p>Businesses should maintain an inventory of all connected devices, segment IoT devices on separate networks, change default passwords, and ensure devices receive security updates.</p>
      
      <h2>Protecting Your Business</h2>
      <p>To defend against these threats, businesses should adopt a multi-layered security approach that includes:</p>
      <ul>
        <li>Regular security awareness training for all employees</li>
        <li>Implementation of strong access controls and authentication</li>
        <li>Consistent patching and updating of all systems</li>
        <li>Deployment of advanced threat detection tools</li>
        <li>Development of comprehensive incident response plans</li>
        <li>Regular security assessments and penetration testing</li>
      </ul>
      
      <p>By staying informed about emerging threats and implementing robust security measures, businesses can significantly reduce their risk of falling victim to cyber attacks.</p>
    `,
    relatedPosts: [
      {
        id: 1,
        title: "The Importance of Regular Security Audits",
        slug: "importance-security-audits",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 2,
        title: "Implementing Zero Trust Security in Your Organization",
        slug: "zero-trust-security-implementation",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 3,
        title: "GDPR Compliance: What You Need to Know",
        slug: "gdpr-compliance-guide",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0d1b2a] text-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="cyber-grid"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-300 hover:text-[#ff7b00] mb-8">
            <ArrowLeft size={16} /> Back to all articles
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#ff7b00]/20 text-[#ff7b00] text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
                <Tag size={14} /> {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="bg-[#1b263b]">
        <div className="container mx-auto px-4 md:px-6 -mt-10 relative z-20">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-xl border border-gray-800"
            />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-20 bg-[#1b263b]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Social Share Sidebar */}
              <div className="md:w-16">
                <div className="sticky top-24 flex flex-row md:flex-col gap-4 mb-8 md:mb-0">
                  <div className="text-gray-300 text-sm font-medium mb-2 hidden md:block">Share</div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-700 text-white hover:bg-white/10 hover:text-[#ff7b00]"
                  >
                    <Facebook size={18} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-700 text-white hover:bg-white/10 hover:text-[#ff7b00]"
                  >
                    <Twitter size={18} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-700 text-white hover:bg-white/10 hover:text-[#ff7b00]"
                  >
                    <Linkedin size={18} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-700 text-white hover:bg-white/10 hover:text-[#ff7b00]"
                  >
                    <Share2 size={18} />
                  </Button>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1">
                <article className="prose prose-invert max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-a:text-[#ff7b00] prose-a:no-underline hover:prose-a:text-[#e66a00] prose-li:text-gray-300">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-gray-300 mr-2">Tags:</span>
                    <Link
                      href="/blog/tag/cybersecurity"
                      className="bg-[#1b263b] border border-gray-700 text-gray-300 hover:text-[#ff7b00] text-sm px-3 py-1 rounded-full"
                    >
                      Cybersecurity
                    </Link>
                    <Link
                      href="/blog/tag/threats"
                      className="bg-[#1b263b] border border-gray-700 text-gray-300 hover:text-[#ff7b00] text-sm px-3 py-1 rounded-full"
                    >
                      Threats
                    </Link>
                    <Link
                      href="/blog/tag/ransomware"
                      className="bg-[#1b263b] border border-gray-700 text-gray-300 hover:text-[#ff7b00] text-sm px-3 py-1 rounded-full"
                    >
                      Ransomware
                    </Link>
                    <Link
                      href="/blog/tag/phishing"
                      className="bg-[#1b263b] border border-gray-700 text-gray-300 hover:text-[#ff7b00] text-sm px-3 py-1 rounded-full"
                    >
                      Phishing
                    </Link>
                    <Link
                      href="/blog/tag/cloud-security"
                      className="bg-[#1b263b] border border-gray-700 text-gray-300 hover:text-[#ff7b00] text-sm px-3 py-1 rounded-full"
                    >
                      Cloud Security
                    </Link>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 bg-[#0d1b2a] rounded-lg border border-gray-800 p-6">
                  <div className="flex items-start gap-6">
                    <img
                      src="/placeholder.svg?height=100&width=100"
                      alt="David Mitchell"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">David Mitchell</h3>
                      <p className="text-gray-300 mb-4">
                        CEO & Founder of Supreme Information Security LLC. Former cybersecurity advisor with 15+ years
                        of experience protecting Fortune 500 companies.
                      </p>
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full border-gray-700 text-white hover:bg-white/10 hover:text-[#ff7b00]"
                        >
                          <Twitter size={16} className="mr-2" /> Follow
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full border-gray-700 text-white hover:bg-white/10 hover:text-[#ff7b00]"
                        >
                          <Linkedin size={16} className="mr-2" /> Connect
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {post.relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group">
                    <div className="bg-[#0d1b2a] rounded-lg border border-gray-800 overflow-hidden group-hover:border-[#ff7b00]/50 transition-colors h-full flex flex-col">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#ff7b00] transition-colors">
                          {relatedPost.title}
                        </h3>
                        <div className="mt-auto pt-4 flex items-center gap-2 text-[#ff7b00]">
                          <span>Read article</span>
                          <ArrowLeft size={14} className="rotate-180" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-20 bg-[#0d1b2a] rounded-lg border border-gray-800 p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Need Help Securing Your Business?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our team of cybersecurity experts can help you implement the strategies discussed in this article and
                protect your organization from evolving threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-[#ff7b00] hover:bg-[#e66a00] text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Contact Our Team
                </Link>
                <Link
                  href="/services"
                  className="bg-transparent border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

