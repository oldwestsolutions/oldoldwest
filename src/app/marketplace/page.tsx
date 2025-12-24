'use client'

import { Layout, Typography, Row, Col, Card, Input, Button, Space, Tag, Avatar, Rate, Divider } from 'antd'
import Link from 'next/link'
import { SearchOutlined, StarFilled, FireOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

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
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
    category: 'Music & Audio',
    delivery: '3 days',
    featured: true
  },
  {
    id: 2,
    title: 'Custom Logo Design Package',
    seller: 'Design Studio X',
    rating: 4.8,
    reviews: 89,
    price: 75,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
    category: 'Graphic Design',
    delivery: '2 days',
    featured: false
  },
  {
    id: 3,
    title: 'Full-Stack Web Development',
    seller: 'CodeCrafters',
    rating: 5.0,
    reviews: 203,
    price: 150,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
    category: 'Development',
    delivery: '7 days',
    featured: true
  },
  {
    id: 4,
    title: 'Video Editing & Post-Production',
    seller: 'Cinema Edit Pro',
    rating: 4.7,
    reviews: 156,
    price: 100,
    image: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=400',
    category: 'Video Editing',
    delivery: '5 days',
    featured: false
  },
  {
    id: 5,
    title: 'Financial Analysis & Reporting',
    seller: 'Finance Experts',
    rating: 4.9,
    reviews: 94,
    price: 120,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    category: 'Finance',
    delivery: '4 days',
    featured: true
  },
  {
    id: 6,
    title: 'Team Collaboration Setup',
    seller: 'Workflow Solutions',
    rating: 4.8,
    reviews: 78,
    price: 80,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
    category: 'Collaboration',
    delivery: '2 days',
    featured: false
  }
]

export default function Marketplace() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

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

  const filteredServices = mockServices.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
          <Row justify="center">
            <Col xs={24} lg={18}>
              <Title level={1} style={{ color: '#ffffff', marginBottom: 16, fontSize: 56, fontWeight: 700, textAlign: 'center' }}>
                Marketplace
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 20, textAlign: 'center', marginBottom: 40 }}>
                Discover services, hire talent, and get work done in your virtual environment
              </Paragraph>
              <Input
                size="large"
                placeholder="Search for services, skills, or sellers..."
                prefix={<SearchOutlined style={{ color: '#8c8c8c' }} />}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  background: '#141414',
                  borderColor: '#1f1f1f',
                  color: '#ffffff',
                  borderRadius: 12,
                  height: 56,
                  fontSize: 16
                }}
              />
            </Col>
          </Row>
        </div>

        {/* Featured Services */}
        <div style={{ padding: '60px 48px', background: '#000000' }}>
          <Row gutter={[24, 24]}>
            <Col xs={24}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                <FireOutlined style={{ fontSize: 24, color: '#ff4d4f' }} />
                <Title level={2} style={{ color: '#ffffff', margin: 0, fontSize: 32, fontWeight: 600 }}>
                  Featured Services
                </Title>
              </div>
            </Col>
            {filteredServices.filter(s => s.featured).map((service) => (
              <Col xs={24} sm={12} lg={8} key={service.id}>
                <Card
                  hoverable
                  bordered
                  style={{
                    background: '#0a0a0a',
                    borderColor: '#1f1f1f',
                    borderRadius: 12,
                    overflow: 'hidden',
                    height: '100%'
                  }}
                  bodyStyle={{ padding: 0 }}
                >
                  <div style={{ position: 'relative', height: 200, background: '#141414' }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        if (target.parentElement) {
                          target.parentElement.style.background = 'linear-gradient(135deg, #141414 0%, #0a0a0a 100%)'
                        }
                      }}
                    />
                    {service.featured && (
                      <Tag color="red" style={{ position: 'absolute', top: 12, right: 12 }}>
                        <FireOutlined /> Featured
                      </Tag>
                    )}
                  </div>
                  <div style={{ padding: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                      <Avatar size="small" style={{ background: '#141414' }}>{service.seller[0]}</Avatar>
                      <Text style={{ color: '#8c8c8c', fontSize: 14 }}>{service.seller}</Text>
                    </div>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                      {service.title}
                    </Title>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <StarFilled style={{ color: '#faad14', fontSize: 14 }} />
                        <Text style={{ color: '#ffffff', fontSize: 14, fontWeight: 600 }}>{service.rating}</Text>
                        <Text style={{ color: '#8c8c8c', fontSize: 12 }}>({service.reviews})</Text>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <ClockCircleOutlined style={{ color: '#8c8c8c', fontSize: 12 }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 12 }}>{service.delivery}</Text>
                      </div>
                    </div>
                    <Tag style={{ background: '#141414', borderColor: '#1f1f1f', color: '#8c8c8c', marginBottom: 16 }}>
                      {service.category}
                    </Tag>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text style={{ color: '#ffffff', fontSize: 24, fontWeight: 700 }}>
                        {service.price} MIN
                      </Text>
                      <Button
                        type="primary"
                        style={{
                          background: '#141414',
                          borderColor: '#1f1f1f',
                          color: '#ffffff',
                          borderRadius: 8,
                          boxShadow: '0 2px 8px rgba(140, 140, 140, 0.2)'
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* All Services */}
        <div style={{ padding: '60px 48px', background: '#0a0a0a', borderTop: '1px solid #1f1f1f' }}>
          <Title level={2} style={{ color: '#ffffff', marginBottom: 32, fontSize: 32, fontWeight: 600 }}>
            All Services
          </Title>
          <Row gutter={[24, 24]}>
            {filteredServices.map((service) => (
              <Col xs={24} sm={12} lg={8} key={service.id}>
                <Card
                  hoverable
                  bordered
                  style={{
                    background: '#000000',
                    borderColor: '#1f1f1f',
                    borderRadius: 12,
                    overflow: 'hidden',
                    height: '100%'
                  }}
                  bodyStyle={{ padding: 0 }}
                >
                  <div style={{ position: 'relative', height: 180, background: '#141414' }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
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
                      <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 700 }}>
                        {service.price} MIN
                      </Text>
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
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  )
}


