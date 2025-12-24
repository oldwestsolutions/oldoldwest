'use client'

import { useEffect, useRef, useState } from 'react'

const videoUrls = [
  'https://pixabay.com/videos/download/video-26533_medium.mp4',
  'https://pixabay.com/videos/download/video-249067_medium.mp4',
  'https://pixabay.com/videos/download/video-273927_medium.mp4',
  'https://pixabay.com/videos/download/video-202134_medium.mp4',
  'https://pixabay.com/videos/download/video-83152_medium.mp4',
  'https://pixabay.com/videos/download/video-67823_medium.mp4',
  'https://pixabay.com/videos/download/video-286879_medium.mp4',
]

export default function HeroVideoBackground() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoUrls.length)
    }, 1000) // Change video every 1 second

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions
      })
    }
  }, [currentVideoIndex])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    >
      <source src={videoUrls[currentVideoIndex]} type="video/mp4" />
    </video>
  )
}

