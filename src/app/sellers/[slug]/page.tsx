'use client'

import { Layout, Row, Col, Card, Typography, Button, Space, Divider, Tag, Rate, Avatar, Tabs, List, Input, Select } from 'antd'
import Link from 'next/link'
import { ArrowLeftOutlined, StarFilled, ClockCircleOutlined, CheckCircleOutlined, MessageOutlined, HeartOutlined, ShareAltOutlined, SearchOutlined, FilterOutlined, DollarOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

const { Header, Content } = Layout
const { Title, Text, Paragraph } = Typography
const { TabPane } = Tabs
const { Option } = Select

const sellerData: { [key: string]: any } = {
  'audiomaster-pro': {
    name: 'AudioMaster Pro',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AudioMaster',
    rating: 4.9,
    reviews: 127,
    responseTime: '1 hour',
    deliveryTime: '3 days',
    location: 'United States',
    memberSince: '2022',
    category: 'Music Production',
    description: 'Professional audio production specialist with 5+ years of experience in music production, mixing, and mastering.',
    services: [
      {
        id: 1,
        title: 'Professional Music Production',
        price: 50,
        delivery: '3 days',
        rating: 4.9,
        reviews: 127,
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
        description: 'Complete music production service including composition, arrangement, mixing, and mastering.'
      },
      {
        id: 2,
        title: 'Audio Mixing & Mastering',
        price: 35,
        delivery: '2 days',
        rating: 4.8,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
        description: 'Professional mixing and mastering for your tracks.'
      },
      {
        id: 3,
        title: 'Sound Design Package',
        price: 40,
        delivery: '4 days',
        rating: 4.9,
        reviews: 56,
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
        description: 'Custom sound design for games, films, and multimedia projects.'
      }
    ]
  },
  'design-studio-x': {
    name: 'Design Studio X',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DesignStudio',
    rating: 4.8,
    reviews: 89,
    responseTime: '2 hours',
    deliveryTime: '2 days',
    location: 'United Kingdom',
    memberSince: '2021',
    category: 'Architecture',
    description: 'Award-winning design studio specializing in logo design, branding, and visual identity.',
    services: [
      {
        id: 1,
        title: 'Custom Logo Design Package',
        price: 75,
        delivery: '2 days',
        rating: 4.8,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400',
        description: 'Professional logo design with multiple concepts and revisions.'
      }
    ]
  },
  'codecrafters': {
    name: 'CodeCrafters',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CodeCrafters',
    rating: 5.0,
    reviews: 203,
    responseTime: '30 minutes',
    deliveryTime: '7 days',
    location: 'Canada',
    memberSince: '2020',
    category: 'Software Engineering',
    description: 'Full-stack development team with expertise in modern web technologies and cloud solutions.',
    services: [
      {
        id: 1,
        title: 'Full-Stack Web Development',
        price: 150,
        delivery: '7 days',
        rating: 5.0,
        reviews: 203,
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
        description: 'Complete web application development from frontend to backend.'
      }
    ]
  },
  'finance-experts': {
    name: 'Finance Experts',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Finance',
    rating: 4.9,
    reviews: 94,
    responseTime: '1 hour',
    deliveryTime: '4 days',
    location: 'United States',
    memberSince: '2023',
    category: 'Trading & Finance',
    description: 'Financial analysis and trading strategy experts with deep market knowledge.',
    services: [
      {
        id: 1,
        title: 'Financial Analysis & Reporting',
        price: 120,
        delivery: '4 days',
        rating: 4.9,
        reviews: 94,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
        description: 'Comprehensive financial analysis and detailed reporting.'
      }
    ]
  },
  'cinema-edit-pro': {
    name: 'Cinema Edit Pro',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Cinema',
    rating: 4.7,
    reviews: 156,
    responseTime: '2 hours',
    deliveryTime: '5 days',
    location: 'Australia',
    memberSince: '2022',
    category: 'Video Editing',
    description: 'Professional video editing and post-production services for films, commercials, and content.',
    services: [
      {
        id: 1,
        title: 'Video Editing & Post-Production',
        price: 100,
        delivery: '5 days',
        rating: 4.7,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=400',
        description: 'Professional video editing with color grading and effects.'
      }
    ]
  },
  'workflow-solutions': {
    name: 'Workflow Solutions',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Workflow',
    rating: 4.8,
    reviews: 78,
    responseTime: '1 hour',
    deliveryTime: '2 days',
    location: 'Germany',
    memberSince: '2023',
    category: 'Game Development',
    description: 'Team collaboration and workflow optimization specialists.',
    services: [
      {
        id: 1,
        title: 'Team Collaboration Setup',
        price: 80,
        delivery: '2 days',
        rating: 4.8,
        reviews: 78,
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
        description: 'Complete team workspace setup and collaboration tools configuration.'
      }
    ]
  }
}

export default function SellerPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [isMobile, setIsMobile] = useState(false)
  const seller = sellerData[slug] || sellerData['audiomaster-pro']

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Header style={{ 
        background: '#000000', 
        borderBottom: '1px solid #1f1f1f',
        padding: isMobile ? '0 24px' : '0 48px',
        height: '72px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Link href="/marketplace" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
          <ArrowLeftOutlined style={{ color: '#8c8c8c', fontSize: 16 }} />
          <Text style={{ color: '#8c8c8c', fontSize: 14 }}>Back to Marketplace</Text>
        </Link>
      </Header>

      <Content>
        {/* Seller Profile Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #141414 100%)',
          padding: isMobile ? '40px 24px' : '60px 48px',
          borderBottom: '1px solid #1f1f1f'
        }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                <Avatar size={120} src={seller.avatar} style={{ marginBottom: 24 }} />
                <Title level={2} style={{ color: '#ffffff', marginBottom: 8, fontSize: isMobile ? 28 : 32, fontWeight: 700 }}>
                  {seller.name}
                </Title>
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: isMobile ? 'center' : 'flex-start' }}>
                    <StarFilled style={{ color: '#faad14', fontSize: 16 }} />
                    <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 600 }}>{seller.rating}</Text>
                    <Text style={{ color: '#8c8c8c', fontSize: 14 }}>({seller.reviews} reviews)</Text>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: isMobile ? 'center' : 'flex-start' }}>
                    <CheckCircleOutlined style={{ color: '#52c41a', fontSize: 14 }} />
                    <Text style={{ color: '#8c8c8c', fontSize: 14 }}>Response time: {seller.responseTime}</Text>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: isMobile ? 'center' : 'flex-start' }}>
                    <ClockCircleOutlined style={{ color: '#8c8c8c', fontSize: 14 }} />
                    <Text style={{ color: '#8c8c8c', fontSize: 14 }}>Avg. delivery: {seller.deliveryTime}</Text>
                  </div>
                  <Tag style={{ background: '#141414', borderColor: '#1f1f1f', color: '#8c8c8c', marginTop: 8 }}>
                    {seller.category}
                  </Tag>
                </Space>
              </div>
            </Col>
            <Col xs={24} md={16}>
              <Title level={3} style={{ color: '#ffffff', marginBottom: 16, fontSize: isMobile ? 20 : 24, fontWeight: 600 }}>
                About {seller.name}
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: isMobile ? 14 : 16, lineHeight: 1.8, marginBottom: 24 }}>
                {seller.description}
              </Paragraph>
              <Space size="large" wrap>
                <div>
                  <Text style={{ color: '#595959', fontSize: 12 }}>Location</Text>
                  <div><Text style={{ color: '#8c8c8c', fontSize: 14 }}>{seller.location}</Text></div>
                </div>
                <div>
                  <Text style={{ color: '#595959', fontSize: 12 }}>Member Since</Text>
                  <div><Text style={{ color: '#8c8c8c', fontSize: 14 }}>{seller.memberSince}</Text></div>
                </div>
              </Space>
            </Col>
          </Row>
        </div>

        {/* Services Offered */}
        <div style={{ padding: isMobile ? '60px 24px' : '80px 48px', background: '#000000' }}>
          <Title level={2} style={{ color: '#ffffff', marginBottom: 32, fontSize: isMobile ? 28 : 36, fontWeight: 700 }}>
            Services Offered
          </Title>
          <Row gutter={[24, 24]}>
            {seller.services.map((service: any) => (
              <Col xs={24} md={12} lg={8} key={service.id}>
                <Card
                  bordered
                  hoverable
                  style={{
                    background: '#0a0a0a',
                    borderColor: '#1f1f1f',
                    borderRadius: 12,
                    height: '100%',
                    transition: 'all 0.3s ease'
                  }}
                  bodyStyle={{ padding: 0 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#595959'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(89, 89, 89, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#1f1f1f'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ position: 'relative', height: 200, background: '#141414' }}>
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
                    />
                  </div>
                  <div style={{ padding: 24 }}>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>
                      {service.title}
                    </Title>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 13, marginBottom: 16, minHeight: 40 }}>
                      {service.description}
                    </Paragraph>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <StarFilled style={{ color: '#faad14', fontSize: 12 }} />
                        <Text style={{ color: '#ffffff', fontSize: 13, fontWeight: 600 }}>{service.rating}</Text>
                        <Text style={{ color: '#8c8c8c', fontSize: 12 }}>({service.reviews})</Text>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <ClockCircleOutlined style={{ color: '#8c8c8c', fontSize: 12 }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 12 }}>{service.delivery}</Text>
                      </div>
                    </div>
                    <Divider style={{ borderColor: '#1f1f1f', margin: '16px 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text style={{ color: '#ffffff', fontSize: 24, fontWeight: 700, fontFamily: 'monospace' }}>
                        {service.price} MIN
                      </Text>
                      <Button
                        type="primary"
                        style={{
                          background: '#141414',
                          borderColor: '#1f1f1f',
                          color: '#ffffff',
                          borderRadius: 8,
                          fontWeight: 600,
                          minHeight: 44
                        }}
                      >
                        Order Now
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

