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
      setShowSplash(false)
      setIsFirstLoad(false)
    } else {
      sessionStorage.setItem("habitcoach-loaded", "true")

      // Wait for the window to fully load (all resources, images, etc.)
      const handleLoad = () => {
        setShowSplash(false)
      }

      if (document.readyState === "complete") {
        // Already loaded
        setShowSplash(false)
      } else {
        window.addEventListener("load", handleLoad)
      }

      return () => {
        window.removeEventListener("load", handleLoad)
      }
    }
  }, [])

  if (!isFirstLoad) {
    return <>{children}</>
  }

  if (showSplash) {
    return <SplashScreen />
  }

  return <>{children}</>
}
