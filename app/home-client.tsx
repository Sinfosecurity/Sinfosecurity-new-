"use client"

import dynamic from "next/dynamic"
import LiveChat from "@/components/live-chat"

// Dynamically import CyberThreatMap with ssr: false
const CyberThreatMap = dynamic(() => import("@/components/cyber-threat-map"), {
  ssr: false,
  loading: () => (
    <div className="py-20 bg-muted flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
})

export function HomeClientComponents() {
  return (
    <>
      {/* Cyber Threat Map */}
      <CyberThreatMap />

      {/* Live Chat Widget */}
      <LiveChat />
    </>
  )
}

