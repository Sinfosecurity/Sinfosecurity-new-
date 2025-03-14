"use client"

import type React from "react"
import Link from "next/link"
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { subscribeToNewsletter } from "@/lib/actions"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubscriptionStatus(null)

    try {
      const result = await subscribeToNewsletter(email)

      if (result.success) {
        setSubscriptionStatus({
          success: true,
          message: "Thank you for subscribing to our newsletter!",
        })
        setEmail("")
      } else {
        setSubscriptionStatus({
          success: false,
          message: result.error || "There was an error subscribing to the newsletter. Please try again.",
        })
      }
    } catch (error) {
      setSubscriptionStatus({
        success: false,
        message: "There was an error subscribing to the newsletter. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-blackbox-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-2">Get Security Updates</h3>
              <p className="text-white/80">Join our mailing list to receive important security notifications.</p>
            </div>
            <div className="md:w-1/2 w-full">
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="bg-blackbox-red hover:bg-blackbox-red/90 whitespace-nowrap"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
              {subscriptionStatus && (
                <Alert
                  className={`mt-2 ${
                    subscriptionStatus.success
                      ? "bg-green-900/20 text-green-400 border-green-900"
                      : "bg-red-900/20 text-red-400 border-red-900"
                  }`}
                >
                  {subscriptionStatus.success ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                  <AlertDescription>{subscriptionStatus.message}</AlertDescription>
                </Alert>
              )}
              <p className="text-xs text-white/60 mt-2">Your data is secure with us.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-blackbox-red" />
              <span className="font-bold text-xl">SUPREME INFORMATION SECURITY LLC</span>
            </div>
            <p className="text-white/80 mb-6">
              Protecting businesses with cutting-edge security solutions since 2020. We are committed to safeguarding
              your digital assets with innovative, integrated, and elevated security solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/60 hover:text-blackbox-red transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-white/60 hover:text-blackbox-red transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-white/60 hover:text-blackbox-red transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </Link>
              <Link href="#" className="text-white/60 hover:text-blackbox-red transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white/60 hover:text-blackbox-red transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {[
                { path: "/solutions/network-security", label: "Network Security" },
                { path: "/solutions/cloud-security", label: "Cloud Security" },
                { path: "/solutions/data-protection", label: "Data Protection" },
                { path: "/solutions/security-assessment", label: "Security Assessment" },
                { path: "/solutions", label: "All Solutions" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-white/80 hover:text-blackbox-red transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-bold mb-6">Industries</h3>
            <ul className="space-y-3">
              {[
                { path: "/industries/finance", label: "Finance" },
                { path: "/industries/healthcare", label: "Healthcare" },
                { path: "/industries/government", label: "Government" },
                { path: "/industries/retail", label: "Retail" },
                { path: "/industries", label: "All Industries" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-white/80 hover:text-blackbox-red transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blackbox-red mt-0.5" />
                <span className="text-white/80">
                  Queens NY, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blackbox-red" />
                <span className="text-white/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blackbox-red" />
                <span className="text-white/80">info@supremesecurity.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Supreme Information Security LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              { path: "/privacy-policy", label: "Privacy Policy" },
              { path: "/terms-of-service", label: "Terms of Service" },
              { path: "/sitemap", label: "Sitemap" },
            ].map((link) => (
              <Link key={link.path} href={link.path} className="text-white/60 hover:text-blackbox-red text-sm">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

