"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function CaseStudiesCarousel() {
  const caseStudies = [
    {
      id: 1,
      title: "Financial Institution Strengthens Security Posture",
      industry: "Financial Services",
      challenge:
        "A regional bank with 50+ branches needed to enhance their security and achieve regulatory compliance.",
      solution:
        "Implemented comprehensive security program with network segmentation, enhanced access controls, and employee training.",
      results: "100% compliance with regulations and 65% reduction in security incidents.",
      image: "/case-studies/financial.jpg",
      link: "/case-studies/financial-institution",
    },
    {
      id: 2,
      title: "Healthcare Provider Secures Patient Data",
      industry: "Healthcare",
      challenge: "A multi-hospital healthcare system struggled with securing patient data across their network.",
      solution:
        "Implemented healthcare security program with data encryption, access controls, and continuous monitoring.",
      results: "Achieved HIPAA compliance and secured over 5,000 connected medical devices.",
      image: "/case-studies/healthcare.jpg",
      link: "/case-studies/healthcare-provider",
    },
    {
      id: 3,
      title: "Manufacturing Company Prevents Ransomware",
      industry: "Manufacturing",
      challenge: "A global manufacturer needed to protect their industrial systems from increasing ransomware threats.",
      solution: "Deployed advanced endpoint protection, network segmentation, and 24/7 security monitoring.",
      results: "Successfully prevented multiple ransomware attempts and reduced vulnerabilities by 80%.",
      image: "/case-studies/manufacturing.jpg",
      link: "/case-studies/manufacturing-company",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((current) => (current === caseStudies.length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? caseStudies.length - 1 : current - 1))
  }

  const activeCase = caseStudies[activeIndex]

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-64 lg:h-auto">
          <img
            src={activeCase.image || `/placeholder.svg?height=400&width=600&text=${activeCase.industry}`}
            alt={activeCase.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-accent text-white text-sm font-medium px-3 py-1 rounded-full">
            {activeCase.industry}
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">{activeCase.title}</h3>

          <div className="space-y-4 mb-6">
            <div>
              <h4 className="font-bold text-secondary mb-1">Challenge:</h4>
              <p className="text-muted-foreground">{activeCase.challenge}</p>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-1">Solution:</h4>
              <p className="text-muted-foreground">{activeCase.solution}</p>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-1">Results:</h4>
              <p className="text-muted-foreground">{activeCase.results}</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Previous case study"
              >
                <ChevronLeft size={20} className="text-primary" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Next case study"
              >
                <ChevronRight size={20} className="text-primary" />
              </button>
            </div>

            <Link
              href={activeCase.link}
              className="text-secondary hover:text-secondary/80 font-medium flex items-center gap-2"
            >
              Read full case study <ExternalLink size={16} />
            </Link>
          </div>

          <div className="mt-6 flex justify-center">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${index === activeIndex ? "bg-accent" : "bg-muted"}`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

