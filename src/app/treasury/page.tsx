'use client'

import { Layout, Typography, Row, Col, Card, Button } from 'antd'
import Link from 'next/link'
import { DollarOutlined, FireOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Coins3D = dynamic(() => import('@/components/Coins3D'), { ssr: false })

const { Header, Content } = Layout
const { Title, Text } = Typography

const coinPackages = [
  { id: 1, amount: 100, price: 9.99, bonus: 0, popular: false, color: '#595959' },
  { id: 2, amount: 500, price: 44.99, bonus: 50, popular: true, color: '#ff6b35' },
  { id: 3, amount: 1000, price: 79.99, bonus: 150, popular: false, color: '#4ecdc4' },
  { id: 4, amount: 2500, price: 179.99, bonus: 500, popular: false, color: '#95e1d3' },
  { id: 5, amount: 5000, price: 329.99, bonus: 1200, popular: false, color: '#f38181' },
  { id: 6, amount: 10000, price: 599.99, bonus: 3000, popular: false, color: '#aa96da' }
]

export default function Treasury() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Header style={{ 
        background: '#000000', 
        borderBottom: '1px solid #1f1f1f',
        padding: '0 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
        position: 'fixed',
        top: isHeaderVisible ? 0 : -72,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'top 0.3s ease-in-out'
      }}>
        <Row align="middle" gutter={16}>
          <Col>
            <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#8c8c8c'}
            >
              ← Back to Home
            </Link>
          </Col>
        </Row>
      </Header>

      <Content style={{ paddingTop: isHeaderVisible ? 120 : 60 }}>
        {/* Hero and Buy Coins Side by Side */}
        <div style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #141414 100%)',
          padding: '80px 48px',
          borderBottom: '1px solid #1f1f1f'
        }}>
          <Row gutter={[64, 48]} align="middle">
            {/* Left: Hero Section */}
            <Col xs={24} lg={12}>
              <Title level={1} style={{ color: '#ffffff', marginBottom: 16, fontSize: 48, fontWeight: 700 }}>
                Treasury
              </Title>
              <Text style={{ color: '#8c8c8c', fontSize: 18, display: 'block', marginBottom: 32 }}>
                Buy coins to power your virtual environment
              </Text>
              <div style={{ maxWidth: '500px' }}>
                <Coins3D />
              </div>
            </Col>

            {/* Right: Buy Coins Section */}
            <Col xs={24} lg={12}>
              <div style={{ marginBottom: 20 }}>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 8, fontSize: 24, fontWeight: 700 }}>
                  Buy Coins
                </Title>
                <Text style={{ color: '#8c8c8c', fontSize: 12 }}>
                  Choose a package to add coins to your wallet
                </Text>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '12px'
              }}>
            {coinPackages.map((pkg) => (
              <Card
                key={pkg.id}
                bordered
                style={{
                  background: pkg.popular ? '#141414' : '#0a0a0a',
                  borderColor: pkg.popular ? pkg.color : '#1f1f1f',
                  borderWidth: pkg.popular ? 2 : 1,
                  borderRadius: 16,
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
                bodyStyle={{ padding: 16, textAlign: 'center' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = pkg.popular ? `0 8px 24px ${pkg.color}40` : '0 4px 16px rgba(0, 0, 0, 0.6)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: -8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: pkg.color,
                    color: '#ffffff',
                    padding: '3px 12px',
                    borderRadius: 12,
                    fontSize: 9,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: `0 2px 8px ${pkg.color}50`
                  }}>
                    <FireOutlined style={{ marginRight: 3, fontSize: 9 }} /> Most Popular
                  </div>
                )}
                <div style={{
                  width: 40,
                  height: 40,
                  background: '#141414',
                  border: `2px solid ${pkg.color}`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: `${pkg.popular ? 6 : 0} auto 10px`
                }}>
                  <DollarOutlined style={{ fontSize: 20, color: pkg.color }} />
                </div>
                <Title level={2} style={{ 
                  color: '#ffffff', 
                  marginBottom: 2, 
                  fontSize: 18, 
                  fontWeight: 700,
                  fontFamily: 'monospace'
                }}>
                  {pkg.amount.toLocaleString()}
                </Title>
                <Text style={{ 
                  color: pkg.color, 
                  fontSize: 10, 
                  fontWeight: 600,
                  display: 'block', 
                  marginBottom: 6 
                }}>
                  COINS
                </Text>
                {pkg.bonus > 0 && (
                  <div style={{
                    background: `${pkg.color}20`,
                    border: `1px solid ${pkg.color}40`,
                    borderRadius: 6,
                    padding: '4px 8px',
                    marginBottom: 8,
                    display: 'inline-block'
                  }}>
                    <Text style={{ color: pkg.color, fontSize: 9, fontWeight: 600 }}>
                      +{pkg.bonus} Bonus
                    </Text>
                  </div>
                )}
                <div style={{ 
                  borderTop: '1px solid #1f1f1f', 
                  margin: '8px 0',
                  paddingTop: '8px'
                }}>
                  <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 700, fontFamily: 'monospace' }}>
                    ${pkg.price.toFixed(2)}
                  </Text>
                </div>
                <Button
                  type="primary"
                  block
                  style={{
                    background: pkg.popular ? pkg.color : '#141414',
                    borderColor: pkg.popular ? pkg.color : '#1f1f1f',
                    color: '#ffffff',
                    borderRadius: 6,
                    marginTop: 8,
                    height: 32,
                    fontSize: 12,
                    fontWeight: 600,
                    boxShadow: '0 2px 8px rgba(140, 140, 140, 0.2)'
                  }}
                >
                  Buy Now
                </Button>
              </Card>
            ))}
              </div>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  )
}
