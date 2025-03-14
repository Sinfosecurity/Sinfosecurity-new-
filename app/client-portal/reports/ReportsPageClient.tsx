"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, FileText, Download, Calendar, Filter, Search, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReportsPageClient() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [reportType, setReportType] = useState("all")
  const [sortBy, setSortBy] = useState("date")
  const [sortDirection, setSortDirection] = useState("desc")

  // Sample reports data
  const allReports = [
    {
      id: 1,
      title: "Monthly Security Report - March 2025",
      type: "monthly",
      date: "2025-03-15",
      size: "2.4 MB",
      description: "Comprehensive overview of security events, vulnerabilities, and recommendations for March 2025.",
    },
    {
      id: 2,
      title: "Penetration Test Results - Q1 2025",
      type: "pentest",
      date: "2025-03-10",
      size: "5.7 MB",
      description:
        "Detailed findings from the Q1 2025 penetration test, including vulnerabilities and remediation steps.",
    },
    {
      id: 3,
      title: "Compliance Assessment - GDPR",
      type: "compliance",
      date: "2025-02-28",
      size: "3.1 MB",
      description: "Assessment of GDPR compliance status, gaps, and recommended actions.",
    },
    {
      id: 4,
      title: "Vulnerability Scan Report - February 2025",
      type: "vulnerability",
      date: "2025-02-15",
      size: "1.8 MB",
      description: "Results of the February 2025 vulnerability scan with severity ratings and remediation guidance.",
    },
    {
      id: 5,
      title: "Monthly Security Report - February 2025",
      type: "monthly",
      date: "2025-02-15",
      size: "2.3 MB",
      description: "Comprehensive overview of security events, vulnerabilities, and recommendations for February 2025.",
    },
    {
      id: 6,
      title: "Security Awareness Training Results",
      type: "training",
      date: "2025-02-10",
      size: "1.2 MB",
      description: "Results and analysis of the recent security awareness training program.",
    },
    {
      id: 7,
      title: "Cloud Security Assessment",
      type: "assessment",
      date: "2025-01-25",
      size: "4.5 MB",
      description: "Comprehensive assessment of cloud security controls, configurations, and recommendations.",
    },
    {
      id: 8,
      title: "Monthly Security Report - January 2025",
      type: "monthly",
      date: "2025-01-15",
      size: "2.2 MB",
      description: "Comprehensive overview of security events, vulnerabilities, and recommendations for January 2025.",
    },
  ]

  // Filter and sort reports
  const filteredReports = allReports
    .filter((report) => {
      // Filter by search term
      const matchesSearch =
        report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.description.toLowerCase().includes(searchTerm.toLowerCase())

      // Filter by report type
      const matchesType = reportType === "all" || report.type === reportType

      return matchesSearch && matchesType
    })
    .sort((a, b) => {
      // Sort by selected field
      if (sortBy === "date") {
        return sortDirection === "asc"
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortBy === "title") {
        return sortDirection === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      } else if (sortBy === "type") {
        return sortDirection === "asc" ? a.type.localeCompare(b.type) : b.type.localeCompare(a.type)
      }
      return 0
    })

  useEffect(() => {
    // Check if user is logged in
    const savedUser = sessionStorage.getItem("clientPortalUser")
    if (!savedUser) {
      router.push("/client-portal")
    } else {
      setIsLoading(false)
    }
  }, [router])

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc")
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d1b2a]">
        <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <main className="min-h-screen py-8 bg-[#0d1b2a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Link href="/client-portal/dashboard" className="text-gray-400 hover:text-white">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-2xl font-bold text-white">Security Reports</h1>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-[#1b263b] rounded-lg border border-gray-800 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Search reports..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-[#0d1b2a] border-gray-700 text-white pl-10"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-48">
                <Select value={reportType} onValueChange={setReportType}>
                  <SelectTrigger className="bg-[#0d1b2a] border-gray-700 text-white">
                    <div className="flex items-center gap-2">
                      <Filter size={16} />
                      <SelectValue placeholder="Report Type" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-[#0d1b2a] border-gray-700 text-white">
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="monthly">Monthly Reports</SelectItem>
                    <SelectItem value="pentest">Penetration Tests</SelectItem>
                    <SelectItem value="vulnerability">Vulnerability Scans</SelectItem>
                    <SelectItem value="compliance">Compliance</SelectItem>
                    <SelectItem value="assessment">Assessments</SelectItem>
                    <SelectItem value="training">Training</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-48">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="bg-[#0d1b2a] border-gray-700 text-white">
                    <div className="flex items-center gap-2">
                      <span>Sort by</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleSortDirection()
                        }}
                      >
                        {sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-[#0d1b2a] border-gray-700 text-white">
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="title">Title</SelectItem>
                    <SelectItem value="type">Type</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="bg-[#1b263b] rounded-lg border border-gray-800 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-6">Available Reports ({filteredReports.length})</h2>

            {filteredReports.length === 0 ? (
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">No reports found matching your criteria.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredReports.map((report) => (
                  <div
                    key={report.id}
                    className="bg-[#0d1b2a] p-4 rounded-lg border border-gray-800 hover:border-[#ff7b00]/50 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-[#ff7b00]/20 p-3 rounded-full">
                          <FileText className="h-6 w-6 text-[#ff7b00]" />
                        </div>
                        <div>
                          <h3 className="text-white font-medium">{report.title}</h3>
                          <p className="text-gray-400 text-sm mt-1">{report.description}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-1 text-gray-400 text-xs">
                              <Calendar size={12} />
                              <span>{formatDate(report.date)}</span>
                            </div>
                            <div className="text-gray-400 text-xs">{report.size}</div>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="bg-transparent border border-[#ff7b00] text-[#ff7b00] hover:bg-[#ff7b00] hover:text-white whitespace-nowrap"
                        size="sm"
                      >
                        <Download size={16} className="mr-2" /> Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

