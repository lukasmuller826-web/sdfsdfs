export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          $BRAIN
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          The intelligent memecoin that thinks before it memes.
          <br />
          Built on Solana for the smartest community.
        </p>

        {/* Contract Address */}
        <div className="mb-12 max-w-md mx-auto">
          <p className="text-sm font-medium text-gray-700 mb-3">Contract Address</p>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <code className="text-sm font-mono text-gray-700">Coming Soon - Contract Deploying...</code>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Buy $BRAIN
          </button>
          <button 
            className="border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            onClick={() => window.open("https://t.me/+5JUFhHohSIQ0YWVk", "_blank")}
          >
            Join Community
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">1B</div>
              <div className="text-sm text-gray-600">Total Supply $BRAIN</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Locked</div>
              <div className="text-sm text-gray-600">Liquidity Pool</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Growing</div>
              <div className="text-sm text-gray-600">Community Daily</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Solana</div>
              <div className="text-sm text-gray-600">Network</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose $BRAIN?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              More than just a meme - we're building the smartest community in crypto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🧠</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Smart Technology</h3>
              <p className="text-gray-600">Built with advanced algorithms and community-driven innovation</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600">Powered by Solana for instant transactions and low fees</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Strong Community</h3>
              <p className="text-gray-600">Join thousands of holders building the future together</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Secure & Audited</h3>
              <p className="text-gray-600">Smart contracts audited for maximum security and trust</p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Join the $BRAIN Community
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with fellow holders and stay updated on the latest developments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a
              href="https://t.me/+5JUFhHohSIQ0YWVk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-500 transition-colors block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                  💬
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Join Telegram</h3>
                  <p className="text-gray-600 text-sm">Connect with the community</p>
                </div>
              </div>
            </a>
            <a
              href="https://x.com/BRAIN__LET"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-500 transition-colors block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                  🐦
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Follow on X</h3>
                  <p className="text-gray-600 text-sm">Stay updated with latest news</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              $BRAIN
            </h3>
            <p className="text-gray-400">The smart memecoin for the intelligent community</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://t.me/+5JUFhHohSIQ0YWVk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              💬
            </a>
            <a
              href="https://x.com/BRAIN__LET"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              🐦
            </a>
          </div>
          
          <div className="text-sm text-gray-500">
            <p className="mb-2">© 2024 $BRAIN. All rights reserved.</p>
            <p>This is a meme token created for entertainment purposes. Please do your own research.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}