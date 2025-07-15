"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { SplashScreen } from "@/components/splash-screen"

interface AppWrapperProps {
  children: React.ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [showSplash, setShowSplash] = useState(true)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    // Check if this is the first load of the session
    const hasLoadedBefore = sessionStorage.getItem("habitcoach-loaded")

    if (hasLoadedBefore) {
      // Not first load, don't show splash
      setShowSplash(false)
      setIsFirstLoad(false)
    } else {
      // First load, show splash and mark as loaded
      sessionStorage.setItem("habitcoach-loaded", "true")

      const timer = setTimeout(() => {
        setShowSplash(false)
      }, 2500) // Show splash for 2.5 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  // If it's not the first load, render children immediately
  if (!isFirstLoad) {
    return <>{children}</>
  }

  // If it's the first load and splash should be shown
  if (showSplash) {
    return <SplashScreen />
  }

  // First load but splash is done
  return <>{children}</>
}
