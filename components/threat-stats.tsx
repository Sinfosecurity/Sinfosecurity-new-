"use client"

import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

const threatData = [
  { name: "Ransomware", value: 27, color: "#0A2463" },
  { name: "Phishing", value: 36, color: "#007EA7" },
  { name: "Data Breach", value: 22, color: "#FF7F11" },
  { name: "DDoS", value: 18, color: "#3A506B" },
  { name: "Malware", value: 31, color: "#1C2541" },
]

export default function ThreatStats() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl font-bold text-primary mb-6">Top Cyber Threats in 2025</h3>
        <p className="text-muted-foreground mb-6">
          Our threat intelligence team continuously monitors the evolving cyber threat landscape. The chart shows the
          percentage of organizations affected by each type of attack in the past year.
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-primary mb-2">Key Findings:</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Phishing attacks remain the most common entry point for cybercriminals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Ransomware attacks have increased by 15% compared to last year</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>The average cost of a data breach is now $4.35 million</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Organizations with security awareness training experience 70% fewer successful attacks</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-primary">Average Time to Detect</h4>
              <span className="font-mono text-2xl text-accent font-bold">207 days</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The average time it takes for organizations to detect a breach has decreased from 228 days last year, but
              remains dangerously high.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-primary mb-6">Percentage of Organizations Affected</h3>
        {isClient && (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={threatData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" tick={{ fill: "#2D2D2D" }} />
                <YAxis tick={{ fill: "#2D2D2D" }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#fff", borderColor: "#ddd" }}
                  formatter={(value) => [`${value}%`, "Affected"]}
                />
                <Bar dataKey="value" fill="#007EA7" radius={[4, 4, 0, 0]}>
                  {threatData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
        <p className="text-sm text-muted-foreground mt-4 text-center">
          Source: Our analysis of 500+ security incidents across industries in 2024-2025
        </p>
      </div>
    </div>
  )
}

