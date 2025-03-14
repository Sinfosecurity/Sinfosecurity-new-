"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Shield, Lock, BarChart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "ADVANCED THREAT INTELLIGENCE",
      subtitle: "Stay ahead of emerging cyber threats",
      description:
        "Our real-time threat intelligence platform monitors global cyber threats 24/7, providing actionable insights to protect your organization from the latest attack vectors.",
      cta: "Learn More",
      ctaLink: "/solutions/security-assessment",
      image: "/placeholder.svg?height=600&width=1200",
      icon: Shield,
    },
    {
      title: "ZERO TRUST SECURITY FRAMEWORK",
      subtitle: "Secure access for the modern workplace",
      description:
        "Implement a comprehensive Zero Trust architecture that verifies every user, device, and connection before granting access to your critical systems and data.",
      cta: "Explore Solutions",
      ctaLink: "/solutions/network-security",
      image: "/placeholder.svg?height=600&width=1200",
      icon: Lock,
    },
    {
      title: "CYBERSECURITY RISK ASSESSMENT",
      subtitle: "Identify and mitigate your security gaps",
      description:
        "Our expert team conducts thorough security assessments to identify vulnerabilities in your infrastructure and provides actionable remediation strategies.",
      cta: "Get Started",
      ctaLink: "/contact",
      image: "/placeholder.svg?height=600&width=1200",
      icon: BarChart,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 8000)
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                opacity: 0.3,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
            <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10 flex flex-col justify-center min-h-[600px]">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-red-600 px-3 py-1 rounded-md mb-4">
                  <slide.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{slide.title}</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{slide.subtitle}</h1>
                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">{slide.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Link href={slide.ctaLink}>
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">{slide.cta}</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-red-600" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

