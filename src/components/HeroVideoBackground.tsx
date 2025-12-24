'use client'

import { useEffect, useRef, useState } from 'react'

// Using direct video URLs - these are example placeholder URLs
// In production, you would host these videos or use a CDN
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
  const [videosLoaded, setVideosLoaded] = useState<boolean[]>(new Array(videoUrls.length).fill(false))
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videoUrls.length)
    }, 1000) // Change video every 1 second

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Preload all videos
    videoUrls.forEach((url, index) => {
      const video = document.createElement('video')
      video.src = url
      video.muted = true
      video.preload = 'auto'
      video.onloadeddata = () => {
        setVideosLoaded((prev) => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }
      video.onerror = () => {
        // Video failed to load, mark as loaded anyway to prevent infinite retries
        setVideosLoaded((prev) => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }
    })
  }, [])

  useEffect(() => {
    // Play current video
    const currentVideo = videoRefs.current[currentVideoIndex]
    if (currentVideo) {
      currentVideo.currentTime = 0
      currentVideo.play().catch(() => {
        // Handle autoplay restrictions
      })
    }

    // Pause other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentVideoIndex) {
        video.pause()
      }
    })
  }, [currentVideoIndex])

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {videoUrls.map((url, index) => (
        <video
          key={index}
          ref={(el) => {
            videoRefs.current[index] = el
          }}
          src={url}
          muted
          playsInline
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: index === currentVideoIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            zIndex: index === currentVideoIndex ? 1 : 0
          }}
          onError={() => {
            // If video fails to load, show a gradient background instead
            console.warn(`Video ${index} failed to load: ${url}`)
          }}
        />
      ))}
      {/* Fallback gradient background if videos don't load */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #0a0a0a 100%)',
          zIndex: 0,
          opacity: videosLoaded.every(loaded => !loaded) ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
    </div>
  )
}

