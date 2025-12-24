'use client'

import { useEffect, useState } from 'react'

export default function HeroVideoBackground() {
  const [gradientAngle, setGradientAngle] = useState(0)
  const [colorShift, setColorShift] = useState(0)

  useEffect(() => {
    // Animate gradient angle
    const angleInterval = setInterval(() => {
      setGradientAngle((prev) => (prev + 0.5) % 360)
    }, 50)

    // Animate color shift
    const colorInterval = setInterval(() => {
      setColorShift((prev) => (prev + 1) % 100)
    }, 100)

    return () => {
      clearInterval(angleInterval)
      clearInterval(colorInterval)
    }
  }, [])

  // Create animated gradient background
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
      {/* Animated particles effect */}
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
