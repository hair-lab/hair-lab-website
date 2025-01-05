import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HAIR Lab - Human AI Research Lab',
  description: 'Human AI Research Laboratory at Yonsei University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24"> {/* Added pt-24 for 96px top padding */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}