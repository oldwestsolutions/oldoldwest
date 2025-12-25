'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Sphere, MeshDistortMaterial, Float, Trail, Stars, Ring } from '@react-three/drei'
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
          <meshStandardMaterial color="#595959" emissive="#595959" emissiveIntensity={0.2} transparent opacity={0.5} />
        </Ring>
        
        {/* Main Token Sphere */}
        <Sphere ref={meshRef} args={[0.8, 32, 32]}>
          <MeshDistortMaterial
            color="#d9d9d9"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={0.9}
            emissive="#d9d9d9"
            emissiveIntensity={0.3}
          />
        </Sphere>
        
        {/* Inner Glow */}
        <Sphere args={[0.6, 32, 32]}>
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.5}
            transparent
            opacity={0.2}
          />
        </Sphere>
        
        <Text
          position={[0, 0, 1.1]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          TOKEN
        </Text>
      </group>
    </Float>
  )
}

function OrbitingElement({ 
  position, 
  color, 
  label,
  radius = 2,
  offset = 0
}: { 
  position: [number, number, number]
  color: string
  label: string
  radius?: number
  offset?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const trailRef = useRef<THREE.Mesh>(null!)
  const timeRef = useRef(0)

  useFrame((state) => {
    if (meshRef.current) {
      timeRef.current = state.clock.elapsedTime
      const angle = timeRef.current * 0.5 + offset
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      meshRef.current.position.x = x
      meshRef.current.position.z = z
      meshRef.current.rotation.y = timeRef.current * 2
    }
  })

  return (
    <group position={position}>
      {/* Trail Effect */}
      <Trail
        width={0.1}
        length={8}
        color={color}
        attenuation={(t) => t * t}
      >
        <Sphere ref={meshRef} args={[0.35, 16, 16]}>
          <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={0.8}
            metalness={0.7}
            roughness={0.2}
          />
        </Sphere>
      </Trail>
      
      {/* Glow Ring */}
      <Ring args={[0.5, 0.6, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.3}
          transparent
          opacity={0.4}
        />
      </Ring>
      
      <Text
        position={[0, -0.7, 0]}
        fontSize={0.18}
        color={color}
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
      >
        {label}
      </Text>
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
      new THREE.Vector3((start[0] + end[0]) / 2, (start[1] + end[1]) / 2 + 1, (start[2] + end[2]) / 2),
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
      <lineBasicMaterial color={color} opacity={0.4} transparent />
    </line>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null!)
  
  const particles = useMemo(() => {
    const count = 150
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 12
    }
    return positions
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={150}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#595959" transparent opacity={0.6} />
    </points>
  )
}

export default function Tokenomics3D() {
  return (
    <div style={{ width: '100%', height: '500px', background: '#0a0a0a', borderRadius: 12, overflow: 'hidden' }}>
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#4ecdc4" />
        <pointLight position={[0, 8, 0]} intensity={0.6} color="#ffffff" />
        <directionalLight position={[0, 5, 0]} intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={0.5} />

        {/* Central Token */}
        <Token position={[0, 0, 0]} />

        {/* Orbiting Elements - Positioned around token */}
        <OrbitingElement position={[0, 0, 0]} color="#ff6b35" label="SPEND" radius={2.5} offset={0} />
        <OrbitingElement position={[0, 0, 0]} color="#4ecdc4" label="STAKE" radius={2.5} offset={Math.PI * 2 / 3} />
        <OrbitingElement position={[0, 0, 0]} color="#95e1d3" label="FLOW" radius={2.5} offset={Math.PI * 4 / 3} />

        {/* Earning Elements - Floating above */}
        <group position={[0, 3.5, 0]}>
          {[-1, -0.33, 0.33, 1].map((x, i) => (
            <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.3} floatIntensity={0.3}>
              <Sphere args={[0.25, 16, 16]} position={[x, 0, 0]}>
                <meshStandardMaterial 
                  color="#595959" 
                  emissive="#595959" 
                  emissiveIntensity={0.5}
                  metalness={0.6}
                  roughness={0.3}
                />
              </Sphere>
            </Float>
          ))}
          <Text
            position={[0, -0.8, 0]}
            fontSize={0.2}
            color="#8c8c8c"
            anchorX="center"
            anchorY="middle"
          >
            EARN
          </Text>
        </group>

        {/* Connection Lines */}
        <ConnectionLine start={[0, 3, 0]} end={[0, 1, 0]} color="#595959" />
        <ConnectionLine start={[0, -1, 0]} end={[2.5, 0, 0]} color="#ff6b35" />
        <ConnectionLine start={[0, -1, 0]} end={[-1.25, 0, 2.16]} color="#4ecdc4" />
        <ConnectionLine start={[0, -1, 0]} end={[-1.25, 0, -2.16]} color="#95e1d3" />

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
    </div>
  )
}

