'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import HeroVideoBackground from '@/components/HeroVideoBackground'

// VM Services data
const vmServices = [
  {
    title: 'Music Production',
    description: 'Professional audio production tools and services for music creation, mixing, mastering, and sound design.',
    icon: 'music',
    color: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Trading & Finance',
    description: 'Financial modeling, trading analysis, portfolio management, and algorithmic trading services.',
    icon: 'finance',
    color: 'from-green-500 to-blue-600'
  },
  {
    title: 'Game Development',
    description: 'Game design, development, and production services for video games and interactive experiences.',
    icon: 'gamepad',
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Software Engineering',
    description: 'Full-stack development, coding, testing, and deployment services for web and software applications.',
    icon: 'code',
    color: 'from-orange-500 to-red-600'
  },
  {
    title: 'Video Editing',
    description: 'Professional video editing services including post-production, motion graphics, and visual content creation.',
    icon: 'video',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    title: 'Architecture',
    description: 'Architectural design, 3D modeling, building information modeling (BIM), and architectural visualization services.',
    icon: 'architecture',
    color: 'from-teal-500 to-green-600'
  }
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Gaming Community Leader',
    content: 'Discord has transformed how our gaming community connects. The voice quality is incredible and the server organization is perfect.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
  },
  {
    name: 'Marcus Johnson',
    role: 'Study Group Organizer',
    content: 'We use Discord for our study sessions. The screen sharing and voice channels make remote learning so much better.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
  },
  {
    name: 'Alex Rivera',
    role: 'Content Creator',
    content: 'Discord is essential for my content creation workflow. The community features help me engage with my audience directly.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
  }
]

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  // Close dropdown when clicking outside
  const handleClickOutside = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest('.profile-dropdown')) {
      setShowDropdown(false)
    }
  }

  return (
    <div className="min-h-screen bg-black" onClick={handleClickOutside}>
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 bg-black border-b border-blue-500">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg border-2 border-blue-400">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-3xl font-bold text-white tracking-tight">Discord</span>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 border border-blue-400">
            Old West
          </button>
          <div className="relative profile-dropdown">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center shadow-md border border-gray-500">
                {isLoggedIn ? (
                  <span className="text-white font-semibold">U</span>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                )}
              </div>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-3 w-56 bg-gray-900 rounded-lg shadow-2xl py-2 z-10 border border-gray-700">
                {isLoggedIn ? (
                  <>
                    <Link
                      href="/account"
                      className="block px-6 py-3 text-sm text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors duration-200"
                    >
                      Account
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-6 py-3 text-sm text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors duration-200"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="block w-full text-left px-6 py-3 text-sm text-gray-300 hover:bg-red-500/20 hover:text-red-400 transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="block px-6 py-3 text-sm text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors duration-200"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="block px-6 py-3 text-sm text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-colors duration-200"
                    >
                      Create Account
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-black py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <HeroVideoBackground />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-lg text-blue-400 font-bold text-sm tracking-wide uppercase border border-blue-500/30">
              Where conversations come alive
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
            Your place to
            <span className="block text-blue-500">
              talk
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Whether you're part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, Discord makes it easy to talk every day and hang out more often.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-blue-500 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 flex items-center justify-center border-2 border-blue-400">
              Download for Windows
            </button>
            <button className="bg-gray-800 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-600">
              Open Discord in your browser
            </button>
          </div>
        </div>
      </section>

      {/* VM Services Section */}
      <section className="py-32 px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-bold mb-6 border border-blue-500/30">
              VM Services
            </span>
            <h2 className="text-5xl font-bold text-white mb-8 tracking-tight">
              Professional virtual machine services
              <span className="block text-gray-300 font-normal">for your creative and technical needs</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vmServices.map((service, index) => {
              const serviceSlugMap: { [key: string]: string } = {
                'Music Production': 'music',
                'Trading & Finance': 'finance',
                'Game Development': 'game-development',
                'Software Engineering': 'software-engineering',
                'Video Editing': 'video-editing',
                'Architecture': 'architecture'
              }
              const serviceSlug = serviceSlugMap[service.title] || service.title.toLowerCase().replace(/\s+/g, '-')
              return (
              <Link key={index} href={`/services/${serviceSlug}`} className="group bg-gray-800 rounded-2xl p-10 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-blue-500/50 hover:-translate-y-2">
                <div className={`w-20 h-20 rounded-xl bg-blue-500 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white/20`}>
                  {service.icon === 'music' && (
                    <span className="text-white text-3xl">🎵</span>
                  )}
                  {service.icon === 'finance' && (
                    <span className="text-white text-3xl">💰</span>
                  )}
                  {service.icon === 'gamepad' && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {service.icon === 'code' && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  )}
                  {service.icon === 'video' && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                  {service.icon === 'architecture' && (
                    <span className="text-white text-3xl">🏗️</span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{service.description}</p>
              </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-32 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-bold mb-6 border border-green-500/30">
                Community
              </span>
              <h2 className="text-5xl font-bold text-white mb-8 tracking-tight">
                From a few friends
                <span className="block text-gray-300 font-normal">to a whole community</span>
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-white text-lg font-semibold">Voice channels for crystal-clear conversations</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-white text-lg font-semibold">Text channels for organized discussions</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-white text-lg font-semibold">Screen sharing for collaboration</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-10 shadow-2xl border border-gray-700">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg border-2 border-blue-400">
                    <span className="text-white font-bold text-lg">D</span>
                  </div>
                  <span className="text-white font-bold text-xl">Discord</span>
                </div>
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-600">
                  <div className="text-sm text-gray-400 mb-4 font-bold"># general</div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border border-blue-400">
                        <span className="text-white text-sm font-bold">A</span>
                      </div>
                      <span className="text-white">Alex: Hey everyone!</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border border-green-400">
                        <span className="text-white text-sm font-bold">S</span>
                      </div>
                      <span className="text-white">Sarah: Welcome Alex!</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border border-blue-400">
                        <span className="text-white text-sm font-bold">M</span>
                      </div>
                      <span className="text-white">Mike: Great to have you here!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-bold mb-6 border border-green-500/30">
              Testimonials
            </span>
            <h2 className="text-5xl font-bold text-white mb-8 tracking-tight">
              Trusted by millions of users
              <span className="block text-gray-300 font-normal">worldwide</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-gray-900 rounded-2xl p-10 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-green-500/50 hover:-translate-y-2">
                <div className="flex items-center space-x-6 mb-8">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-xl shadow-lg border-2 border-gray-600"
                  />
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm font-semibold">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic text-lg leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Product</h3>
              <div className="space-y-4">
                <Link href="/download" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 font-semibold">Download</Link>
                <Link href="/nitro" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 font-semibold">Nitro</Link>
                <Link href="/status" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 font-semibold">Status</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Company</h3>
              <div className="space-y-4">
                <Link href="/about" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 font-semibold">About</Link>
                <Link href="/jobs" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 font-semibold">Jobs</Link>
                <Link href="/branding" className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 font-semibold">Branding</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
              <div className="space-y-4">
                <Link href="/college" className="block text-gray-400 hover:text-green-400 transition-colors duration-300 font-semibold">College</Link>
                <Link href="/support" className="block text-gray-400 hover:text-green-400 transition-colors duration-300 font-semibold">Support</Link>
                <Link href="/safety" className="block text-gray-400 hover:text-green-400 transition-colors duration-300 font-semibold">Safety</Link>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Policies</h3>
              <div className="space-y-4">
                <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors duration-300 font-semibold">Privacy</Link>
                <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors duration-300 font-semibold">Terms</Link>
                <Link href="/guidelines" className="block text-gray-400 hover:text-white transition-colors duration-300 font-semibold">Guidelines</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-12 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg border-2 border-blue-400">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">Discord</span>
            </div>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 border-2 border-blue-400">
              Sign up
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
} 