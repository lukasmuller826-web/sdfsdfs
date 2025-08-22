"use client"

import { useState, useEffect } from "react"
import { Copy, Check, Twitter, MessageCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HomePage() {
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)
  const contractAddress = "Contract Address Coming Soon..."

  useEffect(() => {
    setMounted(true)
  }, [])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("Contract address will be available soon!")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-brain rounded-full"></div>
          <span className="font-bold text-xl">$BRAIN</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
          <a href="#docs" className="text-gray-600 hover:text-primary transition-colors">Docs</a>
          <a href="#community" className="text-gray-600 hover:text-primary transition-colors">Community</a>
        </nav>
      </header>

      <main className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-medium text-primary uppercase tracking-wider">BORN LIVE</p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                JUST A <span className="text-gradient-brain">BRAIN.</span>
                <br />
                HATCHED ON
                <br />
                <span className="text-gradient-brain">SOLANA</span>
              </h1>
            </div>

            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
              <code className="text-sm font-mono text-gray-700 flex-1 truncate italic">{contractAddress}</code>
              <Button size="sm" variant="outline" onClick={copyToClipboard} className="shrink-0 bg-transparent">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-brain hover:opacity-90 text-white px-8"
                onClick={() => alert("Trading will be available once contract is deployed!")}
              >
                Buy Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 bg-transparent"
                onClick={() => window.open("https://t.me/+5JUFhHohSIQ0YWVk", "_blank")}
              >
                Join Community
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a href="https://x.com/BRAIN__LET" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-gray-500 hover:text-primary cursor-pointer transition-colors" />
              </a>
              <a href="https://t.me/+5JUFhHohSIQ0YWVk" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 text-gray-500 hover:text-primary cursor-pointer transition-colors" />
              </a>
              <Globe className="w-6 h-6 text-gray-500 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-brain rounded-full animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl lg:text-8xl">🧠</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="about" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gradient-brain">About $BRAIN</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            $BRAIN is more than just a memecoin - it's a revolution in thinking. Born on Solana, $BRAIN represents the
            collective intelligence of the crypto community. With lightning-fast transactions and minimal fees, $BRAIN
            is designed to be the smartest choice in the meme space.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold text-gradient-brain">Tokenomics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white font-bold text-xl">💰</span>
                </div>
                <h3 className="font-bold text-xl">Total Supply</h3>
                <p className="text-3xl font-bold text-gradient-brain">1,000,000,000</p>
                <p className="text-gray-600">One billion $BRAIN tokens</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🔥</span>
                </div>
                <h3 className="font-bold text-xl">Fair Launch</h3>
                <p className="text-3xl font-bold text-gradient-brain">100%</p>
                <p className="text-gray-600">No presale, no team allocation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="docs" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gradient-brain">Documentation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Launch Phase</h3>
                <p className="text-gray-600">Token deployment, initial community building, and social media presence</p>
                <span className="inline-block bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  In Progress
                </span>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Community Growth</h3>
                <p className="text-gray-600">DEX listings, marketing campaigns, and community events</p>
                <span className="inline-block bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
              <div className="space-y-2">
                <h3 className="font-bold text-xl">Ecosystem Expansion</h3>
                <p className="text-gray-600">Partnerships, utility development, and platform integrations</p>
                <span className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  Future
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold text-gradient-brain">Why $BRAIN?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-2xl">🚀</span>
              </div>
              <h3 className="font-bold text-xl">Solana Speed</h3>
              <p className="text-gray-600">Built on Solana for ultra-fast transactions and low fees</p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-2xl">🧠</span>
              </div>
              <h3 className="font-bold text-xl">Smart Meme</h3>
              <p className="text-gray-600">The first memecoin that actually makes you think</p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-2xl">🌟</span>
              </div>
              <h3 className="font-bold text-xl">Community First</h3>
              <p className="text-gray-600">Driven by the collective intelligence of our holders</p>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold text-gradient-brain">Join the Community</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
              <div className="space-y-4">
                <Twitter className="w-12 h-12 text-primary mx-auto" />
                <h3 className="font-bold text-xl">Follow on X</h3>
                <p className="text-gray-600">Stay updated with the latest $BRAIN news and announcements</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("https://x.com/BRAIN__LET", "_blank")}
                >
                  Follow @BRAIN__LET
                </Button>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
              <div className="space-y-4">
                <MessageCircle className="w-12 h-12 text-primary mx-auto" />
                <h3 className="font-bold text-xl">Join Telegram</h3>
                <p className="text-gray-600">Connect with fellow $BRAIN holders and share your thoughts</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("https://t.me/+5JUFhHohSIQ0YWVk", "_blank")}
                >
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-gradient-brain">Disclaimer</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 text-left">
            <p className="text-gray-600 leading-relaxed">
              $BRAIN is a meme token created for entertainment purposes. This token has no intrinsic value or expectation of financial return. 
              There is no formal team or roadmap. The token is completely useless and for entertainment only. 
              Please do your own research and invest responsibly. Cryptocurrency investments carry significant risk.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-gradient-brain rounded-full"></div>
            <span className="font-bold text-xl">$BRAIN</span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a href="https://x.com/BRAIN__LET" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </a>
            <a href="https://t.me/+5JUFhHohSIQ0YWVk" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </a>
            <Globe className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
          <p className="text-sm text-gray-500">© 2024 $BRAIN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}