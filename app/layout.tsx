import type React from "react"
import ClientLayout from "./clientLayout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
