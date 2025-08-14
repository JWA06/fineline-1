"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Head from "next/head"
import {
  Phone,
  Mail,
  Users,
  Factory,
  Building,
  Truck,
  Zap,
  Clock,
  X,
  Menu,
  Target,
  Shield,
  Heart,
  ChevronRight,
  MapPin,
  Linkedin,
  Twitter,
  CheckCircle,
} from "lucide-react"

// Company information
const companyInfo = {
  name: "FineLine Bodies",
  founded: 1993,
  mission:
    "To deliver exceptional commercial vehicle bodies that exceed our customers' expectations while maintaining the highest standards of quality, innovation, and service.",
  vision:
    "To be the UK's leading manufacturer of commercial vehicle bodies, recognized for our craftsmanship, innovation, and customer satisfaction.",
  employees: "80+",
  facility: "50,000 sq ft state-of-the-art manufacturing facility",
  location: "Truckville, UK",
  industries: ["Logistics", "Construction", "Retail", "Utilities", "Waste Management", "Local Authorities"],
}

// Leadership team members
const leadershipTeam = [
  {
    name: "Dave Carnell",
    position: "Managing Director & Founder",
    experience: "25+ years",
    image: "/images/fineline-logo.jpeg",
    bio: "Dave founded FineLine Bodies in 2022 with a vision to revolutionize commercial vehicle manufacturing. With nearly three decades of industry experience, his leadership drives our commitment to quality and innovation.",
    achievements: [
      "Established FineLine Bodies in 2022",
      "Led company to 150+ completed builds in first year",
      "Introduced 2-week turnaround production model",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/davecarnell",
    },
  },
  {
    name: "Jemma Kelly",
    position: "Business Manager",
    experience: "18+ years",
    image: "/images/jemma-kelly-portrait.jpeg",
    bio: "Jemma leads our business operations, ensuring every aspect of the company runs smoothly while maintaining our high standards of customer service.",
    achievements: ["Strategic business planning", "Customer satisfaction improvement by 40%"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/jemmakelly",
    },
  },
  {
    name: "Johnny Joyce",
    position: "General Manager",
    experience: "15+ years",
    image: "/images/fineline-logo.jpeg",
    bio: "Johnny oversees our management processes, ensuring quality standards are met while optimizing efficiency across all manufacturing operations.",
    achievements: [
      "Streamlined production workflows",
      "Reduced production time by 20%",
      "Implemented quality control systems",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/johnny",
    },
  },
  {
    name: "Devon Bowes",
    position: "Fully Skilled Body Builder / Shop Floor Supervisor",
    experience: "15+ years",
    image: "/images/devon-bowes.jpeg",
    bio: "Devon started in the industry at 16 and has over 15 years experience. Specialises in furniture builds, Making them bespoke to Fine Line Bodies.",
    achievements: [
      "Implemented efficient workflow processes",
      "Maintained 100% safety record for 2 years",
      "Reduced production bottlenecks by 35%",
    ],
    socialMedia: {
      linkedin: "https://linkedin.com/in/devonbowes",
    },
  },
]

