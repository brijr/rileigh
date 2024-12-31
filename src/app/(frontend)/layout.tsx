import '../globals.css'
import '@/components/craft/craft.css'

import { Manrope as Font } from 'next/font/google'
import type { Metadata } from 'next'
import { pay } from 'site.config'

import Link from 'next/link'

import { Section, Container } from '@/components/craft'

export const metadata: Metadata = {
  title: pay.title,
  description: pay.desc,
  metadataBase: new URL(pay.url),
}

const font = Font({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <body className="min-h-screen">
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

const Header = () => {
  return (
    <Container>
      <Link className="hover:opacity-70 transition-all" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22V8" />
          <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
          <circle cx="12" cy="5" r="3" />
        </svg>
      </Link>
    </Container>
  )
}

const Footer = () => {
  return (
    <Section className="py-6 md:py-6">
      <Container className="py-6 md:py-6">
        <footer className="space-y-4 sm:flex sm:justify-between items-center">
          <div className="flex gap-3 craft">
            <Link href="/linkedin">Linkedin</Link>
            <Link href="/resume">Resume</Link>
          </div>
          <p className="text-muted-foreground">© {pay.name}, 2025</p>
        </footer>
      </Container>
    </Section>
  )
}
