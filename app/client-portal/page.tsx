"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, Shield, Eye, EyeOff, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ClientPortalPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = sessionStorage.getItem("clientPortalUser")
    if (savedUser) {
      setEmail(savedUser)
      setRememberMe(true)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Basic validation
      if (!email.trim()) {
        setError("Email is required")
        setIsLoading(false)
        return
      }

      if (!password.trim()) {
        setError("Password is required")
        setIsLoading(false)
        return
      }

      if (!email.includes("@")) {
        setError("Please enter a valid email address")
        setIsLoading(false)
        return
      }

      // Simulate authentication delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simple validation (in a real app, this would authenticate with a backend)
      if (email === "demo@example.com" && password === "password") {
        // Save to session storage if remember me is checked
        if (rememberMe) {
          sessionStorage.setItem("clientPortalUser", email)
        }

        window.location.href = "/client-portal/dashboard"
      } else {
        setError("Invalid email or password. Please try again.")
      }
    } catch (error) {
      setError("An error occurred during login. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen py-20 bg-[#0d1b2a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-md mx-auto">
          <div className="bg-[#1b263b] rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <Shield className="h-12 w-12 text-[#ff7b00] mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-white">Client Portal</h1>
                <p className="text-gray-300 text-sm mt-2">Access your security dashboard and reports</p>
              </div>

              {error && (
                <Alert className="mb-6 bg-red-900/20 text-red-400 border-red-900">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

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
                      disabled={isLoading}
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
                        disabled={isLoading}
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
                    {password && (
                      <div className="mt-1">
                        <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              password.length < 6
                                ? "bg-red-500 w-1/4"
                                : password.length < 10
                                  ? "bg-yellow-500 w-2/4"
                                  : "bg-green-500 w-full"
                            }`}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">
                          {password.length < 6
                            ? "Weak password"
                            : password.length < 10
                              ? "Medium strength"
                              : "Strong password"}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
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

                  <Button
                    type="submit"
                    className="w-full bg-[#ff7b00] hover:bg-[#e66a00] text-white font-medium py-3"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </div>
              </form>

              <div className="mt-4 p-3 bg-[#0d1b2a] border border-gray-700 rounded-md">
                <p className="text-xs text-gray-400 text-center">
                  <strong>Demo credentials:</strong> demo@example.com / password
                </p>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm">
                  Need access?{" "}
                  <Link href="/contact" className="text-[#ff7b00] hover:text-[#e66a00]">
                    Contact us
                  </Link>{" "}
                  to set up your account.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <Lock size={14} />
                  <span>Secure, encrypted connection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

