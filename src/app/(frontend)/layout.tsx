import '../globals.css'

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
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

const Footer = () => {
  return (
    <Section className="py-6 md:py-6">
      <Container className="py-6 md:py-6">
        <footer className="text-muted-foreground">
          <div className="flex gap-3">
            <Link href="/linkedin">Linkedin</Link>
            <Link href="/resume">Resume</Link>
          </div>
          <p>© {pay.name}, 2025</p>
        </footer>
      </Container>
    </Section>
  )
}
