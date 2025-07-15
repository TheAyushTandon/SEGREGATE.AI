import Link from "next/link"
import { Recycle, Mail, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
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

          {/* Quick Links */}
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

          {/* Team */}
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

          {/* Contact */}
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
