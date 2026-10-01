'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const cities = [
  { src: '/city-hongkong.png', label: 'Hong Kong' },
  { src: '/city-kualalumpur.png', label: 'Kuala Lumpur' },
  { src: '/city-singapore.png', label: 'Singapore' },
]

export function RotatingBackground() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % cities.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="absolute inset-0">
      {cities.map((city, i) => (
        <Image
          key={city.src}
          src={city.src || "/placeholder.svg"}
          alt=""
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
    </div>
  )
}
