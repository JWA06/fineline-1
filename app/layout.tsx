import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsights } from "@vercel/speed-insights/next"  // ✅ Added import

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FineLine Bodies | Custom Truck Body Solutions",
  description:
    "FineLine Bodies delivers custom truck body solutions with unmatched craftsmanship and attention to detail.",
  viewport: "width=device-width, initial-scale=1",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <SpeedInsights /> {/* ✅ Added Vercel Speed Insights */}
      </body>
    </html>
  )
}
