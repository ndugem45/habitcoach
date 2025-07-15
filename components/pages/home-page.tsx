"use client"

import Link from "next/link"
import { ArrowRight, Globe, Smartphone, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { InstallPrompt } from "@/components/install-prompt"

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-16 space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Habit Tracking App
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              HabitCoach
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transform your life one habit at a time. Track, build, and maintain positive habits with our intuitive
              Progressive Web App.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="px-8">
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <InstallPrompt />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose HabitCoach?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with modern technologies to help you build lasting habits and achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Habit Tracking</CardTitle>
                <CardDescription>
                  Simple and intuitive interface to track your daily habits and progress.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Goal Setting</CardTitle>
                <CardDescription>
                  Set meaningful goals and break them down into manageable daily habits.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Progress Analytics</CardTitle>
                <CardDescription>Visualize your progress with detailed analytics and streak tracking.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Built With Modern Technologies</CardTitle>
              <CardDescription>
                Leveraging the best tools for optimal performance and developer experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4">
                  <div className="font-semibold">Next.js 15</div>
                  <div className="text-sm text-muted-foreground">React Framework</div>
                </div>
                <div className="p-4">
                  <div className="font-semibold">Tailwind CSS</div>
                  <div className="text-sm text-muted-foreground">Utility-First CSS</div>
                </div>
                <div className="p-4">
                  <div className="font-semibold">Radix UI</div>
                  <div className="text-sm text-muted-foreground">Accessible Components</div>
                </div>
                <div className="p-4">
                  <div className="font-semibold">TypeScript</div>
                  <div className="text-sm text-muted-foreground">Type Safety</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
