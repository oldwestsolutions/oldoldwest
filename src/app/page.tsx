'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

// Mock data for streams
const featuredStreams = [
  { 
    id: 1, 
    title: 'Just Chatting with Viewers', 
    streamer: 'Gamer123', 
    viewers: 12500, 
    category: 'Just Chatting', 
    thumbnail: '/images/stream1.jpg',
    avatar: '/images/avatar1.jpg'
  },
  { 
    id: 2, 
    title: 'League of Legends Ranked', 
    streamer: 'ProGamer', 
    viewers: 8500, 
    category: 'League of Legends', 
    thumbnail: '/images/stream2.jpg',
    avatar: '/images/avatar2.jpg'
  },
  { 
    id: 3, 
    title: 'Minecraft Building', 
    streamer: 'BuilderMaster', 
    viewers: 3200, 
    category: 'Minecraft', 
    thumbnail: '/images/stream3.jpg',
    avatar: '/images/avatar3.jpg'
  },
  { 
    id: 4, 
    title: 'Valorant Tournament', 
    streamer: 'ShooterPro', 
    viewers: 15000, 
    category: 'Valorant', 
    thumbnail: '/images/stream4.jpg',
    avatar: '/images/avatar4.jpg'
  },
  { 
    id: 5, 
    title: 'Speedrunning Mario', 
    streamer: 'SpeedKing', 
    viewers: 4500, 
    category: 'Speedrunning', 
    thumbnail: '/images/stream5.jpg',
    avatar: '/images/avatar5.jpg'
  },
  { 
    id: 6, 
    title: 'Art Stream', 
    streamer: 'DigitalArtist', 
    viewers: 2800, 
    category: 'Art', 
    thumbnail: '/images/stream6.jpg',
    avatar: '/images/avatar6.jpg'
  },
]

const featuredCategories = [
  {
    name: 'IRL',
    viewers: 350000,
    thumbnail: '/images/irl.jpg',
    topStreams: [
      { title: 'Travel Vlog', streamer: 'Traveler123', viewers: 25000 },
      { title: 'Cooking Show', streamer: 'ChefMaster', viewers: 18000 },
      { title: 'Fitness Stream', streamer: 'FitGuru', viewers: 12000 },
    ]
  },
  {
    name: 'RPG',
    viewers: 280000,
    thumbnail: '/images/rpg.jpg',
    topStreams: [
      { title: 'Elden Ring', streamer: 'SoulsMaster', viewers: 32000 },
      { title: 'Skyrim Modded', streamer: 'Dragonborn', viewers: 15000 },
      { title: 'Witcher 3', streamer: 'Geralt', viewers: 12000 },
    ]
  }
]

const categories = [
  { 
    name: 'Just Chatting', 
    viewers: 250000, 
    thumbnail: '/images/category1.jpg' 
  },
  { 
    name: 'League of Legends', 
    viewers: 180000, 
    thumbnail: '/images/category2.jpg' 
  },
  { 
    name: 'Valorant', 
    viewers: 150000, 
    thumbnail: '/images/category3.jpg' 
  },
  { 
    name: 'Minecraft', 
    viewers: 120000, 
    thumbnail: '/images/category4.jpg' 
  },
  { 
    name: 'Fortnite', 
    viewers: 100000, 
    thumbnail: '/images/category5.jpg' 
  },
  { 
    name: 'Art', 
    viewers: 80000, 
    thumbnail: '/images/category6.jpg' 
  },
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
    <div className="min-h-screen bg-gray-900" onClick={handleClickOutside}>
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 bg-gray-800">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-purple-500">
            OldWest
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/browse" className="hover:text-purple-400">Browse</Link>
            <Link href="/following" className="hover:text-purple-400">Following</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 px-4 py-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="relative profile-dropdown">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                {isLoggedIn ? (
                  <span className="text-white">U</span>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-400"
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
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-10">
                {isLoggedIn ? (
                  <>
                    <Link
                      href="/account"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Account
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
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

      {/* Main Content */}
      <div className="p-4">
        {/* Featured Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredCategories.map((category) => (
              <div key={category.name} className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-700 transition">
                <div className="relative aspect-video">
                  <Image
                    src={category.thumbnail}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="text-2xl font-bold">{category.name}</div>
                    <div className="text-sm text-gray-300">{category.viewers.toLocaleString()} viewers</div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="space-y-2">
                      {category.topStreams.map((stream, index) => (
                        <div key={index} className="flex items-center justify-between bg-black bg-opacity-50 p-2 rounded">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                            <div>
                              <div className="font-medium">{stream.title}</div>
                              <div className="text-sm text-gray-400">{stream.streamer}</div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-300">{stream.viewers.toLocaleString()} viewers</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Row */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <div key={category.name} className="cursor-pointer">
                <div className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden mb-2">
                  <Image
                    src={category.thumbnail}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
                    <div className="font-medium">{category.name}</div>
                    <div className="text-sm text-gray-300">{category.viewers.toLocaleString()} viewers</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Channels Rows */}
        <div className="space-y-8">
          {/* Just Chatting Row */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Just Chatting</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {featuredStreams.slice(0, 4).map((stream) => (
                <div key={stream.id} className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-700 transition">
                  <div className="relative aspect-video">
                    <Image
                      src={stream.thumbnail}
                      alt={stream.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      LIVE
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                      {stream.viewers.toLocaleString()} viewers
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex space-x-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={stream.avatar}
                          alt={stream.streamer}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-white line-clamp-2">{stream.title}</h3>
                        <p className="text-sm text-gray-400">{stream.streamer}</p>
                        <p className="text-sm text-gray-400">{stream.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gaming Row */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Gaming</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {featuredStreams.slice(1, 5).map((stream) => (
                <div key={stream.id} className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-700 transition">
                  <div className="relative aspect-video">
                    <Image
                      src={stream.thumbnail}
                      alt={stream.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      LIVE
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                      {stream.viewers.toLocaleString()} viewers
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="flex space-x-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={stream.avatar}
                          alt={stream.streamer}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-white line-clamp-2">{stream.title}</h3>
                        <p className="text-sm text-gray-400">{stream.streamer}</p>
                        <p className="text-sm text-gray-400">{stream.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 