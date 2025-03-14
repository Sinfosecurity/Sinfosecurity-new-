"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, Shield, Eye, EyeOff } from "lucide-react"

export default function ClientPortalAccess() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would authenticate with a backend
    window.location.href = "/client-portal/dashboard"
  }

  return (
    <section className="py-20 bg-[#0d1b2a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-block bg-[#ff7b00]/20 px-4 py-2 rounded-full mb-4">
              <p className="text-[#ff7b00] font-medium text-sm flex items-center">
                <Lock className="h-4 w-4 mr-2" /> Secure Client Access
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Client Portal Access</h2>
            <p className="text-gray-300 mb-6">
              Access your security reports, vulnerability assessments, and compliance documentation through our secure
              client portal. Our portal provides real-time insights into your security posture.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#ff7b00]/20 p-2 rounded-full mt-1">
                  <Shield className="h-5 w-5 text-[#ff7b00]" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Secure Access</h3>
                  <p className="text-gray-300 text-sm">
                    Two-factor authentication and encrypted connections ensure your data remains secure.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#ff7b00]/20 p-2 rounded-full mt-1">
                  <Shield className="h-5 w-5 text-[#ff7b00]" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Real-time Reporting</h3>
                  <p className="text-gray-300 text-sm">
                    Access up-to-date security reports and analytics on your organization's security posture.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#ff7b00]/20 p-2 rounded-full mt-1">
                  <Shield className="h-5 w-5 text-[#ff7b00]" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Document Management</h3>
                  <p className="text-gray-300 text-sm">
                    Store and access all your security documentation in one centralized, secure location.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-[#1b263b] p-8 rounded-lg border border-gray-800">
              <div className="text-center mb-6">
                <Shield className="h-12 w-12 text-[#ff7b00] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">Client Login</h3>
                <p className="text-gray-300 text-sm mt-2">Access your security dashboard and reports</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-[#0d1b2a] border-gray-700 text-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-white mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-[#0d1b2a] border-gray-700 text-white pr-10"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-700 bg-[#0d1b2a] text-[#ff7b00] focus:ring-[#ff7b00]"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                        Remember me
                      </label>
                    </div>

                    <Link href="/forgot-password" className="text-sm text-[#ff7b00] hover:text-[#e66a00]">
                      Forgot password?
                    </Link>
                  </div>

                  <Button type="submit" className="w-full bg-[#ff7b00] hover:bg-[#e66a00] text-white font-medium py-3">
                    Sign In
                  </Button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm">
                  Need access?{" "}
                  <Link href="/contact" className="text-[#ff7b00] hover:text-[#e66a00]">
                    Contact us
                  </Link>{" "}
                  to set up your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

