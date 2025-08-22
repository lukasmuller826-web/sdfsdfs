@@ .. @@
 "use client"
 
-import { useState } from "react"
+import { useState, useEffect } from "react"
 import { Copy, Check, Twitter, MessageCircle, Globe } from "lucide-react"
 import { Button } from "@/components/ui/button"
 import Image from "next/image"
 
 export default function HomePage() {
   const [copied, setCopied] = useState(false)
+  const [mounted, setMounted] = useState(false)
   const contractAddress = "Contract Address Coming Soon..."
 
+  useEffect(() => {
+    setMounted(true)
+  }, [])
+
   const copyToClipboard = async () => {
     try {
       await navigator.clipboard.writeText("Contract address will be available soon!")
@@ .. @@
     }
   }
 
+  if (!mounted) {
+    return null
+  }
+
   return (
     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
       <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
@@ .. @@
           <div className="space-y-8">
             <div className="space-y-2">
               <p className="text-sm font-medium text-primary uppercase tracking-wider">BORN LIVE</p>
-              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
+              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                 JUST A <span className="text-gradient-brain">BRAIN.</span>
                 <br />
                 HATCHED ON
@@ .. @@
             <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
               <code className="text-sm font-mono text-gray-700 flex-1 truncate italic">{contractAddress}</code>
               <Button size="sm" variant="outline" onClick={copyToClipboard} className="shrink-0 bg-transparent">
@@ .. @@
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
 
-            <div className="flex items-center gap-4 pt-4">
+            <div className="flex items-center gap-6 pt-4">
               <a href="https://x.com/BRAIN__LET" target="_blank" rel="noopener noreferrer">
-                <Twitter className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer transition-colors" />
+                <Twitter className="w-6 h-6 text-gray-500 hover:text-primary cursor-pointer transition-colors" />
               </a>
               <a href="https://t.me/+5JUFhHohSIQ0YWVk" target="_blank" rel="noopener noreferrer">
-                <MessageCircle className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer transition-colors" />
+                <MessageCircle className="w-6 h-6 text-gray-500 hover:text-primary cursor-pointer transition-colors" />
               </a>
-              <Globe className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer transition-colors" />
+              <Globe className="w-6 h-6 text-gray-500 hover:text-primary cursor-pointer transition-colors" />
             </div>
           </div>
 
@@ .. @@
       <section id="about" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
         <div className="max-w-4xl mx-auto text-center space-y-8">
           <h2 className="text-4xl font-bold text-gradient-brain">About $BRAIN</h2>
-          <p className="text-lg text-gray-600 leading-relaxed">
+          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
             $BRAIN is more than just a memecoin - it's a revolution in thinking. Born on Solana, $BRAIN represents the
             collective intelligence of the crypto community. With lightning-fast transactions and minimal fees, $BRAIN
             is designed to be the smartest choice in the meme space.
@@ .. @@
         </div>
       </section>
 
+      <section className="py-20 px-6">
+        <div className="max-w-4xl mx-auto text-center space-y-12">
+          <h2 className="text-4xl font-bold text-gradient-brain">Tokenomics</h2>
+          <div className="grid md:grid-cols-2 gap-8">
+            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
+              <div className="space-y-4">
+                <div className="w-16 h-16 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
+                  <span className="text-white font-bold text-xl">💰</span>
+                </div>
+                <h3 className="font-bold text-xl">Total Supply</h3>
+                <p className="text-3xl font-bold text-gradient-brain">1,000,000,000</p>
+                <p className="text-gray-600">One billion $BRAIN tokens</p>
+              </div>
+            </div>
+            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
+              <div className="space-y-4">
+                <div className="w-16 h-16 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
+                  <span className="text-white font-bold text-xl">🔥</span>
+                </div>
+                <h3 className="font-bold text-xl">Fair Launch</h3>
+                <p className="text-3xl font-bold text-gradient-brain">100%</p>
+                <p className="text-gray-600">No presale, no team allocation</p>
+              </div>
+            </div>
+          </div>
+        </div>
+      </section>
+
       <section id="docs" className="py-20 px-6">
         <div className="max-w-4xl mx-auto text-center space-y-8">
           <h2 className="text-4xl font-bold text-gradient-brain">Documentation</h2>
@@ .. @@
               <div className="space-y-2">
                 <h3 className="font-bold text-xl">Launch Phase</h3>
                 <p className="text-gray-600">Token deployment, initial community building, and social media presence</p>
-                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
+                <span className="inline-block bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                   In Progress
                 </span>
               </div>
@@ .. @@
               <div className="space-y-2">
                 <h3 className="font-bold text-xl">Community Growth</h3>
                 <p className="text-gray-600">DEX listings, marketing campaigns, and community events</p>
-                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
+                <span className="inline-block bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                   Coming Soon
                 </span>
               </div>
@@ .. @@
               <div className="space-y-2">
                 <h3 className="font-bold text-xl">Ecosystem Expansion</h3>
                 <p className="text-gray-600">Partnerships, utility development, and platform integrations</p>
-                <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
+                <span className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                   Future
                 </span>
               </div>
@@ .. @@
         </div>
       </section>
 
+      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
+        <div className="max-w-4xl mx-auto text-center space-y-12">
+          <h2 className="text-4xl font-bold text-gradient-brain">Why $BRAIN?</h2>
+          <div className="grid md:grid-cols-3 gap-8">
+            <div className="space-y-4">
+              <div className="w-20 h-20 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
+                <span className="text-white font-bold text-2xl">🚀</span>
+              </div>
+              <h3 className="font-bold text-xl">Solana Speed</h3>
+              <p className="text-gray-600">Built on Solana for ultra-fast transactions and low fees</p>
+            </div>
+            <div className="space-y-4">
+              <div className="w-20 h-20 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
+                <span className="text-white font-bold text-2xl">🧠</span>
+              </div>
+              <h3 className="font-bold text-xl">Smart Meme</h3>
+              <p className="text-gray-600">The first memecoin that actually makes you think</p>
+            </div>
+            <div className="space-y-4">
+              <div className="w-20 h-20 bg-gradient-brain rounded-full mx-auto flex items-center justify-center">
+                <span className="text-white font-bold text-2xl">🌟</span>
+              </div>
+              <h3 className="font-bold text-xl">Community First</h3>
+              <p className="text-gray-600">Driven by the collective intelligence of our holders</p>
+            </div>
+          </div>
+        </div>
+      </section>
+
       <section id="community" className="py-20 px-6">
         <div className="max-w-4xl mx-auto text-center space-y-12">
           <h2 className="text-4xl font-bold text-gradient-brain">Join the Community</h2>
@@ .. @@
         </div>
       </section>
 
+      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
+        <div className="max-w-4xl mx-auto text-center space-y-8">
+          <h2 className="text-4xl font-bold text-gradient-brain">Disclaimer</h2>
+          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 text-left">
+            <p className="text-gray-600 leading-relaxed">
+              $BRAIN is a meme token created for entertainment purposes. This token has no intrinsic value or expectation of financial return. 
+              There is no formal team or roadmap. The token is completely useless and for entertainment only. 
+              Please do your own research and invest responsibly. Cryptocurrency investments carry significant risk.
+            </p>
+          </div>
+        </div>
+      </section>
+
       <footer className="py-12 px-6 bg-gray-900 text-white">
         <div className="max-w-4xl mx-auto text-center space-y-6">
           <div className="flex items-center justify-center gap-2">
@@ .. @@
           </div>
           <p className="text-sm text-gray-500">© 2024 $BRAIN. All rights reserved.</p>
         </div>
       </footer>
     </div>
   )
 }