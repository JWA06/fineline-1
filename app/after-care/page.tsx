"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Phone,
  Mail,
  X,
  Menu,
  ChevronRight,
  CheckCircle,
  Star,
  Settings,
  ArrowRight,
  Headphones,
  PenToolIcon as Tool,
  MapPin,
  Clock,
} from "lucide-react"
import Head from "next/head"

// Main service categories
const serviceCategories = [
  {
    title: "Repairs ",
    description:
      "If you choose a warranty with us, we’ll handle all covered repairs—quickly and hassle-free, giving you total peace of mind.",
    icon: <Tool size={32} />,
    image: "/placeholder.svg?height=300&width=400&text=Repairs",
    services: ["Damage repair", "Body Repair", "Panel replacement"],
    benefits: [
      "Restore original performance",
      "Extend operational life",
      "Maintain resale value",
      "Ensure safety compliance",
    ],
  },
  {
    title: "Mobile Repairs",
    description:
      "At Fineline, we offer fast, reliable mobile repairs—bringing our expertise directly to you, wherever your vehicle is.",
    icon: <Settings size={32} />,
    image: "/placeholder.svg?height=300&width=400&text=Parts",
    services: ["Genuine replacement parts", "Come to you!", "Tail lift repairs"],
    benefits: [
      "Guaranteed compatibility",
      "Maintain warranty coverage",
      "Optimal performance",
      "Fast delivery available",
    ],
  },
  {
    title: "Technical Support",
    description: "Expert technical assistance and guidance for all your vehicle body needs",
    icon: <Headphones size={32} />,
    image: "/placeholder.svg?height=300&width=400&text=Support",
    services: ["Technical helpline", "Maintenance advice", "Documentation support"],
    benefits: ["Expert guidance available", "Reduce downtime", "Improve efficiency", "Enhance safety"],
  },
]

const serviceLocations = [
  {
    name: "Head Office & Service Centre",
    address: "Meridian Centre, Wainwright Street. Oldham, OL8 1EX",
    phone: "07340590412",
    email: "finelinebodies@outlook.com",
    hours: "Monday - Thursday: 7:00 AM - 4:00 PM",
    services: [
      "Full servicing",
      "Major repairs",
      "Refurbishment",
      "Parts supply",
      "Mobile service",
      "Emergency repairs",
    ],
    mapUrl: "#",
  },
]

// FAQ data
const faqs = [
  {
    question: "How often should I service my vehicle body?",
    answer:
      "We recommend annual servicing for most commercial vehicle bodies, with more frequent inspections for high-usage vehicles. Our service team can provide a customized maintenance schedule based on your specific usage patterns and operating conditions.",
  },
  {
    question: "Do you provide mobile servicing?",
    answer:
      "Yes, we offer mobile servicing. Our mobile service unit can perform routine maintenance, inspections, and minor repairs at your premises, minimizing vehicle downtime.",
  },
  {
    question: "Do you fit tail lifts?",
    answer:
      "Yes, we do! At Fineline, we supply and professionally install a wide range of tail lifts, tailored to suit your vehicle type and business requirements. Whether for ease of loading or improved efficiency, we've got you covered.",
  },
  {
    question: "How do I order parts?",
    answer:
      "At the moment, parts availability depends on current stock levels. The best way to order is to give us a call—we’ll check what’s in and help you find exactly what you need. We're always happy to assist.",
  },
  {
    question: "Can you customise vehicle bodies to suit specific industry needs?",
    answer:
      "Absolutely. We specialise in building custom vehicle bodies tailored to your industry—whether it's delivery, construction, or specialist trades. Every build is designed to meet your exact operational requirements.",
  },
]

// Resources and downloads

