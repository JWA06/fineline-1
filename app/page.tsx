"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Menu,
  X,
  ChevronRight,
  Star,
  Shield,
  Phone,
  Mail,
  Award,
  CheckCircle,
  Settings,
  Zap,
  Users,
  Factory,
  Calendar,
  Clock,
} from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  // Parallax effect for hero section
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300])

  // Handle mobile menu
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com/finelinebodies",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.045C6.538 2.045 2.045 6.538 2.045 12S6.538 21.955 12 21.955 21.955 17.462 21.955 12 17.462 2.045 12 2.045zm0 3.348c1.647 0 1.857.008 2.515.037.773.036 1.325.154 1.782.404.481.264.83.613 1.095 1.095.25.457.368 1.01.404 1.782.03.658.037.868.037 2.515H15V9.773h.062c0-.884.062-2.077.062-2.601 0-.524-.187-.786-.711-.786h-1.213V5.393h-1.5V6.386H10.25v1.5h1.213c.524 0 .711.262.711.786 0 .524.062 1.717.062 2.601H9.75v1.5h2.25c0-1.647-.007-1.857-.037-2.515-.036-.773-.154-1.325-.404-1.782-.264-.481-.613-.83-1.095-1.095-.457-.25-1.01-.368-1.782-.404-.658-.03-0.868-.037-2.515-.037H9.75V15h-1.5v-1.5H6V9.773h.062c0 .884.062 2.077.062 2.601 0 .524.187.786.711.786h1.213v.993h1.5v-.993H13.75c-.524 0-.711-.262-.711-.786 0-.524-.062-1.717-.062-2.601H14.25V8.273h-2.25c0 1.647.007 1.857.037 2.515.036.773.154 1.325.404 1.782.264.481.613.83 1.095 1.095.457.25 1.01.368 1.782.404.658.03.868.037 2.515.037H14.25v-1.5h1.5v1.5h2.25V14.61h-.062c0-.884-.062-2.077-.062-2.601 0-.524-.187-.786-.711-.786h-1.213v-1.5h-1.5v1.5H10.25c.524 0 .711.262.711.786 0 .524.062 1.717.062 2.601H9.75v1.5h1.5v-1.5h2.25z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com/finelinebodies",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.316.033.636.053.961.053 1.852 0 3.55-636 4.899-1.667-.403-.025-.789-.131-1.149-.323 1.79 0 3.087 1.116 3.718-1.282-.42-.008-.826-.13-1.16-.344.083 1.763 1.345 3.055 2.799 3.167-.392-.105-.769-.315-1.106-.569 1.301 0 2.515.665 3.211-1.815-.404-.02-.789-.031-1.175-.031.341 1.076 1.331 1.868 2.458 1.868 2.959 0 4.581-1.819 4.889-5.912-.061-.589-.309-1.149-.788-1.552.244.217.46.451.636.701-.211-.661-.328-1.39-.328-2.14 0-.47.051-.931.143-1.38.484.596 1.162 1.115 1.948 1.542-1.07-.329-1.798-.995-2.325-1.785z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/fineline-bodies",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.045C6.538 2.045 2.045 6.538 2.045 12S6.538 21.955 12 21.955 21.955 17.462 21.955 12 17.462 2.045 12 2.045zm-1.979 5.291h-1.529v9.039h1.529v-9.039zm.765-1.56c-.497 0-.904-.407-.904-.904s.407-.904.904-.904.904.407.904.904-.407.904-.904.904zm9.214 9.039h-1.529v-4.423c0-1.101-.414-1.853-1.44-1.853-.787 0-1.252.525-1.459 1.032v5.244h-1.529v-9.039h1.529v1.271c.305-.481.832-.934 1.721-.934 1.873 0 3.262 1.228 3.262 3.861v4.841z" />
        </svg>
      ),
    },
  ]

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>FineLine Bodies | Leading UK Commercial Vehicle Body Manufacturer</title>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FineLine Bodies Ltd" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="Truckville, UK" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="FineLine Bodies | Leading UK Commercial Vehicle Body Manufacturer" />
        <meta
          property="og:description"
          content="UK's premier manufacturer of custom commercial vehicle bodies. Quality and innovation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.finelinebodies.com" />
        <meta property="og:image" content="https://www.finelinebodies.com/images/fineline-og-image.jpg" />
        <meta property="og:site_name" content="FineLine Bodies" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FineLine Bodies | Leading UK Commercial Vehicle Body Manufacturer" />
        <meta
          name="twitter:description"
          content="UK's premier manufacturer of custom commercial vehicle bodies with 30+ years experience."
        />
        <meta name="twitter:image" content="https://www.finelinebodies.com/images/fineline-twitter-card.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.finelinebodies.com" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FineLine Bodies Ltd",
            url: "https://www.finelinebodies.com",
            logo: "https://www.finelinebodies.com/images/fineline-logo.jpeg",
            description: "Leading UK manufacturer of custom commercial vehicle bodies with over 30 years experience",
            foundingDate: "1993",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Truck Lane, Industrial Estate",
              addressLocality: "Truckville",
              postalCode: "TR1 1TR",
              addressCountry: "GB",
            },
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
            sameAs: [
              "https://facebook.com/finelinebodies",
              "https://twitter.com/finelinebodies",
              "https://linkedin.com/company/fineline-bodies",
            ],
            makesOffer: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Commercial Vehicle Bodies",
                  category: "Automotive",
                },
              },
            ],
          })}
        </script>
      </Head>

      <main className="min-h-screen bg-white text-black" id="main-content">
        {/* Skip Navigation Link for Accessibility */}
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
                  <a
                    href="tel:01234567890"
                    className="hover:text-gray-300 transition-colors"
                    aria-label="Call us at 01234 567 890"
                  >
                    07340590412
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail size={14} className="mr-2" aria-hidden="true" />
                  <a
                    href="mailto:info@finelinebodies.com"
                    className="hover:text-gray-300 transition-colors"
                    aria-label="Email us at info@finelinebodies.com"
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
                    alt="FineLine Bodies Logo - Leading UK Commercial Vehicle Body Manufacturer"
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
                          item === "Home" ? "font-bold text-black" : ""
                        }`}
                        aria-current={item === "Home" ? "page" : undefined}
                      >
                        {item}
                        {item === "Home" ? (
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
                onClick={toggleMenu}
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
                            item === "Home" ? "font-bold text-black" : ""
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                          aria-current={item === "Home" ? "page" : undefined}
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
        <section
          className="relative h-screen flex items-center justify-center overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
            <Image
              src="/images/fineline-home-hero-2.jpeg"
              alt="Professional white Mercedes-Benz Actros commercial truck with custom FineLine Bodies box body, showcasing quality commercial vehicle manufacturing in daylight setting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>

          <div className="container mx-auto px-4 z-10">
            <motion.div style={{ opacity, scale }} className="max-w-3xl mx-auto text-white text-center">
              <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <h2 className="text-2xl md:text-3xl font-light text-white/90 tracking-wide">
                  Welcome to FineLine Bodies
                </h2>
              </motion.div>
              <motion.h1
                id="hero-heading"
                className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Britain's Premier
                <br />
                <span className="text-5xl md:text-7xl">Commercial Vehicle Specialists</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                With over 25 years of experience, we are Britain’s most innovative and fast-growing commercial vehicle
                body specialists—delivering reliable, custom-engineered solutions built to meet your exact needs from
                the ground up
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link
                  href="/body-types"
                  className="bg-white text-black px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="View our range of commercial vehicle body types"
                >
                  View Our Products
                  <ChevronRight size={16} className="ml-2" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded font-medium hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Request a quote for your commercial vehicle body"
                >
                  Request a Quote
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Company Credentials */}
          <div className="absolute bottom-8 left-0 right-0 z-10">
            <div className="container mx-auto px-4">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="flex flex-wrap justify-center items-center gap-8">
                  <div className="text-center"></div>
                  <div className="text-center">
                    <div className="text-black font-bold mb-1">Years Of Experience </div>
                    <div className="text-xs text-gray-600">Built To The Best Quality</div>
                  </div>
                  <div className="text-center">
                    <div className="text-black font-bold mb-1">One Stop Shop</div>
                    <div className="text-xs text-gray-600">Can Be A One Stop Shop</div>
                  </div>
                  <div className="text-center">
                    <div className="text-black font-bold mb-1">Made in UK</div>
                    <div className="text-xs text-gray-600">British Manufacturing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="overview-heading">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="overview-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Why Britain's Leading Companies Choose FineLine Bodies
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Founded in 2022 and backed by over 25 years of experience in commercial vehicle body building, we’re
                dedicated to delivering high-quality, bespoke vehicle bodies with innovative design and unbeatable
                reliability. Our expert team has a proven track record in the industry, trusted by countless satisfied
                customers for precision-built, custom solutions that meet every business need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: <Calendar size={32} />,
                  title: "25+ Years",
                  description: "Of uncompromising excellence and innovation",
                },
                {
                  icon: <Users size={32} />,
                  title: "500+ Builds Completed",
                  description: "Commercial vehicles delivered nationwide",
                },
                {
                  icon: <Factory size={32} />,
                  title: "2 Week Turnaround",
                  description: "From Build to Delivery in Just 14 Days",
                },
                {
                  icon: <Award size={32} />,
                  title: "Bespoke Bodies",
                  description: "Tailored builds, no off-the-shelf solutions.",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-black">{stat.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Mission Statement */}
            <motion.div
              className="bg-black text-white p-12 rounded-lg shadow-xl text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-6">Our Promise to You</h3>
              <p className="text-lg leading-relaxed mb-6">
                “With over 25 years in the industry, I founded this company to bring a new standard of quality and
                reliability to commercial vehicle body building. We promise bespoke designs, expert craftsmanship, and a
                fast 2-week turnaround—built around your business needs.”
                <br />
              </p>
              <div className="text-sm text-gray-300">— Managing Director, FineLine Bodies Ltd</div>
            </motion.div>
          </div>
        </section>

        {/* Product Categories */}

        {/* Featured Product */}
        <section className="py-20 bg-gray-50" aria-labelledby="featured-heading">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative z-10 h-96 w-full">
                  <Image
                    src="/images/fineline-home-hero.jpeg"
                    alt="FineLine Bodies featured product - Professional commercial vehicle body showcasing quality craftsmanship and innovative design"
                    fill
                    className="rounded shadow-xl object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded text-sm font-bold">
                    FEATURED
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 id="featured-heading" className="text-3xl md:text-4xl font-bold mb-6">
                  Introducing the All-New Furniture Van Pro
                </h2>
                <p className="text-gray-600 mb-6">
                  Our latest innovation in furniture van design offers enhanced protection, improved loading efficiency,
                  and superior functionality for safe transportation of furniture and household goods.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-black mr-2 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-sm">Enhanced Padding</h4>
                      <p className="text-sm text-gray-600">Premium interior protection</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-black mr-2 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-sm">Load Restraint System</h4>
                      <p className="text-sm text-gray-600">Secure cargo positioning</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-black mr-2 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-sm">Easy Access Doors</h4>
                      <p className="text-sm text-gray-600">Wide opening for large items</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-black mr-2 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-sm">Anti-Slip Flooring</h4>
                      <p className="text-sm text-gray-600">Prevents cargo movement</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/body-types/furniture-van-pro"
                    className="bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    aria-label="View detailed specifications for Furniture Van Pro"
                  >
                    Get Specifications
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right ml-2"
                      __v0_r="0,37047,37053"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <ChevronRight size={16} className="ml-2" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-black text-black px-6 py-3 rounded font-medium hover:bg-black hover:text-white transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    aria-label="Request a quote for Furniture Van Pro"
                  >
                    Request a Quote
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Popular Product */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative z-10 h-96 w-full">
                  <Image
                    src="/images/curtain-side-body-fineline.jpeg"
                    alt="Popular Curtainside Body - Most requested commercial vehicle body solution by FineLine Bodies"
                    fill
                    className="rounded shadow-xl object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded text-sm font-bold">
                    POPULAR
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Most Popular: Professional Curtainside Body</h2>
                <p className="text-gray-600 mb-6">
                  Our most requested solution, the Professional Curtainside Body offers unmatched versatility with
                  sliding curtains for easy side access loading. Perfect for palletized goods, retail distribution, and
                  general freight applications.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-black mr-2 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-sm">Sliding Curtains</h4>
                      <p className="text-sm text-gray-600">Full side access loading</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-black mr-2 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-sm">Forklift Compatible</h4>
                      <p className="text-sm text-gray-600">Easy loading from the side</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-black mr-2 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-sm">Weather Protection</h4>
                      <p className="text-sm text-gray-600">Secure curtain system</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-black mr-2 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-sm">Weather Resistant</h4>
                      <p className="text-sm text-gray-600">Durable frame construction</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/body-types/curtainside"
                    className="bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    aria-label="View detailed specifications for Curtainside Body"
                  >
                    View Specifications
                    <ChevronRight size={16} className="ml-2" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-black text-black px-6 py-3 rounded font-medium hover:bg-black hover:text-white transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    aria-label="Request a quote for Curtainside Body"
                  >
                    Request a Quote
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Our Pick Product */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Pick: Premium Box Van Body</h2>
                <p className="text-gray-600 mb-6">
                  Hand-picked by our experts, this Premium Box Van Body represents the perfect balance of security,
                  functionality, and value. Ideal for courier services, retail deliveries, and secure cargo
                  transportation.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-black mr-2 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-sm">Secure Locking</h4>
                      <p className="text-sm text-gray-600">Multi-point security system</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-black mr-2 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-sm">Insulated Walls</h4>
                      <p className="text-sm text-gray-600">Temperature protection</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-black mr-2 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-sm">LED Interior Lighting</h4>
                      <p className="text-sm text-gray-600">Enhanced visibility</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-black mr-2 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-sm">Load Restraint Rails</h4>
                      <p className="text-sm text-gray-600">Secure cargo positioning</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/body-types/box-van"
                    className="bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    aria-label="View detailed specifications for Box Van Body"
                  >
                    View Specifications
                    <ChevronRight size={16} className="ml-2" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-black text-black px-6 py-3 rounded font-medium hover:bg-black hover:text-white transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    aria-label="Request a quote for Box Van Body"
                  >
                    Request a Quote
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative z-10 h-96 w-full">
                  <Image
                    src="/images/box-van-daf-cf.jpeg"
                    alt="Our Pick Box Van Body - Professional DAF CF 320 with premium box body by FineLine Bodies"
                    fill
                    className="rounded shadow-xl object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded text-sm font-bold">
                    OUR PICK
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-black text-white" aria-labelledby="why-choose-heading">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold mb-4">
                What Sets Us Apart?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We don't just meet industry standards—we set them. Here's why leading companies trust us with their most
                critical assets.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield size={32} />,
                  title: "2 Week Guarantee",
                  description:
                    "We guarantee expert custom vehicle bodies in 2 weeks—fast, reliable craftsmanship designed to keep your business moving smoothly.",
                },
                {
                  icon: <Zap size={32} />,
                  title: "24 Hour Response",
                  description:
                    "We pride ourselves on responding to all inquiries within 24 hours, ensuring you get timely answers and seamless communication.",
                },
                {
                  icon: <Award size={32} />,
                  title: "Bespoke Designs",
                  description:
                    "Our bespoke designs are uniquely crafted to fit your exact needs, delivering personalized, high-quality vehicle bodies that stand out.",
                },
                {
                  icon: <Users size={32} />,
                  title: "Dedicated Business Manager",
                  description:
                    "Your personal expert who knows your business inside out—from initial consultation to after-sales support.",
                },
                {
                  icon: <Settings size={32} />,
                  title: "Cutting-Edge Technology",
                  description:
                    "We use advanced technology and precision tools to create bespoke truck bodies, ensuring quality, efficiency, and perfect fits.",
                },
                {
                  icon: <CheckCircle size={32} />,
                  title: "100% British Made",
                  description:
                    "Proudly manufactured in Britain using premium materials and supporting local supply chains.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-white/5 rounded-lg border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Expertise */}

        {/* Case Studies */}

        {/* Resources */}

        {/* Testimonials */}
        <section className="py-20 bg-black text-white" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say about our work.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Steve",
                  company: "Mac Trucks",
                  quote:
                    "I just wanted to say how amazing Dave and the team at Oldham were—genuinely top-notch service. They put me at ease straight away and nothing was too much trouble. They're a real credit to Mac Trucks. If every company treated their customers like this, the world would be a better place. I’m genuinely looking forward to picking up our three new vehicles on September 16th, having seen them this morning—very excited!",
                  rating: 5,
                  industry: "Logistics",
                },
                {
                  name: "Stephen Marriot",
                  position: "Transport Manager",
                  quote:
                    "I just wanted to say thanks for coming out so promptly to fix the strut—really appreciated while I was sat at the Spar RDC. Other companies could definitely take a leaf out of your book when it comes to after-sales care. Top service as always.",
                  rating: 5,
                  industry: "Transport",
                },
                {
                  name: "Michael Brown",
                  position: "Managing Director",
                  quote:
                    "The custom solution provided by FineLine Bodies has significantly improved our operational efficiency. Highly recommended!",
                  rating: 5,
                  industry: "Haulage",
                },
              ].map((testimonial, index) => (
                <motion.blockquote
                  key={index}
                  className="bg-white/5 p-8 rounded border border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-white fill-white" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="italic mb-6">"{testimonial.quote}"</p>
                  <footer className="flex items-start">
                    {/* Avatar / initials */}
                    <div className="w-10 h-10 rounded-full bg-gray-700 mr-3 flex items-center justify-center text-white font-bold shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>

                    {/* Author details */}
                    <div>
                      <cite className="not-italic font-bold">{testimonial.name}</cite>
                      {testimonial.position && <p className="text-sm text-gray-400">{testimonial.position}</p>}
                      <p className="text-sm text-gray-400">
                        {testimonial.company} • {testimonial.industry}
                      </p>
                    </div>
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-20 bg-gray-50" aria-labelledby="location-heading">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 id="location-heading" className="text-3xl md:text-4xl font-bold mb-6">
                  Visit Our Facility
                </h2>
                <p className="text-gray-600 mb-6">
                  Located in Oldham, our facility is easily accessible with excellent transport links and ample parking
                  for customer visits.
                </p>

                <address className="not-italic mb-6">
                  <h3 className="font-bold text-lg mb-2">FineLine Bodies Limited</h3>
                  <p className="text-gray-600">Meridian Centre</p>
                  <p className="text-gray-600">Wainwright street</p>
                  <p className="text-gray-600">Oldham</p>
                  <p className="text-gray-600">OL8 1EZ</p>
                </address>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone size={18} className="mr-3 text-gray-600" aria-hidden="true" />
                    <a href="tel:01234567890" className="text-black hover:underline font-medium">
                      07340590412
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="mr-3 text-gray-600" aria-hidden="true" />
                    <a href="mailto:info@finelinebodies.com" className="text-black hover:underline">
                      finelinebodies@outlook.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock size={18} className="mr-3 text-gray-600" aria-hidden="true" />
                    <span className="text-gray-600">
                      Monday - Thursday: 7:00 AM - 4:00 PM Friday: 7:00 AM - 12:00 PM
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative h-96 rounded-2xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.0!2d-2.1!3d53.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c0c0c0c0c0%3A0x0!2sMeridian%20Centre%2C%20Wainwright%20St%2C%20Oldham%20OL8%201EZ%2C%20UK!5e0!3m2!1sen!2suk!4v1640995200000!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FineLine Bodies Location - Meridian Centre, Wainwright Street, Oldham"
                  className="rounded-2xl"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-100" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Experience the FineLine Difference?
              </h2>
              <p className="text-gray-600 mb-8 text-xl leading-relaxed">
                Join hundreds of satisfied customers who've discovered what true quality looks like. Get your free
                consultation and detailed quote within 24 hours—no obligations, just expert advice.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  href="/contact"
                  className="bg-black text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 shadow-lg"
                  aria-label="Get your free quote today"
                >
                  Get Your Free Quote Today
                </Link>
                <Link
                  href="/body-types"
                  className="border-2 border-black text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  aria-label="Explore our award-winning solutions"
                >
                  See Our Work
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-2 text-black" />
                  Free consultation
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-2 text-black" />
                  24-hour response
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-2 text-black" />
                  No obligation quote
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
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`Follow us on ${link.name}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                      Home
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
                    <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/after-care" className="text-gray-400 hover:text-white transition-colors">
                      After Care
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Contact Information</h4>
                <p className="text-gray-400 mb-2">FineLine Bodies Limited</p>
                <p className="text-gray-400 mb-2">Meridian Centre, Wainwright Street</p>
                <p className="text-gray-400 mb-2">Oldham, OL8 1EZ</p>
                <div className="flex items-center mb-2">
                  <Phone size={16} className="mr-2 text-gray-500" aria-hidden="true" />
                  <a href="tel:07340590412" className="text-gray-400 hover:text-white transition-colors">
                    07340590412
                  </a>
                </div>
                <div className="flex items-center mb-2">
                  <Mail size={16} className="mr-2 text-gray-500" aria-hidden="true" />
                  <a
                    href="mailto:finelinebodies@outlook.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    finelinebodies@outlook.com
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h4>
                <p className="text-gray-400 mb-4">
                  Stay up-to-date with our latest news, product releases, and special offers.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800 text-gray-300 px-4 py-2 rounded-l focus:outline-none"
                    aria-label="Email address"
                  />
                  <button
                    className="bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-r transition-colors"
                    aria-label="Subscribe"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
              &copy; {new Date().getFullYear()} FineLine Bodies Ltd. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
