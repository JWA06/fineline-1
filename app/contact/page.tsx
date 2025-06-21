"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  X,
  Menu,
  ChevronRight,
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
  Facebook,
  Linkedin,
  Instagram,
  Globe,
  Building2,
  ArrowRight,
} from "lucide-react"

// Enhanced contact information with social media
const contactInfo = {
  headquarters: {
    name: "FineLine Bodies Ltd - Head Office",
    address: {
      street: "123 Truck Lane",
      area: "Industrial Estate",
      city: "Truckville",
      postcode: "TR1 1TR",
      country: "United Kingdom",
    },
    phone: "01234 567 890",
    email: "info@finelinebodies.com",
  },
  salesOffice: {
    name: "Sales & Customer Service",
    phone: "01234 567 891",
    email: "sales@finelinebodies.com",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 2:00 PM",
  },
  technicalSupport: {
    name: "Technical Support & After Care",
    phone: "01234 567 892",
    email: "support@finelinebodies.com",
    emergency: "01234 567 999",
    hours: "Monday - Friday: 7:00 AM - 7:00 PM, Emergency: 24/7",
  },
  accounts: {
    name: "Accounts & Finance",
    phone: "01234 567 893",
    email: "accounts@finelinebodies.com",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM",
  },
  hr: {
    name: "Human Resources & Careers",
    phone: "01234 567 894",
    email: "careers@finelinebodies.com",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM",
  },
  socialMedia: {
    facebook: "https://www.facebook.com/p/Fine-Line-Commercial-Bodies-Ltd-100091736093813/",
    linkedin: "https://www.linkedin.com/in/david-carnell-49b061272/?originalSubdomain=uk",
    instagram: "https://www.instagram.com/finelinebodies/",
    website: "https://www.finelinebodies.co.uk",
  },
  businessHours: {
    monday: "8:00 AM - 5:00 PM",
    tuesday: "8:00 AM - 5:00 PM",
    wednesday: "8:00 AM - 5:00 PM",
    thursday: "8:00 AM - 5:00 PM",
    friday: "8:00 AM - 5:00 PM",
    saturday: "9:00 AM - 1:00 PM",
    sunday: "Closed",
  },
}

// Contact cards data
const contactCards = [
  {
    icon: <MessageSquare size={28} />,
    title: "All Enquiries",
    description: "Sales, technical support, customer service, and general enquiries",
    phone: "07340590412",
    email: "finelinebodies@outlook.com",
    hours: "Monday - Thursday: 7:00 AM - 4:00 PM      Friday: 7:00 AM - 12:00 PM",

    color: "bg-black",
    textColor: "text-black",
    bgColor: "bg-gray-50",
  },
]

// Social media links
const socialLinks = [
  {
    name: "Facebook",
    icon: <Facebook size={20} />,
    url: "https://www.facebook.com/p/Fine-Line-Commercial-Bodies-Ltd-100091736093813/",
    color: "hover:bg-blue-600",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={20} />,
    url: "https://www.linkedin.com/in/david-carnell-49b061272/?originalSubdomain=uk",
    color: "hover:bg-blue-700",
  },
  {
    name: "Instagram",
    icon: <Instagram size={20} />,
    url: "https://www.instagram.com/finelinebodies/",
    color: "hover:bg-pink-600",
  },
]

