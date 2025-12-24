'use client'

import { useEffect, useRef, useState } from 'react'

// Cloudinary video URLs - will be provided by user
// Format: https://res.cloudinary.com/{cloud_name}/video/upload/{public_id}.mp4
const videoUrls: string[] = [
  // Add Cloudinary video URLs here
  // Example: 'https://res.cloudinary.com/your-cloud-name/video/upload/v1234567890/video1.mp4'
]

export default function HeroVideoBackground() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [videosLoaded, setVideosLoaded] = useState<boolean[]>([])
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const hasVideos = videoUrls.length > 0

  // Gradient animation state (for fallback)
  const [gradientAngle, setGradientAngle] = useState(0)
  const [colorShift, setColorShift] = useState(0)

  useEffect(() => {
    if (hasVideos) {
      setVideosLoaded(new Array(videoUrls.length).fill(false))

      const interval = setInterval(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videoUrls.length)
      }, 1000) // Change video every 1 second

      return () => clearInterval(interval)
    } else {
      // Animate gradient if no videos
      const angleInterval = setInterval(() => {
        setGradientAngle((prev) => (prev + 0.5) % 360)
      }, 50)

      const colorInterval = setInterval(() => {
        setColorShift((prev) => (prev + 1) % 100)
      }, 100)

      return () => {
        clearInterval(angleInterval)
        clearInterval(colorInterval)
      }
    }
  }, [hasVideos])

  useEffect(() => {
    if (!hasVideos) return

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
        setVideosLoaded((prev) => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }
    })
  }, [hasVideos])

  useEffect(() => {
    if (!hasVideos) return

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
  }, [currentVideoIndex, hasVideos])

  // If no videos provided, show animated gradient
  if (!hasVideos) {
    const getGradient = () => {
      const baseColor1 = `hsl(${(colorShift * 3.6) % 360}, 10%, ${8 + Math.sin(colorShift * 0.1) * 2}%)`
      const baseColor2 = `hsl(${(colorShift * 3.6 + 60) % 360}, 8%, ${12 + Math.cos(colorShift * 0.1) * 2}%)`
      const baseColor3 = `hsl(${(colorShift * 3.6 + 120) % 360}, 10%, ${10 + Math.sin(colorShift * 0.15) * 2}%)`
      
      return `linear-gradient(${gradientAngle}deg, ${baseColor1} 0%, ${baseColor2} 33%, ${baseColor3} 66%, ${baseColor1} 100%)`
    }

    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          background: getGradient(),
          backgroundSize: '200% 200%',
          animation: 'gradientMove 15s ease infinite',
          transition: 'background 0.3s ease'
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: `
              radial-gradient(circle at ${20 + Math.sin(colorShift * 0.1) * 10}% ${30 + Math.cos(colorShift * 0.1) * 10}%, rgba(89, 89, 89, 0.1) 0%, transparent 50%),
              radial-gradient(circle at ${80 + Math.cos(colorShift * 0.15) * 10}% ${70 + Math.sin(colorShift * 0.15) * 10}%, rgba(89, 89, 89, 0.08) 0%, transparent 50%),
              radial-gradient(circle at ${50 + Math.sin(colorShift * 0.2) * 15}% ${50 + Math.cos(colorShift * 0.2) * 15}%, rgba(89, 89, 89, 0.05) 0%, transparent 50%)
            `,
            animation: 'particleMove 20s ease infinite'
          }}
        />
      </div>
    )
  }

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
          loop
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
            console.warn(`Video ${index} failed to load: ${url}`)
          }}
        />
      ))}
      {/* Fallback gradient if videos don't load */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #0a0a0a 100%)',
          zIndex: 0,
          opacity: videosLoaded.length > 0 && videosLoaded.every(loaded => !loaded) ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
    </div>
  )
}
