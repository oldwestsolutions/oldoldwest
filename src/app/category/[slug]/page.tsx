'use client'

import { Layout, Row, Col, Card, Typography, Button, Space, Tag, Avatar, Rate, Input, Select, Switch, Divider } from 'antd'
import Link from 'next/link'
import { ArrowLeftOutlined, StarFilled, ClockCircleOutlined, SearchOutlined, DownOutlined, CheckCircleOutlined, ThunderboltOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

const { Header, Content } = Layout
const { Title, Text, Paragraph } = Typography
const { Option } = Select

const categoryData: { [key: string]: any } = {
  'music': {
    title: 'Music & Audio Production',
    description: 'Create or improve your music with professional audio production services.',
    icon: '🎵'
  },
  'graphic-design': {
    title: 'Graphic Design & Video Editing',
    description: 'Create stunning visuals with professional design and video editing services.',
    icon: '🎨'
  },
  'coding': {
    title: 'Development & Coding',
    description: 'Build and deploy applications with expert development services.',
    icon: '💻'
  },
  'finance': {
    title: 'Finance & Trading Analysis',
    description: 'Get professional financial analysis and trading strategy services.',
    icon: '💰'
  },
  'collaboration': {
    title: 'Team Collaboration',
    description: 'Set up team workspaces and collaboration tools.',
    icon: '👥'
  },
  'education': {
    title: 'Education & Learning',
    description: 'Access learning platforms and educational content.',
    icon: '📚'
  }
}

const mockListings = [
  {
    id: 1,
    title: 'I will edit any after effects animation',
    seller: 'Kirill Ad',
    sellerLevel: 'Level 1',
    rating: 5.0,
    reviews: 19,
    price: 40,
    delivery: '3 days',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    category: 'Music & Audio',
    isPro: false,
    instantResponse: false
  },
  {
    id: 2,
    title: 'I will edit facebook video ads that actually sell',
    seller: 'Stefan G. Ad',
    sellerLevel: 'Top Rated',
    rating: 4.8,
    reviews: 256,
    price: 250,
    delivery: '2 days',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    category: 'Graphic Design',
    isPro: true,
    instantResponse: true,
    consultations: true
  },
  {
    id: 3,
    title: 'I will edit your videos professionally',
    seller: 'Hamza Mahfooz Ad',
    sellerLevel: 'Top Rated',
    rating: 4.9,
    reviews: 318,
    price: 65,
    delivery: '1 day',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    category: 'Video Editing',
    isPro: true,
    instantResponse: true,
    consultations: true
  },
  {
    id: 4,
    title: 'I will do professional video editing in 24 hours',
    seller: 'Shafin Taosif Ad',
    sellerLevel: 'Top Rated',
    rating: 4.7,
    reviews: 156,
    price: 100,
    delivery: '1 day',
    image: 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=400&h=300&fit=crop',
    category: 'Video Editing',
    isPro: false,
    instantResponse: false
  },
  {
    id: 5,
    title: 'I will provide high quality youtube video editing',
    seller: 'Mukhtiyar Ahmed',
    sellerLevel: "Fiverr's Choice",
    rating: 4.9,
    reviews: 203,
    price: 80,
    delivery: '2 days',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    category: 'Video Editing',
    isPro: false,
    instantResponse: false
  },
  {
    id: 6,
    title: 'I will do funny gaming video editing for youtube and tiktok',
    seller: 'Anbreen Akhtar',
    sellerLevel: 'Level 2',
    rating: 4.6,
    reviews: 89,
    price: 45,
    delivery: '3 days',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    category: 'Video Editing',
    isPro: false,
    instantResponse: false
  },
  {
    id: 7,
    title: 'I will create professional music production',
    seller: 'AudioMaster Pro',
    sellerLevel: 'Top Rated',
    rating: 4.9,
    reviews: 127,
    price: 50,
    delivery: '3 days',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    category: 'Music & Audio',
    isPro: true,
    instantResponse: false
  },
  {
    id: 8,
    title: 'I will design custom logos and branding',
    seller: 'Design Studio X',
    sellerLevel: 'Top Rated',
    rating: 4.8,
    reviews: 89,
    price: 75,
    delivery: '2 days',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    category: 'Graphic Design',
    isPro: false,
    instantResponse: false
  },
  {
    id: 9,
    title: 'I will develop full-stack web applications',
    seller: 'CodeCrafters',
    sellerLevel: 'Top Rated',
    rating: 5.0,
    reviews: 203,
    price: 150,
    delivery: '7 days',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    category: 'Development',
    isPro: true,
    instantResponse: true
  },
  {
    id: 10,
    title: 'I will provide financial analysis and reporting',
    seller: 'Finance Experts',
    sellerLevel: 'Top Rated',
    rating: 4.9,
    reviews: 94,
    price: 120,
    delivery: '4 days',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    category: 'Finance',
    isPro: false,
    instantResponse: false
  },
  {
    id: 11,
    title: 'I will set up team collaboration workspaces',
    seller: 'Workflow Solutions',
    sellerLevel: 'Level 1',
    rating: 4.8,
    reviews: 78,
    price: 80,
    delivery: '2 days',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    category: 'Collaboration',
    isPro: false,
    instantResponse: false
  },
  {
    id: 12,
    title: 'I will create interactive learning modules',
    seller: 'EduPlatform',
    sellerLevel: 'Level 2',
    rating: 4.7,
    reviews: 112,
    price: 60,
    delivery: '3 days',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
    category: 'Education',
    isPro: false,
    instantResponse: false
  }
]

export default function CategoryPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [isMobile, setIsMobile] = useState(false)
  const [sortBy, setSortBy] = useState('best-selling')
  const [proServices, setProServices] = useState(false)
  const [instantResponse, setInstantResponse] = useState(false)
  const [minPrice, setMinPrice] = useState<number | null>(null)
  const [maxPrice, setMaxPrice] = useState<number | null>(null)
  const [deliveryTime, setDeliveryTime] = useState<string | null>(null)

  const category = categoryData[slug] || categoryData['music']
  const categoryMap: { [key: string]: string[] } = {
    'music': ['Music & Audio'],
    'graphic-design': ['Graphic Design', 'Video Editing'],
    'coding': ['Development'],
    'finance': ['Finance'],
    'collaboration': ['Collaboration'],
    'education': ['Education']
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  let filteredListings = mockListings.filter(listing => {
    const categories = categoryMap[slug] || []
    const categoryMatch = categories.length === 0 || categories.includes(listing.category)
    const proMatch = !proServices || listing.isPro
    const instantMatch = !instantResponse || listing.instantResponse
    const priceMatch = (!minPrice || listing.price >= minPrice) && (!maxPrice || listing.price <= maxPrice)
    const deliveryMatch = !deliveryTime || listing.delivery === deliveryTime
    
    return categoryMatch && proMatch && instantMatch && priceMatch && deliveryMatch
  })

  // Sort listings
  if (sortBy === 'best-selling') {
    filteredListings.sort((a, b) => b.reviews - a.reviews)
  } else if (sortBy === 'rating') {
    filteredListings.sort((a, b) => b.rating - a.rating)
  } else if (sortBy === 'price-low') {
    filteredListings.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'price-high') {
    filteredListings.sort((a, b) => b.price - a.price)
  }

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
        {/* Category Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #141414 100%)',
          padding: isMobile ? '40px 24px' : '60px 48px',
          borderBottom: '1px solid #1f1f1f'
        }}>
          <div style={{ marginBottom: 24 }}>
            <Text style={{ color: '#595959', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Home / {category.title}
            </Text>
          </div>
          <Title level={1} style={{ color: '#ffffff', marginBottom: 16, fontSize: isMobile ? 32 : 48, fontWeight: 700 }}>
            {category.title}
          </Title>
          <Paragraph style={{ color: '#8c8c8c', fontSize: isMobile ? 14 : 18, marginBottom: 24 }}>
            {category.description}
          </Paragraph>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Rate disabled defaultValue={4.9} style={{ fontSize: 16 }} />
              <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 600 }}>4.9/5</Text>
            </div>
            <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
              Average rating based on approx. 1.3M reviews in this category
            </Text>
          </div>
        </div>

        {/* Filters and Sort */}
        <div style={{
          background: '#0a0a0a',
          padding: isMobile ? '24px' : '32px 48px',
          borderBottom: '1px solid #1f1f1f',
          position: 'sticky',
          top: 72,
          zIndex: 100
        }}>
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} sm={12} md={6}>
              <Select
                placeholder="Service options"
                style={{ width: '100%', background: '#000000' }}
                suffixIcon={<DownOutlined style={{ color: '#8c8c8c' }} />}
                dropdownStyle={{ background: '#0a0a0a', borderColor: '#1f1f1f' }}
              >
                <Option value="all">All Services</Option>
                <Option value="basic">Basic</Option>
                <Option value="standard">Standard</Option>
                <Option value="premium">Premium</Option>
              </Select>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Select
                placeholder="Seller details"
                style={{ width: '100%', background: '#000000' }}
                suffixIcon={<DownOutlined style={{ color: '#8c8c8c' }} />}
                dropdownStyle={{ background: '#0a0a0a', borderColor: '#1f1f1f' }}
              >
                <Option value="all">All Sellers</Option>
                <Option value="top-rated">Top Rated</Option>
                <Option value="level-1">Level 1</Option>
                <Option value="level-2">Level 2</Option>
              </Select>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Select
                placeholder="Budget"
                style={{ width: '100%', background: '#000000' }}
                suffixIcon={<DownOutlined style={{ color: '#8c8c8c' }} />}
                dropdownStyle={{ background: '#0a0a0a', borderColor: '#1f1f1f' }}
                onChange={(value) => {
                  if (value) {
                    const [min, max] = value.split('-').map(Number)
                    setMinPrice(min)
                    setMaxPrice(max || null)
                  } else {
                    setMinPrice(null)
                    setMaxPrice(null)
                  }
                }}
              >
                <Option value="">All Budgets</Option>
                <Option value="0-50">$0 - $50</Option>
                <Option value="50-100">$50 - $100</Option>
                <Option value="100-200">$100 - $200</Option>
                <Option value="200-">$200+</Option>
              </Select>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Select
                placeholder="Delivery time"
                style={{ width: '100%', background: '#000000' }}
                suffixIcon={<DownOutlined style={{ color: '#8c8c8c' }} />}
                dropdownStyle={{ background: '#0a0a0a', borderColor: '#1f1f1f' }}
                onChange={setDeliveryTime}
              >
                <Option value={null}>Any delivery time</Option>
                <Option value="1 day">1 day</Option>
                <Option value="2 days">2 days</Option>
                <Option value="3 days">3 days</Option>
                <Option value="7 days">7 days</Option>
              </Select>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Switch
                  checked={proServices}
                  onChange={setProServices}
                  style={{ background: proServices ? '#595959' : '#1f1f1f' }}
                />
                <Text style={{ color: '#8c8c8c', fontSize: 13 }}>Pro services</Text>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Switch
                  checked={instantResponse}
                  onChange={setInstantResponse}
                  style={{ background: instantResponse ? '#595959' : '#1f1f1f' }}
                />
                <Text style={{ color: '#8c8c8c', fontSize: 13 }}>
                  Instant response
                  <Tag color="red" style={{ marginLeft: 4, fontSize: 10, padding: '0 4px' }}>New</Tag>
                </Text>
              </div>
            </Col>
            <Col xs={24} md={6} style={{ marginLeft: 'auto', textAlign: isMobile ? 'left' : 'right' }}>
              <Space>
                <Text style={{ color: '#8c8c8c', fontSize: 14 }}>Sort by:</Text>
                <Select
                  value={sortBy}
                  onChange={setSortBy}
                  style={{ width: 150, background: '#000000' }}
                  suffixIcon={<DownOutlined style={{ color: '#8c8c8c' }} />}
                  dropdownStyle={{ background: '#0a0a0a', borderColor: '#1f1f1f' }}
                >
                  <Option value="best-selling">Best selling</Option>
                  <Option value="rating">Highest rated</Option>
                  <Option value="price-low">Price: Low to High</Option>
                  <Option value="price-high">Price: High to Low</Option>
                </Select>
              </Space>
            </Col>
          </Row>
        </div>

        {/* Results Count */}
        <div style={{
          padding: isMobile ? '24px' : '24px 48px',
          background: '#000000',
          borderBottom: '1px solid #1f1f1f'
        }}>
          <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
            {filteredListings.length.toLocaleString()}+ results
          </Text>
          <Text style={{ color: '#595959', fontSize: 12, marginLeft: 16 }}>
            Showing prices for: 1 minute
          </Text>
        </div>

        {/* Listings Grid */}
        <div style={{
          padding: isMobile ? '40px 24px' : '60px 48px',
          background: '#000000'
        }}>
          <Row gutter={[24, 32]}>
            {filteredListings.map((listing) => (
              <Col xs={24} sm={12} md={8} lg={6} key={listing.id}>
                <Link href={`/sellers/${listing.seller.toLowerCase().replace(/\s+/g, '-')}`} style={{ textDecoration: 'none' }}>
                  <Card
                    hoverable
                    bordered
                    style={{
                      background: '#0a0a0a',
                      borderColor: '#1f1f1f',
                      borderRadius: 12,
                      overflow: 'hidden',
                      height: '100%',
                      cursor: 'pointer',
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
                        src={listing.image}
                        alt={listing.title}
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
                      <div style={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        width: 32,
                        height: 32,
                        background: '#000000',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        opacity: 0.8
                      }}>
                        <Text style={{ color: '#ffffff', fontSize: 16 }}>♡</Text>
                      </div>
                      {listing.isPro && (
                        <Tag color="purple" style={{ position: 'absolute', top: 12, left: 12 }}>
                          Pro
                        </Tag>
                      )}
                    </div>
                    <div style={{ padding: 20 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                        <Avatar size={32} style={{ background: '#141414', color: '#ffffff' }}>
                          {listing.seller[0]}
                        </Avatar>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <Text style={{ color: '#ffffff', fontSize: 14, fontWeight: 600, display: 'block' }}>
                            {listing.seller}
                          </Text>
                          <Tag style={{ background: '#141414', borderColor: '#1f1f1f', color: '#8c8c8c', fontSize: 11, marginTop: 4 }}>
                            {listing.sellerLevel}
                          </Tag>
                        </div>
                      </div>
                      <Paragraph
                        ellipsis={{ rows: 2 }}
                        style={{
                          color: '#8c8c8c',
                          fontSize: 14,
                          marginBottom: 12,
                          minHeight: 40,
                          lineHeight: 1.5
                        }}
                      >
                        {listing.title}
                      </Paragraph>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                        <StarFilled style={{ color: '#faad14', fontSize: 12 }} />
                        <Text style={{ color: '#ffffff', fontSize: 13, fontWeight: 600 }}>
                          {listing.rating}
                        </Text>
                        <Text style={{ color: '#8c8c8c', fontSize: 12 }}>
                          ({listing.reviews})
                        </Text>
                      </div>
                      {listing.consultations && (
                        <div style={{ marginBottom: 8 }}>
                          <Text style={{ color: '#595959', fontSize: 11 }}>Offers video consultations</Text>
                        </div>
                      )}
                      <Divider style={{ borderColor: '#1f1f1f', margin: '12px 0' }} />
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <Text style={{ color: '#8c8c8c', fontSize: 11 }}>Starting at</Text>
                          <div>
                            <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 700, fontFamily: 'monospace' }}>
                              ${listing.price}
                            </Text>
                            <Text style={{ color: '#8c8c8c', fontSize: 12 }}> / 1 min</Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  )
}

