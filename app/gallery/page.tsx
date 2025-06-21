"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, Menu, X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Custom Dropside Body",
    image: "/images/dropside-body.jpeg",
  },
  {
    id: 4,
    title: "Tipper Body Solution",
    image: "/images/tipper-body.png",
  },
  {
    id: 7,
    title: "Box Van Body",
    image: "/images/box-van-body.jpeg",
  },
  {
    id: 10,
    title: "Curtainside Body",
    image: "/images/curtainside-body.jpeg",
  },
  {
    id: 13,
    title: "Luton Van Body",
    image: "/images/luton-body.jpeg",
  },
  {
    id: 16,
    title: "Flatbed Body",
    image: "/images/flatbed-body.png",
  },
  {
    id: 19,
    title: "Refrigerated Body",
    image: "/images/refrigerated-body.jpeg",
  },
  {
    id: 22,
    title: "Bespoke Solution",
    image: "/images/bespoke-solutions.jpeg",
  },
  {
    id: 25,
    title: "Furniture Van Body",
    image: "/images/furniture-van.jpeg",
  },
  {
    id: 26,
    title: "FineLine Example Build",
    image: "/images/fineline-example.jpeg",
  },
  {
    id: 27,
    title: "Home Hero Project",
    image: "/images/fineline-home-hero.jpeg",
  },
  {
    id: 30,
    title: "Custom Truck Body",
    image: "/images/fineline-home-hero-2.jpeg",
  },
  {
    id: 31,
    title: "Bespoke Design",
    image: "/images/bespoke-design.jpeg",
  },
  {
    id: 32,
    title: "Overview Project",
    image: "/images/overview-image.jpeg",
  },
]

export default function GalleryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 hidden md:block">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Phone size={14} className="mr-2" aria-hidden="true" />
                <a href="tel:07340590412" className="hover:text-gray-300 transition-colors">
                  07340590412
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={14} className="mr-2" aria-hidden="true" />
                <a href="mailto:finelinebodies@outlook.com" className="hover:text-gray-300 transition-colors">
                  finelinebodies@outlook.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/customer-portal" className="text-sm hover:text-gray-300 transition-colors">
                Customer Portal
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md" role="banner">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center" aria-label="FineLine Bodies Home">
              <div className="relative">
                <Image
                  src="/images/fineline-logo.jpeg"
                  alt="FineLine Bodies Logo"
                  width={200}
                  height={100}
                  className="h-14 w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block" aria-label="Main Navigation" role="navigation">
              <ul className="flex space-x-8">
                {["Home", "Body Types", "Gallery", "About", "Contact", "After Care", "Blog"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                      className={`text-gray-800 hover:text-black font-medium text-sm uppercase tracking-wider transition-colors duration-200 relative group ${
                        item === "Gallery" ? "font-bold text-black" : ""
                      }`}
                      aria-current={item === "Gallery" ? "page" : undefined}
                    >
                      {item}
                      {item === "Gallery" ? (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black" aria-hidden="true"></span>
                      ) : (
                        <span
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"
                          aria-hidden="true"
                        ></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          className="md:hidden bg-white absolute top-20 left-0 right-0 border-t border-gray-200 shadow-lg z-40"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="container mx-auto px-6 py-4">
            <nav role="navigation" aria-label="Mobile Navigation">
              <ul className="flex flex-col space-y-4">
                {["Home", "Body Types", "Gallery", "About", "Contact", "After Care", "Blog", "Customer Portal"].map(
                  (item) => (
                    <li key={item} className="w-full">
                      <Link
                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                        className={`text-gray-800 hover:text-black font-medium text-sm uppercase tracking-wider block py-4 px-2 border-b border-gray-100 w-full ${
                          item === "Gallery" ? "font-bold text-black" : ""
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={item === "Gallery" ? "page" : undefined}
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
                <li>
                  <div className="flex items-center py-2">
                    <Phone size={16} className="mr-2 text-gray-600" aria-hidden="true" />
                    <a href="tel:07340590412" className="text-gray-800" aria-label="Call us at 07340590412">
                      07340590412
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center py-2">
                    <Mail size={16} className="mr-2 text-gray-600" aria-hidden="true" />
                    <a href="mailto:finelinebodies@outlook.com" className="text-gray-800" aria-label="Email us">
                      finelinebodies@outlook.com
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work Gallery</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            See our craftsmanship in action - a showcase of custom truck body solutions built with precision and care.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/images/fineline-logo.jpeg"
                alt="FineLine Bodies"
                width={200}
                height={80}
                className="h-16 w-auto mb-4 bg-white p-2 rounded"
              />
              <p className="text-gray-400 mb-4">
                FineLine Bodies delivers custom truck body solutions with unmatched craftsmanship and attention to
                detail. Serving customers across the UK with quality and reliability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
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
                  <Link href="/body-types" className="text-gray-400 hover:text-white transition-colors">
                    Body Types
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/after-care" className="text-gray-400 hover:text-white transition-colors">
                    After Care
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  07340590412
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  finelinebodies@outlook.com
                </li>
                <li className="flex items-center gap-2">Meridian Centre, Wainwright Street, Oldham, OL8 1EZ</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} jwa.services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
