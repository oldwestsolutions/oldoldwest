'use client'

import { Layout, Row, Col, Card, Typography, Button, Space, Divider, Tag, Rate, Avatar, Tabs, List, Input, Select } from 'antd'
import Link from 'next/link'
import { ArrowLeftOutlined, StarFilled, ClockCircleOutlined, CheckCircleOutlined, MessageOutlined, HeartOutlined, ShareAltOutlined, SearchOutlined, FilterOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

const { Header, Content } = Layout
const { Title, Text, Paragraph } = Typography
const { TabPane } = Tabs
const { Option } = Select

const serviceData: { [key: string]: any } = {
  'music': {
    title: 'Music Production',
    description: 'Professional audio production tools and services for music creation, mixing, mastering, and sound design.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop',
    features: [
      'Composing, arranging, and producing music',
      'Mixing and mastering tracks',
      'Audio synthesis and sound design',
      'Collaborative music sessions'
    ],
    packages: [
      {
        name: 'Basic Production',
        price: 50,
        delivery: '3 days',
        revisions: 2,
        features: ['Basic mixing', 'Simple arrangement', '1 revision']
      },
      {
        name: 'Standard Production',
        price: 150,
        delivery: '5 days',
        revisions: 3,
        features: ['Professional mixing', 'Full arrangement', 'Mastering included', '3 revisions']
      },
      {
        name: 'Premium Production',
        price: 300,
        delivery: '7 days',
        revisions: 5,
        features: ['Premium mixing & mastering', 'Full production suite', 'Sound design', 'Unlimited revisions']
      }
    ]
  },
  'video-editing': {
    title: 'Video Editing',
    description: 'Professional video editing services including post-production, motion graphics, and visual content creation.',
    image: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=1200&h=600&fit=crop',
    features: [
      'Video montage, editing, and post-production',
      'Color grading and visual effects',
      'Animation and motion graphics',
      'Professional video finishing'
    ],
    packages: [
      {
        name: 'Basic Editing',
        price: 75,
        delivery: '2 days',
        revisions: 2,
        features: ['Basic video editing', '1 revision', 'Standard formats']
      },
      {
        name: 'Standard Editing',
        price: 200,
        delivery: '4 days',
        revisions: 3,
        features: ['Professional editing', '3 revisions', 'All formats', 'Color grading']
      },
      {
        name: 'Premium Editing',
        price: 500,
        delivery: '7 days',
        revisions: 5,
        features: ['Premium editing package', 'Unlimited revisions', 'All formats', 'Motion graphics']
      }
    ]
  },
  'software-engineering': {
    title: 'Software Engineering',
    description: 'Full-stack development, coding, testing, and deployment services for web and software applications.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
    features: [
      'Writing, testing, and deploying code',
      'Full-stack web development',
      'Algorithm development and experimentation',
      'Code review and optimization'
    ],
    packages: [
      {
        name: 'Basic Development',
        price: 150,
        delivery: '5 days',
        revisions: 2,
        features: ['Basic functionality', 'Code delivery', '1 revision']
      },
      {
        name: 'Standard Development',
        price: 400,
        delivery: '10 days',
        revisions: 3,
        features: ['Full functionality', 'Testing included', '3 revisions', 'Documentation']
      },
      {
        name: 'Premium Development',
        price: 800,
        delivery: '14 days',
        revisions: 5,
        features: ['Complete solution', 'Full testing suite', 'Unlimited revisions', 'Maintenance included']
      }
    ]
  },
  'finance': {
    title: 'Trading & Finance',
    description: 'Financial modeling, trading analysis, portfolio management, and algorithmic trading services.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    features: [
      'Algorithmic trading simulations',
      'Data analysis for financial markets',
      'Portfolio modeling and risk assessment',
      'Financial reporting and insights'
    ],
    packages: [
      {
        name: 'Basic Analysis',
        price: 120,
        delivery: '3 days',
        revisions: 1,
        features: ['Basic analysis', 'Simple report', '1 revision']
      },
      {
        name: 'Standard Analysis',
        price: 300,
        delivery: '5 days',
        revisions: 2,
        features: ['Detailed analysis', 'Comprehensive report', '2 revisions', 'Recommendations']
      },
      {
        name: 'Premium Analysis',
        price: 600,
        delivery: '7 days',
        revisions: 3,
        features: ['Advanced analysis', 'Full report suite', '3 revisions', 'Ongoing support']
      }
    ]
  },
  'game-development': {
    title: 'Game Development',
    description: 'Game design, development, and production services for video games and interactive experiences.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
    features: [
      'Game design and prototyping',
      'Game engine development',
      'Character and asset creation',
      'Game testing and optimization'
    ],
    packages: [
      {
        name: 'Basic Development',
        price: 150,
        delivery: '5 days',
        revisions: 2,
        features: ['Basic game mechanics', 'Simple gameplay', '1 revision']
      },
      {
        name: 'Standard Development',
        price: 400,
        delivery: '10 days',
        revisions: 3,
        features: ['Full game features', 'Character design', '3 revisions', 'Testing included']
      },
      {
        name: 'Premium Development',
        price: 800,
        delivery: '14 days',
        revisions: 5,
        features: ['Complete game package', 'Full asset creation', 'Unlimited revisions', 'Ongoing support']
      }
    ]
  },
  'architecture': {
    title: 'Architecture',
    description: 'Architectural design, 3D modeling, building information modeling (BIM), and architectural visualization services.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
    features: [
      'Architectural design and planning',
      '3D modeling and visualization',
      'Building information modeling (BIM)',
      'Architectural rendering and presentation'
    ],
    packages: [
      {
        name: 'Basic Design',
        price: 180,
        delivery: '4 days',
        revisions: 2,
        features: ['Basic architectural design', 'Simple 3D model', '1 revision']
      },
      {
        name: 'Standard Design',
        price: 400,
        delivery: '7 days',
        revisions: 3,
        features: ['Full architectural design', 'Detailed 3D model', '3 revisions', 'BIM included']
      },
      {
        name: 'Premium Design',
        price: 800,
        delivery: '14 days',
        revisions: 5,
        features: ['Complete architectural package', 'Full visualization', 'Unlimited revisions', 'Presentation materials']
      }
    ]
  }
}

