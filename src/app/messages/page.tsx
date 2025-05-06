'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Placeholder data until connected to database
const PLACEHOLDER_AVATAR = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'

export default function Messages() {
  const [activeChat, setActiveChat] = useState(1)

  const conversations = [
    {
      id: 1,
      name: 'ProGamer',
      avatar: PLACEHOLDER_AVATAR,
      lastMessage: 'Hey, are you streaming tonight?',
      time: '2m ago',
      unread: 2
    },
    {
      id: 2,
      name: 'BuilderMaster',
      avatar: PLACEHOLDER_AVATAR,
      lastMessage: 'Thanks for the collab yesterday!',
      time: '1h ago',
      unread: 0
    },
    {
      id: 3,
      name: 'ShooterPro',
      avatar: PLACEHOLDER_AVATAR,
      lastMessage: 'Let\'s play Valorant together',
      time: '3h ago',
      unread: 1
    }
  ]

  const messages = [
    {
      id: 1,
      sender: 'ProGamer',
      avatar: PLACEHOLDER_AVATAR,
      content: 'Hey, are you streaming tonight?',
      time: '2m ago',
      isMe: false
    },
    {
      id: 2,
      sender: 'You',
      avatar: PLACEHOLDER_AVATAR,
      content: 'Yes, I\'ll be live at 8 PM!',
      time: '1m ago',
      isMe: true
    },
    {
      id: 3,
      sender: 'ProGamer',
      avatar: PLACEHOLDER_AVATAR,
      content: 'Great! I\'ll make sure to tune in.',
      time: 'Just now',
      isMe: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800/50 backdrop-blur-md fixed w-full z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-purple-500">
              OldWest
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/messages" className="relative">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </Link>
              <div className="w-10 h-10 bg-gray-600 rounded-full overflow-hidden ring-2 ring-purple-500/50">
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 shadow-lg overflow-hidden">
            <div className="flex h-[calc(100vh-12rem)]">
              {/* Conversations List */}
              <div className="w-1/3 border-r border-gray-700 overflow-y-auto">
                <div className="p-4 border-b border-gray-700">
                  <input
                    type="text"
                    placeholder="Search messages..."
                    className="w-full bg-gray-700/50 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="divide-y divide-gray-700">
                  {conversations.map((chat) => (
                    <button
                      key={chat.id}
                      onClick={() => setActiveChat(chat.id)}
                      className={`w-full p-4 flex items-center space-x-3 hover:bg-gray-700/50 transition-colors ${
                        activeChat === chat.id ? 'bg-gray-700/50' : ''
                      }`}
                    >
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={chat.avatar}
                            alt={chat.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                        {chat.unread > 0 && (
                          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-white truncate">{chat.name}</h3>
                          <span className="text-xs text-gray-400">{chat.time}</span>
                        </div>
                        <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-700 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={conversations[activeChat]?.avatar || ''}
                      alt={conversations[activeChat]?.name || ''}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-medium text-white">{conversations[activeChat]?.name}</h2>
                    <p className="text-sm text-gray-400">Online</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                    >
                      {!message.isMe && (
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                          <Image
                            src={message.avatar}
                            alt={message.sender}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          message.isMe
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-700 text-white'
                        }`}
                      >
                        <p>{message.content}</p>
                        <span className="text-xs opacity-75 mt-1 block">
                          {message.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-700">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 bg-gray-700/50 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 