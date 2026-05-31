'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { X } from 'lucide-react'
import dynamic from 'next/dynamic'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop', alt: 'Tandoori chicken platter', width: 800, height: 600 },
  { src: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop', alt: 'Indian thali meal', width: 800, height: 900 },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop', alt: 'Butter chicken curry', width: 800, height: 700 },
  { src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop', alt: 'Biryani rice with raita', width: 800, height: 600 },
  { src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop', alt: 'Gulab jamun dessert', width: 800, height: 800 },
  { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop', alt: 'Indian street food chaat', width: 800, height: 600 },
]

function GalleryImage({ image, index, onClick }: { image: typeof galleryImages[0]; index: number; onClick: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
      onClick={() => onClick(index)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
        <X className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-45" />
      </div>
    </motion.div>
  )
}

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false })
import 'yet-another-react-lightbox/styles.css'

export function FoodGallery() {
  const [index, setIndex] = useState(-1)

  return (
    <section className="section-padding bg-background" id="gallery">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A Visual Feast
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every dish is crafted with care — from our signature curries to our famous Kulfi milkshake.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, i) => (
            <GalleryImage key={i} image={image} index={i} onClick={setIndex} />
          ))}
        </motion.div>

        {index >= 0 && (
          <Lightbox
            open={index >= 0}
            close={() => setIndex(-1)}
            slides={galleryImages.map((img) => ({ src: img.src, alt: img.alt }))}
            index={index}
          />
        )}
      </div>
    </section>
  )
}
