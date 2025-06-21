/* --------------------------------------------------------------------------
   Blog listing page – self-contained; no external MDX/Shell dependencies
-------------------------------------------------------------------------- */
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Calendar, User, ArrowRight, Tag, Building2, Handshake, Phone, Mail, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

/* --------------------------------------------------------------------------
   Dummy blog data (same as before – truncate / extend as desired)
-------------------------------------------------------------------------- */
const blogPosts = [
  {
    id: 1,
    title: "Welcome to Our New Website - FineLine Bodies Goes Digital",
    excerpt:
      "We're excited to announce the launch of our brand new website! Discover what's new, improved, and how we're making it easier than ever to connect with FineLine Bodies.",
    content: "After months of hard work and planning, we're thrilled to unveil our completely redesigned website...",
    author: "FineLine Bodies Team",
    role: "Management",
    date: "2024-01-21",
    category: "Company News",
    tags: ["Website Launch", "Digital Transformation", "Company Update"],
    image: "/images/fineline-home-hero-2.jpeg",
    featured: true,
    readTime: "3 min read",
    type: "news",
  },
]

const categories = ["All Stories", "Company News"]

/* -------------------------------------------------------------------------- */

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Stories")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  /* ---------------------------- Helpers ---------------------------------- */
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All Stories" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)
  const featuredPosts = filteredPosts.filter((post) => post.featured)

  const getPostIcon = (type: string) => {
    switch (type) {
      case "news":
        return <Building2 className="h-4 w-4" />
      case "partnership":
        return <Handshake className="h-4 w-4" />
      default:
        return <User className="h-4 w-4" />
    }
  }

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case "news":
        return "bg-green-100 text-green-800"
      case "partnership":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  /* ----------------------------- Render ---------------------------------- */
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
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
              <Image
                src="/images/fineline-logo.jpeg"
                alt="FineLine Bodies Logo"
                width={200}
                height={100}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block" aria-label="Main Navigation" role="navigation">
              <ul className="flex space-x-8">
                {["Home", "Body Types", "Gallery", "About", "Contact", "After Care", "Blog"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                      className={`text-gray-800 hover:text-black font-medium text-sm uppercase tracking-wider transition-colors duration-200 relative group ${
                        item === "Blog" ? "font-bold text-black" : ""
                      }`}
                      aria-current={item === "Blog" ? "page" : undefined}
                    >
                      {item}
                      {item === "Blog" ? (
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
                          item === "Blog" ? "font-bold text-black" : ""
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={item === "Blog" ? "page" : undefined}
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
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Stories, News & Partnerships
          </motion.h1>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet our incredible team, stay updated with the latest industry developments, and discover our strategic
            partnerships that drive innovation in commercial vehicle bodies.
          </motion.p>
        </div>
      </section>

      {/* Search + Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search stories, news & partnerships..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category)
                    setCurrentPage(1)
                  }}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featuredPosts.length > 0 && selectedCategory === "All Stories" && !searchTerm && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Content</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="relative h-64">
                      <Image
                        src={post.image || "/images/placeholder.png"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-blue-600 text-white">Featured</Badge>
                        <Badge className={getPostTypeColor(post.type)}>
                          <span className="flex items-center gap-1">
                            {getPostIcon(post.type)}
                            {post.type === "news"
                              ? "Industry News"
                              : post.type === "partnership"
                                ? "Partnership"
                                : "Story"}
                          </span>
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          {getPostIcon(post.type)}
                          {post.type === "story"
                            ? `${post.author}`
                            : post.type === "news"
                              ? `${post.manufacturer}`
                              : `${post.partner}`}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">
              {selectedCategory === "All Stories" ? "Latest Content" : selectedCategory}
            </h2>
            <p className="text-gray-600">
              {filteredPosts.length} article
              {filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {currentPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                    <div className="relative h-48">
                      <Image
                        src={post.image || "/images/placeholder.png"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <Badge className={getPostTypeColor(post.type)}>
                          <span className="flex items-center gap-1">
                            {getPostIcon(post.type)}
                            {post.type === "news" ? "News" : post.type === "partnership" ? "Partnership" : "Story"}
                          </span>
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          {getPostIcon(post.type)}
                          {post.type === "story"
                            ? `${post.author}`
                            : post.type === "news"
                              ? `${post.manufacturer}`
                              : `${post.partner}`}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No content found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All Stories")
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => setCurrentPage(page)}
                    className="w-10"
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to get the latest stories from our team, industry news, and partnership announcements delivered
              straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email address" className="flex-1" />
              <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer – unchanged from earlier version */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white">FineLine Bodies</h3>
              </div>
              <p className="text-gray-400">
                Crafting excellence in commercial vehicle bodies with precision and innovation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/body-types" className="hover:text-white transition-colors">
                    Body Types
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/after-care" className="hover:text-white transition-colors">
                    After Care
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Warranty
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>Meridian Centre</p>
                <p>Wainwright Street</p>
                <p>Oldham, OL8 1EZ</p>
                <p>Phone: 07340590412</p>
                <p>Email: finelinebodies@outlook.com</p>
              </div>
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
