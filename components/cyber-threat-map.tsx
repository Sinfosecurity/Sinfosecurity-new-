"use client"

import { useState } from "react"
import { AlertTriangle, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import ClientIframe from "./client-iframe"

export default function CyberThreatMap() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false)
  const [iframeError, setIframeError] = useState(false)
  const threatMapUrl = "https://threatmap.checkpoint.com/"

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsIframeLoaded(true)
  }

  // Handle iframe error
  const handleIframeError = () => {
    setIframeError(true)
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Live Cyber Threat Map</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visualizing cyber threats in real-time across the globe
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-accent" />
              <span className="font-medium text-primary">Live Threat Intelligence</span>
            </div>
            <a
              href={threatMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
            >
              View Full Map <ExternalLink size={16} />
            </a>
          </div>

          <div className="relative h-[500px]">
            {/* Replace the iframe with ClientIframe */}
            <ClientIframe
              src={threatMapUrl}
              className="w-full h-full border-0"
              title="Check Point Live Cyber Threat Map"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              sandbox="allow-scripts allow-same-origin"
            />

            {/* Fallback content if iframe fails to load */}
            {iframeError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-6 text-center">
                <AlertTriangle className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Unable to load threat map</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  The live threat map could not be loaded. This may be due to security restrictions or network issues.
                </p>
                <Button
                  className="bg-accent hover:bg-accent/90 text-white"
                  onClick={() => window.open(threatMapUrl, "_blank", "noopener,noreferrer")}
                >
                  Open Threat Map in New Window
                </Button>
              </div>
            )}

            {/* Loading indicator */}
            {!isIframeLoaded && !iframeError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
                <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-primary">Loading threat map...</p>
              </div>
            )}
          </div>

          <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              Powered by Check Point Research Threat Intelligence
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span className="text-muted-foreground text-sm">Malware</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span className="text-muted-foreground text-sm">Phishing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-muted-foreground text-sm">DDoS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-muted-foreground text-sm">Ransomware</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

