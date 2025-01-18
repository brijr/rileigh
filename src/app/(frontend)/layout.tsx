import '../globals.css'
import '@/components/craft/craft.css'

import { Manrope as Font } from 'next/font/google'
import type { Metadata } from 'next'
import { pay } from 'site.config'
import { Analytics } from '@vercel/analytics/react'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/logo.svg'

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
        <Analytics />
      </body>
    </html>
  )
}

const Header = () => {
  return (
    <Container className="fade-in-down">
      <Link className="hover:opacity-70 transition-all" href="/">
        <Image src={Logo} alt="Logo" width={36} height={36} />
      </Link>
    </Container>
  )
}

const Footer = () => {
  return (
    <Section className="fade-in-up delay-footer py-6 md:py-6 text-sm">
      <Container className="py-6 md:py-6">
        <footer className="space-y-4 sm:flex sm:justify-between items-center">
          <div className="flex gap-3 craft">
            <Link href="/linkedin">LinkedIn</Link>
            <Link href="/resume">Resume</Link>
            <a href="mailto:rileighellison12@gmail.com">Email</a>
          </div>
          <p className="text-muted-foreground">© {pay.name}, 2025</p>
        </footer>
      </Container>
    </Section>
  )
}