// Team members
const teamMembers = [
  {
    name: "Josh Logan",
    position: "Semi Skilled Body Builder",
    experience: "9+ years",
    image: "/images/team-member-4.jpeg",
    bio: "Josh started with us Jan 25 and now has his own building space. He fitted in well with the team and is progressing brilliantly.",
    achievements: [
      "Completed Level 1 Fabrication course",
      "Assisted in 25+ body builds during training",
      "Recognized for exceptional teamwork and dedication",
    ],
  },
  {
    name: "Wade Fitton",
    position: "Semi Skilled Body Builder",
    experience: "5+ years",
    image: "/images/wade.jpeg",
    bio: "Wade joined us just over 2 years ago as a body builder lad with a bit of guidance from the MD, Wade is now smashing it with his own bay and taking on some of our most challenging bespoke work.",
    achievements: [
      "Completed Level 2 Fabrication and Welding course",
      "Assisted in 50+ body builds during apprenticeship",
      "Recognized for outstanding progress and work ethic",
    ],
  },
  {
    name: "Dean Smith",
    position: "Electrican",
    experience: "10+ years",
    image: "/images/dean-smith.jpeg",
    bio: "Dean joined us over a year ago and has fitted into the team well. Specialises in Electrics and precision metalwork construction.",
    achievements: [
      "Specialist in electrical systems installation",
      "Completed 100+ custom body builds",
      "Expert in advanced wiring techniques",
    ],
  },
  {
    name: "Alex Kelly",
    position: "Semi Skilled Body Builder",
    experience: "4+ years",
    image: "/images/alex-kelly.jpeg",
    bio: "Our youngest semi skilled body builder at Fine Line. At just 15, he joined Dave and is now on his way to being fully skilled. Specialises in furniture builds, Electrics and Tail lift fitment.",
    achievements: [
      "Youngest certified body builder on team",
      "Specialist in furniture van construction",
      "Expert in tail lift installation",
    ],
  },
  {
    name: "Bailey",
    position: "Semi Skilled Body Builder",
    experience: "1+ years",
    image: "/images/team-member-bdogg.jpeg",
    bio: "Bailey  joined us a little over a year ago. His enthusiasm for the industry is a pleasure to see and can see him progressing to his own bay in the very near future.",
    achievements: [
      "Currently completing Level 1 Fabrication course",
      "Assisted in 15+ body builds during training",
      "Recognized for quick learning and attention to detail",
    ],
  },
  {
    name: "Kyle",
    position: "Trainee Electrian and Tail lift fitter. ",
    experience: "1+ years",
    image: "/images/team-member-kyle.jpeg",
    bio: "Kyle joined us 2months ago. He is eager to learn new skills and progress at Fine Line.",
    achievements: [
      "Progressing through Level 1 Fabrication training",
      "Assisted in 20+ body builds",
      "Demonstrated excellent teamwork and reliability",
    ],
  },
]

// Company values
const values = [
  {
    icon: <Shield size={20} />,
    title: "Quality First",
    description:
      "We never compromise on quality. Every vehicle body is built to the highest standards using premium materials and proven manufacturing processes.",
  },
  {
    icon: <Users size={20} />,
    title: "Customer Focus",
    description:
      "Our customers are at the heart of everything we do. We listen, understand, and deliver solutions that exceed expectations.",
  },
  {
    icon: <Zap size={20} />,
    title: "Innovation",
    description:
      "We continuously invest in new technologies and processes to stay at the forefront of commercial vehicle manufacturing.",
  },
  {
    icon: <Heart size={20} />,
    title: "Integrity",
    description:
      "We conduct business with honesty, transparency, and respect for all our stakeholders, building lasting relationships.",
  },
]

// Enhanced milestones with more detail
const milestones = [
  {
    year: "2002",
    title: "Career Started",
    description:
      "At just 16 years old, Dave Carnell began his journey as an apprentice working on truck bodies—and he's been passionate about the craft ever since.",
    icon: <Building size={16} />,
  },
  {
    year: "2013",
    title: "Head Builder",
    description:
      "Dave's skill quickly set him apart—earning him the role of Head Builder, trusted to lead the team with precision and expertise.",
    icon: <Truck size={16} />,
  },
  {
    year: "2021",
    title: "Apprentice To Founder",
    description:
      "Dave soon realised his ambition matched his talent—he knew he had the drive, vision, and skill to build something greater. Confident he could raise the standard and lead in his own way, he made the bold decision to start his own company and never looked back.",
    icon: <Factory size={16} />,
  },
  {
    year: "2022",
    title: "Fineline Bodies",
    description:
      "Now established as a growing force in the industry, Fine Line Bodies is pushing every day to raise the bar—driven by ambition, quality, and the belief that being the best isn't a goal, it's a standard we're building toward.",
    icon: <Zap size={16} />,
  },
]

// Social links
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/fine-line-bodies/",
    icon: <Linkedin size={20} aria-hidden="true" />,
    color: "text-blue-600",
  },
  {
    name: "Twitter / X",
    url: "https://www.twitter.com/FineLineBodies",
    icon: <Twitter size={20} aria-hidden="true" />,
    color: "text-blue-400",
  },
] as const

