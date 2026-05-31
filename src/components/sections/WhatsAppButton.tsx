'use client'

import { MessageCircle } from 'lucide-react'
import { business } from '@/data/content'

export function WhatsAppButton() {
  return (
    <a
      href={business.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Order via WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-medium text-sm hidden sm:inline">Order Now</span>
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 group-hover:opacity-30" />
    </a>
  )
}
