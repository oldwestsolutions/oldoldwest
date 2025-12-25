'use client'

import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Ring } from '@react-three/drei'
import * as THREE from 'three'

function Coin({ position, color, size = 0.5 }: { position: [number, number, number], color: string, size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const ringRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <group position={position}>
        {/* Outer Ring */}
        <Ring ref={ringRef} args={[size * 1.2, size * 1.3, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} transparent opacity={0.6} />
        </Ring>
        
        {/* Main Coin */}
        <mesh ref={meshRef}>
          <cylinderGeometry args={[size, size, size * 0.2, 64]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        
        {/* Inner Glow */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[size * 0.3, size * 0.7, 64]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
          />
        </mesh>
      </group>
    </Float>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null!)
  
  const particles = useMemo(() => {
    const count = 200
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15
    }
    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#595959" transparent opacity={0.4} />
    </points>
  )
}

export default function Coins3D() {
  const coinColors = ['#ff6b35', '#4ecdc4', '#95e1d3', '#f38181', '#aa96da', '#595959']
  
  return (
    <div style={{ width: '100%', height: '400px', background: '#0a0a0a', borderRadius: 12, overflow: 'hidden' }}>
      <Suspense fallback={<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#595959' }}>Loading...</div>}>
        <Canvas
          camera={{ position: [0, 2, 8], fov: 50 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#4ecdc4" />
        <pointLight position={[0, 8, 0]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[0, 5, 0]} intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={0.6} />

        {/* Coins arranged in a circle */}
        {coinColors.map((color, i) => {
          const angle = (i / coinColors.length) * Math.PI * 2
          const radius = 2.5
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius
          return (
            <Coin 
              key={i}
              position={[x, 0, z]} 
              color={color}
              size={0.4 + (i % 3) * 0.1}
            />
          )
        })}

        {/* Center Coin */}
        <Coin position={[0, 0, 0]} color="#d9d9d9" size={0.7} />

        {/* Particle Field */}
        <ParticleField />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
      </Suspense>
    </div>
  )
}

