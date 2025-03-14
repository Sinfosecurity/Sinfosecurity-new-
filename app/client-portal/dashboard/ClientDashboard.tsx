"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, AlertTriangle, FileText, Download, Calendar, Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ClientDashboard() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const savedUser = sessionStorage.getItem("clientPortalUser")
    if (!savedUser) {
      router.push("/client-portal")
    } else {
      setIsLoading(false)
    }
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d1b2a]">
        <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  const handleLogout = () => {
    sessionStorage.removeItem("clientPortalUser")
    router.push("/client-portal")
  }

  return (
    <main className="min-h-screen py-8 bg-[#0d1b2a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-gray-400 hover:text-white">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-2xl font-bold text-white">Client Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-[#ff7b00] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="text-gray-400 hover:text-white">
              <Settings size={20} />
            </button>
            <div className="relative group">
              <button className="h-8 w-8 rounded-full bg-[#ff7b00] flex items-center justify-center text-white font-bold">
                D
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-[#1b263b] rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link href="/client-portal/profile" className="block px-4 py-2 text-sm text-white hover:bg-[#0d1b2a]">
                  Profile
                </Link>
                <Link href="/client-portal/settings" className="block px-4 py-2 text-sm text-white hover:bg-[#0d1b2a]">
                  Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-[#0d1b2a]"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Security Score */}
        <div className="bg-[#1b263b] rounded-lg border border-gray-800 p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Security Score</h2>
              <p className="text-gray-300">Your organization's current security posture</p>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="relative inline-flex items-center justify-center">
                  <svg className="w-24 h-24">
                    <circle
                      className="text-gray-700"
                      strokeWidth="6"
                      stroke="currentColor"
                      fill="transparent"
                      r="36"
                      cx="48"
                      cy="48"
                    />
                    <circle
                      className="text-[#ff7b00]"
                      strokeWidth="6"
                      strokeDasharray="226.2"
                      strokeDashoffset="45.24"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="36"
                      cx="48"
                      cy="48"
                    />
                  </svg>
                  <span className="absolute text-2xl font-bold text-white">80%</span>
                </div>
                <p className="text-gray-300 mt-2">Overall Score</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">92%</div>
                  <p className="text-gray-300 text-sm">Network</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">78%</div>
                  <p className="text-gray-300 text-sm">Applications</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ff7b00]">85%</div>
                  <p className="text-gray-300 text-sm">Endpoints</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">65%</div>
                  <p className="text-gray-300 text-sm">Cloud</p>
                </div>
              </div>
            </div>

            <Button className="bg-[#ff7b00] hover:bg-[#e66a00] text-white">View Full Report</Button>
          </div>
        </div>

        {/* Recent Alerts */}
        <h2 className="text-xl font-bold text-white mb-4">Recent Security Alerts</h2>
        <div className="bg-[#1b263b] rounded-lg border border-gray-800 mb-8 overflow-hidden">
          <div className="p-4 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <span className="font-medium text-white">Critical</span>
            </div>
            <span className="text-gray-400 text-sm">2 hours ago</span>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-white mb-2">Unusual Login Activity Detected</h3>
            <p className="text-gray-300 mb-4">
              Multiple failed login attempts detected from IP address 203.0.113.42 (Location: Eastern Europe).
            </p>
            <div className="flex items-center gap-4">
              <Button className="bg-[#ff7b00] hover:bg-[#e66a00] text-white">View Details</Button>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-white/10">
                Mark as Resolved
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Vulnerability Summary */}
          <div className="bg-[#1b263b] rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800">
              <h3 className="font-bold text-white">Vulnerability Summary</h3>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span className="text-gray-300">Critical</span>
                </div>
                <span className="font-bold text-white">3</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                  <span className="text-gray-300">High</span>
                </div>
                <span className="font-bold text-white">7</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <span className="text-gray-300">Medium</span>
                </div>
                <span className="font-bold text-white">12</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-gray-300">Low</span>
                </div>
                <span className="font-bold text-white">24</span>
              </div>

              <Button className="w-full mt-6 bg-transparent border border-[#ff7b00] text-[#ff7b00] hover:bg-[#ff7b00] hover:text-white">
                View All Vulnerabilities
              </Button>
            </div>
          </div>

          {/* Recent Reports */}
          <div className="bg-[#1b263b] rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800">
              <h3 className="font-bold text-white">Recent Reports</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-[#ff7b00]" />
                    <span className="text-gray-300">Monthly Security Report</span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                    <Download size={16} />
                  </Button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-[#ff7b00]" />
                    <span className="text-gray-300">Penetration Test Results</span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                    <Download size={16} />
                  </Button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-[#ff7b00]" />
                    <span className="text-gray-300">Compliance Assessment</span>
                  </div>
                  <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                    <Download size={16} />
                  </Button>
                </li>
              </ul>

              <Button className="w-full mt-6 bg-transparent border border-[#ff7b00] text-[#ff7b00] hover:bg-[#ff7b00] hover:text-white">
                View All Reports
              </Button>
            </div>
          </div>

          {/* Upcoming Activities */}
          <div className="bg-[#1b263b] rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800">
              <h3 className="font-bold text-white">Upcoming Activities</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-[#ff7b00]" />
                  <div>
                    <p className="text-white font-medium">Security Awareness Training</p>
                    <p className="text-gray-400 text-sm">Tomorrow, 10:00 AM</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-[#ff7b00]" />
                  <div>
                    <p className="text-white font-medium">Quarterly Security Review</p>
                    <p className="text-gray-400 text-sm">March 15, 2:00 PM</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-[#ff7b00]" />
                  <div>
                    <p className="text-white font-medium">Penetration Test</p>
                    <p className="text-gray-400 text-sm">March 20-25</p>
                  </div>
                </li>
              </ul>

              <Button className="w-full mt-6 bg-transparent border border-[#ff7b00] text-[#ff7b00] hover:bg-[#ff7b00] hover:text-white">
                View Full Calendar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

