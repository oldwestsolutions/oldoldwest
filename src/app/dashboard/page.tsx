'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('friends')

  const onlineFriends = [
    {
      id: 1,
      name: 'ProGamer',
      status: 'Playing Valorant',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      isStreaming: true,
      viewers: '1.2K'
    },
    {
      id: 2,
      name: 'BuilderMaster',
      status: 'Minecraft - Creative Mode',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      isStreaming: false
    },
    {
      id: 3,
      name: 'ShooterPro',
      status: 'Away',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      isStreaming: false
    }
  ]

  const servers = {
    local: [
      {
        id: 1,
        name: 'Gaming Squad',
        members: 12,
        online: 8,
        icon: 'https://images.unsplash.com/photo-1511512578047-dfb367046420'
      },
      {
        id: 2,
        name: 'Stream Team',
        members: 25,
        online: 15,
        icon: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
      }
    ],
    public: [
      {
        id: 3,
        name: 'Valorant Community',
        members: 1500,
        online: 320,
        icon: 'https://images.unsplash.com/photo-1511512578047-dfb367046420'
      },
      {
        id: 4,
        name: 'Minecraft Builders',
        members: 2500,
        online: 450,
        icon: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f'
      },
      {
        id: 5,
        name: 'Tournament Hub',
        members: 5000,
        online: 1200,
        icon: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
      }
    ]
  }

  const recentActivity = [
    {
      id: 1,
      user: 'ProGamer',
      action: 'started streaming',
      game: 'Valorant',
      time: '5m ago',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'
    },
    {
      id: 2,
      user: 'BuilderMaster',
      action: 'joined server',
      server: 'Gaming Squad',
      time: '15m ago',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'
    },
    {
      id: 3,
      user: 'ShooterPro',
      action: 'went offline',
      time: '1h ago',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'
    }
  ]

  const stories = [
    { id: 1, title: 'Live Now', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3' },
    { id: 2, title: 'Highlights', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420' },
    { id: 3, title: 'Clips', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f' },
    { id: 4, title: 'Behind the Scenes', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f' },
  ]

  const recentStreams = [
    {
      title: 'Just Chatting with Viewers',
      date: '2024-03-15',
      duration: '2h 30m',
      viewers: '1.2K',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      likes: 234,
      comments: 45
    },
    {
      title: 'Valorant Tournament',
      date: '2024-03-14',
      duration: '4h 15m',
      viewers: '2.5K',
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420',
      likes: 567,
      comments: 89
    },
    {
      title: 'Minecraft Building',
      date: '2024-03-13',
      duration: '3h 45m',
      viewers: '950',
      thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f',
      likes: 345,
      comments: 67
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/30 to-gray-950">
      {/* Navigation */}
      <nav className="bg-gray-900/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-400">
              OldWest
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/messages" className="relative">
                <svg className="w-6 h-6 text-blue-400 hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </Link>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition shadow-lg hover:shadow-blue-500/25">
                Start Streaming
              </button>
              <div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden ring-2 ring-blue-500/50">
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          {/* Stories */}
          <div className="mb-8">
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              {stories.map((story) => (
                <div key={story.id} className="flex-shrink-0">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg shadow-blue-500/25">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-center text-sm mt-2 text-gray-300">{story.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Sidebar - Servers */}
            <div className="md:col-span-3 order-2 md:order-1">
              {/* Local Servers Card */}
              <div className="bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-800 p-4 mb-6 shadow-lg shadow-blue-500/5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-blue-400">Local Servers</h2>
                  <button className="text-blue-400 hover:text-blue-300 text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-3">
                  {servers.local.map((server) => (
                    <div key={server.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 cursor-pointer transition-colors">
                      <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-blue-500/30">
                        <Image
                          src={server.icon}
                          alt={server.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-medium truncate">{server.name}</h3>
                        <p className="text-sm text-gray-400">{server.online}/{server.members} online</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Public Servers Card */}
              <div className="bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-800 p-4 shadow-lg shadow-blue-500/5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-blue-400">Public Servers</h2>
                  <button className="text-blue-400 hover:text-blue-300 text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-3">
                  {servers.public.map((server) => (
                    <div key={server.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 cursor-pointer transition-colors">
                      <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-blue-500/30">
                        <Image
                          src={server.icon}
                          alt={server.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-medium truncate">{server.name}</h3>
                        <p className="text-sm text-gray-400">{server.online}/{server.members} online</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content - Stream Feed */}
            <div className="md:col-span-6 order-1 md:order-2 mb-6 md:mb-0">
              <div className="space-y-6">
                {recentStreams.map((stream, index) => (
                  <div key={index} className="bg-gray-900/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="relative aspect-video">
                      <Image
                        src={stream.thumbnail}
                        alt={stream.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                        LIVE
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/75 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
                        {stream.viewers} viewers
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg mb-2 text-white">{stream.title}</h3>
                      <div className="text-sm text-gray-400 space-y-1">
                        <div>{stream.date}</div>
                        <div>Duration: {stream.duration}</div>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>{stream.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>{stream.comments}</span>
                          </button>
                        </div>
                        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar - Friends and Activity */}
            <div className="md:col-span-3 order-3">
              {/* Friends List */}
              <div className="bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-800 p-4 mb-6 shadow-lg shadow-blue-500/5">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-blue-400">Friends</h2>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
                      Online
                    </button>
                    <button className="px-3 py-1 text-sm bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
                      All
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  {onlineFriends.map((friend) => (
                    <div key={friend.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-blue-500/30">
                            <Image
                              src={friend.avatar}
                              alt={friend.name}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
                        </div>
                        <div>
                          <h3 className="text-white font-medium">{friend.name}</h3>
                          <p className="text-sm text-gray-400">{friend.status}</p>
                        </div>
                      </div>
                      {friend.isStreaming && (
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-red-500">{friend.viewers} viewers</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Feed */}
              <div className="bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-800 p-4 shadow-lg shadow-blue-500/5">
                <h2 className="text-lg font-semibold text-blue-400 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-blue-500/30">
                        <Image
                          src={activity.avatar}
                          alt={activity.user}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-white">
                          <span className="font-medium">{activity.user}</span>{' '}
                          {activity.action}{' '}
                          {activity.game && <span className="text-blue-400">{activity.game}</span>}
                          {activity.server && <span className="text-blue-400">{activity.server}</span>}
                        </p>
                        <p className="text-xs text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 