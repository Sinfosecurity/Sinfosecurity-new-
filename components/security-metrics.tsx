import { Shield, Lock, Clock, Users } from "lucide-react"

export default function SecurityMetrics() {
  return (
    <section className="py-12 bg-[#1b263b] border-y border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-[#ff7b00]/20 p-3 rounded-full">
              <Shield className="text-[#ff7b00] h-8 w-8" />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-gray-300">Clients Protected</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#ff7b00]/20 p-3 rounded-full">
              <Lock className="text-[#ff7b00] h-8 w-8" />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">99.9%</p>
              <p className="text-gray-300">Threat Detection</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#ff7b00]/20 p-3 rounded-full">
              <Clock className="text-[#ff7b00] h-8 w-8" />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-gray-300">Monitoring</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-[#ff7b00]/20 p-3 rounded-full">
              <Users className="text-[#ff7b00] h-8 w-8" />
            </div>
            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-gray-300">Security Experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

