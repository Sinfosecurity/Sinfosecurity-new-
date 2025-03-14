import { Mail, Phone, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { Heading, BodyText } from "@/components/base-styles"

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Supreme Information Security LLC. Contact our cybersecurity experts for consultations, inquiries, or support.",
}

export default function ContactPage() {
  const faqs = [
    {
      question: "How quickly can you respond to a security incident?",
      answer:
        "Our incident response team is available 24/7. For clients with our managed security services, we typically begin responding within 15-30 minutes of incident detection.",
    },
    {
      question: "Do you offer customized security solutions?",
      answer:
        "Yes, we tailor our security solutions to meet the specific needs and requirements of each client based on their industry, size, and risk profile.",
    },
    {
      question: "How often should we conduct penetration testing?",
      answer:
        "We recommend conducting penetration testing at least annually, as well as after any significant changes to your infrastructure or applications.",
    },
    {
      question: "Can you help with compliance requirements?",
      answer:
        "Yes, we specialize in helping organizations meet various compliance requirements including GDPR, HIPAA, PCI DSS, SOC 2, and ISO 27001.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Get in touch with our security experts to discuss how we can help protect your business
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

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">For general inquiries and information</p>
              <a href="mailto:info@supremesecurity.com" className="text-accent hover:text-accent/80">
                info@supremesecurity.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak directly with our security team</p>
              <a href="tel:+15551234567" className="text-accent hover:text-accent/80">
                (555) 123-4567
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">Business Hours</h3>
              <p className="text-muted-foreground mb-4">When you can reach us</p>
              <p className="text-accent">
                Monday - Friday: 9am - 6pm
                <br />
                Emergency Support: 24/7
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-full">
              <Heading className="text-3xl md:text-4xl text-primary mb-6">Send Us a Message</Heading>
              <BodyText className="text-muted-foreground mb-8">
                Fill out the form below and one of our security experts will get back to you as soon as possible.
              </BodyText>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Heading className="text-3xl md:text-4xl text-primary mb-4">Frequently Asked Questions</Heading>
            <BodyText className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services and processes
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl mb-10 opacity-90 font-body">
              Our team of security experts is ready to help you protect your organization from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all"
              >
                <Phone size={18} /> Call Us Now
              </a>
              <a
                href="mailto:info@supremesecurity.com"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center gap-2 transition-all"
              >
                <Mail size={18} /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