// Form validation
const validateForm = (formData) => {
  const errors = {}

  // Name validation
  if (!formData.fullName?.trim()) {
    errors.fullName = "Full name is required"
  } else if (formData.fullName.trim().length < 2) {
    errors.fullName = "Name must be at least 2 characters"
  }

  // Email validation
  if (!formData.email?.trim()) {
    errors.email = "Email address is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Please enter a valid email address"
  }

  // Phone validation
  if (!formData.phone?.trim()) {
    errors.phone = "Phone number is required"
  } else if (!/^[\d\s\-+$$$$]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
    errors.phone = "Please enter a valid phone number"
  }

  // Company validation
  if (!formData.company?.trim()) {
    errors.company = "Company name is required"
  }

  // Subject validation
  if (!formData.subject?.trim()) {
    errors.subject = "Subject is required"
  }

  // Message validation
  if (!formData.message?.trim()) {
    errors.message = "Message is required"
  } else if (formData.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters"
  }

  // Privacy policy validation
  if (!formData.privacy) {
    errors.privacy = "You must accept the privacy policy"
  }

  return errors
}

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    department: "",
    priority: "normal",
    message: "",
    newsletter: false,
    privacy: false,
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const errors = validateForm(formData)
    setFormErrors(errors)

    if (Object.keys(errors).length > 0) {
      // Focus on first error field
      const firstErrorField = Object.keys(errors)[0]
      const element = document.getElementById(firstErrorField)
      if (element) {
        element.focus()
        element.scrollIntoView({ behavior: "smooth", block: "center" })
      }
      return
    }

    setIsSubmitting(true)

    try {
      // Create form data for email submission
      const emailData = new FormData()
      emailData.append("to", "Joshatherton1@yahoo.com")
      emailData.append("subject", `Contact Form: ${formData.subject}`)
      emailData.append("from", formData.email)
      emailData.append("name", formData.fullName)
      emailData.append("phone", formData.phone)
      emailData.append("company", formData.company)
      emailData.append("department", formData.department)
      emailData.append("priority", formData.priority)
      emailData.append("message", formData.message)
      emailData.append("newsletter", formData.newsletter)

      // Submit to email service (you'll need to implement the backend endpoint)
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: emailData,
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        department: "",
        priority: "normal",
        message: "",
        newsletter: false,
        privacy: false,
      })
      setSubmitStatus("success")

      setTimeout(() => setSubmitStatus(null), 8000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus(null), 8000)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Contact FineLine Bodies | Get in Touch - Phone, Email & Address</title>
        <meta
          name="description"
          content="Contact FineLine Bodies for custom commercial vehicle solutions. Phone: 01234 567 890, Email: info@finelinebodies.com. Located in Truckville Industrial Estate. Get quotes, support & more."
        />
        <meta
          name="keywords"
          content="contact FineLine Bodies, commercial vehicle bodies contact, truck body manufacturer contact, Truckville, phone number, email address, quotes, technical support"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FineLine Bodies Ltd" />
        <meta property="og:title" content="Contact FineLine Bodies | Get in Touch - Phone, Email & Address" />
        <meta
          property="og:description"
          content="Contact FineLine Bodies for custom commercial vehicle solutions. Multiple contact methods available including phone, email, and online form."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.finelinebodies.com/contact" />
        <meta property="og:image" content="https://www.finelinebodies.com/images/contact-og.jpg" />
        <meta property="og:site_name" content="FineLine Bodies" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact FineLine Bodies | Get in Touch" />
        <meta
          name="twitter:description"
          content="Contact FineLine Bodies for custom commercial vehicle solutions. Phone, email, and online contact options available."
        />
        <link rel="canonical" href="https://www.finelinebodies.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FineLine Bodies Ltd",
            url: "https://www.finelinebodies.com",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+44-1234-567-890",
                contactType: "customer service",
                availableLanguage: "English",
              },
              {
                "@type": "ContactPoint",
                telephone: "+44-1234-567-891",
                contactType: "sales",
                availableLanguage: "English",
              },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Truck Lane, Industrial Estate",
              addressLocality: "Truckville",
              postalCode: "TR1 1TR",
              addressCountry: "GB",
            },
            sameAs: [
              "https://facebook.com/finelinebodies",
              "https://twitter.com/finelinebodies",
              "https://linkedin.com/company/fineline-bodies",
            ],
          })}
        </script>
      </head>

      <main className="min-h-screen bg-white" id="main-content">
        {/* Skip Navigation */}
        <a
          href="#contact-form"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded"
        >
          Skip to contact form
        </a>

        {/* Top Bar */}
        <div className="bg-black text-white py-2 hidden md:block">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Phone size={14} className="mr-2" aria-hidden="true" />
                  <a
                    href="tel:07340590412"
                    className="hover:text-gray-300 transition-colors"
                    aria-label={`Call us at 07340590412`}
                  >
                    07340590412
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail size={14} className="mr-2" aria-hidden="true" />
                  <a
                    href="mailto:finelinebodies@outlook.com"
                    className="hover:text-gray-300 transition-colors"
                    aria-label={`Email us at finelinebodies@outlook.com`}
                  >
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
                          item === "Contact" ? "font-bold text-black" : ""
                        }`}
                        aria-current={item === "Contact" ? "page" : undefined}
                      >
                        {item}
                        {item === "Contact" ? (
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
                            item === "Contact" ? "font-bold text-black" : ""
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                          aria-current={item === "Contact" ? "page" : undefined}
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
                    Contact
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-white" aria-labelledby="page-title">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <MessageSquare size={16} className="mr-2" aria-hidden="true" />
                Get in Touch Today
              </motion.div>

              <motion.h1
                id="page-title"
                className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Contact FineLine Bodies
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Ready to discuss your commercial vehicle body requirements? Our expert team is here to provide
                personalized solutions, technical support, and exceptional customer service.
              </motion.p>

              {/* Contact Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">24hr</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black flex items-center justify-center">
                    5
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="lucide lucide-star text-yellow-500 fill-yellow-500 ml-1"
                      __v0_r="0,20509,20547,20547"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">Free</div>
                  <div className="text-sm text-gray-600">Consultations</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="py-20 bg-gray-50" aria-labelledby="contact-methods-title">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="contact-methods-title" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Choose the contact method that works best for you. Our dedicated teams are ready to assist with any
                enquiries.
              </p>
            </motion.div>

            <div className="max-w-md mx-auto">
              <div className="grid grid-cols-1 gap-8">
                {contactCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="bg-white border-2 border-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="p-8">
                      <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-6 text-white">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-black">{card.title}</h3>
                      <p className="text-gray-600 mb-4">{card.description}</p>

                      <div className="space-y-3">
                        <a
                          href={`tel:${card.phone.replace(/\s/g, "")}`}
                          className="flex items-center text-black hover:text-gray-600 transition-colors"
                          aria-label={`Call us at ${card.phone}`}
                        >
                          <Phone size={16} className="mr-2" aria-hidden="true" />
                          {card.phone}
                        </a>
                        <a
                          href={`mailto:${card.email}`}
                          className="flex items-center text-black hover:text-gray-600 transition-colors"
                          aria-label={`Email us at ${card.email}`}
                        >
                          <Mail size={16} className="mr-2" aria-hidden="true" />
                          {card.email}
                        </a>
                        {card.hours && (
                          <div className="flex items-center text-gray-600">
                            <Clock size={16} className="mr-2" aria-hidden="true" />
                            {card.hours}
                          </div>
                        )}
                        {card.emergency && (
                          <a
                            href={`tel:${card.emergency.replace(/\s/g, "")}`}
                            className="flex items-center text-red-600 hover:underline font-medium"
                            aria-label={`Emergency support at ${card.emergency}`}
                          >
                            <AlertCircle size={16} className="mr-2" aria-hidden="true" />
                            Emergency: {card.emergency}
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gray-100 text-white" aria-labelledby="contact-form-title" id="contact-form">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="contact-form-title" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Send Us a Message
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Use the form below to send us a direct message. We aim to respond to all enquiries within 24 hours.
              </p>
              {submitStatus === "success" && (
                <div className="mt-8 p-4 bg-green-100 text-green-700 rounded-md flex items-center justify-center">
                  <CheckCircle size={20} className="mr-2" aria-hidden="true" />
                  Message sent successfully! We'll be in touch soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-8 p-4 bg-red-100 text-red-700 rounded-md flex items-center justify-center">
                  <AlertCircle size={20} className="mr-2" aria-hidden="true" />
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white ${
                            formErrors.fullName ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Your name"
                          required
                        />
                        {formErrors.fullName && <p className="text-red-600 text-sm mt-1">{formErrors.fullName}</p>}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white ${
                            formErrors.email ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="your@email.com"
                          required
                        />
                        {formErrors.email && <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>}
                      </div>
                    </div>

                    {/* Phone and Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white ${
                            formErrors.phone ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="01234 567 890"
                          required
                        />
                        {formErrors.phone && <p className="text-red-600 text-sm mt-1">{formErrors.phone}</p>}
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white"
                          placeholder="Your company (optional)"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-gray-900 bg-white ${
                          formErrors.subject ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="What can we help you with?"
                        required
                      />
                      {formErrors.subject && <p className="text-red-600 text-sm mt-1">{formErrors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-vertical text-gray-900 bg-white ${
                          formErrors.message ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Tell us about your requirements..."
                        required
                      />
                      {formErrors.message && <p className="text-red-600 text-sm mt-1">{formErrors.message}</p>}
                    </div>

                    {/* Privacy Policy */}
                    <div className="mb-6">
                      <label className="flex items-start cursor-pointer">
                        <input
                          type="checkbox"
                          name="privacy"
                          checked={formData.privacy}
                          onChange={handleInputChange}
                          className="mt-1 h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                          required
                        />
                        <span className="ml-3 text-sm text-gray-600">
                          I agree to the privacy policy and consent to my data being processed{" "}
                          <span className="text-red-500">*</span>
                        </span>
                      </label>
                      {formErrors.privacy && <p className="text-red-600 text-sm mt-1 ml-7">{formErrors.privacy}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} className="ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Head Office */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                    <Building2 size={24} className="mr-3 text-gray-600" aria-hidden="true" />
                    Head Office
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Address</h4>
                      <address className="not-italic text-gray-600 leading-relaxed">
                        FineLine Bodies Ltd
                        <br />
                        Meridian Centre
                        <br />
                        Wainwright Street
                        <br />
                        Oldham, OL8 1EZ
                        <br />
                        United Kingdom
                      </address>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Phone</h4>
                        <a
                          href={`tel:07340590412`}
                          className="text-blue-600 hover:underline flex items-center"
                          aria-label={`Call head office at 07340590412`}
                        >
                          <Phone size={16} className="mr-2" aria-hidden="true" />
                          07340590412
                        </a>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Email</h4>
                        <a
                          href={`mailto:finelinebodies@outlook.com`}
                          className="text-blue-600 hover:underline flex items-center"
                          aria-label={`Email head office at finelinebodies@outlook.com`}
                        >
                          <Mail size={16} className="mr-2" aria-hidden="true" />
                          finelinebodies@outlook.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}

                {/* Social Media */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Follow Us</h3>
                  <p className="text-gray-600 mb-6">
                    Stay connected with FineLine Bodies for the latest updates, industry insights, and company news.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-gray-100 p-4 rounded-lg text-center hover:text-white transition-all duration-300 group border-2 border-transparent hover:border-gray-300 ${social.color}`}
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <div className="flex justify-center mb-2 text-gray-700 group-hover:text-white">
                          {social.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-white">{social.name}</span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Website</span>
                      <a
                        href={contactInfo.socialMedia.website}
                        className="text-blue-600 hover:text-blue-800 hover:underline flex items-center font-medium"
                        aria-label="Visit our website"
                      >
                        <Globe size={16} className="mr-2 text-gray-600" aria-hidden="true" />
                        www.finelinebodies.co.uk
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="py-20 bg-white" aria-labelledby="location-title">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="location-title" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Visit Our Facility
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Located in Oldham with excellent transport links and ample parking for customer visits and vehicle
                collections.
              </p>
            </motion.div>

            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.123456789!2d-2.1234567!3d53.5432109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMeridian%20Centre%2C%20Wainwright%20Street%2C%20Oldham%20OL8%201EZ!5e0!3m2!1sen!2suk!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FineLine Bodies Location - Meridian Centre, Wainwright Street, Oldham"
                className="w-full h-full"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-xl max-w-sm">
                <div className="flex items-start space-x-3">
                  <MapPin size={24} className="text-black mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">FineLine Bodies Ltd</h3>
                    <address className="not-italic text-gray-600 text-sm leading-relaxed">
                      Meridian Centre
                      <br />
                      Wainwright Street
                      <br />
                      Oldham, OL8 1EZ
                    </address>
                    <div className="flex flex-col sm:flex-row gap-2 mt-3">
                      <a
                        href="https://maps.google.com/?q=Meridian+Centre,+Wainwright+Street,+Oldham,+OL8+1EZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                        aria-label="Get directions to FineLine Bodies"
                      >
                        Get Directions
                        <ArrowRight size={14} className="ml-1" aria-hidden="true" />
                      </a>
                      <a
                        href="tel:07340590412"
                        className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                        aria-label="Call us at 07340590412"
                      >
                        <Phone size={14} className="mr-1" aria-hidden="true" />
                        Call Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-20 bg-white" aria-labelledby="location-title">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="location-title" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Visit Our Facility
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Located in Oldham with excellent transport links and ample parking for customer visits and vehicle
                collections.
              </p>
            </motion.div>

            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.123456789!2d-2.1234567!3d53.5432109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMeridian%20Centre%2C%20Wainwright%20Street%2C%20Oldham%20OL8%201EZ!5e0!3m2!1sen!2suk!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FineLine Bodies Location - Meridian Centre, Wainwright Street, Oldham"
                className="w-full h-full"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-xl max-w-sm">
                <div className="flex items-start space-x-3">
                  <MapPin size={24} className="text-black mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">FineLine Bodies Ltd</h3>
                    <address className="not-italic text-gray-600 text-sm leading-relaxed">
                      Meridian Centre
                      <br />
                      Wainwright Street
                      <br />
                      Oldham, OL8 1EZ
                    </address>
                    <div className="flex flex-col sm:flex-row gap-2 mt-3">
                      <a
                        href="https://maps.google.com/?q=Meridian+Centre,+Wainwright+Street,+Oldham,+OL8+1EZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
                        aria-label="Get directions to FineLine Bodies"
                      >
                        Get Directions
                        <ArrowRight size={14} className="ml-1" aria-hidden="true" />
                      </a>
                      <a
                        href="tel:07340590412"
                        className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                        aria-label="Call us at 07340590412"
                      >
                        <Phone size={14} className="mr-1" aria-hidden="true" />
                        Call Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                <div className="flex space-x-3">
                  {socialLinks.slice(0, 3).map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-gray-800 p-2 rounded hover:text-white transition-all ${social.color}`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {["Home", "Body Types", "About", "Contact", "After Care", "Blog"].map((item) => (
                    <li key={item}>
                      <Link
                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-current={item === "Contact" ? "page" : undefined}
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
                <Link href="/sitemap" className="text-gray-500 text-sm hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
