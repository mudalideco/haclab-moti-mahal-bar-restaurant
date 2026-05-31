'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'
import { navLinks, business } from '@/data/content'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-lg shadow-nav border-b border-border'
          : 'bg-transparent'
      )}
    >
      <nav className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-foreground no-underline"
        >
          <span className="font-heading text-xl md:text-2xl font-bold tracking-tight">
            Moti Mahal
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-muted/50"
            >
              {link.label}
            </button>
          ))}
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3"
          >
            <Button size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              Order via WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-md hover:bg-muted/50 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 top-16 z-40 bg-background transition-transform duration-300',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col gap-4 p-6 pt-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-3 border-b border-border"
            >
              {link.label}
            </button>
          ))}
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <Button className="w-full gap-2" size="lg">
              <Phone className="w-4 h-4" />
              Order via WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
