'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Check, Brain, Zap, Users, Shield, MessageCircle, Twitter } from 'lucide-react'

export default function Home() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "Coming Soon - Contract Deploying..."

  const copyToClipboard = async () => {
    if (contractAddress === "Coming Soon - Contract Deploying...") {
      return
    }
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const features = [
    {
      icon: Brain,
      title: "Smart Technology",
      description: "Built with advanced algorithms and community-driven innovation"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Powered by Solana for instant transactions and low fees"
    },
    {
      icon: Users,
      title: "Strong Community",
      description: "Join thousands of holders building the future together"
    },
    {
      icon: Shield,
      title: "Secure & Audited",
      description: "Smart contracts audited for maximum security and trust"
    }
  ]

  const stats = [
    { label: "Total Supply", value: "1B", suffix: "$BRAIN" },
    { label: "Liquidity Pool", value: "Locked", suffix: "" },
    { label: "Community", value: "Growing", suffix: "Daily" },
    { label: "Network", value: "Solana", suffix: "" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Contract Deploying Soon</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient-brain animate-float">
              $BRAIN
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              The intelligent memecoin that thinks before it memes. 
              <br />
              <span className="font-semibold text-gray-800">Built on Solana for the smartest community.</span>
            </p>

            {/* Contract Address */}
            <div className="mb-12 max-w-md mx-auto">
              <p className="text-sm font-medium text-gray-700 mb-3">Contract Address</p>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
                <code className="text-sm font-mono text-gray-700 flex-1 truncate italic">{contractAddress}</code>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={copyToClipboard} 
                  className="shrink-0 bg-transparent"
                  disabled={contractAddress === "Coming Soon - Contract Deploying..."}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-brain hover:opacity-90 text-white px-8 transition-all duration-300 transform hover:scale-105"
                onClick={() => alert("Trading will be available once contract is deployed!")}
              >
                Buy $BRAIN
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 bg-white/80 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                onClick={() => window.open("https://t.me/+5JUFhHohSIQ0YWVk", "_blank")}
              >
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label} {stat.suffix}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
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
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gradient-brain rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
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
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-brain rounded-full flex items-center justify-center text-white text-xl">
                  💬
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Join Telegram</h3>
                  <p className="text-gray-600 text-sm">Connect with the community</p>
                </div>
              </div>
            </a>
            <a
              href="https://x.com/BRAIN__LET"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-brain rounded-full flex items-center justify-center text-white text-xl">
                  🐦
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Follow on X</h3>
                  <p className="text-gray-600 text-sm">Stay updated with latest news</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 text-gradient-brain">
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
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/BRAIN__LET"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
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