export default function About() {
  const [selectedTeamMember, setSelectedTeamMember] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Handle mounting for SSR compatibility
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Head>
        <title>About FineLine Bodies | Leading Commercial Vehicle Body Manufacturer</title>
        <meta
          name="description"
          content="Learn about FineLine Bodies, a leading UK manufacturer of commercial vehicle bodies with over 30 years of experience, quality craftsmanship, and innovative solutions."
        />
        <meta
          name="keywords"
          content="FineLine Bodies, commercial vehicle bodies, truck body manufacturer, dropside bodies, tipper bodies, UK manufacturer"
        />
        <meta property="og:title" content="About FineLine Bodies | Leading Commercial Vehicle Body Manufacturer" />
        <meta
          property="og:description"
          content="Learn about FineLine Bodies, a leading UK manufacturer of commercial vehicle bodies with over 30 years of experience, quality craftsmanship, and innovative solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.finelinebodies.com/about" />
        <meta property="og:image" content="https://www.finelinebodies.com/images/facility.jpg" />
        <link rel="canonical" href="https://www.finelinebodies.com/about" />
      </Head>

      <main className="min-h-screen bg-white" id="main-content">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-black focus:text-white focus:z-50"
        >
          Skip to content
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
                          item === "About" ? "font-bold text-black" : ""
                        }`}
                        aria-current={item === "About" ? "page" : undefined}
                      >
                        {item}
                        {item === "About" ? (
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
                            item === "About" ? "font-bold text-black" : ""
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                          aria-current={item === "About" ? "page" : undefined}
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

        {/* Breadcrumbs for SEO and navigation */}
        <div className="bg-gray-50 py-3 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-700">
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <ChevronRight size={14} className="text-gray-400 mx-1" aria-hidden="true" />
                  <span className="text-gray-900 font-medium" aria-current="page">
                    About
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100" aria-labelledby="about-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Building size={16} className="mr-2" aria-hidden="true" />
                Established 2022
              </motion.div>

              <motion.h1
                id="about-heading"
                className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                About FineLine Bodies
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                At Fine Line Commercial Bodies, we're driven by quality, trust, and craftsmanship. Founded in 2022 by
                industry expert Dave Carnell, our skilled team delivers premium commercial vehicle bodies with a focus
                on customer care and integrity at every step.
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">500+</div>
                  <div className="text-sm text-gray-600">Bodies Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">150+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">14+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-20 bg-white" aria-labelledby="overview-heading">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/overview-image.jpeg"
                    alt="Professional commercial truck with blue curtainside body manufactured by FineLine Bodies"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gray-100 rounded-full -z-10"></div>
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-gray-200 rounded-full -z-10"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Target size={16} className="mr-2" aria-hidden="true" />
                  Our Purpose
                </div>
                <h2 id="overview-heading" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Company Overview
                </h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    Fine Line Commercial Bodies was founded in August 2022 with the main aim of delivering high quality
                    commercial vehicles. Our managing Director Dave Carnell has worked in the industry for over 20 Years
                    and has built a respectable and professional reputation. He has created an incredible team that can
                    delivery and envision his dream with him. With the high level of customer service and our highly
                    skilled technicians we can and will deliver a premium range of body types.
                  </p>
                  <p>
                    Here at Fine Line Commercial Bodies we live and work by a set of core values, earning the trust of
                    all our staff and customers. Our code of conduct ensures that our core values remain at the heart of
                    everything we do and directly impacts our ability to deliver. As a member of our team you will be
                    treated with compassion, integrity, and respect. We will always try to do our best by the people who
                    do right by us!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="values-heading">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart size={16} className="mr-2" aria-hidden="true" />
                What Drives Us
              </div>
              <h2 id="values-heading" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Core Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do, from design and manufacturing to customer service and
                after-care support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                    <div className="text-gray-900">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-white" aria-labelledby="timeline-heading">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Clock size={16} className="mr-2" aria-hidden="true" />
                Our Journey
              </div>
              <h2 id="timeline-heading" className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                25+ Years of Excellence
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                From humble beginnings to industry leadership, our journey has been defined by continuous growth, 25
                Years of Excellence and unwavering commitment to quality.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200"
                  aria-hidden="true"
                ></div>

                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex items-center mb-16 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {/* Timeline Dot */}
                    <div
                      className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-black rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <div className="text-white">{milestone.icon}</div>
                    </div>

                    {/* Content */}
                    <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                      <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="text-3xl font-bold text-black mb-2">{milestone.year}</div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-24 bg-gray-50" aria-labelledby="leadership-heading">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users size={16} className="mr-2" aria-hidden="true" />
                Leadership
              </div>
              <h2 id="leadership-heading" className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Leadership Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Meet the experienced professionals who drive our vision and maintain our commitment to excellence in
                commercial vehicle manufacturing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {leadershipTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedTeamMember(member)}
                >
                  <div
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl focus:shadow-2xl hover:border-gray-300 focus:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 focus:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${member.name}'s profile`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedTeamMember(member)
                      }
                    }}
                  >
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={`Portrait of ${member.name}, ${member.position}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{member.position}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={14} className="mr-1" aria-hidden="true" />
                        {member.experience}
                      </div>
                      <div className="mt-3 text-xs text-gray-500 leading-relaxed line-clamp-3">
                        {member.bio.substring(0, 120)}...
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet The Team Section */}
        <section className="py-24 bg-white" aria-labelledby="team-heading">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users size={16} className="mr-2" aria-hidden="true" />
                Our Craftsmen
              </div>
              <h2 id="team-heading" className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Meet The Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our skilled craftsmen and apprentices who bring precision, dedication, and expertise to every project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedTeamMember(member)}
                >
                  <div
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl focus:shadow-2xl hover:border-gray-300 focus:border-gray-300 transition-all duration-300 transform hover:-translate-y-2 focus:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${member.name}'s profile`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedTeamMember(member)
                      }
                    }}
                  >
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={`Portrait of ${member.name}, ${member.position}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{member.position}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={14} className="mr-1" aria-hidden="true" />
                        {member.experience}
                      </div>
                      <div className="mt-3 text-xs text-gray-500 leading-relaxed line-clamp-3">
                        {member.bio.substring(0, 120)}...
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-white" aria-labelledby="location-heading">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <MapPin size={16} className="mr-2" aria-hidden="true" />
                  Visit Us
                </div>
                <h2 id="location-heading" className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Our Location
                </h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    Our state-of-the-art manufacturing facility is located in Hartlepool, with excellent transport links
                    and easy access for customers and suppliers.
                  </p>
                  <address className="not-italic">
                    <p className="font-bold text-gray-900">FineLine Bodies Ltd</p>
                    <p>Meridian Centre</p>
                    <p>Wainwright Street</p>
                    <p>Oldham,OL8 1EZ</p>
                    <p className="mt-4">
                      <a href="tel:07340590412" className="text-blue-600 hover:underline flex items-center">
                        <Phone size={16} className="mr-2" aria-hidden="true" />
                        07340590412
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:finelinebodies@outlook.com"
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        <Mail size={16} className="mr-2" aria-hidden="true" />
                        finelinebodies@outlook.com
                      </a>
                    </p>
                  </address>
                  <div className="pt-4">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Opening Hours</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Monday - Thursday:</span>
                        <span className="font-medium">7:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Friday:</span>
                        <span className="font-medium">7:00 AM - 12:00 PM</span>
                      </li>
                    </ul>
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Experience the FineLine Difference?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the hundreds of satisfied customers who've discovered what true quality looks like. Get your free
                consultation and detailed quote within 24 hours—no obligations, just expert advice.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  href="/contact"
                  className="bg-white text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 focus:bg-gray-100 hover:shadow-lg focus:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transform hover:scale-105 focus:scale-105"
                  aria-label="Get your free quote today"
                >
                  Get Your Free Quote Today
                </Link>
                <Link
                  href="/body-types"
                  className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black focus:bg-white focus:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transform hover:scale-105 focus:scale-105"
                  aria-label="Explore our award-winning solutions"
                >
                  See Our Award-Winning Work
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
                <div className="flex space-x-3">
                  {socialLinks.slice(0, 3).map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 focus:bg-gray-700 transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <div className="text-gray-400 hover:text-white focus:text-white transition-colors">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                <ul className="space-y-3">
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
                <h3 className="text-lg font-bold mb-6">Contact Information</h3>
                <div className="text-gray-400 space-y-3">
                  <p className="flex items-center">
                    <MapPin size={16} className="mr-2" aria-hidden="true" />
                    Meridian Centre, Wainwright Street, Oldham, OL8 1EZ
                  </p>
                  <p className="flex items-center">
                    <Phone size={16} className="mr-2" aria-hidden="true" />
                    <a href="tel:07340590412" className="hover:text-white transition-colors">
                      07340590412
                    </a>
                  </p>
                  <p className="flex items-center">
                    <Mail size={16} className="mr-2" aria-hidden="true" />
                    <a href="mailto:finelinebodies@outlook.com" className="hover:text-white transition-colors">
                      finelinebodies@outlook.com
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-6">Subscribe to Our Newsletter</h3>
                <p className="text-gray-400 mb-6">
                  Stay up-to-date with our latest news, product releases, and industry insights.
                </p>
                <form className="flex flex-col sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-800 text-white rounded-l-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow mb-3 sm:mb-0"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 px-6 rounded-r-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Subscribe"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
              &copy; {new Date().getFullYear()} FineLine Bodies. All rights reserved.
              <Link href="/privacy-policy" className="ml-4 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="ml-4 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="ml-4 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="ml-4 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
