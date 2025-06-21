"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      // Show the consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowConsent(false)
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">We use cookies</h3>
                <p className="text-gray-600 text-sm">
                  This website uses cookies to ensure you get the best experience on our website. By continuing to use
                  this site, you consent to our use of cookies.
                  <Link href="/cookie-policy" className="underline ml-1 font-medium">
                    Learn more
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowConsent(false)}
                  className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={() => setShowConsent(false)}
                  className="p-1 text-gray-500 hover:text-black md:hidden"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
