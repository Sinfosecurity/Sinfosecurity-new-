"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Key, Shield, AlertTriangle, Eye, EyeOff, Save, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function SecuritySettingsClientPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  const [status, setStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  })

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [showTwoFactorSetup, setShowTwoFactorSetup] = useState(false)
  const [verificationCode, setVerificationCode] = useState("")

  // Login history
  const loginHistory = [
    {
      id: 1,
      date: "2025-03-15 09:32:45",
      ip: "192.168.1.1",
      location: "San Francisco, CA",
      device: "Chrome on Windows",
    },
    { id: 2, date: "2025-03-10 14:15:22", ip: "192.168.1.1", location: "San Francisco, CA", device: "Safari on macOS" },
    {
      id: 3,
      date: "2025-03-05 11:47:33",
      ip: "192.168.1.1",
      location: "San Francisco, CA",
      device: "Firefox on Windows",
    },
    {
      id: 4,
      date: "2025-02-28 16:22:10",
      ip: "192.168.1.1",
      location: "San Francisco, CA",
      device: "Chrome on Android",
    },
  ]

  useEffect(() => {
    // Check if user is logged in
    const savedUser = sessionStorage.getItem("clientPortalUser")
    if (!savedUser) {
      router.push("/client-portal")
    } else {
      setIsLoading(false)
    }
  }, [router])

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setStatus(null)

    // Validate passwords
    if (passwords.new !== passwords.confirm) {
      setStatus({
        success: false,
        message: "New passwords do not match.",
      })
      setIsSaving(false)
      return
    }

    if (passwords.new.length < 8) {
      setStatus({
        success: false,
        message: "New password must be at least 8 characters long.",
      })
      setIsSaving(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setStatus({
        success: true,
        message: "Password updated successfully!",
      })

      // Reset form
      setPasswords({
        current: "",
        new: "",
        confirm: "",
      })
    } catch (error) {
      setStatus({
        success: false,
        message: "Failed to update password. Please try again.",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleTwoFactorToggle = () => {
    if (twoFactorEnabled) {
      // Disable 2FA
      setTwoFactorEnabled(false)
      setShowTwoFactorSetup(false)
    } else {
      // Show 2FA setup
      setShowTwoFactorSetup(true)
    }
  }

  const handleTwoFactorSetup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setTwoFactorEnabled(true)
      setShowTwoFactorSetup(false)
      setVerificationCode("")

      setStatus({
        success: true,
        message: "Two-factor authentication enabled successfully!",
      })
    } catch (error) {
      setStatus({
        success: false,
        message: "Failed to enable two-factor authentication. Please try again.",
      })
    } finally {
      setIsSaving(false)
    }
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
            <h1 className="text-2xl font-bold text-white">Security Settings</h1>
          </div>
        </div>

        {status && (
          <Alert
            className={`mb-6 ${
              status.success
                ? "bg-green-900/20 text-green-400 border-green-900"
                : "bg-red-900/20 text-red-400 border-red-900"
            }`}
          >
            {status.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            <AlertDescription>{status.message}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#1b263b] rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-6">
                <h3 className="text-white font-medium mb-4">Account Security</h3>
                <nav className="space-y-1">
                  <Link
                    href="/client-portal/dashboard"
                    className="block px-3 py-2 rounded-md text-gray-300 hover:bg-[#0d1b2a] hover:text-white"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/client-portal/profile"
                    className="block px-3 py-2 rounded-md text-gray-300 hover:bg-[#0d1b2a] hover:text-white"
                  >
                    Profile Settings
                  </Link>
                  <Link href="/client-portal/security" className="block px-3 py-2 rounded-md bg-[#0d1b2a] text-white">
                    Security Settings
                  </Link>
                  <Link
                    href="/client-portal/reports"
                    className="block px-3 py-2 rounded-md text-gray-300 hover:bg-[#0d1b2a] hover:text-white"
                  >
                    Security Reports
                  </Link>
                </nav>
              </div>

              <div className="border-t border-gray-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-5 w-5 text-[#ff7b00]" />
                  <h3 className="text-white font-medium">Security Status</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Password Strength</span>
                    <span className="text-yellow-400 text-sm">Medium</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 w-2/3"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Two-Factor Authentication</span>
                    <span className={`text-sm ${twoFactorEnabled ? "text-green-400" : "text-red-400"}`}>
                      {twoFactorEnabled ? "Enabled" : "Disabled"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Last Password Change</span>
                    <span className="text-gray-300 text-sm">30 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Change Password */}
            <div className="bg-[#1b263b] rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Key className="h-5 w-5 text-[#ff7b00]" />
                  <h2 className="text-xl font-bold text-white">Change Password</h2>
                </div>

                <form onSubmit={handlePasswordSubmit}>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="current" className="block text-white mb-2">
                        Current Password
                      </label>
                      <div className="relative">
                        <Input
                          id="current"
                          name="current"
                          type={showCurrentPassword ? "text" : "password"}
                          value={passwords.current}
                          onChange={handlePasswordChange}
                          required
                          className="bg-[#0d1b2a] border-gray-700 text-white pr-10"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                          aria-label={showCurrentPassword ? "Hide password" : "Show password"}
                        >
                          {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="new" className="block text-white mb-2">
                        New Password
                      </label>
                      <div className="relative">
                        <Input
                          id="new"
                          name="new"
                          type={showNewPassword ? "text" : "password"}
                          value={passwords.new}
                          onChange={handlePasswordChange}
                          required
                          className="bg-[#0d1b2a] border-gray-700 text-white pr-10"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          aria-label={showNewPassword ? "Hide password" : "Show password"}
                        >
                          {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                      {passwords.new && (
                        <div className="mt-1">
                          <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${
                                passwords.new.length < 8
                                  ? "bg-red-500 w-1/4"
                                  : passwords.new.length < 12
                                    ? "bg-yellow-500 w-2/4"
                                    : "bg-green-500 w-full"
                              }`}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">
                            {passwords.new.length < 8
                              ? "Weak password"
                              : passwords.new.length < 12
                                ? "Medium strength"
                                : "Strong password"}
                          </p>
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="confirm" className="block text-white mb-2">
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <Input
                          id="confirm"
                          name="confirm"
                          type={showConfirmPassword ? "text" : "password"}
                          value={passwords.confirm}
                          onChange={handlePasswordChange}
                          required
                          className="bg-[#0d1b2a] border-gray-700 text-white pr-10"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                        >
                          {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                      {passwords.new && passwords.confirm && passwords.new !== passwords.confirm && (
                        <p className="text-xs text-red-400 mt-1">Passwords do not match</p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" className="bg-[#ff7b00] hover:bg-[#e66a00] text-white" disabled={isSaving}>
                      {isSaving ? (
                        <>Updating...</>
                      ) : (
                        <>
                          <Save size={16} className="mr-2" /> Update Password
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="bg-[#1b263b] rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Smartphone className="h-5 w-5 text-[#ff7b00]" />
                  <h2 className="text-xl font-bold text-white">Two-Factor Authentication</h2>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white mb-1">
                      {twoFactorEnabled ? "Two-factor authentication is enabled" : "Enhance your account security"}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {twoFactorEnabled
                        ? "Your account is protected with an additional layer of security."
                        : "Add an extra layer of security to your account by enabling two-factor authentication."}
                    </p>
                  </div>
                  <Button
                    onClick={handleTwoFactorToggle}
                    className={
                      twoFactorEnabled
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-[#ff7b00] hover:bg-[#e66a00] text-white"
                    }
                  >
                    {twoFactorEnabled ? "Disable" : "Enable"}
                  </Button>
                </div>

                {showTwoFactorSetup && (
                  <div className="bg-[#0d1b2a] p-6 rounded-lg border border-gray-800">
                    <h3 className="text-white font-bold mb-4">Setup Two-Factor Authentication</h3>

                    <div className="mb-6">
                      <p className="text-gray-300 mb-4">
                        1. Scan this QR code with your authenticator app (Google Authenticator, Authy, etc.)
                      </p>
                      <div className="bg-white p-4 w-48 h-48 mx-auto mb-4">
                        <img
                          src="/placeholder.svg?height=160&width=160&text=QR+Code"
                          alt="Two-factor authentication QR code"
                          className="w-full h-full"
                        />
                      </div>
                      <p className="text-gray-300 mb-2">2. Enter the verification code from your authenticator app</p>

                      <form onSubmit={handleTwoFactorSetup} className="flex items-center gap-4">
                        <Input
                          type="text"
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value)}
                          placeholder="Enter 6-digit code"
                          className="bg-[#1b263b] border-gray-700 text-white"
                          required
                          maxLength={6}
                        />
                        <Button
                          type="submit"
                          className="bg-[#ff7b00] hover:bg-[#e66a00] text-white whitespace-nowrap"
                          disabled={isSaving}
                        >
                          {isSaving ? "Verifying..." : "Verify & Enable"}
                        </Button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Recent Login Activity */}
            <div className="bg-[#1b263b] rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="h-5 w-5 text-[#ff7b00]" />
                  <h2 className="text-xl font-bold text-white">Recent Login Activity</h2>
                </div>

                <div className="space-y-4">
                  {loginHistory.map((login) => (
                    <div key={login.id} className="bg-[#0d1b2a] p-4 rounded-lg border border-gray-800">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <p className="text-white">{login.device}</p>
                          <div className="flex items-center gap-4 mt-1">
                            <p className="text-gray-400 text-sm">{login.location}</p>
                            <p className="text-gray-400 text-sm">IP: {login.ip}</p>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">{login.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

