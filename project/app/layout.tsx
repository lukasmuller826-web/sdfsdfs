import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "$BRAIN - The Smart Memecoin",
  description: "Join the revolution of intelligent memecoins with $BRAIN. Built on Solana for lightning-fast transactions.",
  keywords: "BRAIN, memecoin, Solana, cryptocurrency, meme token, DeFi",
  authors: [{ name: "$BRAIN Team" }],
  creator: "$BRAIN",
  publisher: "$BRAIN",
  robots: "index, follow",
  openGraph: {
    title: "$BRAIN - The Smart Memecoin",
    description: "Join the revolution of intelligent memecoins with $BRAIN. Built on Solana for lightning-fast transactions.",
    type: "website",
    locale: "en_US",
    siteName: "$BRAIN",
  },
  twitter: {
    card: "summary_large_image",
    title: "$BRAIN - The Smart Memecoin",
    description: "Join the revolution of intelligent memecoins with $BRAIN. Built on Solana for lightning-fast transactions.",
    creator: "@BRAIN__LET",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}