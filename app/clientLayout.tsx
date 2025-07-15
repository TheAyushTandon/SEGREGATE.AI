"use client"

import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Recycle, Menu, Mail, Github, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Awareness", href: "/awareness" },
  { name: "App", href: "/app" },
  { name: "Team", href: "/team" },
]

function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-green-100 p-2 rounded-full">
              <Recycle className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Segregate<span className="text-green-600">AI</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-green-600",
                  pathname === item.href ? "text-green-600" : "text-gray-600",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-green-600 px-4 py-2 rounded-md",
                      pathname === item.href ? "text-green-600 bg-green-50" : "text-gray-600",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 p-2 rounded-full">
                <Recycle className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Segregate<span className="text-green-400">AI</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Making waste segregation simple and accessible through AI technology.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/awareness" className="text-gray-400 hover:text-white transition-colors">
                  Awareness
                </Link>
              </li>
              <li>
                <Link href="/app" className="text-gray-400 hover:text-white transition-colors">
                  Download App
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Team</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <span className="text-gray-400">Vedansh Gupta</span>
              </li>
              <li>
                <span className="text-gray-400">Saatvik Sharma</span>
              </li>
              <li>
                <span className="text-gray-400">Ayush Tandon</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SegregateAI. All rights reserved. Built with ❤️ for a sustainable future.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>SegregateAI - AI-Powered Waste Segregation</title>
        <meta
          name="description"
          content="Revolutionary AI-powered waste sorting solution that helps categorize waste into biodegradable, non-biodegradable, and other categories."
        />
        <style jsx global>{`
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

          @layer base {
            :root {
              --background: 0 0% 100%;
              --foreground: 222.2 84% 4.9%;
              --card: 0 0% 100%;
              --card-foreground: 222.2 84% 4.9%;
              --popover: 0 0% 100%;
              --popover-foreground: 222.2 84% 4.9%;
              --primary: 222.2 47.4% 11.2%;
              --primary-foreground: 210 40% 98%;
              --secondary: 210 40% 96%;
              --secondary-foreground: 222.2 47.4% 11.2%;
              --muted: 210 40% 96%;
              --muted-foreground: 215.4 16.3% 46.9%;
              --accent: 210 40% 96%;
              --accent-foreground: 222.2 47.4% 11.2%;
              --destructive: 0 84.2% 60.2%;
              --destructive-foreground: 210 40% 98%;
              --border: 214.3 31.8% 91.4%;
              --input: 214.3 31.8% 91.4%;
              --ring: 222.2 84% 4.9%;
              --radius: 0.5rem;
            }

            .dark {
              --background: 222.2 84% 4.9%;
              --foreground: 210 40% 98%;
              --card: 222.2 84% 4.9%;
              --card-foreground: 210 40% 98%;
              --popover: 222.2 84% 4.9%;
              --popover-foreground: 210 40% 98%;
              --primary: 210 40% 98%;
              --primary-foreground: 222.2 47.4% 11.2%;
              --secondary: 217.2 32.6% 17.5%;
              --secondary-foreground: 210 40% 98%;
              --muted: 217.2 32.6% 17.5%;
              --muted-foreground: 215 20.2% 65.1%;
              --accent: 217.2 32.6% 17.5%;
              --accent-foreground: 210 40% 98%;
              --destructive: 0 62.8% 30.6%;
              --destructive-foreground: 210 40% 98%;
              --border: 217.2 32.6% 17.5%;
              --input: 217.2 32.6% 17.5%;
              --ring: 212.7 26.8% 83.9%;
            }
          }

          @layer base {
            * {
              @apply border-border;
            }
            body {
              @apply bg-background text-foreground;
            }
          }
        `}</style>
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
