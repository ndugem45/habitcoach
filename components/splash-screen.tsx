"use client"

import { useEffect, useState } from "react"
import { Smartphone, Wifi, Zap } from "lucide-react"

export function SplashScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center">
      <div className="text-center text-white space-y-8 px-6">
        {/* Logo/Icon */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
            <Smartphone className="w-12 h-12 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
            <Wifi className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* App Name */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">NextPWA</h1>
          <p className="text-blue-100 text-lg">Progressive Web App</p>
        </div>

        {/* Features */}
        <div className="flex justify-center space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4" />
            <span>Fast</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wifi className="w-4 h-4" />
            <span>Offline Ready</span>
          </div>
          <div className="flex items-center space-x-2">
            <Smartphone className="w-4 h-4" />
            <span>Mobile First</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-white/20 rounded-full h-2 backdrop-blur-sm">
            <div
              className="bg-white h-2 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-blue-100 text-sm mt-2">Loading... {progress}%</p>
        </div>
      </div>
    </div>
  )
}
