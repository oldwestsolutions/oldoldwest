'use client'

import { Layout, Typography, Row, Col, Card, Input, Button, Space, Tag, Avatar, Rate, Divider, Tooltip } from 'antd'
import Link from 'next/link'
import { SearchOutlined, StarFilled, ClockCircleOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import StarryBackground from '@/components/StarryBackground'

const { Header, Content } = Layout
const { Title, Text, Paragraph } = Typography

const mockServices = [
  {
    id: 1,
    title: 'Professional Music Production',
    seller: 'AudioMaster Pro',
    rating: 4.9,
    reviews: 127,
    price: 50,
    hourlyRate: 75,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
    category: 'Music Production',
    delivery: '3 days',
    featured: true
  },
  {
    id: 2,
    title: 'Trading & Finance Analysis',
    seller: 'Finance Experts',
    rating: 4.9,
    reviews: 94,
    price: 120,
    hourlyRate: 150,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    category: 'Trading & Finance',
    delivery: '4 days',
    featured: true
  },
  {
    id: 3,
    title: 'Game Development Services',
    seller: 'GameDev Studio',
    rating: 5.0,
    reviews: 203,
    price: 150,
    hourlyRate: 125,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
    category: 'Game Development',
    delivery: '7 days',
    featured: true
  },
  {
    id: 4,
    title: 'Software Engineering Solutions',
    seller: 'CodeCrafters',
    rating: 5.0,
    reviews: 180,
    price: 200,
    hourlyRate: 175,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
    category: 'Software Engineering',
    delivery: '5 days',
    featured: false
  },
  {
    id: 5,
    title: 'Video Editing & Post-Production',
    seller: 'Cinema Edit Pro',
    rating: 4.7,
    reviews: 156,
    price: 100,
    hourlyRate: 90,
    image: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=400',
    category: 'Video Editing',
    delivery: '5 days',
    featured: true
  },
  {
    id: 6,
    title: 'Architecture & Design Services',
    seller: 'ArchDesign Pro',
    rating: 4.8,
    reviews: 78,
    price: 180,
    hourlyRate: 160,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
    category: 'Architecture',
    delivery: '6 days',
    featured: false
  }
]

export default function Marketplace() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobile, setIsMobile] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const category = params.get('category')
    if (category) {
      setSelectedCategory(category)
    }
  }, [])

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

  const filteredServices = mockServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Header style={{ 
        background: '#000000', 
        borderBottom: '1px solid #1f1f1f',
        padding: isMobile ? '0 24px' : '0 48px',
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
          background: '#000000',
          padding: isMobile ? '60px 24px' : '80px 48px',
          borderBottom: '1px solid #1f1f1f',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <StarryBackground />
          <Row justify="center" style={{ position: 'relative', zIndex: 1 }}>
            <Col xs={24} lg={18}>
              <Title level={1} style={{ color: '#ffffff', marginBottom: 16, fontSize: isMobile ? 32 : 56, fontWeight: 700, textAlign: 'center' }}>
                Marketplace
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 20, textAlign: 'center', marginBottom: 40 }}>
                Discover services, hire talent, and get work done in your virtual environment
              </Paragraph>
              <>
                <style dangerouslySetInnerHTML={{__html: `
                  .marketplace-search-input::placeholder {
                    color: #d9d9d9 !important;
                    opacity: 1;
                  }
                  .marketplace-search-input::-webkit-input-placeholder {
                    color: #d9d9d9 !important;
                    opacity: 1;
                  }
                  .marketplace-search-input::-moz-placeholder {
                    color: #d9d9d9 !important;
                    opacity: 1;
                  }
                  .marketplace-search-input:-ms-input-placeholder {
                    color: #d9d9d9 !important;
                    opacity: 1;
                  }
                `}} />
                <Input
                  size="large"
                  placeholder="Search for services, skills, or sellers..."
                  prefix={<SearchOutlined style={{ color: '#8c8c8c' }} />}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="marketplace-search-input"
                  style={{
                    background: '#141414',
                    borderColor: '#1f1f1f',
                    color: '#ffffff',
                    borderRadius: 12,
                    height: 56,
                    fontSize: 16
                  }}
                />
              </>
            </Col>
          </Row>
        </div>

        {/* All Services */}
        <div style={{ padding: isMobile ? '40px 24px' : '60px 48px', background: '#0a0a0a', borderTop: '1px solid #1f1f1f' }}>
          <Row gutter={[24, 24]}>
            {filteredServices.map((service) => {
              const categorySlugMap: { [key: string]: string } = {
                'Music Production': 'music',
                'Trading & Finance': 'finance',
                'Game Development': 'game-development',
                'Software Engineering': 'software-engineering',
                'Video Editing': 'video-editing',
                'Architecture': 'architecture'
              }
              const categorySlug = categorySlugMap[service.category] || service.category.toLowerCase().replace(/\s+/g, '-').replace('&', '')
              return (
              <Col xs={24} sm={12} lg={8} key={service.id}>
                <Link href={`/category/${categorySlug}`} style={{ textDecoration: 'none' }}>
                  <Card
                    hoverable
                    bordered
                    style={{
                      background: '#000000',
                      borderColor: '#1f1f1f',
                      borderRadius: 12,
                      overflow: 'hidden',
                      height: '100%',
                      cursor: 'pointer'
                    }}
                    bodyStyle={{ padding: 0 }}
                  >
                  <div style={{ position: 'relative', height: 180, background: '#141414' }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      draggable="false"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        pointerEvents: 'none',
                        userSelect: 'none'
                      } as any}
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        if (target.parentElement) {
                          target.parentElement.style.background = 'linear-gradient(135deg, #141414 0%, #0a0a0a 100%)'
                        }
                      }}
                    />
                  </div>
                  <div style={{ padding: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <Avatar size="small" style={{ background: '#141414' }}>{service.seller[0]}</Avatar>
                      <Text style={{ color: '#8c8c8c', fontSize: 12 }}>{service.seller}</Text>
                    </div>
                    <Title level={5} style={{ color: '#ffffff', marginBottom: 12, fontSize: 16, fontWeight: 600 }}>
                      {service.title}
                    </Title>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <StarFilled style={{ color: '#faad14', fontSize: 12 }} />
                        <Text style={{ color: '#ffffff', fontSize: 12 }}>{service.rating}</Text>
                        <Text style={{ color: '#8c8c8c', fontSize: 11 }}>({service.reviews})</Text>
                      </div>
                      <Tag style={{ background: '#141414', borderColor: '#1f1f1f', color: '#8c8c8c', fontSize: 11 }}>
                        {service.category}
                      </Tag>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Text style={{ color: '#8c8c8c', fontSize: 11, fontWeight: 400 }}>
                          Starting at
                        </Text>
                        <Tooltip
                          title={
                            <div style={{ color: '#ffffff', fontSize: 12, lineHeight: 1.6 }}>
                              <div>Rates are based on an eight-hour workday.</div>
                              <div style={{ marginTop: 4 }}>Users with higher ratings generally cost more per hour.</div>
                            </div>
                          }
                          overlayStyle={{ maxWidth: 250 }}
                          overlayInnerStyle={{ background: '#1f1f1f', border: '1px solid #2f2f2f' }}
                        >
                          <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 700, cursor: 'help' }}>
                            ${service.hourlyRate}/hr
                          </Text>
                        </Tooltip>
                      </div>
                      <Link href={`/sellers/${service.seller.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button
                          size="small"
                          style={{
                            background: '#141414',
                            borderColor: '#1f1f1f',
                            color: '#ffffff',
                            borderRadius: 8,
                            boxShadow: '0 2px 8px rgba(140, 140, 140, 0.2)'
                          }}
                        >
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
                </Link>
              </Col>
            )
            })}
          </Row>
        </div>
      </Content>
    </Layout>
  )
}



