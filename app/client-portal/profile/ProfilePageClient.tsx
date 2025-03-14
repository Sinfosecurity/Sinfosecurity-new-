"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Shield, Save, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function ProfilePageClient() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  const [profile, setProfile] = useState({
    firstName: "Demo",
    lastName: "User",
    email: "demo@example.com",
    phone: "(555) 123-4567",
    company: "Demo Company",
    jobTitle: "Security Manager",
    bio: "Responsible for overseeing the security operations and compliance for Demo Company.",
    notifications: {
      securityAlerts: true,
      weeklyReports: true,
      productUpdates: false,
      marketingEmails: false,
    },
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setProfile((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [name]: checked,
      },
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setStatus({
        success: true,
        message: "Profile updated successfully!",
      })
    } catch (error) {
      setStatus({
        success: false,
        message: "Failed to update profile. Please try again.",
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
            <h1 className="text-2xl font-bold text-white">Profile Settings</h1>
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
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#1b263b] rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="h-24 w-24 rounded-full bg-[#0d1b2a] flex items-center justify-center text-white text-3xl font-bold">
                    {profile.firstName.charAt(0)}
                    {profile.lastName.charAt(0)}
                  </div>
                  <button className="absolute bottom-0 right-0 bg-[#ff7b00] p-2 rounded-full text-white hover:bg-[#e66a00] transition-colors">
                    <Camera size={16} />
                  </button>
                </div>
                <h2 className="text-xl font-bold text-white mb-1">
                  {profile.firstName} {profile.lastName}
                </h2>
                <p className="text-gray-400 mb-4">{profile.jobTitle}</p>
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <Shield size={14} />
                  <span>Client since Jan 2023</span>
                </div>
              </div>

              <div className="border-t border-gray-800 p-6">
                <h3 className="text-white font-medium mb-4">Account Navigation</h3>
                <nav className="space-y-1">
                  <Link
                    href="/client-portal/dashboard"
                    className="block px-3 py-2 rounded-md text-gray-300 hover:bg-[#0d1b2a] hover:text-white"
                  >
                    Dashboard
                  </Link>
                  <Link href="/client-portal/profile" className="block px-3 py-2 rounded-md bg-[#0d1b2a] text-white">
                    Profile Settings
                  </Link>
                  <Link
                    href="/client-portal/security"
                    className="block px-3 py-2 rounded-md text-gray-300 hover:bg-[#0d1b2a] hover:text-white"
                  >
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
            </div>
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#1b263b] rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-6">Personal Information</h2>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-white mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={profile.firstName}
                        onChange={handleChange}
                        className="bg-[#0d1b2a] border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-white mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={profile.lastName}
                        onChange={handleChange}
                        className="bg-[#0d1b2a] border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profile.email}
                        onChange={handleChange}
                        className="bg-[#0d1b2a] border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-white mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                        className="bg-[#0d1b2a] border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-white mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={profile.company}
                        onChange={handleChange}
                        className="bg-[#0d1b2a] border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="jobTitle" className="block text-white mb-2">
                        Job Title
                      </label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        value={profile.jobTitle}
                        onChange={handleChange}
                        className="bg-[#0d1b2a] border-gray-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="bio" className="block text-white mb-2">
                      Bio
                    </label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={profile.bio}
                      onChange={handleChange}
                      className="bg-[#0d1b2a] border-gray-700 text-white min-h-[100px]"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4">Notification Preferences</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <input
                        id="securityAlerts"
                        name="securityAlerts"
                        type="checkbox"
                        checked={profile.notifications.securityAlerts}
                        onChange={handleNotificationChange}
                        className="h-4 w-4 rounded border-gray-700 bg-[#0d1b2a] text-[#ff7b00] focus:ring-[#ff7b00]"
                      />
                      <label htmlFor="securityAlerts" className="ml-2 block text-white">
                        Security Alerts
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="weeklyReports"
                        name="weeklyReports"
                        type="checkbox"
                        checked={profile.notifications.weeklyReports}
                        onChange={handleNotificationChange}
                        className="h-4 w-4 rounded border-gray-700 bg-[#0d1b2a] text-[#ff7b00] focus:ring-[#ff7b00]"
                      />
                      <label htmlFor="weeklyReports" className="ml-2 block text-white">
                        Weekly Security Reports
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="productUpdates"
                        name="productUpdates"
                        type="checkbox"
                        checked={profile.notifications.productUpdates}
                        onChange={handleNotificationChange}
                        className="h-4 w-4 rounded border-gray-700 bg-[#0d1b2a] text-[#ff7b00] focus:ring-[#ff7b00]"
                      />
                      <label htmlFor="productUpdates" className="ml-2 block text-white">
                        Product Updates
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="marketingEmails"
                        name="marketingEmails"
                        type="checkbox"
                        checked={profile.notifications.marketingEmails}
                        onChange={handleNotificationChange}
                        className="h-4 w-4 rounded border-gray-700 bg-[#0d1b2a] text-[#ff7b00] focus:ring-[#ff7b00]"
                      />
                      <label htmlFor="marketingEmails" className="ml-2 block text-white">
                        Marketing Emails
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" className="bg-[#ff7b00] hover:bg-[#e66a00] text-white" disabled={isSaving}>
                      {isSaving ? (
                        <>Saving...</>
                      ) : (
                        <>
                          <Save size={16} className="mr-2" /> Save Changes
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

