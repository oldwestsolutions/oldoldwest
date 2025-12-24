'use client'

import Link from 'next/link'
import { Layout, Row, Col, Card, Typography, Divider, Button, Progress, Space, Dropdown, Carousel, List } from 'antd'
import { AppstoreOutlined, DatabaseOutlined, ClockCircleOutlined, CheckCircleOutlined, SafetyOutlined, FileTextOutlined, ApiOutlined, GlobalOutlined, InfoCircleOutlined, QuestionCircleOutlined, BookOutlined, CodeOutlined, TrophyOutlined, CheckCircleFilled, FileProtectOutlined, DownOutlined, GiftOutlined, RocketOutlined, PhoneOutlined } from '@ant-design/icons'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import type { MenuProps } from 'antd'

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false })
const HeroVideoBackground = dynamic(() => import('@/components/HeroVideoBackground'), { ssr: false })

const { Header, Content, Footer } = Layout
const { Title, Paragraph, Text } = Typography

export default function Home() {
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

  const launchMenuItems: MenuProps['items'] = [
    {
      key: 'host',
      label: <Link href="/host-session" style={{ color: '#ffffff', textDecoration: 'none' }}>Host Session</Link>,
    },
    {
      key: 'launch',
      label: <Link href="/launch-session" style={{ color: '#ffffff', textDecoration: 'none' }}>Launch Session</Link>,
    },
  ]
  return (
    <Layout style={{ minHeight: '100vh', background: '#000000' }}>
      {/* Navigation */}
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
        <Row align="middle" gutter={24}>
          <Col>
            <div style={{ 
              width: 32, 
              height: 32, 
              background: '#141414', 
              border: '1px solid #1f1f1f',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8
            }}>
              <div style={{ width: 16, height: 16, background: '#595959', borderRadius: 4 }}></div>
            </div>
          </Col>
          <Col>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Text strong style={{ fontSize: 18, color: '#ffffff', letterSpacing: '0.5px' }}>OLDWEST</Text>
            </Link>
          </Col>
        </Row>
        <Space size="middle">
          <Dropdown menu={{ items: launchMenuItems }} placement="bottomLeft">
            <Button 
              type="text" 
              style={{ color: '#8c8c8c', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 4 }}
            >
              LAUNCH SESSION
              <DownOutlined style={{ fontSize: 10 }} />
            </Button>
          </Dropdown>
          <Button 
            type="primary" 
            style={{ 
              background: '#141414', 
              borderColor: '#1f1f1f',
              color: '#ffffff',
              borderRadius: 12,
              fontWeight: 600,
              boxShadow: 'none'
            }}
            href="/account"
          >
            ACCOUNT
          </Button>
        </Space>
      </Header>

      <Content style={{ marginTop: isHeaderVisible ? 0 : 0 }}>
        {/* Hero Section - Two Column */}
        <section style={{ 
          minHeight: '100vh', 
          borderBottom: '1px solid #1f1f1f', 
          padding: '120px 48px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Video Background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            opacity: 0.3
          }}>
            <HeroVideoBackground />
          </div>
          <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
            <Row justify="center" align="middle" gutter={[64, 48]} style={{ width: '100%' }}>
              <Col xs={24} lg={12}>
                <Title 
                  level={1} 
                  style={{ 
                    fontSize: 72, 
                    fontWeight: 700, 
                    color: '#ffffff',
                    marginBottom: 32,
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em'
                  }}
                >
                  Create Anything
                </Title>
                <Paragraph style={{ fontSize: 20, color: '#8c8c8c', lineHeight: 1.8, marginBottom: 40 }}>
                  Your Virtual Environment. Secure. Sovereign. Limitless
                </Paragraph>
                <Space size="middle">
                  <Button 
                    type="primary"
                    size="large"
                    style={{ 
                      background: '#000000', 
                      borderColor: '#1f1f1f',
                      color: '#ffffff',
                      borderRadius: 12,
                      fontWeight: 600,
                      height: 52,
                      paddingLeft: 40,
                      paddingRight: 40,
                      boxShadow: 'none'
                    }}
                    href="/explore-platform"
                  >
                    EXPLORE PLATFORM
                  </Button>
                  <Button 
                    size="large"
                    style={{ 
                      background: '#141414', 
                      borderColor: '#1f1f1f',
                      color: '#d9d9d9',
                      borderRadius: 12,
                      fontWeight: 600,
                      height: 52,
                      paddingLeft: 40,
                      paddingRight: 40
                    }}
                    href="/download-app"
                  >
                    DOWNLOAD APP
                  </Button>
                </Space>
              </Col>
              <Col xs={24} lg={12}>
                <HeroScene />
              </Col>
            </Row>
        </div>
      </section>

        {/* VM Services Carousel */}
        <section style={{ 
          minHeight: '100vh', 
          borderBottom: '1px solid #1f1f1f', 
          background: '#0a0a0a',
          padding: '120px 48px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Row justify="center" style={{ width: '100%' }}>
            <Col xs={24} lg={20} xl={16}>
              <div style={{ marginBottom: 64 }}>
                <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                  VM SERVICES
                </Text>
                <Divider style={{ margin: '8px 0 0 0', borderColor: '#1f1f1f' }} />
          </div>
              
              <Title level={2} style={{ color: '#ffffff', marginBottom: 48, fontSize: 40, fontWeight: 600, textAlign: 'center' }}>
                Services Offered Through Virtual Machine Environment
              </Title>

              <Carousel
                autoplay
                autoplaySpeed={3000}
                dots={true}
                infinite
                slidesToShow={2}
                slidesToScroll={1}
                responsive={[
                  { breakpoint: 1024, settings: { slidesToShow: 1 } }
                ]}
              >
                {[
                  {
                    title: 'Music & Audio Engineering',
                    items: [
                      'Composing, arranging, and producing music',
                      'Mixing and mastering tracks',
                      'Audio synthesis and sound design',
                      'Collaborative music sessions',
                      'Practicing or performing with virtual instruments'
                    ]
                  },
                  {
                    title: 'Graphic Design & Video Editing',
                    items: [
                      'Image creation and enhancement',
                      'Video montage, editing, and post-production',
                      'Animation and motion graphics',
                      'AI-assisted content creation (photogenic pictures/videos)',
                      'Collaborative creative projects'
                    ]
                  },
                  {
                    title: 'Coding & Software Development',
                    items: [
                      'Writing, testing, and deploying code',
                      'Collaborative coding sessions',
                      'Algorithm development and experimentation',
                      'Running scripts, simulations, or software projects'
                    ]
                  },
                  {
                    title: 'Finance',
                    items: [
                      'Algorithmic trading simulations',
                      'Data analysis for financial markets',
                      'Portfolio modeling and risk assessment',
                      'Backtesting trading strategies'
                    ]
                  },
                  {
                    title: 'Collaboration & Project-Based Work',
                    items: [
                      'Multi-user sessions for joint projects',
                      'Sharing VM resources for teamwork',
                      'Merit and token rewards for contributions',
                      'Project tracking and analytics'
                    ]
                  },
                  {
                    title: 'Education & Learning',
                    items: [
                      'Skill-building exercises (coding, music, design)',
                      'Virtual workshops or tutorials',
                      'Mentorship and guided learning sessions'
                    ]
                  }
                ].map((service, index) => {
                  // Animated GIFs from Giphy - tech/abstract themed
                  const animatedImages = [
                    'https://media.giphy.com/media/3o7aCTPPm4OHfRLSH6/giphy.gif', // Abstract tech
                    'https://media.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif', // Digital art
                    'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif', // Code/data
                    'https://media.giphy.com/media/3o7aD2sa0vjP2Zgvva/giphy.gif', // Network/connection
                    'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif', // Collaboration
                    'https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif'  // Learning
                  ]
                  
                  // Alternative: Use Pexels animated video thumbnails
                  const pexelsVideos = [
                    'https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=2&w=800',
                    'https://images.pexels.com/videos/2491284/free-video-2491284.jpg?auto=compress&cs=tinysrgb&dpr=2&w=800',
                    'https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=2&w=800',
                    'https://images.pexels.com/videos/2491284/free-video-2491284.jpg?auto=compress&cs=tinysrgb&dpr=2&w=800',
                    'https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=2&w=800',
                    'https://images.pexels.com/videos/2491284/free-video-2491284.jpg?auto=compress&cs=tinysrgb&dpr=2&w=800'
                  ]
                  
                  // Use Giphy animated GIFs as primary, Pexels as fallback
                  const imageUrl = animatedImages[index % animatedImages.length]
                  
                  return (
                    <div key={index} style={{ padding: '0 12px' }}>
                      <Card
                        bordered
                        style={{
                          background: '#000000',
                          borderColor: '#1f1f1f',
                          borderRadius: 12,
                          height: '100%',
                          minHeight: 300,
                          overflow: 'hidden'
                        }}
                        bodyStyle={{ padding: 0 }}
                      >
                        <div style={{ position: 'relative', height: 200, background: '#141414' }}>
                          <img
                            src={imageUrl}
                            alt={service.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              opacity: 0.9
                            }}
                            onError={(e) => {
                              // Fallback to Pexels or gradient if Giphy fails
                              const target = e.target as HTMLImageElement
                              const fallbackUrl = pexelsVideos[index % pexelsVideos.length]
                              if (target.src !== fallbackUrl) {
                                target.src = fallbackUrl
                              } else {
                                target.style.display = 'none'
                                if (target.parentElement) {
                                  target.parentElement.style.background = 'linear-gradient(135deg, #141414 0%, #0a0a0a 100%)'
                                }
                              }
                            }}
                          />
                          <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)',
                            padding: '24px 32px'
                          }}>
                            <Title level={3} style={{ color: '#ffffff', margin: 0, fontSize: 24, fontWeight: 600 }}>
                              {service.title}
                            </Title>
                          </div>
                        </div>
                      </Card>
                    </div>
                  )
                })}
              </Carousel>
            </Col>
          </Row>
        </section>

        {/* VM Minutes Explanation */}
        <section style={{ 
          minHeight: '100vh', 
          borderBottom: '1px solid #1f1f1f', 
          padding: '120px 48px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Row justify="center" gutter={[64, 48]} style={{ width: '100%' }}>
            <Col xs={24} lg={12}>
              <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                VM MINUTES
              </Text>
              <Divider style={{ margin: '8px 0 40px 0', borderColor: '#1f1f1f' }} />
              
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div>
                  <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                    What Minutes Are
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                    VM minutes are compute credits that meter your usage of the platform. Each minute represents a unit of virtual machine runtime consumed during your session. Minutes function as a transparent, accountable currency for platform resources, ensuring every interaction has a defined cost.
                  </Paragraph>
                </div>

                <div>
                  <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                    Why They Exist
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                    Minutes ensure accountable resource consumption. Every interaction requires compute resources—processing, storage, bandwidth. Minutes provide transparent, metered access to these resources, preventing abuse and ensuring fair usage across all users.
                  </Paragraph>
        </div>

            <div>
                  <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                    What Actions Consume Minutes
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                    Messaging, viewing content, establishing connections, and all platform interactions consume minutes at defined rates per action type. Rates are published and visible before execution, ensuring complete transparency in resource consumption.
                  </Paragraph>
                </div>

                <div>
                  <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                    How Users Acquire Minutes
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                    Minutes are purchased and added to your account balance. Usage is deducted from your balance in real-time as you interact with the platform. Balances can be replenished at any time, and usage history is available for complete transparency.
                  </Paragraph>
                </div>
              </Space>
            </Col>

            <Col xs={24} lg={12}>
              <Card 
                bordered 
                style={{ 
                  background: '#0a0a0a', 
                  borderColor: '#1f1f1f',
                  borderRadius: 12
                }}
                bodyStyle={{ padding: 40 }}
              >
                <div style={{ marginBottom: 32 }}>
                  <Row justify="space-between" style={{ marginBottom: 12 }}>
                    <Col>
                      <Text style={{ fontSize: 11, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                        BALANCE
                      </Text>
                    </Col>
                    <Col>
                      <Text style={{ fontSize: 11, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                        RATE
                      </Text>
                    </Col>
                  </Row>
                  <Progress 
                    percent={65} 
                    strokeColor="#595959"
                    trailColor="#141414"
                    showInfo={false}
                    style={{ marginBottom: 12 }}
                  />
                  <Row justify="space-between">
                    <Col>
                      <Text style={{ color: '#d9d9d9', fontFamily: 'monospace', fontSize: 18, fontWeight: 600 }}>
                        1,247 MIN
                      </Text>
                    </Col>
                    <Col>
                      <Text style={{ color: '#8c8c8c', fontFamily: 'monospace', fontSize: 16 }}>
                        0.5 MIN/MSG
                      </Text>
                    </Col>
                  </Row>
                  <Paragraph style={{ color: '#595959', fontSize: 13, marginTop: 16, lineHeight: 1.6, marginBottom: 0 }}>
                    Your current account balance shows 1,247 minutes available. The consumption rate for messaging is 0.5 minutes per message sent. This rate applies to all direct messages and is deducted immediately upon message delivery.
                  </Paragraph>
                </div>

                <Divider style={{ borderColor: '#1f1f1f', margin: '32px 0' }} />

                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                  <div>
                    <Row justify="space-between" style={{ marginBottom: 8 }}>
                      <Col>
                        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>Session Duration</Text>
                      </Col>
                      <Col>
                        <Text style={{ color: '#d9d9d9', fontFamily: 'monospace', fontSize: 16, fontWeight: 500 }}>12:34</Text>
                      </Col>
                    </Row>
                    <Paragraph style={{ color: '#595959', fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                      Total time elapsed in your current active session, measured from login to present moment.
                    </Paragraph>
              </div>
                  
                  <div>
                    <Row justify="space-between" style={{ marginBottom: 8 }}>
                      <Col>
                        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>Consumed This Session</Text>
                      </Col>
                      <Col>
                        <Text style={{ color: '#d9d9d9', fontFamily: 'monospace', fontSize: 16, fontWeight: 500 }}>23 MIN</Text>
                      </Col>
                    </Row>
                    <Paragraph style={{ color: '#595959', fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                      Total minutes consumed during the current session through all interactions, including messaging, content viewing, and connection establishment.
                    </Paragraph>
            </div>
                  
                  <div>
                    <Row justify="space-between" style={{ marginBottom: 8 }}>
                      <Col>
                        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>Remaining Balance</Text>
                      </Col>
                      <Col>
                        <Text style={{ color: '#d9d9d9', fontFamily: 'monospace', fontSize: 16, fontWeight: 500 }}>1,224 MIN</Text>
                      </Col>
                    </Row>
                    <Paragraph style={{ color: '#595959', fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                      Available minutes remaining after deducting all session consumption. This balance will be used for future interactions until replenished.
                    </Paragraph>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Tokenomics */}
        <section style={{ 
          minHeight: '100vh', 
          borderBottom: '1px solid #1f1f1f', 
          background: '#0a0a0a', 
          padding: '120px 48px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Row justify="center" style={{ width: '100%' }}>
            <Col xs={24} lg={20} xl={16}>
              <div style={{ marginBottom: 64 }}>
                <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                  TOKENOMICS
                </Text>
                <Divider style={{ margin: '8px 0 0 0', borderColor: '#1f1f1f' }} />
              </div>

              <Title level={2} style={{ color: '#ffffff', marginBottom: 24, fontSize: 40, fontWeight: 600, textAlign: 'center' }}>
                Platform Tokenomics
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 18, lineHeight: 1.8, marginBottom: 48, textAlign: 'center' }}>
                OldWest's tokenomics enable paid placement, equity verification, and merit-based NFTs through a transparent, blockchain-integrated system.
              </Paragraph>

              <Row gutter={[32, 32]}>
                <Col xs={24} md={8}>
                  <Card 
                    bordered 
                    style={{ 
                      background: '#000000', 
                      borderColor: '#1f1f1f',
                      borderRadius: 12,
                      height: '100%'
                    }}
                    bodyStyle={{ padding: 32 }}
                  >
                    <div style={{ 
                      width: 56, 
                      height: 56, 
                      background: '#141414', 
                      border: '1px solid #1f1f1f',
                      borderRadius: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 24
                    }}>
                      <DatabaseOutlined style={{ fontSize: 28, color: '#595959' }} />
                    </div>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                      Paid Placement
                    </Title>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                      Users can purchase premium placement for content, services, or profiles using VM minutes. This creates a transparent marketplace where visibility is directly tied to platform usage and contribution.
                    </Paragraph>
                  </Card>
                </Col>

                <Col xs={24} md={8}>
                  <Card 
                    bordered 
                    style={{ 
                      background: '#000000', 
                      borderColor: '#1f1f1f',
                      borderRadius: 12,
                      height: '100%'
                    }}
                    bodyStyle={{ padding: 32 }}
                  >
                    <div style={{ 
                      width: 56, 
                      height: 56, 
                      background: '#141414', 
                      border: '1px solid #1f1f1f',
                      borderRadius: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 24
                    }}>
                      <CheckCircleOutlined style={{ fontSize: 28, color: '#595959' }} />
                    </div>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                      Equity Verification
                    </Title>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                      Platform equity and ownership stakes are verified on-chain through Cosmos smart contracts. This ensures transparent, immutable records of equity distribution and ownership verification.
                    </Paragraph>
                  </Card>
                </Col>

                <Col xs={24} md={8}>
                  <Card 
                    bordered 
                    style={{ 
                      background: '#000000', 
                      borderColor: '#1f1f1f',
                      borderRadius: 12,
                      height: '100%'
                    }}
                    bodyStyle={{ padding: 32 }}
                  >
                    <div style={{ 
                      width: 56, 
                      height: 56, 
                      background: '#141414', 
                      border: '1px solid #1f1f1f',
                      borderRadius: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 24
                    }}>
                      <GiftOutlined style={{ fontSize: 28, color: '#595959' }} />
                </div>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                      Merit-Based NFTs
                    </Title>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                      Achievements and verified contributions automatically mint NFTs on Cosmos. These tokens unlock platform perks, demonstrate verified skills, and serve as reputation assets.
                    </Paragraph>
                  </Card>
                </Col>
              </Row>

              <Card 
                bordered 
                style={{ 
                  background: '#000000', 
                  borderColor: '#1f1f1f',
                  borderRadius: 12,
                  marginTop: 48
                }}
                bodyStyle={{ padding: 48 }}
              >
                <Title level={3} style={{ color: '#ffffff', marginBottom: 24, fontSize: 24, fontWeight: 600, textAlign: 'center' }}>
                  Tokenomics Diagram
                </Title>
                <div style={{
                  background: '#141414',
                  border: '1px solid #1f1f1f',
                  borderRadius: 12,
                  padding: 48,
                  textAlign: 'center',
                  minHeight: 300,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: 80,
                        height: 80,
                        background: '#0a0a0a',
                        border: '1px solid #1f1f1f',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px'
                      }}>
                        <DatabaseOutlined style={{ fontSize: 40, color: '#595959' }} />
                      </div>
                      <Text style={{ color: '#ffffff', fontSize: 14, display: 'block' }}>VM Minutes</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', color: '#595959', fontSize: 24 }}>→</div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: 80,
                        height: 80,
                        background: '#0a0a0a',
                        border: '1px solid #1f1f1f',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px'
                      }}>
                        <GiftOutlined style={{ fontSize: 40, color: '#595959' }} />
                      </div>
                      <Text style={{ color: '#ffffff', fontSize: 14, display: 'block' }}>Merit NFTs</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', color: '#595959', fontSize: 24 }}>→</div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        width: 80,
                        height: 80,
                        background: '#0a0a0a',
                        border: '1px solid #1f1f1f',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px'
                      }}>
                        <CheckCircleOutlined style={{ fontSize: 40, color: '#595959' }} />
                      </div>
                      <Text style={{ color: '#ffffff', fontSize: 14, display: 'block' }}>Equity & Placement</Text>
                    </div>
                  </div>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, marginTop: 32, maxWidth: 600 }}>
                    VM minutes are consumed for platform usage. Achievements mint merit NFTs. NFTs unlock paid placement opportunities and equity verification, creating a self-sustaining token economy.
                  </Paragraph>
                </div>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Trust & Infrastructure */}
        <section style={{ 
          minHeight: '100vh', 
          borderBottom: '1px solid #1f1f1f', 
          padding: '120px 48px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Row justify="center" style={{ width: '100%' }}>
            <Col xs={24} lg={20} xl={16}>
              <div style={{ marginBottom: 64 }}>
                <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                  TRUST & INFRASTRUCTURE
                </Text>
                <Divider style={{ margin: '8px 0 0 0', borderColor: '#1f1f1f' }} />
              </div>

              <Card 
                bordered 
                style={{ 
                  background: '#000000', 
                  borderColor: '#1f1f1f',
                  borderRadius: 12
                }}
                bodyStyle={{ padding: 48 }}
              >
                <Row gutter={[48, 48]} align="middle">
                  <Col xs={24} md={12}>
                    <div style={{
                      width: '100%',
                      height: 300,
                      background: '#141414',
                      border: '1px solid #1f1f1f',
                      borderRadius: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      gap: 16
                    }}>
                      <PhoneOutlined style={{ fontSize: 64, color: '#595959' }} />
                      <div style={{
                        width: 120,
                        height: 80,
                        background: '#0a0a0a',
                        border: '1px solid #1f1f1f',
                        borderRadius: 8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 16
                      }}>
                        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>+1 (555) 123-4567</Text>
            </div>
          </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <Title level={3} style={{ color: '#ffffff', marginBottom: 16, fontSize: 28, fontWeight: 600 }}>
                      Phone Number Verification
                    </Title>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
                      All users sign up with a verified phone number, ensuring every account is tied to a real, verifiable identity. This telecom-verified secure system connects you only with verified individuals.
                    </Paragraph>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
                      The phone number verification process establishes a single, accountable identity tied to all usage and settlement activities, preventing abuse and ensuring platform security.
                    </Paragraph>
                    <Button 
                      type="primary"
                      size="large"
                      style={{
                        background: '#141414',
                        borderColor: '#1f1f1f',
                        color: '#ffffff',
                        borderRadius: 12
                      }}
                      href="/create-account"
                    >
                      Sign Up with Phone Number
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
      </section>

        {/* Platform Carousel */}
        <section style={{ 
          minHeight: '100vh', 
          background: '#0a0a0a', 
          padding: '120px 48px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Row justify="center" style={{ width: '100%' }}>
            <Col xs={24} lg={20} xl={16}>
              <div style={{ marginBottom: 64 }}>
                <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                  INTEGRATED PLATFORMS
                </Text>
                <Divider style={{ margin: '8px 0 0 0', borderColor: '#1f1f1f' }} />
          </div>
              <Carousel
                autoplay
                autoplaySpeed={2000}
                dots={true}
                infinite
                slidesToShow={3}
                slidesToScroll={1}
                responsive={[
                  { breakpoint: 1024, settings: { slidesToShow: 2 } },
                  { breakpoint: 768, settings: { slidesToShow: 1 } }
                ]}
              >
                {[
                  { name: 'Coursera', logo: 'https://cdn.simpleicons.org/coursera/0056D2' },
                  { name: 'YouTube', logo: 'https://cdn.simpleicons.org/youtube/FF0000' },
                  { name: 'TikTok', logo: 'https://cdn.simpleicons.org/tiktok/000000' },
                  { name: 'Instagram', logo: 'https://cdn.simpleicons.org/instagram/E4405F' },
                  { name: 'LinkedIn', logo: 'https://cdn.simpleicons.org/linkedin/0A66C2' },
                  { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/181717' }
                ].map((platform) => (
                  <div key={platform.name} style={{ padding: '0 12px' }}>
                    <Card
                      bordered
                      style={{
                        background: '#000000',
                        borderColor: '#1f1f1f',
                        borderRadius: 12,
                        height: 200,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      bodyStyle={{ padding: 32, textAlign: 'center' }}
                    >
                      <img
                        src={platform.logo}
                        alt={platform.name}
                        style={{
                          maxWidth: '120px',
                          maxHeight: '120px',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain'
                        }}
                        onError={(e) => {
                          // Fallback to text if logo fails to load
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent) {
                            const title = document.createElement('h3')
                            title.textContent = platform.name
                            title.style.color = '#ffffff'
                            title.style.fontSize = '32px'
                            title.style.fontWeight = '600'
                            title.style.margin = '0'
                            parent.appendChild(title)
                          }
                        }}
                      />
                    </Card>
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
        </section>
      </Content>

      {/* Comprehensive Footer */}
      <Footer style={{ 
        background: '#000000', 
        borderTop: '1px solid #1f1f1f',
        padding: '80px 48px 40px 48px'
      }}>
        <Row gutter={[48, 48]}>
          <Col xs={24} sm={12} md={6}>
            <Row align="middle" gutter={12} style={{ marginBottom: 32 }}>
              <Col>
                <div style={{ 
                  width: 40, 
                  height: 40, 
                  background: '#141414', 
                  border: '1px solid #1f1f1f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8
                }}>
                  <div style={{ width: 20, height: 20, background: '#595959', borderRadius: 4 }}></div>
                </div>
              </Col>
              <Col>
                <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: 600, letterSpacing: '0.5px' }}>OLDWEST</Text>
              </Col>
            </Row>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, marginBottom: 0 }}>
              Social infrastructure metered by design. Utility-grade platform for accountable digital interaction.
            </Paragraph>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: '#ffffff', marginBottom: 24, fontSize: 14, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Platform
            </Title>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Link href="/access-network" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Access Network</Link>
              <Link href="/create-account" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Create Account</Link>
              <Link href="/usage-model" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Usage Model</Link>
            </Space>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: '#ffffff', marginBottom: 24, fontSize: 14, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Documentation
            </Title>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Link href="/documentation/api" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>API Reference</Link>
              <Link href="/documentation/developer-guide" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Developer Guide</Link>
              <Link href="/documentation/integration" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Integration Guide</Link>
              <Link href="/documentation/sdk" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>SDK Documentation</Link>
            </Space>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: '#ffffff', marginBottom: 24, fontSize: 14, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Support
            </Title>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Link href="#" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Help Center</Link>
              <Link href="#" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Contact Support</Link>
              <Link href="#" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Status Page</Link>
              <Link href="#" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>FAQ</Link>
            </Space>
          </Col>
        </Row>
        
        <Divider style={{ borderColor: '#1f1f1f', margin: '48px 0 32px 0' }} />
        
        <Row justify="space-between" align="middle">
          <Col>
            <Text style={{ color: '#595959', fontSize: 12 }}>
              © 2025 OldWest. All rights reserved.
            </Text>
          </Col>
          <Col>
            <Space size="large">
              <Link 
                href="/privacy-policy" 
                style={{ 
                  color: '#595959', 
                  fontSize: 12,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  textShadow: '0 0 0px rgba(255, 255, 255, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.5), 0 0 12px rgba(255, 255, 255, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#595959'
                  e.currentTarget.style.textShadow = '0 0 0px rgba(255, 255, 255, 0)'
                }}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                style={{ 
                  color: '#595959', 
                  fontSize: 12,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  textShadow: '0 0 0px rgba(255, 255, 255, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.5), 0 0 12px rgba(255, 255, 255, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#595959'
                  e.currentTarget.style.textShadow = '0 0 0px rgba(255, 255, 255, 0)'
                }}
              >
                Terms of Service
              </Link>
              <Link 
                href="/security" 
                style={{ 
                  color: '#595959', 
                  fontSize: 12,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  textShadow: '0 0 0px rgba(255, 255, 255, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.5), 0 0 12px rgba(255, 255, 255, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#595959'
                  e.currentTarget.style.textShadow = '0 0 0px rgba(255, 255, 255, 0)'
                }}
              >
                Security
              </Link>
              <Link 
                href="/compliance" 
                style={{ 
                  color: '#595959', 
                  fontSize: 12,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  textShadow: '0 0 0px rgba(255, 255, 255, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.5), 0 0 12px rgba(255, 255, 255, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#595959'
                  e.currentTarget.style.textShadow = '0 0 0px rgba(255, 255, 255, 0)'
                }}
              >
                Compliance
              </Link>
              <Link 
                href="/whitepaper" 
                style={{ 
                  color: '#595959', 
                  fontSize: 12,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  textShadow: '0 0 0px rgba(255, 255, 255, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.5), 0 0 12px rgba(255, 255, 255, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#595959'
                  e.currentTarget.style.textShadow = '0 0 0px rgba(255, 255, 255, 0)'
                }}
              >
                White Paper
              </Link>
            </Space>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}