export default function AfterCare() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>After Sales Support | FineLine Bodies - Service, Repairs & Parts</title>
        <meta
          name="description"
          content="Comprehensive after sales support from FineLine Bodies. Professional servicing, repairs, genuine parts, and technical support to keep your commercial vehicles running efficiently."
        />
        <meta
          name="keywords"
          content="after sales support, vehicle servicing, commercial vehicle repairs, genuine parts, technical support, FineLine Bodies maintenance"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="After Sales Support | FineLine Bodies - Service, Repairs & Parts" />
        <meta
          property="og:description"
          content="Professional after sales support including servicing, repairs, genuine parts, and technical assistance for FineLine Bodies commercial vehicles."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.finelinebodies.com/after-care" />
        <link rel="canonical" href="https://www.finelinebodies.com/after-care" />
      </Head>

      <main className="min-h-screen bg-white" id="main-content">
        {/* Skip Navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded"
        >
          Skip to main content
        </a>

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
                          item === "After Care" ? "font-bold text-black" : ""
                        }`}
                        aria-current={item === "After Care" ? "page" : undefined}
                      >
                        {item}
                        {item === "After Care" ? (
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
                            item === "After Care" ? "font-bold text-black" : ""
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                          aria-current={item === "After Care" ? "page" : undefined}
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

        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-3 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <nav className="flex" aria-label="Breadcrumb" role="navigation">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight size={14} className="text-gray-400 mx-1" aria-hidden="true" />
                  <span className="text-gray-900 font-medium" aria-current="page">
                    After Sales Support
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="page-title">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                id="page-title"
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                After Sales Support
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Comprehensive support services to keep your FineLine Bodies commercial vehicles operating efficiently
                throughout their working life. From routine servicing to emergency repairs, we're here to help.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Service Images Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="relative h-64 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Image src="/images/we-come-to-you.webp" alt="Mobile repair services" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">Mobile Repairs</h3>
                    <p className="text-sm">We come to you for maximum convenience</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative h-64 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image src="/images/expert-support.png" alt="Expert support services" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-bold">Expert Support</h3>
                    <p className="text-sm">Technical guidance when you need it</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-gray-50" aria-labelledby="services-title">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="services-title" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Professional after sales support designed to maximize the performance, reliability, and lifespan of your
                commercial vehicle bodies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md border border-gray-100 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 mx-auto">
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">{category.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{category.description}</p>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Key Services:</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center">
                          <CheckCircle size={14} className="text-green-600 mr-2 flex-shrink-0" aria-hidden="true" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {category.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <Star size={14} className="text-blue-600 mr-2 flex-shrink-0" aria-hidden="true" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-2" aria-hidden="true" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Locations */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50" aria-labelledby="locations-title">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="locations-title" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Service Location
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                We provide comprehensive after sales support from our main facility, including mobile service coverage
                for maximum convenience.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {serviceLocations.map((location, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 border border-gray-100 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{location.name}</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin size={18} className="text-gray-600 mr-3 mt-1" aria-hidden="true" />
                      <div>
                        <p className="text-gray-700">{location.address}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone size={18} className="text-gray-600 mr-3" aria-hidden="true" />
                      <a
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-center">
                      <Mail size={18} className="text-gray-600 mr-3" aria-hidden="true" />
                      <a href={`mailto:${location.email}`} className="text-blue-600 hover:underline">
                        {location.email}
                      </a>
                    </div>

                    <div className="flex items-center">
                      <Clock size={18} className="text-gray-600 mr-3" aria-hidden="true" />
                      <p className="text-gray-700">{location.hours}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Available Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, serviceIndex) => (
                        <span key={serviceIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team & Facility Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Team & Facilities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Professional expertise and modern facilities to support all your commercial vehicle needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                className="bg-gray-50 rounded-xl p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Experienced Professionals</h3>
                <p className="text-gray-600 mb-6">
                  Our certified technicians bring years of experience in commercial vehicle maintenance and repair.
                  We're committed to keeping your fleet running at peak performance with minimal downtime.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-green-600 mr-3" />
                    <span className="text-gray-700">Certified and trained technicians</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-green-600 mr-3" />
                    <span className="text-gray-700">Years of industry experience</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-green-600 mr-3" />
                    <span className="text-gray-700">Ongoing professional development</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-xl p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                  <Settings size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Modern Service Facility</h3>
                <p className="text-gray-600 mb-6">
                  Our purpose-built service center is equipped with the latest tools and technology to handle all
                  aspects of commercial vehicle maintenance, from routine servicing to complex repairs.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-green-600 mr-3" />
                    <span className="text-gray-700">Multiple service bays</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-green-600 mr-3" />
                    <span className="text-gray-700">Heavy-duty lifting equipment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="text-green-600 mr-3" />
                    <span className="text-gray-700">Climate-controlled environment</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Why Choose FineLine Bodies for After Sales Support?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3 mx-auto">
                    <Clock size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Fast Response</h4>
                  <p className="text-sm text-gray-600">Quick turnaround times to minimize vehicle downtime</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3 mx-auto">
                    <Star size={24} className="text-green-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Quality Service</h4>
                  <p className="text-sm text-gray-600">Professional workmanship with attention to detail</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3 mx-auto">
                    <Headphones size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Expert Support</h4>
                  <p className="text-sm text-gray-600">Knowledgeable team ready to assist with any questions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="faq-title">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="faq-title" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Find answers to common questions about our after sales support services, maintenance programs, and
                technical assistance.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md border border-gray-100 mb-4 hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <button
                    className="w-full text-left py-4 px-6 font-bold text-gray-900 flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                  >
                    {faq.question}
                    <ChevronRight
                      size={20}
                      className={`transform transition-transform ${openFaq === index ? "rotate-90" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        className="px-6 pb-4 text-gray-700 border-t border-gray-200"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="contact-title">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="contact-title" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Need Assistance? Contact Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our dedicated support team is ready to assist you with any inquiries, service requests, or technical
                support needs.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto text-center">
              <div className="space-x-4">
                <Link
                  href="/contact"
                  className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 inline-block transform hover:scale-105"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:07340590412"
                  className="border-2 border-black text-black px-8 py-4 rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-300 inline-block transform hover:scale-105"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white pt-16 pb-8" role="contentinfo">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <Link href="/" className="flex items-center space-x-2 mb-6" aria-label="FineLine Bodies Home">
                  <div className="bg-white p-2 rounded">
                    <Image
                      src="/images/fineline-logo.jpeg"
                      alt="FineLine Bodies Logo"
                      width={120}
                      height={60}
                      className="h-10 w-auto"
                    />
                  </div>
                </Link>
                <p className="text-gray-400 mb-6">Custom truck body solutions crafted with precision and expertise.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {["Home", "Body Types", "Gallery", "About", "Contact", "After Care", "Blog"].map((item) => (
                    <li key={item}>
                      <Link
                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-current={item === "After Care" ? "page" : undefined}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-6">Services</h3>
                <ul className="space-y-3">
                  {[
                    "Custom Truck Bodies",
                    "Repairs & Maintenance",
                    "Modifications",
                    "Consultations",
                    "After Sales Support",
                  ].map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-6">Contact Info</h3>
                <address className="not-italic text-gray-400 space-y-3">
                  <p>Meridian Centre</p>
                  <p>Wainwright Street</p>
                  <p>Oldham, OL8 1EZ</p>
                  <p className="pt-2">
                    <a
                      href="tel:07340590412"
                      className="hover:text-white transition-colors flex items-center"
                      aria-label="Call us at 07340590412"
                    >
                      <Phone size={14} className="mr-2" aria-hidden="true" />
                      07340590412
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:finelinebodies@outlook.com"
                      className="hover:text-white transition-colors flex items-center"
                      aria-label="Email us at finelinebodies@outlook.com"
                    >
                      <Mail size={14} className="mr-2" aria-hidden="true" />
                      finelinebodies@outlook.com
                    </a>
                  </p>
                </address>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} jwa.services. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy-policy" className="text-gray-500 text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-gray-500 text-sm hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookie-policy" className="text-gray-500 text-sm hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
