"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  X,
  Phone,
  Mail,
  Search,
  Truck,
  Shield,
  Settings,
  ContrastIcon as Compare,
  MessageSquare,
  Menu,
} from "lucide-react"

// Enhanced body types data with more details
const bodyTypes = [
  {
    id: 1,
    name: "Box Van Bodies",
    category: "Commercial",
    description: "Versatile enclosed bodies ideal for general cargo and goods transportation.",
    detailedDescription:
      "Our box van bodies offer secure, weatherproof storage solutions perfect for delivery services, retail distribution, and general cargo transport. Built with lightweight yet durable materials.",
    image: "/images/box-van-fineline.jpeg",
    gallery: [
      "/images/box-van-fineline.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-23%20at%2010.01.17%20AM-ehrMI3aZA7EYtQUbwoZG0c6VfkA1O0.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-23%20at%2010.01.17%20AM%20%281%29-V44F3n9ju21hlgA1TLlDCfwCycWBY5.jpeg",
    ],
    features: ["Secure enclosed storage", "Weather protection", "Customizable shelving", "Multiple door options"],
    applications: ["Delivery services", "Retail distribution", "Moving services", "General cargo"],
    testimonial: {
      quote: "Perfect for our delivery fleet. Excellent build quality and weather protection.",
      author: "Sarah Johnson",
      company: "Express Logistics",
    },
    popular: true,
    videoUrl: "/videos/box-van-demo.mp4",
  },
  {
    id: 2,
    name: "Dropside Bodies",
    category: "Commercial",
    description: "Practical open bodies with fold-down sides for easy loading and unloading.",
    detailedDescription:
      "Featuring robust aluminum or steel construction with easy-operation drop sides, these bodies are perfect for construction, landscaping, and general haulage applications.",
    image: "/images/dropside-fineline.jpeg",
    gallery: [
      "/images/dropside-fineline.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-23%20at%209.57.05%20AM-oBVngCVx2VB35UqLtT0sVgTD44yZkh.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-23%20at%209.57.05%20AM%20%281%29-MMr1a4dDGWu3XjExpTUD0BFPDaCcYj.jpeg",
    ],
    features: ["Easy side access", "Versatile loading options", "Robust construction", "Quick-release mechanisms"],
    applications: ["Construction", "Landscaping", "General haulage", "Building supplies"],
    testimonial: {
      quote: "The drop sides make loading so much easier. Built to last in tough conditions.",
      author: "Mike Thompson",
      company: "Thompson Construction",
    },
    featured: true,
    videoUrl: "/videos/dropside-demo.mp4",
  },
  {
    id: 9,
    name: "Furniture Removal Van",
    category: "Specialized",
    description:
      "Professional multi-compartment removal vans with hydraulic tail lifts for efficient furniture moving.",
    detailedDescription:
      "Specialized furniture removal vans featuring multiple glass-fronted compartments for organized storage, hydraulic tail lifts for easy loading, and professional-grade construction. Perfect for removal companies requiring maximum efficiency and furniture protection.",
    image: "/images/furniture-removal-van.png",
    gallery: [
      "/images/furniture-removal-van.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-23%20at%209.59.17%20AM%20%281%29-okHA2XnUwx5x4wB4TkBJk0oFjXXMq9.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-23%20at%209.59.17%20AM-1BdCiqtRN5KyMnyPbBdLgqMyZtVqrF.jpeg",
    ],
    features: [
      "Multiple glass compartments",
      "Hydraulic tail lift",
      "Organized storage system",
      "Professional appearance",
    ],
    applications: ["House removals", "Office relocations", "Furniture transport", "Commercial moving"],
    testimonial: {
      quote: "The compartmentalized design makes our removals so much more organized and efficient.",
      author: "David Miller",
      company: "Premier Removals",
    },
    videoUrl: "/videos/furniture-removal-demo.mp4",
  },
  {
    id: 12,
    name: "5 Door Furniture Removal Van",
    category: "Specialized",
    description:
      "Advanced multi-compartment removal van with five individual access doors for maximum organization and efficiency.",
    detailedDescription:
      "Professional 5-door furniture removal van featuring five separate compartments with individual access doors. Each compartment provides secure, organized storage for different furniture categories, making loading and unloading more efficient. Perfect for high-end removal services requiring maximum organization and furniture protection.",
    image: "/images/5-door-furniture-removal-fineline.jpeg",
    features: [
      "Five individual compartments",
      "Separate access doors",
      "Organized storage system",
      "Professional aluminum construction",
    ],
    applications: ["Premium removals", "Furniture logistics", "High-value item transport", "Organized moving services"],
    testimonial: {
      quote: "The 5-door system revolutionized our removal process. Each item category has its own secure compartment.",
      author: "Michael Roberts",
      company: "Elite Removals",
    },
    videoUrl: "/videos/5-door-furniture-removal-demo.mp4",
    gallery: [
      "/images/5-door-furniture-removal-fineline.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-23%20at%205.38.51%20PM-LFXwF16GsM9icnMqgh7NnfJMOnmQOR.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-23%20at%205.38.52%20PM-MV437Z5zAwSdOHKH9L7VgzuHcHcHpm.jpeg",
    ],
  },
  {
    id: 4,
    name: "Curtainside Bodies",
    category: "Commercial",
    description: "Flexible side-access bodies with sliding curtains for easy loading.",
    detailedDescription:
      "Ideal for pallet delivery and freight transport, our curtainside bodies offer full side access while maintaining weather protection and cargo security.",
    image: "/images/curtain-side-body-fineline.jpeg",
    gallery: [
      "/images/curtain-side-body-fineline.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-23%20at%2010.37.41%20AM%20%281%29-MvqVFq1hcLOLsulmokMtTJmlR7meQt.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-23%20at%2010.37.41%20AM-ACk3yEK2cckeByD4hAolyHfnnMvfk4.jpeg",
    ],
    features: ["Full side access", "Weather protection", "Secure transportation", "Forklift compatible"],
    applications: ["Freight transport", "Pallet delivery", "Distribution", "Logistics"],
    testimonial: {
      quote: "Game-changer for our logistics operations. Easy loading and excellent protection.",
      author: "Emma Davis",
      company: "National Freight",
    },
    videoUrl: "/videos/curtainside-demo.mp4",
  },
  {
    id: 11,
    name: "Curtain Sider Moffett",
    category: "Specialized",
    description:
      "Advanced curtain sider bodies with integrated Moffett forklift systems for independent loading operations.",
    detailedDescription:
      "Specialized curtain sider bodies featuring integrated Moffett truck-mounted forklift systems. Perfect for businesses requiring independent loading and unloading capabilities at locations without dock facilities. Combines the flexibility of side access with the convenience of onboard material handling equipment.",
    image: "/images/curtain-sider-moffett-fineline.jpeg",
    gallery: ["/images/curtain-sider-moffett-fineline.jpeg"],
    features: [
      "Integrated Moffett forklift",
      "Full side curtain access",
      "Independent operation",
      "Weather protection",
    ],
    applications: ["Remote deliveries", "Construction sites", "Retail distribution", "Industrial logistics"],
    testimonial: {
      quote:
        "The Moffett system gives us complete independence. We can deliver anywhere without relying on customer equipment.",
      author: "Paul Stevens",
      company: "Stevens Distribution",
    },
    videoUrl: "/videos/curtain-sider-moffett-demo.mp4",
  },
  {
    id: 7,
    name: "Flatbed Bodies",
    category: "Industrial",
    description: "Simple, versatile platforms for transporting a wide range of cargo.",
    detailedDescription:
      "Robust flatbed bodies offering maximum loading flexibility. Perfect for construction equipment, machinery, and oversized cargo transport.",
    image: "/images/flatbed-body.png",
    gallery: ["/images/flatbed-1.jpg", "/images/flatbed-2.jpg"],
    features: ["Maximum loading flexibility", "Robust construction", "Various securing options", "Crane compatibility"],
    applications: ["Construction equipment", "Machinery transport", "Steel transport", "Plant hire"],
    testimonial: {
      quote: "Versatile and strong. Perfect for our plant hire business.",
      author: "Mark Johnson",
      company: "Johnson Plant Hire",
    },
    videoUrl: "/videos/flatbed-demo.mp4",
  },
  {
    id: 8,
    name: "Bespoke Bodies",
    category: "Specialized",
    description: "Custom-designed bodies tailored to specific business requirements.",
    detailedDescription:
      "When standard solutions don't fit, we create bespoke bodies designed specifically for your unique requirements. From concept to completion, we deliver exactly what you need.",
    image: "/images/bespoke-solutions.jpeg",
    gallery: ["/images/bespoke-1.jpg", "/images/bespoke-2.jpg", "/images/bespoke-3.jpg"],
    features: ["Tailored to your needs", "Unique solutions", "Optimized for your business", "Full design service"],
    applications: ["Specialized transport", "Mobile workshops", "Emergency services", "Unique requirements"],
    testimonial: {
      quote: "They understood our unique needs and delivered exactly what we wanted.",
      author: "Rachel Green",
      company: "Specialist Services",
    },
    videoUrl: "/videos/bespoke-demo.mp4",
  },
  {
    id: 10,
    name: "Builders Merchant Bodies",
    category: "Industrial",
    description: "Heavy-duty flatbed bodies with integrated crane systems for construction material delivery.",
    detailedDescription:
      "Specialized builders merchant bodies featuring robust flatbed construction with integrated HIAB/crane systems. Perfect for delivering heavy building materials like bricks, blocks, timber, and steel directly to construction sites with precision placement capability.",
    image: "/images/builders-merchant-fineline.jpeg",
    gallery: [
      "/images/builders-merchant-fineline.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-23%20at%2010.35.45%20AM-MrEf7IuLShXqiln3qA4fsi8p66kCzx.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-23%20at%2010.35.45%20AM%20%282%29-RZBT1TxauYAe2vfUDv0KessOfW2b09.jpeg",
    ],
    features: [
      "Integrated crane system",
      "Heavy-duty construction",
      "Load restraint systems",
      "Multi-axle compatibility",
    ],
    applications: ["Building material delivery", "Construction supply", "Timber delivery", "Steel placement"],
    testimonial: {
      quote: "The crane makes all the difference for our heavy material deliveries. Excellent build quality.",
      author: "Tom Richards",
      company: "Richards Building Supplies",
    },
    videoUrl: "/videos/builders-merchant-demo.mp4",
  },
]

