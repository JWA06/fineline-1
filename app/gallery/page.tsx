"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, Menu, X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    image: "/images/dropside-fineline.jpeg",
    description: "Custom Dropside Body",
  },
  {
    id: 2,
    image: "/images/box-van-fineline.jpeg",
    description: "Box Van Body",
  },
  {
    id: 3,
    image: "/images/furniture-van.jpeg",
    description: "Furniture Van Body",
  },
  {
    id: 4,
    image: "/images/fineline-home-hero.jpeg",
    description: "Home Hero Project",
  },
  {
    id: 5,
    image: "/images/fineline-home-hero-2.jpeg",
    description: "Custom Truck Body",
  },
  {
    id: 6,
    image: "/images/bespoke-design.jpeg",
    description: "Bespoke Design",
  },
  {
    id: 7,
    image: "/images/overview-image.jpeg",
    description: "Overview Project",
  },
  {
    id: 8,
    image: "/images/builders-merchant-fineline.jpeg",
    description: "Builders Merchant Body with Crane",
  },
  {
    id: 9,
    image: "/images/curtain-sider-moffett-fineline.jpeg",
    description: "Curtain Sider with Moffett Forklift",
  },
  {
    id: 10,
    image: "/images/5-door-furniture-removal-fineline.jpeg",
    description: "5 Door Furniture Removal Van",
  },
  {
    id: 11,
    image: "/images/storage-van-interior.jpeg",
    description: "Custom Storage Van Interior",
  },
  {
    id: 12,
    image: "/images/compartment-storage-system.jpeg",
    description: "Professional Compartment Storage System",
  },
  {
    id: 13,
    image: "/images/mercedes-box-van.jpeg",
    description: "Mercedes Commercial Box Van",
  },
  {
    id: 14,
    image: "/images/highway-maintenance-rear.jpeg",
    description: "Highway Maintenance Vehicle",
  },
  {
    id: 15,
    image: "/images/m9-hdd-truck-rear.jpeg",
    description: "M9 HDD Specialized Utility Truck",
  },
  {
    id: 16,
    image: "/images/m9-hdd-truck-side.jpeg",
    description: "M9 HDD Professional Branding",
  },
  {
    id: 17,
    image: "/images/tail-lift-fineline.jpeg",
    description: "Tail Lift Fitment",
  },
  {
    id: 18,
    image: "/images/box-van-daf-cf.jpeg",
    description: "DAF CF Box Van Body",
  },
  {
    id: 19,
    image: "/images/refrigerated-body.jpeg",
    description: "Refrigerated Body",
  },
  {
    id: 20,
    image: "/images/curtain-sider-open.jpeg",
    description: "Curtain Sider Open",
  },
  {
    id: 21,
    image: "/images/fineline-crane-operation.jpeg",
    description: "Crane Operation",
  },
  {
    id: 22,
    image: "/images/moffett-tail-lift-body.jpeg",
    description: "Moffett Tail Lift Body",
  },
  {
    id: 24,
    image: "/images/furniture-van-interior-1.jpeg",
    description: "Furniture Van Interior with Wooden Slats",
  },
  {
    id: 25,
    image: "/images/utility-truck-side-view.jpeg",
    description: "Multi-Compartment Utility Truck",
  },
  {
    id: 26,
    image: "/images/furniture-van-interior-2.jpeg",
    description: "Professional Furniture Van Interior",
  },
  {
    id: 27,
    image: "/images/van-interior-mixed-storage.jpeg",
    description: "Mixed Storage Van Interior with Roller Shutters",
  },
  {
    id: 28,
    image: "/images/commercial-truck-exterior.jpeg",
    description: "Large Commercial Truck with Multiple Compartments",
  },
  {
    id: 29,
    image: "/images/truck-rear-tail-lift.jpeg",
    description: "Truck Rear View with Tail Lift System",
  },
  {
    id: 30,
    image: "/images/highway-maintenance-front.jpeg",
    description: "Highway Maintenance Truck - M9 HDD Professional Vehicle",
  },
].filter((item) => {
  // Filter out any potentially animated image formats
  const imageExtension = item.image.split(".").pop()?.toLowerCase()
  const staticFormats = ["jpg", "jpeg"]
  return staticFormats.includes(imageExtension || "")
})

export default function GalleryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    console.log("Static Gallery Items:", galleryItems)
    console.log("Total static images:", galleryItems.length)
  }, [])

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
          <div className="mt-4 text-sm text-gray-400">Displaying {galleryItems.length} static images</div>
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
                  alt={item.description}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
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
            <p>&copy; {new Date().getFullYear()} FineLine Bodies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
