'use client'

import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Ring, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function Token({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const ringRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        {/* Outer Ring */}
        <Ring ref={ringRef} args={[1.2, 1.3, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#595959" emissive="#595959" emissiveIntensity={0.3} transparent opacity={0.6} />
        </Ring>
        
        {/* Main Token Sphere */}
        <Sphere ref={meshRef} args={[0.8, 32, 32]}>
          <meshStandardMaterial
            color="#d9d9d9"
            emissive="#d9d9d9"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
          />
        </Sphere>
        
        {/* Inner Glow */}
        <Sphere args={[0.6, 32, 32]}>
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.6}
            transparent
            opacity={0.3}
          />
        </Sphere>
      </group>
    </Float>
  )
}

function OrbitingElement({ 
  color, 
  label,
  radius = 2.5,
  offset = 0
}: { 
  color: string
  label: string
  radius?: number
  offset?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime
      const angle = time * 0.5 + offset
      groupRef.current.position.x = Math.cos(angle) * radius
      groupRef.current.position.z = Math.sin(angle) * radius
      if (meshRef.current) {
        meshRef.current.rotation.y = time * 2
      }
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main Orbiting Sphere */}
      <Sphere ref={meshRef} args={[0.4, 16, 16]}>
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.9}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
      
      {/* Glow Ring */}
      <Ring args={[0.5, 0.6, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.4}
          transparent
          opacity={0.5}
        />
      </Ring>
      
      {/* Label Text using HTML */}
      <mesh position={[0, -0.8, 0]}>
        <planeGeometry args={[1, 0.3]} />
        <meshBasicMaterial transparent opacity={0}>
          <primitive object={new THREE.Object3D()} />
        </meshBasicMaterial>
      </mesh>
    </group>
  )
}

function EarningElements() {
  return (
    <group position={[0, 3.5, 0]}>
      {[-1.2, -0.4, 0.4, 1.2].map((x, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.3} floatIntensity={0.3}>
          <Sphere args={[0.3, 16, 16]} position={[x, 0, 0]}>
            <meshStandardMaterial 
              color="#595959" 
              emissive="#595959" 
              emissiveIntensity={0.6}
              metalness={0.7}
              roughness={0.2}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  )
}

function ConnectionLine({ 
  start, 
  end, 
  color 
}: { 
  start: [number, number, number]
  end: [number, number, number]
  color: string 
}) {
  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3((start[0] + end[0]) / 2, (start[1] + end[1]) / 2 + 1.5, (start[2] + end[2]) / 2),
      new THREE.Vector3(...end)
    )
    return curve.getPoints(50)
  }, [start, end])

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} opacity={0.5} transparent />
    </line>
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
      <pointsMaterial size={0.1} color="#595959" transparent opacity={0.5} />
    </points>
  )
}

export default function Tokenomics3D() {
  return (
    <div style={{ width: '100%', height: '500px', background: '#0a0a0a', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
      <Suspense fallback={
        <div style={{ 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#595959',
          fontSize: 14
        }}>
          Loading 3D Visualization...
        </div>
      }>
        <Canvas
          camera={{ position: [0, 2, 8], fov: 50 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-5, -5, -5]} intensity={1} color="#4ecdc4" />
          <pointLight position={[0, 8, 0]} intensity={0.8} color="#ffffff" />
          <directionalLight position={[0, 5, 0]} intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={0.6} />

          {/* Central Token */}
          <Token position={[0, 0, 0]} />

          {/* Orbiting Elements */}
          <OrbitingElement color="#ff6b35" label="SPEND" radius={2.5} offset={0} />
          <OrbitingElement color="#4ecdc4" label="STAKE" radius={2.5} offset={Math.PI * 2 / 3} />
          <OrbitingElement color="#95e1d3" label="FLOW" radius={2.5} offset={Math.PI * 4 / 3} />

          {/* Earning Elements */}
          <EarningElements />

          {/* Connection Lines */}
          <ConnectionLine start={[0, 3.2, 0]} end={[0, 1.2, 0]} color="#595959" />
          <ConnectionLine start={[0, -1.2, 0]} end={[2.3, 0, 0]} color="#ff6b35" />
          <ConnectionLine start={[0, -1.2, 0]} end={[-1.15, 0, 2]} color="#4ecdc4" />
          <ConnectionLine start={[0, -1.2, 0]} end={[-1.15, 0, -2]} color="#95e1d3" />

          {/* Particle Field */}
          <ParticleField />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </Suspense>
      
      {/* Overlay Labels */}
      <div style={{
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: 24,
        pointerEvents: 'none',
        zIndex: 10
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 12, height: 12, background: '#ff6b35', borderRadius: '50%', margin: '0 auto 4px', boxShadow: '0 0 8px #ff6b35' }}></div>
          <div style={{ color: '#8c8c8c', fontSize: 11, fontWeight: 600 }}>SPEND</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 12, height: 12, background: '#4ecdc4', borderRadius: '50%', margin: '0 auto 4px', boxShadow: '0 0 8px #4ecdc4' }}></div>
          <div style={{ color: '#8c8c8c', fontSize: 11, fontWeight: 600 }}>STAKE</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 12, height: 12, background: '#95e1d3', borderRadius: '50%', margin: '0 auto 4px', boxShadow: '0 0 8px #95e1d3' }}></div>
          <div style={{ color: '#8c8c8c', fontSize: 11, fontWeight: 600 }}>FLOW</div>
        </div>
      </div>
    </div>
  )
}
