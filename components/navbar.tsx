"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  Shield,
  ChevronDown,
  Lock,
  Search,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Facebook,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Improved active state detection
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Top bar with social links */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="https://linkedin.com" className="hover:text-red-600 transition-colors">
              <Linkedin size={18} />
            </Link>
            <Link href="https://twitter.com" className="hover:text-red-600 transition-colors">
              <Twitter size={18} />
            </Link>
            <Link href="https://youtube.com" className="hover:text-red-600 transition-colors">
              <Youtube size={18} />
            </Link>
            <Link href="https://instagram.com" className="hover:text-red-600 transition-colors">
              <Instagram size={18} />
            </Link>
            <Link href="https://facebook.com" className="hover:text-red-600 transition-colors">
              <Facebook size={18} />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/support" className="text-sm hover:text-red-600 transition-colors">
              Support
            </Link>
            <Link href="/contact" className="text-sm hover:text-red-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-red-600" />
              <span className="font-bold text-xl text-black">SUPREME INFORMATION SECURITY LLC</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {/* Discover Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`px-4 py-2 rounded-md transition-colors flex items-center gap-1 ${
                      isActive("/about") ? "text-red-600 font-medium" : "text-black hover:text-red-600"
                    }`}
                    aria-expanded="false"
                  >
                    Discover Supreme <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="bg-white border-gray-200 text-black min-w-[200px]">
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/about" className="w-full">
                      About Us
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Solutions Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`px-4 py-2 rounded-md transition-colors flex items-center gap-1 ${
                      isActive("/solutions") ? "text-red-600 font-medium" : "text-black hover:text-red-600"
                    }`}
                    aria-expanded="false"
                  >
                    Solutions <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="bg-white border-gray-200 text-black min-w-[200px]">
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/solutions/network-security" className="w-full">
                      Network Security
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/solutions/cloud-security" className="w-full">
                      Cloud Security
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/solutions/data-protection" className="w-full">
                      Data Protection
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/solutions/security-assessment" className="w-full">
                      Security Assessment
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/solutions" className="w-full">
                      All Solutions
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`px-4 py-2 rounded-md transition-colors flex items-center gap-1 ${
                      isActive("/services") ? "text-red-600 font-medium" : "text-black hover:text-red-600"
                    }`}
                    aria-expanded="false"
                  >
                    Services <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="bg-white border-gray-200 text-black min-w-[200px]">
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/services/consulting" className="w-full">
                      Security Consulting
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/services/managed-security" className="w-full">
                      Managed Security
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/services/incident-response" className="w-full">
                      Incident Response
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/services/security-audits" className="w-full">
                      Security Audits
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/services/vulnerability-management" className="w-full">
                      Vulnerability Management
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/services" className="w-full">
                      All Services
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Industries Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`px-4 py-2 rounded-md transition-colors flex items-center gap-1 ${
                      isActive("/industries") ? "text-red-600 font-medium" : "text-black hover:text-red-600"
                    }`}
                    aria-expanded="false"
                  >
                    Industries <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="bg-white border-gray-200 text-black min-w-[200px]">
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/industries/finance" className="w-full">
                      Finance
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/industries/healthcare" className="w-full">
                      Healthcare
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/industries/government" className="w-full">
                      Government
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/industries/retail" className="w-full">
                      Retail
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/industries/manufacturing" className="w-full">
                      Manufacturing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                    onClick={handleLinkClick}
                  >
                    <Link href="/industries" className="w-full">
                      All Industries
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Resources link (replacing Insights dropdown) */}
              <Link
                href="/resources"
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive("/resources") ? "text-red-600 font-medium" : "text-black hover:text-red-600"
                }`}
              >
                Resources
              </Link>

              {/* Search button */}
              <Button variant="ghost" className="text-black hover:text-red-600" aria-label="Search">
                <Search size={20} />
              </Button>

              <Link
                href="/client-portal"
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-medium transition-colors flex items-center gap-2 ml-2"
              >
                <Lock size={16} /> Client Portal
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="md:hidden bg-white py-4 border-t border-gray-100 max-h-[80vh] overflow-y-auto shadow-md"
            id="mobile-menu"
          >
            <nav className="flex flex-col space-y-1 px-4">
              <Link
                href="/"
                className={`py-3 px-4 rounded-md ${
                  isActive("/")
                    ? "text-red-600 bg-gray-100 font-medium"
                    : "text-black hover:text-red-600 hover:bg-gray-100"
                }`}
                onClick={handleLinkClick}
              >
                Home
              </Link>

              <div className="py-1 px-4 text-gray-500 text-sm font-medium">Discover Supreme</div>

              {[{ path: "/about", label: "About Us" }].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`py-2 px-8 rounded-md ${
                    isActive(item.path)
                      ? "text-red-600 bg-gray-100 font-medium"
                      : "text-black hover:text-red-600 hover:bg-gray-100"
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              ))}

              <div className="py-1 px-4 text-gray-500 text-sm font-medium">Solutions</div>

              {[
                { path: "/solutions/network-security", label: "Network Security" },
                { path: "/solutions/cloud-security", label: "Cloud Security" },
                { path: "/solutions/data-protection", label: "Data Protection" },
                { path: "/solutions/security-assessment", label: "Security Assessment" },
                { path: "/solutions", label: "All Solutions", exact: true },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`py-2 px-8 rounded-md ${
                    item.exact
                      ? pathname === item.path
                        ? "text-red-600 bg-gray-100 font-medium"
                        : "text-black hover:text-red-600 hover:bg-gray-100"
                      : isActive(item.path)
                        ? "text-red-600 bg-gray-100 font-medium"
                        : "text-black hover:text-red-600 hover:bg-gray-100"
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              ))}

              <div className="py-1 px-4 text-gray-500 text-sm font-medium">Services</div>

              {[
                { path: "/services/consulting", label: "Security Consulting" },
                { path: "/services/managed-security", label: "Managed Security" },
                { path: "/services/incident-response", label: "Incident Response" },
                { path: "/services/security-audits", label: "Security Audits" },
                { path: "/services/vulnerability-management", label: "Vulnerability Management" },
                { path: "/services/endpoint", label: "Endpoint Protection" },
                { path: "/services/firewall", label: "Next-Gen Firewall" },
                { path: "/services/siem", label: "SIEM Solutions" },
                { path: "/services/encryption", label: "Data Encryption" },
                { path: "/services/identity", label: "Identity Management" },
                { path: "/services", label: "All Services", exact: true },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`py-2 px-8 rounded-md ${
                    item.exact
                      ? pathname === item.path
                        ? "text-red-600 bg-gray-100 font-medium"
                        : "text-black hover:text-red-600 hover:bg-gray-100"
                      : isActive(item.path)
                        ? "text-red-600 bg-gray-100 font-medium"
                        : "text-black hover:text-red-600 hover:bg-gray-100"
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              ))}

              <div className="py-1 px-4 text-gray-500 text-sm font-medium">Industries</div>

              {[
                { path: "/industries/finance", label: "Finance" },
                { path: "/industries/healthcare", label: "Healthcare" },
                { path: "/industries/government", label: "Government" },
                { path: "/industries/retail", label: "Retail" },
                { path: "/industries/manufacturing", label: "Manufacturing" },
                { path: "/industries", label: "All Industries", exact: true },
              ].map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`py-2 px-8 rounded-md ${
                    item.exact
                      ? pathname === item.path
                        ? "text-red-600 bg-gray-100 font-medium"
                        : "text-black hover:text-red-600 hover:bg-gray-100"
                      : isActive(item.path)
                        ? "text-red-600 bg-gray-100 font-medium"
                        : "text-black hover:text-red-600 hover:bg-gray-100"
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/resources"
                className={`py-3 px-4 rounded-md ${
                  isActive("/resources")
                    ? "text-red-600 bg-gray-100 font-medium"
                    : "text-black hover:text-red-600 hover:bg-gray-100"
                }`}
                onClick={handleLinkClick}
              >
                Resources
              </Link>

              <Link
                href="/contact"
                className={`py-3 px-4 rounded-md ${
                  isActive("/contact")
                    ? "text-red-600 bg-gray-100 font-medium"
                    : "text-black hover:text-red-600 hover:bg-gray-100"
                }`}
                onClick={handleLinkClick}
              >
                Contact
              </Link>

              <Link
                href="/client-portal"
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-md font-medium transition-colors flex items-center gap-2 mt-2 justify-center"
                onClick={handleLinkClick}
              >
                <Lock size={16} /> Client Portal
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

