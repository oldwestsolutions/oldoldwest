'use client'

import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Ring } from '@react-three/drei'
import * as THREE from 'three'

function Coin({ position, color, size = 0.6 }: { position: [number, number, number], color: string, size?: number }) {
  const coinRef = useRef<THREE.Mesh>(null!)
  const ringRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (coinRef.current) {
      coinRef.current.rotation.y = state.clock.elapsedTime * 0.8
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={position}>
        {/* Outer Ring - Coin Edge */}
        <Ring ref={ringRef} args={[size * 1.05, size * 1.15, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial 
            color={color === '#d9d9d9' ? '#c9a961' : color} 
            emissive={color === '#d9d9d9' ? '#c9a961' : color} 
            emissiveIntensity={0.2} 
            metalness={0.95}
            roughness={0.1}
          />
        </Ring>
        
        {/* Main Coin - Cylinder */}
        <mesh ref={coinRef} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[size, size, size * 0.15, 64]} />
          <meshStandardMaterial
            color={color === '#d9d9d9' ? '#ffd700' : color}
            emissive={color === '#d9d9d9' ? '#ffd700' : color}
            emissiveIntensity={0.3}
            metalness={0.95}
            roughness={0.05}
          />
        </mesh>
        
        {/* Inner Ring - Coin Design */}
        <Ring args={[size * 0.3, size * 0.7, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color={color === '#d9d9d9' ? '#c9a961' : color}
            emissive={color === '#d9d9d9' ? '#c9a961' : color}
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
          />
        </Ring>
      </group>
    </Float>
  )
}

function OrbitingCoin({ 
  color, 
  radius = 2.5,
  offset = 0
}: { 
  color: string
  radius?: number
  offset?: number
}) {
  const coinRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime
      const angle = time * 0.4 + offset
      groupRef.current.position.x = Math.cos(angle) * radius
      groupRef.current.position.z = Math.sin(angle) * radius
      if (coinRef.current) {
        coinRef.current.rotation.y = time * 1.5
      }
    }
  })

  return (
    <group ref={groupRef}>
      {/* Coin */}
      <mesh ref={coinRef} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.08, 32]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Coin Edge Ring */}
      <Ring args={[0.36, 0.4, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.3}
          metalness={0.95}
          roughness={0.05}
        />
      </Ring>
    </group>
  )
}

function EarningCoins() {
  const coinColors = ['#c9a961', '#b8860b', '#daa520', '#ffd700']
  
  return (
    <group position={[0, 3.5, 0]}>
      {[-1.2, -0.4, 0.4, 1.2].map((x, i) => (
        <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.2} floatIntensity={0.2}>
          <group position={[x, 0, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.25, 0.25, 0.06, 32]} />
              <meshStandardMaterial 
                color={coinColors[i]} 
                emissive={coinColors[i]} 
                emissiveIntensity={0.4}
                metalness={0.95}
                roughness={0.05}
              />
            </mesh>
            <Ring args={[0.26, 0.28, 32]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial 
                color={coinColors[i]} 
                emissive={coinColors[i]} 
                emissiveIntensity={0.2}
                metalness={0.95}
                roughness={0.05}
              />
            </Ring>
          </group>
        </Float>
      ))}
    </group>
  )
}

function MoneyFlow({ 
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
      <lineBasicMaterial color={color} opacity={0.6} transparent linewidth={3} />
    </line>
  )
}

function DollarSigns() {
  const signsRef = useRef<THREE.Group>(null!)
  
  const positions = useMemo(() => {
    const count = 30
    const positions: [number, number, number][] = []
    for (let i = 0; i < count; i++) {
      positions.push([
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 12
      ])
    }
    return positions
  }, [])

  useFrame((state) => {
    if (signsRef.current) {
      signsRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={signsRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[0.2, 0.2]} />
          <meshStandardMaterial 
            color="#ffd700" 
            emissive="#ffd700" 
            emissiveIntensity={0.3}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function Tokenomics3D() {
  return (
    <div style={{ width: '100%', height: '500px', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)', borderRadius: 12, overflow: 'hidden', position: 'relative', border: '1px solid #1f1f1f' }}>
      <Suspense fallback={
        <div style={{ 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#8c8c8c',
          fontSize: 14
        }}>
          Loading Tokenomics Flow...
        </div>
      }>
        <Canvas
          camera={{ position: [0, 2, 8], fov: 50 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#ffd700" />
          <pointLight position={[-5, -5, -5]} intensity={0.8} color="#c9a961" />
          <pointLight position={[0, 8, 0]} intensity={0.6} color="#ffd700" />
          <directionalLight position={[0, 5, 0]} intensity={0.4} />

          {/* Central Token Coin */}
          <Coin position={[0, 0, 0]} color="#d9d9d9" size={0.8} />

          {/* Orbiting Coins */}
          <OrbitingCoin color="#ff6b35" radius={2.5} offset={0} />
          <OrbitingCoin color="#4ecdc4" radius={2.5} offset={Math.PI * 2 / 3} />
          <OrbitingCoin color="#95e1d3" radius={2.5} offset={Math.PI * 4 / 3} />

          {/* Earning Coins */}
          <EarningCoins />

          {/* Money Flow Lines */}
          <MoneyFlow start={[0, 3.2, 0]} end={[0, 1.2, 0]} color="#ffd700" />
          <MoneyFlow start={[0, -1.2, 0]} end={[2.3, 0, 0]} color="#ff6b35" />
          <MoneyFlow start={[0, -1.2, 0]} end={[-1.15, 0, 2]} color="#4ecdc4" />
          <MoneyFlow start={[0, -1.2, 0]} end={[-1.15, 0, -2]} color="#95e1d3" />

          {/* Dollar Signs Background */}
          <DollarSigns />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
            autoRotate
            autoRotateSpeed={0.4}
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
        gap: 32,
        pointerEvents: 'none',
        zIndex: 10
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: 16, 
            height: 16, 
            background: '#ff6b35', 
            borderRadius: '50%', 
            margin: '0 auto 6px',
            boxShadow: '0 0 12px #ff6b35',
            border: '2px solid #ff6b35'
          }}></div>
          <div style={{ color: '#8c8c8c', fontSize: 12, fontWeight: 600 }}>SPEND</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: 16, 
            height: 16, 
            background: '#4ecdc4', 
            borderRadius: '50%', 
            margin: '0 auto 6px',
            boxShadow: '0 0 12px #4ecdc4',
            border: '2px solid #4ecdc4'
          }}></div>
          <div style={{ color: '#8c8c8c', fontSize: 12, fontWeight: 600 }}>STAKE</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: 16, 
            height: 16, 
            background: '#95e1d3', 
            borderRadius: '50%', 
            margin: '0 auto 6px',
            boxShadow: '0 0 12px #95e1d3',
            border: '2px solid #95e1d3'
          }}></div>
          <div style={{ color: '#8c8c8c', fontSize: 12, fontWeight: 600 }}>FLOW</div>
        </div>
      </div>
    </div>
  )
}