// Categories for filtering
const categories = ["All", "Commercial", "Industrial", "Specialized"]

export default function BodyTypes() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedBodyType, setSelectedBodyType] = useState(null)
  const [compareList, setCompareList] = useState([])
  const [viewMode, setViewMode] = useState("grid") // grid or list
  const [showCompareModal, setShowCompareModal] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showImageGallery, setShowImageGallery] = useState(false)
  const [selectedGallery, setSelectedGallery] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Filter and search logic
  const filteredBodyTypes = useMemo(() => {
    return bodyTypes.filter((bodyType) => {
      const matchesCategory = selectedCategory === "All" || bodyType.category === selectedCategory
      const matchesSearch =
        bodyType.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bodyType.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bodyType.applications.some((app) => app.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  // Compare functionality
  const toggleCompare = (bodyType) => {
    setCompareList((prev) => {
      const exists = prev.find((item) => item.id === bodyType.id)
      if (exists) {
        return prev.filter((item) => item.id !== bodyType.id)
      } else if (prev.length < 3) {
        return [...prev, bodyType]
      }
      return prev
    })
  }

  const isInCompare = (bodyTypeId) => {
    return compareList.some((item) => item.id === bodyTypeId)
  }

  const openImageGallery = (bodyType, imageIndex = 0) => {
    setSelectedGallery(bodyType.gallery)
    setCurrentImageIndex(imageIndex)
    setShowImageGallery(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedGallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedGallery.length) % selectedGallery.length)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 hidden md:block">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Phone size={14} className="mr-2" />
                <a href="tel:07340590412" className="hover:text-gray-300 transition-colors">
                  07340590412
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={14} className="mr-2" />
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
      <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
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
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {["Home", "Body Types", "Gallery", "About", "Contact", "After Care", "Blog"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                      className={`text-gray-800 hover:text-black font-medium text-sm uppercase tracking-wider transition-colors duration-200 relative group ${
                        item === "Body Types" ? "font-bold" : ""
                      }`}
                    >
                      {item}
                      {item === "Body Types" ? (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
                      ) : (
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              aria-label={showMobileMenu ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={showMobileMenu}
              aria-controls="mobile-menu"
            >
              {showMobileMenu ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {showMobileMenu && (
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
                          item === "Body Types" ? "font-bold text-black" : ""
                        }`}
                        onClick={() => setShowMobileMenu(false)}
                        aria-current={item === "Body Types" ? "page" : undefined}
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

      {/* Hero Section with Interactive Elements */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Truck size={16} className="mr-2" />

              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
              <path d="M15 18H9"></path>
              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
              <circle cx="17" cy="18" r="2"></circle>
              <circle cx="7" cy="18" r="2"></circle>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Commercial Vehicle Bodies
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover our comprehensive range of custom truck body solutions, each engineered for specific applications
              and built to the highest standards.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-black">500+</div>
                <div className="text-sm text-gray-600">Bodies Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">Many</div>
                <div className="text-sm text-gray-600">Body Types</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">100%</div>
                <div className="text-sm text-gray-600">Custom Built</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search body types, applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-black text-white shadow-lg"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid" ? "bg-white shadow-sm" : ""}`}
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-current"></div>
                  <div className="bg-current"></div>
                  <div className="bg-current"></div>
                  <div className="bg-current"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${viewMode === "list" ? "bg-white shadow-sm" : ""}`}
              >
                <div className="w-4 h-4 flex flex-col gap-0.5">
                  <div className="h-0.5 bg-current"></div>
                  <div className="h-0.5 bg-current"></div>
                  <div className="h-0.5 bg-current"></div>
                  <div className="h-0.5 bg-current"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredBodyTypes.length} of {bodyTypes.length} body types
            {searchTerm && ` for "${searchTerm}"`}
          </div>
          {/* Comparison Tool Highlight */}
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-blue-500 p-3 rounded-full mr-4">
                  <Compare size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Compare Body Types</h3>
                  <p className="text-sm text-gray-600">
                    Select up to 3 body types to compare features, applications, and specifications side by side
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  {compareList.length === 0
                    ? "Click the compare icon on any body type to start"
                    : `${compareList.length}/3 selected`}
                </div>
                {compareList.length > 0 && (
                  <button
                    onClick={() => setShowCompareModal(true)}
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center"
                  >
                    Compare Now
                    <Compare size={16} className="ml-2" />
                  </button>
                )}
              </div>
            </div>

            {compareList.length > 0 && (
              <div className="mt-4 pt-4 border-t border-blue-200">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-gray-700 mr-2">Selected:</span>
                  {compareList.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-blue-200 px-3 py-1 rounded-full text-sm flex items-center"
                    >
                      {item.name}
                      <button
                        onClick={() => toggleCompare(item)}
                        className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Compare Bar */}
      <AnimatePresence>
        {compareList.length > 0 && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 z-40"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Compare size={20} />
                  <span className="font-medium">Compare ({compareList.length}/3)</span>
                  <div className="flex space-x-2">
                    {compareList.map((item) => (
                      <div key={item.id} className="bg-white/20 px-3 py-1 rounded text-sm">
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setShowCompareModal(true)}
                    className="bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors"
                  >
                    Compare Now
                  </button>
                  <button onClick={() => setCompareList([])} className="p-2 hover:bg-white/20 rounded">
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Body Types Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBodyTypes.map((bodyType, index) => (
                <motion.div
                  key={bodyType.id}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
                    {bodyType.popular && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">POPULAR</span>
                    )}
                    {bodyType.featured && (
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">FEATURED</span>
                    )}
                  </div>

                  {/* Compare Button */}
                  <button
                    onClick={() => toggleCompare(bodyType)}
                    className={`absolute top-4 right-4 z-10 p-3 rounded-full transition-all shadow-lg ${
                      isInCompare(bodyType.id)
                        ? "bg-blue-500 text-white shadow-blue-200"
                        : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-gray-200"
                    }`}
                    title={isInCompare(bodyType.id) ? "Remove from comparison" : "Add to comparison"}
                  >
                    <Compare size={18} />
                  </button>

                  {/* Image with Overlay */}
                  <button
                    className="relative h-64 overflow-hidden w-full"
                    onClick={() => openImageGallery(bodyType, 0)}
                  >
                    <Image
                      src={bodyType.image || "/placeholder.svg"}
                      alt={bodyType.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Image count indicator */}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {bodyType.gallery.length} photos
                    </div>
                  </button>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{bodyType.name}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{bodyType.category}</span>
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">{bodyType.description}</p>

                    {/* Applications */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {bodyType.applications.slice(0, 3).map((app, i) => (
                        <span key={i} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                      {bodyType.applications.length > 3 && (
                        <span className="text-xs text-gray-500">+{bodyType.applications.length - 3} more</span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <Link
                        href={`/body-types/${bodyType.id}`}
                        className="w-full bg-black text-white text-center py-2 rounded font-medium hover:bg-gray-800 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // List View
            <div className="space-y-6">
              {filteredBodyTypes.map((bodyType, index) => (
                <motion.div
                  key={bodyType.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-80 h-48 md:h-auto">
                      <Image
                        src={bodyType.image || "/placeholder.svg"}
                        alt={bodyType.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{bodyType.name}</h3>
                          <p className="text-gray-600 mb-4">{bodyType.detailedDescription}</p>
                        </div>
                        <button
                          onClick={() => toggleCompare(bodyType)}
                          className={`p-3 rounded-full transition-all shadow-lg ${
                            isInCompare(bodyType.id)
                              ? "bg-blue-500 text-white shadow-blue-200"
                              : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-gray-200"
                          }`}
                          title={isInCompare(bodyType.id) ? "Remove from comparison" : "Add to comparison"}
                        >
                          <Compare size={18} />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-500">Category</div>
                          <div className="font-semibold">{bodyType.category}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between"></div>

                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <Link
                            href={`/body-types/${bodyType.id}`}
                            className="bg-black text-white px-6 py-2 rounded font-medium hover:bg-gray-800 transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                        <div className="text-sm text-gray-500">
                          Used by {Math.floor(Math.random() * 50) + 10}+ companies
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredBodyTypes.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">No body types found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchTerm("")
                }}
                className="bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Available Trucks Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Used Trucks</h2>
              <p className="text-xl text-gray-600 mb-8">
                Browse our current selection of used commercial vehicles ready for immediate delivery or custom
                body fitting.
              </p>
            </motion.div>

            {/* Used Trucks */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Used Trucks</h3>
                <Link href="/contact" className="text-black hover:text-gray-600 transition-colors font-medium">
                  View All Used Trucks →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Used Truck 1 */}
                <motion.div
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative h-48">
                    <span className="absolute top-4 left-4 z-10 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      USED
                    </span>
                    <span className="absolute top-4 right-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      REDUCED
                    </span>
                    <Image
                      src="/images/curtain-side-body-fineline.jpeg"
                      alt="Used Scania R450"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Curtainside Body</h4>
                    <p className="text-gray-600 mb-4">
                      Complete curtainside truck in excellent condition. Full service history.
                    </p>
                    <div className="flex space-x-2">
                      <Link
                        href="/contact"
                        className="flex-1 bg-black text-white text-center py-2 rounded font-medium hover:bg-gray-800 transition-colors"
                      >
                        View Details
                      </Link>
                      <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                        <Phone size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Used Truck 2 */}
                <motion.div
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="relative h-48">
                    <span className="absolute top-4 left-4 z-10 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      USED
                    </span>
                    <Image
                      src="/images/furniture-removal-van.png"
                      alt="Used Iveco Eurocargo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Furniture Removal Van </h4>
                    <p className="text-gray-600 mb-4">
                      Reliable removal van. Perfect for delivery operations.
                    </p>
                    <div className="flex space-x-2">
                      <Link
                        href="/contact"
                        className="flex-1 bg-black text-white text-center py-2 rounded font-medium hover:bg-gray-800 transition-colors"
                      >
                        View Details
                      </Link>
                      <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                        <Phone size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Used Truck 3 */}
                <motion.div
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative h-48">
                    <span className="absolute top-4 left-4 z-10 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      USED
                    </span>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-23%20at%2010.35.45%20AM%20%281%29-Zv6yj6Y5yXpyrbq3FhHdOYrHxl4otw.jpeg"
                      alt="Used MAN TGX with Crane"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Builders Merchant</h4>
                    <p className="text-gray-600 mb-4">Complete crane truck ready for builders merchant operations.</p>
                    <div className="flex space-x-2">
                      <Link
                        href="/contact"
                        className="flex-1 bg-black text-white text-center py-2 rounded font-medium hover:bg-gray-800 transition-colors"
                      >
                        View Details
                      </Link>
                      <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                        <Phone size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Stock Update Notice */}
            <motion.div
              className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-xl font-bold mb-4">Looking for Something Specific?</h4>
              <p className="text-gray-600 mb-6">
                Our stock changes regularly. If you don't see what you're looking for, get in touch - we can source
                almost any commercial vehicle to meet your requirements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
                >
                  Request Stock Alert
                  <Mail size={16} className="ml-2" />
                </Link>
                <a
                  href="tel:07340590412"
                  className="border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  Call for Availability
                  <Phone size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New and Used Bodies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">New & Used Bodies Available</h2>
              <p className="text-xl text-gray-600 mb-8">
                Whether you're looking for a brand new custom-built body or a quality used option, we've got you
                covered. Our extensive network and years of experience mean we can source exactly what you need.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">New Bodies</h3>
                  <p className="text-gray-600 mb-4">
                    Custom-built to your exact specifications with the latest materials and technology. Full warranty
                    and after-sales support included.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      Bespoke design and build
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      Latest materials and techniques
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      Full warranty coverage
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Used Bodies</h3>
                  <p className="text-gray-600 mb-4">
                    Quality pre-owned bodies that have been thoroughly inspected and refurbished where necessary. Great
                    value without compromising on reliability.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      Thoroughly inspected
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      Refurbished to high standards
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      Excellent value for money
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-black text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
                <p className="text-gray-300 mb-6">
                  Don't worry! With our extensive network and years of experience, we can source almost any type of
                  commercial vehicle body. Whether it's new, used, or something completely unique - just ask us and
                  we'll do our best to help.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    Ask About Availability
                    <MessageSquare size={16} className="ml-2" />
                  </Link>
                  <a
                    href="tel:07340590412"
                    className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors flex items-center justify-center"
                  >
                    Call Us Now
                    <Phone size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Fleet?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a personalized quote for your custom truck body requirements. Our experts are ready to help you find
                the perfect solution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Free Consultation</h3>
                  <p className="text-sm text-gray-300">Discuss your requirements with our experts</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Custom Design</h3>
                  <p className="text-sm text-gray-300">Tailored solutions for your specific needs</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={24} />
                  </div>
                  <h3 className="font-bold mb-2">Quality Guarantee</h3>
                  <p className="text-sm text-gray-300">Built to last with comprehensive warranty</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get A Free Quote
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
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <ChevronRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
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
                {["Home", "Body Types", "About", "Contact", "After Care", "Blog"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-current={item === "Body Types" ? "page" : undefined}
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

      {/* Comparison Modal */}
      <AnimatePresence>
        {showCompareModal && compareList.length > 0 && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCompareModal(false)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Compare Body Types</h2>
                  <button
                    onClick={() => setShowCompareModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <td className="p-4 font-semibold text-gray-600 w-48">Feature</td>
                        {compareList.map((bodyType) => (
                          <td key={bodyType.id} className="p-4 text-center min-w-64">
                            <div className="relative">
                              <button
                                onClick={() => toggleCompare(bodyType)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                              >
                                <X size={12} />
                              </button>
                              <Image
                                src={bodyType.image || "/placeholder.svg"}
                                alt={bodyType.name}
                                width={200}
                                height={120}
                                className="w-full h-24 object-cover rounded-lg mb-3"
                              />
                              <h3 className="font-bold text-lg">{bodyType.name}</h3>
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {bodyType.category}
                              </span>
                            </div>
                          </td>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="p-4 font-semibold text-gray-600">Description</td>
                        {compareList.map((bodyType) => (
                          <td key={bodyType.id} className="p-4 text-sm text-gray-600">
                            {bodyType.description}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-gray-600">Key Features</td>
                        {compareList.map((bodyType) => (
                          <td key={bodyType.id} className="p-4">
                            <ul className="text-sm space-y-1">
                              {bodyType.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-gray-600">Applications</td>
                        {compareList.map((bodyType) => (
                          <td key={bodyType.id} className="p-4">
                            <div className="flex flex-wrap gap-1">
                              {bodyType.applications.map((app, i) => (
                                <span key={i} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                                  {app}
                                </span>
                              ))}
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-gray-600">Customer Testimonial</td>
                        {compareList.map((bodyType) => (
                          <td key={bodyType.id} className="p-4">
                            <blockquote className="text-sm italic text-gray-600 mb-2">
                              "{bodyType.testimonial.quote}"
                            </blockquote>
                            <cite className="text-xs text-gray-500">
                              - {bodyType.testimonial.author}, {bodyType.testimonial.company}
                            </cite>
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-4 font-semibold text-gray-600">Actions</td>
                        {compareList.map((bodyType) => (
                          <td key={bodyType.id} className="p-4">
                            <div className="space-y-2">
                              <Link
                                href={`/body-types/${bodyType.id}`}
                                className="block w-full bg-black text-white text-center py-2 rounded font-medium hover:bg-gray-800 transition-colors"
                              >
                                View Details
                              </Link>
                              <Link
                                href="/contact"
                                className="block w-full border border-gray-300 text-center py-2 rounded font-medium hover:bg-gray-50 transition-colors"
                              >
                                Get Quote
                              </Link>
                            </div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>

                {compareList.length < 3 && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-600">
                      💡 You can compare up to 3 body types. Add more from the main page to see detailed comparisons.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {showImageGallery && selectedGallery.length > 0 && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowImageGallery(false)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center p-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowImageGallery(false)}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              {/* Previous Button */}
              {selectedGallery.length > 1 && (
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronRight size={24} className="rotate-180" />
                </button>
              )}

              {/* Next Button */}
              {selectedGallery.length > 1 && (
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              )}

              {/* Main Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={selectedGallery[currentImageIndex] || "/placeholder.svg?height=600&width=800&text=Gallery+Image"}
                  alt={`Gallery image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  style={{ maxWidth: "90vw", maxHeight: "70vh" }}
                />
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full">
                {currentImageIndex + 1} / {selectedGallery.length}
              </div>

              {/* Thumbnail Strip */}
              {selectedGallery.length > 1 && (
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto">
                  {selectedGallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                        index === currentImageIndex ? "border-white" : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
