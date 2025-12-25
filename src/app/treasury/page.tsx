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
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #141414 100%)',
          padding: '80px 48px',
          borderBottom: '1px solid #1f1f1f'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <Title level={1} style={{ color: '#ffffff', marginBottom: 16, fontSize: 56, fontWeight: 700 }}>
              Treasury
            </Title>
            <Text style={{ color: '#8c8c8c', fontSize: 20 }}>
              Buy coins to power your virtual environment
            </Text>
          </div>
          <div style={{ marginTop: 48, maxWidth: '600px', margin: '48px auto 0' }}>
            <Coins3D />
          </div>
        </div>

        {/* Coin Packages - CSS Grid */}
        <div style={{ padding: '80px 48px', background: '#000000' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 12, fontSize: 48, fontWeight: 700 }}>
              Buy Coins
            </Title>
            <Text style={{ color: '#8c8c8c', fontSize: 18 }}>
              Choose a package to add coins to your wallet
            </Text>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto'
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
                bodyStyle={{ padding: 32, textAlign: 'center' }}
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
                    top: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: pkg.color,
                    color: '#ffffff',
                    padding: '6px 20px',
                    borderRadius: 20,
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: `0 2px 8px ${pkg.color}50`
                  }}>
                    <FireOutlined style={{ marginRight: 4 }} /> Most Popular
                  </div>
                )}
                <div style={{
                  width: 80,
                  height: 80,
                  background: '#141414',
                  border: `2px solid ${pkg.color}`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: `${pkg.popular ? 8 : 0} auto 20px`
                }}>
                  <DollarOutlined style={{ fontSize: 40, color: pkg.color }} />
                </div>
                <Title level={2} style={{ 
                  color: '#ffffff', 
                  marginBottom: 4, 
                  fontSize: 32, 
                  fontWeight: 700,
                  fontFamily: 'monospace'
                }}>
                  {pkg.amount.toLocaleString()}
                </Title>
                <Text style={{ 
                  color: pkg.color, 
                  fontSize: 14, 
                  fontWeight: 600,
                  display: 'block', 
                  marginBottom: 12 
                }}>
                  COINS
                </Text>
                {pkg.bonus > 0 && (
                  <div style={{
                    background: `${pkg.color}20`,
                    border: `1px solid ${pkg.color}40`,
                    borderRadius: 8,
                    padding: '8px 12px',
                    marginBottom: 16,
                    display: 'inline-block'
                  }}>
                    <Text style={{ color: pkg.color, fontSize: 12, fontWeight: 600 }}>
                      +{pkg.bonus} Bonus
                    </Text>
                  </div>
                )}
                <div style={{ 
                  borderTop: '1px solid #1f1f1f', 
                  margin: '16px 0',
                  paddingTop: '16px'
                }}>
                  <Text style={{ color: '#ffffff', fontSize: 28, fontWeight: 700, fontFamily: 'monospace' }}>
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
                    borderRadius: 8,
                    marginTop: 16,
                    height: 44,
                    fontWeight: 600
                  }}
                >
                  Buy Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </Content>
    </Layout>
  )
}
