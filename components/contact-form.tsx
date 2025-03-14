"use client"

import Link from "next/link"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { sendContactForm } from "@/lib/actions"
import { AlertCircle, CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      // Call the server action to send the form
      const result = await sendContactForm(formData)

      if (result.success) {
        setFormStatus({
          success: true,
          message: "Thank you for contacting us! We'll get back to you shortly.",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        })
      } else {
        setFormStatus({
          success: false,
          message: result.error || "There was an error submitting your form. Please try again.",
        })
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "There was an error submitting your form. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#0d1b2a] p-8 rounded-lg border border-gray-800">
      {formStatus && (
        <Alert
          className={`mb-6 ${formStatus.success ? "bg-green-900/20 text-green-400 border-green-900" : "bg-red-900/20 text-red-400 border-red-900"}`}
        >
          {formStatus.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <AlertTitle>{formStatus.success ? "Success" : "Error"}</AlertTitle>
          <AlertDescription>{formStatus.message}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-[#1b263b] border-gray-700 text-white"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-[#1b263b] border-gray-700 text-white"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-white mb-2">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-[#1b263b] border-gray-700 text-white"
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-white mb-2">
            Company Name
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="bg-[#1b263b] border-gray-700 text-white"
            placeholder="Your Company"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="service" className="block text-white mb-2">
          Service Interested In
        </label>
        <Select value={formData.service} onValueChange={handleServiceChange}>
          <SelectTrigger className="bg-[#1b263b] border-gray-700 text-white">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-[#0d1b2a] border-gray-700 text-white">
            <SelectItem value="network-security">Network Security</SelectItem>
            <SelectItem value="penetration-testing">Penetration Testing</SelectItem>
            <SelectItem value="compliance">Compliance & Regulatory</SelectItem>
            <SelectItem value="incident-response">Incident Response</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-white mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-[#1b263b] border-gray-700 text-white min-h-[120px]"
          placeholder="Tell us about your security needs..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#ff7b00] hover:bg-[#e66a00] text-white font-medium py-3"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-gray-400 mt-4 text-center">
        By submitting this form, you agree to our{" "}
        <Link href="/privacy-policy" className="text-[#ff7b00] hover:underline">
          Privacy Policy
        </Link>
        . We are committed to protecting your data.
      </p>
    </form>
  )
}

