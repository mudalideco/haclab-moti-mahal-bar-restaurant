'use client'

import { useEffect, useRef } from 'react'

interface MapEmbedProps {
  address: string
  className?: string
}

export default function MapEmbed({ address, className = '' }: MapEmbedProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current || typeof window === 'undefined') return

    const L = require('leaflet')
    const mapContainer = mapRef.current

    // Fix for default marker icon in Next.js
    const DefaultIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    })
    L.Marker.prototype.options.icon = DefaultIcon

    const map = L.map(mapContainer).setView([0.4162, 33.1975], 13) // Jinja, Uganda coords

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map)

    L.marker([0.4162, 33.1975])
      .addTo(map)
      .bindPopup(address)
      .openPopup()

    return () => {
      map.remove()
    }
  }, [address])

  return <div ref={mapRef} className={`w-full h-full ${className}`} style={{ minHeight: '300px' }} />
}
