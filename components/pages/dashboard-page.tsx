"use client"

import { useState } from "react"
import { BarChart3, Bell, Calendar, Home, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardPage() {
  const [notifications] = useState([
    { id: 1, title: "Great job! 7-day streak achieved!", type: "success", time: "2 min ago" },
    { id: 2, title: "Don't forget your evening meditation", type: "reminder", time: "1 hour ago" },
    { id: 3, title: "New habit suggestion available", type: "info", time: "3 hours ago" },
  ])

  const [stats] = useState([
    { label: "Active Habits", value: "12", change: "+2", trend: "up" },
    { label: "Current Streak", value: "7 days", change: "+1", trend: "up" },
    { label: "Completion Rate", value: "85%", change: "+5%", trend: "up" },
    { label: "Total Points", value: "2,340", change: "+180", trend: "up" },
  ])

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navigation />

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex-col">
          <div className="p-6">
            <h2 className="font-semibold text-lg">Dashboard</h2>
          </div>

          <nav className="flex-1 px-4 space-y-2">
            <Button variant="secondary" className="w-full justify-start">
              <Home className="w-4 h-4 mr-3" />
              Overview
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart3 className="w-4 h-4 mr-3" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="w-4 h-4 mr-3" />
              Users
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Calendar className="w-4 h-4 mr-3" />
              Calendar
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="w-4 h-4 mr-3" />
              Settings
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Habit Dashboard</h1>
              <p className="text-muted-foreground">Track your daily habits and see your progress at a glance.</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardDescription>{stat.label}</CardDescription>
                  <CardTitle className="text-2xl">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant={stat.trend === "up" ? "default" : "destructive"}>{stat.change}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts and Activity */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Activity Chart */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Habit Progress</CardTitle>
                <CardDescription>Your habit completion over the last 7 days</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Morning Routine</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Exercise</span>
                    <span>72%</span>
                  </div>
                  <Progress value={72} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Reading</span>
                    <span>58%</span>
                  </div>
                  <Progress value={58} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Meditation</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} />
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest notifications and updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{notification.title}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-20 flex-col bg-transparent">
                  <Users className="w-6 h-6 mb-2" />
                  Add User
                </Button>
                <Button variant="outline" className="h-20 flex-col bg-transparent">
                  <BarChart3 className="w-6 h-6 mb-2" />
                  View Reports
                </Button>
                <Button variant="outline" className="h-20 flex-col bg-transparent">
                  <Settings className="w-6 h-6 mb-2" />
                  Settings
                </Button>
                <Button variant="outline" className="h-20 flex-col bg-transparent">
                  <Bell className="w-6 h-6 mb-2" />
                  Notifications
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