export default function ServicePage() {
  const params = useParams()
  const slug = params?.slug as string
  const [isMobile, setIsMobile] = useState(false)
  const service = serviceData[slug] || serviceData['music']

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const mockProviders = [
    {
      id: 1,
      name: 'Professional Studio',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
      rating: 4.9,
      reviews: 127,
      price: service.packages[0].price,
      delivery: service.packages[0].delivery,
      description: 'Experienced professional with 5+ years in the industry'
    },
    {
      id: 2,
      name: 'Creative Agency',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
      rating: 4.8,
      reviews: 89,
      price: service.packages[1].price,
      delivery: service.packages[1].delivery,
      description: 'Award-winning team delivering exceptional results'
    },
    {
      id: 3,
      name: 'Expert Freelancer',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
      rating: 5.0,
      reviews: 203,
      price: service.packages[2].price,
      delivery: service.packages[2].delivery,
      description: 'Top-rated provider with proven track record'
    }
  ]

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
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
          <ArrowLeftOutlined style={{ color: '#8c8c8c', fontSize: 16 }} />
          <Text style={{ color: '#8c8c8c', fontSize: 14 }}>Back to Home</Text>
        </Link>
      </Header>

      <Content>
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #141414 100%)',
          padding: isMobile ? '40px 24px' : '80px 48px',
          borderBottom: '1px solid #1f1f1f'
        }}>
          <Row gutter={[48, 32]}>
            <Col xs={24} lg={12}>
              <div style={{
                width: '100%',
                height: isMobile ? '200px' : '400px',
                background: '#141414',
                borderRadius: 12,
                overflow: 'hidden',
                marginBottom: 24
              }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <Title level={1} style={{ color: '#ffffff', marginBottom: 16, fontSize: isMobile ? 32 : 48, fontWeight: 700 }}>
                {service.title}
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: isMobile ? 14 : 18, lineHeight: 1.8, marginBottom: 32 }}>
                {service.description}
              </Paragraph>
              
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {service.features.map((feature: string, index: number) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <CheckCircleOutlined style={{ color: '#595959', fontSize: 16 }} />
                    <Text style={{ color: '#8c8c8c', fontSize: 14 }}>{feature}</Text>
                  </div>
                ))}
              </Space>
            </Col>
          </Row>
        </div>

        {/* Service Packages */}
        <div style={{ padding: isMobile ? '60px 24px' : '80px 48px', background: '#000000' }}>
          <Title level={2} style={{ color: '#ffffff', marginBottom: 32, fontSize: isMobile ? 28 : 36, fontWeight: 700 }}>
            Service Packages
          </Title>
          <Row gutter={[24, 24]}>
            {service.packages.map((pkg: any, index: number) => (
              <Col xs={24} md={8} key={index}>
                <Card
                  bordered
                  style={{
                    background: '#0a0a0a',
                    borderColor: '#1f1f1f',
                    borderRadius: 12,
                    height: '100%',
                    transition: 'all 0.3s ease'
                  }}
                  bodyStyle={{ padding: 24 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#595959'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(89, 89, 89, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#1f1f1f'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <Title level={3} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
                    {pkg.name}
                  </Title>
                  <div style={{ marginBottom: 24 }}>
                    <Text style={{ color: '#ffffff', fontSize: 36, fontWeight: 700, fontFamily: 'monospace' }}>
                      ${pkg.price}
                    </Text>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <Space>
                      <ClockCircleOutlined style={{ color: '#8c8c8c' }} />
                      <Text style={{ color: '#8c8c8c' }}>{pkg.delivery} delivery</Text>
                    </Space>
                  </div>
                  <Divider style={{ borderColor: '#1f1f1f', margin: '24px 0' }} />
                  <Space direction="vertical" size="middle" style={{ width: '100%', marginBottom: 24 }}>
                    {pkg.features.map((feature: string, idx: number) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <CheckCircleOutlined style={{ color: '#595959', fontSize: 12 }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 13 }}>{feature}</Text>
                      </div>
                    ))}
                  </Space>
                  <Button
                    type="primary"
                    block
                    size="large"
                    style={{
                      background: '#141414',
                      borderColor: '#1f1f1f',
                      color: '#ffffff',
                      borderRadius: 8,
                      height: 48,
                      fontWeight: 600,
                      minHeight: 44
                    }}
                  >
                    Select Package
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Service Providers */}
        <div style={{ padding: isMobile ? '60px 24px' : '80px 48px', background: '#0a0a0a', borderTop: '1px solid #1f1f1f' }}>
          <div style={{ marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <Title level={2} style={{ color: '#ffffff', margin: 0, fontSize: isMobile ? 28 : 36, fontWeight: 700 }}>
              Available Providers
            </Title>
            <Space>
              <Input
                placeholder="Search providers..."
                prefix={<SearchOutlined style={{ color: '#8c8c8c' }} />}
                style={{
                  background: '#000000',
                  borderColor: '#1f1f1f',
                  color: '#ffffff',
                  width: isMobile ? '200px' : '300px'
                }}
              />
              <Select
                defaultValue="all"
                style={{ width: 150, background: '#000000' }}
              >
                <Option value="all">All Ratings</Option>
                <Option value="5">5 Stars</Option>
                <Option value="4">4+ Stars</Option>
                <Option value="3">3+ Stars</Option>
              </Select>
            </Space>
          </div>

          <Row gutter={[24, 24]}>
            {mockProviders.map((provider) => (
              <Col xs={24} md={8} key={provider.id}>
                <Card
                  bordered
                  hoverable
                  style={{
                    background: '#000000',
                    borderColor: '#1f1f1f',
                    borderRadius: 12,
                    transition: 'all 0.3s ease'
                  }}
                  bodyStyle={{ padding: 24 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#595959'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(89, 89, 89, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#1f1f1f'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                    <Avatar size={64} src={provider.avatar} />
                    <div style={{ flex: 1 }}>
                      <Title level={4} style={{ color: '#ffffff', margin: 0, fontSize: 18, fontWeight: 600 }}>
                        {provider.name}
                      </Title>
                      <Space>
                        <Rate disabled defaultValue={provider.rating} style={{ fontSize: 12 }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 12 }}>
                          {provider.rating} ({provider.reviews} reviews)
                        </Text>
                      </Space>
                    </div>
                  </div>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 13, marginBottom: 16 }}>
                    {provider.description}
                  </Paragraph>
                  <Divider style={{ borderColor: '#1f1f1f', margin: '16px 0' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <div>
                      <Text style={{ color: '#ffffff', fontSize: 24, fontWeight: 700, fontFamily: 'monospace' }}>
                        ${provider.price}
                      </Text>
                      <div>
                        <Text style={{ color: '#8c8c8c', fontSize: 12 }}>
                          <ClockCircleOutlined /> {provider.delivery}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    type="primary"
                    block
                    style={{
                      background: '#141414',
                      borderColor: '#1f1f1f',
                      color: '#ffffff',
                      borderRadius: 8,
                      height: 44,
                      fontWeight: 600,
                      minHeight: 44
                    }}
                  >
                    Contact Provider
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  )
}

