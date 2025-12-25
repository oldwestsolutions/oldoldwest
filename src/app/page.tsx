'use client'

import Link from 'next/link'
import { Layout, Row, Col, Card, Typography, Divider, Button, Progress, Space, Dropdown, List } from 'antd'
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
          <Col>
            <Link href="/marketplace" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#8c8c8c'}
            >
              Marketplace
            </Link>
          </Col>
          <Col>
            <Link href="/treasury" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#8c8c8c'}
            >
              Treasury
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

        {/* VM Services */}
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

              <Row gutter={[16, 24]}>
                {[
                  {
                    title: 'Music',
                    description: 'Audio production tools',
                    items: [
                      'Composing, arranging, and producing music',
                      'Mixing and mastering tracks',
                      'Audio synthesis and sound design',
                      'Collaborative music sessions',
                      'Practicing or performing with virtual instruments'
                    ]
                  },
                  {
                    title: 'Graphic Design',
                    description: 'Design and video editing',
                    items: [
                      'Image creation and enhancement',
                      'Video montage, editing, and post-production',
                      'Animation and motion graphics',
                      'AI-assisted content creation (photogenic pictures/videos)',
                      'Collaborative creative projects'
                    ]
                  },
                  {
                    title: 'Coding',
                    description: 'Development environments',
                    items: [
                      'Writing, testing, and deploying code',
                      'Collaborative coding sessions',
                      'Algorithm development and experimentation',
                      'Running scripts, simulations, or software projects'
                    ]
                  },
                  {
                    title: 'Finance',
                    description: 'Trading and analysis tools',
                    items: [
                      'Algorithmic trading simulations',
                      'Data analysis for financial markets',
                      'Portfolio modeling and risk assessment',
                      'Backtesting trading strategies'
                    ]
                  },
                  {
                    title: 'Collaboration',
                    description: 'Team workspaces',
                    items: [
                      'Multi-user sessions for joint projects',
                      'Sharing VM resources for teamwork',
                      'Merit and token rewards for contributions',
                      'Project tracking and analytics'
                    ]
                  },
                  {
                    title: 'Education',
                    description: 'Learning platforms',
                    items: [
                      'Skill-building exercises (coding, music, design)',
                      'Virtual workshops or tutorials',
                      'Mentorship and guided learning sessions'
                    ]
                  }
                ].map((service, index) => {
                  // Use Unsplash for professional stock images with service-specific keywords (fallback)
                  const imageUrl = `https://source.unsplash.com/400x400/?${encodeURIComponent(
                    service.title === 'Music' ? 'music,audio,studio' :
                    service.title === 'Graphic Design' ? 'design,graphic,creative' :
                    service.title === 'Coding' ? 'coding,programming,computer' :
                    service.title === 'Finance' ? 'finance,business,data' :
                    service.title === 'Collaboration' ? 'teamwork,collaboration,meeting' :
                    'education,learning,study'
                  )}`

                  // Better stock images from Unsplash with specific dimensions (square)
                  const stockImages: { [key: string]: string } = {
                    'Music': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
                    'Graphic Design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop',
                    'Coding': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop',
                    'Finance': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop',
                    'Collaboration': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop',
                    'Education': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop'
                  }
                  
                  return (
                    <Col xs={24} sm={12} md={8} lg={4} xl={4} key={index}>
                      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Card
                          bordered
                          style={{
                            background: '#000000',
                            borderColor: '#1f1f1f',
                            borderRadius: 12,
                            overflow: 'hidden',
                            aspectRatio: '1',
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: 12
                          }}
                          bodyStyle={{ padding: 0, display: 'flex', flexDirection: 'column', flex: 1 }}
                        >
                          <div style={{ position: 'relative', width: '100%', paddingTop: '100%', background: '#141414' }}>
                            <img
                              src={stockImages[service.title] || imageUrl}
                              alt={service.title}
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                opacity: 0.9
                              }}
                              onError={(e) => {
                                // Fallback to gradient if image fails to load
                                const target = e.target as HTMLImageElement
                                target.style.display = 'none'
                                if (target.parentElement) {
                                  target.parentElement.style.background = 'linear-gradient(135deg, #141414 0%, #0a0a0a 100%)'
                                }
                              }}
                            />
                          </div>
                        </Card>
                        <div style={{ textAlign: 'center', paddingTop: 8 }}>
                          <Title level={4} style={{ color: '#ffffff', margin: '0 0 4px 0', fontSize: 16, fontWeight: 600, lineHeight: 1.4 }}>
                            {service.title}
                          </Title>
                          <p style={{ color: '#999999', margin: 0, fontSize: 12, lineHeight: 1.4 }}>
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Col>
                  )
                })}
              </Row>
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
                Token = Merit + Compute + Access. Earn by creating and collaborating, spend to access tools and exposure, stake to amplify visibility.
              </Paragraph>

              <Card 
                bordered 
                style={{ 
                  background: '#000000', 
                  borderColor: '#1f1f1f',
                  borderRadius: 12
                }}
                bodyStyle={{ padding: 48 }}
              >
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                  <div>
                    <Row justify="space-between" style={{ marginBottom: 8 }}>
                      <Col>
                        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>Earning Tokens / Merit</Text>
                      </Col>
                    </Row>
                    <Paragraph style={{ color: '#595959', fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                      Users earn tokens based on measurable work and contributions: completing projects in music, design, coding, finance, or AI workloads; collaborating with other users in shared VMs; contributing high-quality output that passes verification or gains recognition; engaging in challenges, contests, or merit-based competitions. Tokens are non-speculative and represent platform influence, compute access, and earned merit.
                    </Paragraph>
                  </div>

                  <Divider style={{ borderColor: '#1f1f1f', margin: '24px 0' }} />

                  <div>
                    <Row justify="space-between" style={{ marginBottom: 8 }}>
                      <Col>
                        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>Spending / Using Tokens</Text>
                      </Col>
                    </Row>
                    <Paragraph style={{ color: '#595959', fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                      Tokens can be spent to: access premium VM features or specialized software; collaborate with other users in private sessions; purchase sponsored visibility for profiles or work in search/discovery features; unlock specialized tools, templates, or AI assistants.
                    </Paragraph>
                  </div>

                  <Divider style={{ borderColor: '#1f1f1f', margin: '24px 0' }} />

                  <div>
                    <Row justify="space-between" style={{ marginBottom: 8 }}>
                      <Col>
                        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>Staking & Exposure</Text>
                      </Col>
                    </Row>
                    <Paragraph style={{ color: '#595959', fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                      Users can stake tokens to promote their work or profiles in category searches (similar to sponsored content). Staking acts as both visibility leverage and merit investment, aligning effort with exposure.
                    </Paragraph>
                  </div>

                  <Divider style={{ borderColor: '#1f1f1f', margin: '24px 0' }} />

                  <div>
                    <Row justify="space-between" style={{ marginBottom: 8 }}>
                      <Col>
                        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>Supply & Flow</Text>
                      </Col>
                    </Row>
                    <Paragraph style={{ color: '#595959', fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                      Tokens are generated by the platform as users earn merit. They flow between users and the platform as: payments for collaboration or visibility; consumption of VM resources; rewards for contribution and output. The system is self-contained, ensuring the token's purpose is work-driven, not speculative.
                    </Paragraph>
                  </div>

                  <Divider style={{ borderColor: '#1f1f1f', margin: '24px 0' }} />

                  <div>
                    <Row justify="space-between" style={{ marginBottom: 8 }}>
                      <Col>
                        <Text style={{ color: '#d9d9d9', fontSize: 16, fontWeight: 600 }}>Summary</Text>
                      </Col>
                    </Row>
                    <Paragraph style={{ color: '#595959', fontSize: 12, margin: 0, lineHeight: 1.5 }}>
                      Token = Merit + Compute + Access. Users earn by creating and collaborating, spend to access tools and exposure, and stake to amplify visibility. OldWest.net's tokenomics incentivizes skill, productivity, and contribution, not speculation.
                    </Paragraph>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Verified Identity */}
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
                  VERIFIED IDENTITY
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
                        borderRadius: 12,
                        boxShadow: '0 2px 8px rgba(140, 140, 140, 0.2)'
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

        {/* Integrated Platforms */}
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
              <Row gutter={[24, 24]}>
                {[
                  { name: 'Coursera', logo: 'https://cdn.simpleicons.org/coursera/0056D2' },
                  { name: 'YouTube', logo: 'https://cdn.simpleicons.org/youtube/FF0000' },
                  { name: 'TikTok', logo: 'https://cdn.simpleicons.org/tiktok/000000' },
                  { name: 'Instagram', logo: 'https://cdn.simpleicons.org/instagram/E4405F' },
                  { name: 'LinkedIn', logo: 'https://cdn.simpleicons.org/linkedin/0A66C2' },
                  { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/181717' }
                ].map((platform) => (
                  <Col xs={24} sm={12} md={8} lg={4} key={platform.name}>
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
                  </Col>
                ))}
              </Row>
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
