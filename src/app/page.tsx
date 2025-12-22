'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-900 border border-gray-700 flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-600"></div>
            </div>
            <span className="text-lg font-semibold tracking-tight text-gray-100">OLDWEST</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
              ACCESS NETWORK
            </Link>
            <Link href="/login" className="px-6 py-2 text-sm font-semibold bg-gray-900 border border-gray-700 text-white hover:bg-gray-800 transition-colors">
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-100 leading-tight">
              Social Infrastructure.
              <span className="block mt-2">Metered by Design.</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              OldWest is a VMaaS-based social network. Every user operates inside a virtual environment. Interactions consume minutes. Minutes function like compute credits. Usage is tracked and settled.
            </p>
          </div>
        </div>
      </section>

      {/* How the Platform Works */}
      <section className="border-b border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12">
            <h2 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-2">HOW THE PLATFORM WORKS</h2>
            <div className="w-16 h-0.5 bg-gray-700 mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Identity */}
            <div className="bg-black border border-gray-800 p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gray-900 border border-gray-700 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 border-2 border-gray-600"></div>
                </div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-2">IDENTITY</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Phone-number verified identity. Each user is authenticated through a verified phone number, establishing a single, accountable identity.
              </p>
            </div>

            {/* Session */}
            <div className="bg-black border border-gray-800 p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gray-900 border border-gray-700 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 border-2 border-gray-600"></div>
                </div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-2">SESSION</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Virtual machine allocation per session. When you access the network, a virtual environment is provisioned for your session.
              </p>
            </div>

            {/* Runtime */}
            <div className="bg-black border border-gray-800 p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gray-900 border border-gray-700 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 border-2 border-gray-600"></div>
                </div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-2">RUNTIME</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Interactions consume minutes. Every action—messaging, viewing, connecting—consumes VM minutes from your balance.
              </p>
            </div>

            {/* Settlement */}
            <div className="bg-black border border-gray-800 p-6">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gray-900 border border-gray-700 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 border-2 border-gray-600"></div>
                </div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-2">SETTLEMENT</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Usage is tracked and settled. All consumption is logged, metered, and settled against your account balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VM Minutes Explanation */}
      <section className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-2">VM MINUTES</h2>
              <div className="w-16 h-0.5 bg-gray-700 mt-2 mb-8"></div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">What Minutes Are</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    VM minutes are compute credits that meter your usage of the platform. Each minute represents a unit of virtual machine runtime consumed during your session.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">Why They Exist</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Minutes ensure accountable resource consumption. Every interaction requires compute resources. Minutes provide transparent, metered access to these resources.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">What Actions Consume Minutes</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Messaging, viewing content, establishing connections, and all platform interactions consume minutes at a defined rate per action type.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">How Users Acquire Minutes</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Minutes are purchased and added to your account balance. Usage is deducted from your balance in real-time as you interact with the platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-950 border border-gray-800 p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">BALANCE</span>
                  <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase">RATE</span>
                </div>
                <div className="h-1 bg-gray-900 border border-gray-800 mb-2">
                  <div className="h-full bg-gray-700" style={{ width: '65%' }}></div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300 font-mono">1,247 MIN</span>
                  <span className="text-gray-400 font-mono">0.5 MIN/MSG</span>
                </div>
              </div>

              <div className="space-y-4 border-t border-gray-800 pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Session Duration</span>
                  <span className="text-gray-300 font-mono">12:34</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Consumed This Session</span>
                  <span className="text-gray-300 font-mono">23 MIN</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Remaining Balance</span>
                  <span className="text-gray-300 font-mono">1,224 MIN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes OldWest Different */}
      <section className="border-b border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12">
            <h2 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-2">WHAT MAKES OLDWEST DIFFERENT</h2>
            <div className="w-16 h-0.5 bg-gray-700 mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black border border-gray-800 p-8">
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-4">TRADITIONAL SOCIAL MEDIA</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">—</span>
                  <span>Infinite scroll consumption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">—</span>
                  <span>Engagement farming algorithms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">—</span>
                  <span>Free resource abuse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">—</span>
                  <span>Algorithmic manipulation</span>
                </li>
              </ul>
            </div>

            <div className="bg-black border border-gray-800 p-8">
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-4">OLDWEST</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3">—</span>
                  <span>Intentional usage metering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3">—</span>
                  <span>Accountable resource consumption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3">—</span>
                  <span>Resource-based access model</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3">—</span>
                  <span>Transparent usage tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Infrastructure */}
      <section className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-12">
            <h2 className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-2">TRUST & INFRASTRUCTURE</h2>
            <div className="w-16 h-0.5 bg-gray-700 mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-950 border border-gray-800 p-6">
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-3">PHONE-NUMBER IDENTITY</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every account is verified through a phone number. This establishes a single, verifiable identity tied to your usage and settlement.
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 p-6">
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-3">USAGE TRANSPARENCY</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                All consumption is logged and visible. You can view your usage history, current session consumption, and balance at any time.
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800 p-6">
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-3">LOGS & SETTLEMENT</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Complete audit trail of all interactions. Settlement occurs automatically against your account balance with full transaction logs.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-black border border-gray-800 p-8">
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase mb-4">UTILITY-GRADE DESIGN</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
              OldWest is built as infrastructure, not entertainment. The platform operates like a public utility for digital interaction. Every component is designed for reliability, transparency, and accountable resource management.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-200 mb-6 tracking-tight">
              Access the Network
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Create an account to begin using OldWest. View the usage model documentation for detailed information on rates and settlement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/login" 
                className="px-8 py-3 bg-black border border-gray-700 text-white font-semibold text-sm hover:bg-gray-900 transition-colors tracking-wide"
              >
                CREATE ACCOUNT
              </Link>
              <Link 
                href="#" 
                className="px-8 py-3 bg-gray-900 border border-gray-800 text-gray-300 font-semibold text-sm hover:bg-gray-800 hover:text-white transition-colors tracking-wide"
              >
                VIEW USAGE MODEL
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gray-900 border border-gray-700 flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-600"></div>
              </div>
              <span className="text-sm font-semibold tracking-tight text-gray-400">OLDWEST</span>
            </div>
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <Link href="#" className="hover:text-gray-400 transition-colors">DOCUMENTATION</Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">SETTLEMENT</Link>
              <Link href="#" className="hover:text-gray-400 transition-colors">INFRASTRUCTURE</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
