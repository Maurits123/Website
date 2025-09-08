import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maurits Deman - Software Engineer',
  description: 'Full-stack software engineer specializing in React, Node.js, cloud technologies, and modern web development.',
  keywords: ['Software Engineer', 'Full-Stack', 'React', 'Node.js', 'AWS', 'TypeScript'],
  authors: [{ name: 'Maurits Deman' }],
  creator: 'Maurits Deman',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mauritsdeman.dev',
    title: 'Maurits Deman - Software Engineer',
    description: 'Full-stack software engineer specializing in React, Node.js, cloud technologies, and modern web development.',
    siteName: 'Maurits Deman Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maurits Deman - Software Engineer',
    description: 'Full-stack software engineer specializing in React, Node.js, cloud technologies, and modern web development.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
