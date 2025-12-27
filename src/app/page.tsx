'use client'

import Link from 'next/link'
import { Layout, Row, Col, Card, Typography, Divider, Button, Progress, Space, Dropdown, List } from 'antd'
import { AppstoreOutlined, DatabaseOutlined, ClockCircleOutlined, CheckCircleOutlined, SafetyOutlined, FileTextOutlined, ApiOutlined, GlobalOutlined, InfoCircleOutlined, QuestionCircleOutlined, BookOutlined, CodeOutlined, TrophyOutlined, CheckCircleFilled, FileProtectOutlined, GiftOutlined, RocketOutlined, PhoneOutlined, WalletOutlined, TeamOutlined, FireOutlined, ThunderboltOutlined, StarOutlined, ArrowRightOutlined, ArrowDownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const HeroVideoBackground = dynamic(() => import('@/components/HeroVideoBackground'), { ssr: false })
const Tokenomics3D = dynamic(() => import('@/components/Tokenomics3D'), { ssr: false })
const GoogleMeetsUI = dynamic(() => import('@/components/GoogleMeetsUI'), { ssr: false })

const { Header, Content, Footer } = Layout
const { Title, Paragraph, Text } = Typography

export default function Home() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
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

  return (
    <Layout style={{ minHeight: '100vh', background: '#000000' }}>
      {/* Navigation */}
      <Header style={{ 
        background: '#000000', 
        borderBottom: '1px solid #1f1f1f',
        padding: '0 24px',
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
        <Row align="middle" justify="space-between" gutter={[12, 0]} style={{ width: '100%', flexWrap: 'nowrap' }}>
          <Col flex="none">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
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
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Text strong style={{ fontSize: 16, color: '#ffffff', letterSpacing: '0.5px' }}>OLDWEST</Text>
              </Link>
              {/* Desktop Navigation - Left Side */}
              <Space size="middle" style={{ display: isMobile ? 'none' : 'flex', marginLeft: 24 }}>
                <Link href="/marketplace" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#8c8c8c'}
                >
                  Marketplace
                </Link>
                <Link href="/treasury" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#8c8c8c'}
                >
                  Treasury
                </Link>
              </Space>
            </div>
          </Col>
          <Col flex="none" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            {/* Desktop Navigation - Right Side */}
            <Space size="middle" style={{ display: isMobile ? 'none' : 'flex' }}>
              <Button 
                type="primary" 
                style={{ 
                  background: '#141414', 
                  borderColor: '#1f1f1f',
                  color: '#ffffff',
                  borderRadius: 12,
                  fontWeight: 600,
                  boxShadow: 'none',
                  minHeight: 44
                }}
                href="/account"
              >
                ACCOUNT
              </Button>
            </Space>
            {/* Mobile Menu Button */}
            <Button 
              type="text"
              icon={mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ 
                color: '#ffffff', 
                display: isMobile ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 44,
                minHeight: 44
              }}
            />
          </Col>
        </Row>
        {/* Mobile Menu */}
        {mobileMenuOpen && isMobile && (
          <div style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            right: 0,
            background: '#000000',
            borderBottom: '1px solid #1f1f1f',
            padding: '24px',
            zIndex: 999
          }}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Link href="/marketplace" style={{ color: '#8c8c8c', fontSize: 16, textDecoration: 'none', display: 'block', padding: '12px 0' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link href="/treasury" style={{ color: '#8c8c8c', fontSize: 16, textDecoration: 'none', display: 'block', padding: '12px 0' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Treasury
              </Link>
              <Button 
                type="primary" 
                block
                style={{ 
                  background: '#141414', 
                  borderColor: '#1f1f1f',
                  color: '#ffffff',
                  borderRadius: 12,
                  fontWeight: 600,
                  boxShadow: 'none',
                  minHeight: 44
                }}
                href="/account"
                onClick={() => setMobileMenuOpen(false)}
              >
                ACCOUNT
              </Button>
            </Space>
          </div>
        )}
      </Header>

      <Content style={{ marginTop: isHeaderVisible ? 0 : 0 }}>
        {/* Hero Section - Two Column */}
        <section style={{ 
          minHeight: '100vh', 
          borderBottom: '1px solid #1f1f1f', 
          padding: '80px 24px',
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
          <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Row justify="center" align="middle" style={{ width: '100%', textAlign: 'center' }}>
              <Col xs={24} lg={16} xl={12}>
                <Title 
                  level={1} 
                  style={{ 
                    fontSize: isMobile ? 40 : 72, 
                    fontWeight: 700, 
                    color: '#ffffff',
                    marginBottom: 24,
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                    textAlign: 'center'
                  }}
                >
                  Create Anything
                </Title>
                <Paragraph style={{ fontSize: isMobile ? 16 : 20, color: '#8c8c8c', lineHeight: 1.8, marginBottom: 32, textAlign: 'center' }}>
                  Your Virtual Environment. Sovereign. Limitless
                </Paragraph>
                <Space size="middle" direction={isMobile ? 'vertical' : 'horizontal'} style={{ width: isMobile ? '100%' : 'auto', justifyContent: 'center' }}>
                  <Button 
                    size="large"
                    block={isMobile}
                    style={{ 
                      background: '#141414', 
                      borderColor: '#1f1f1f',
                      color: '#d9d9d9',
                      borderRadius: 12,
                      fontWeight: 600,
                      height: 52,
                      paddingLeft: isMobile ? 24 : 40,
                      paddingRight: isMobile ? 24 : 40,
                      minHeight: 44
                    }}
                    href="/launch-session"
                  >
                    LAUNCH SESSION
                  </Button>
                  <Button 
                    type="primary"
                    size="large"
                    block={isMobile}
                    style={{ 
                      background: '#000000', 
                      borderColor: '#1f1f1f',
                      color: '#ffffff',
                      borderRadius: 12,
                      fontWeight: 600,
                      height: 52,
                      paddingLeft: isMobile ? 24 : 40,
                      paddingRight: isMobile ? 24 : 40,
                      boxShadow: 'none',
                      minHeight: 44
                    }}
                    href="/explore-platform"
                  >
                    DISCOVER
                  </Button>
                </Space>
              </Col>
            </Row>
        </div>
      </section>

        {/* Workspace */}
        <section style={{ 
          minHeight: '100vh', 
          borderBottom: '1px solid #1f1f1f', 
          background: '#0a0a0a',
          padding: isMobile ? '60px 24px' : '120px 48px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Row justify="center" gutter={[64, 48]} style={{ width: '100%' }}>
            <Col xs={24} lg={12}>
              <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                WORKSPACE
              </Text>
              <Divider style={{ margin: '8px 0 40px 0', borderColor: '#1f1f1f' }} />
              
              <Title level={2} style={{ color: '#ffffff', marginBottom: 24, fontSize: isMobile ? 28 : 36, fontWeight: 600 }}>
                Workspace / Remote Desktop Features
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                These make it feel like a VM environment.
              </Paragraph>
              
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div>
                  <Title level={4} style={{ color: '#ffffff', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>
                    Remote Desktop Access
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                    Full OS-like experience in browser
                  </Paragraph>
                </div>

                <div>
                  <Title level={4} style={{ color: '#ffffff', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>
                    File System Explorer
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                    Upload, download, open, organize files
                  </Paragraph>
                </div>

                <div>
                  <Title level={4} style={{ color: '#ffffff', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>
                    Drag & Drop
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                    Move files between local and remote workspace
                  </Paragraph>
                </div>

                <div>
                  <Title level={4} style={{ color: '#ffffff', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>
                    Resizable Panes
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                    Editor, terminal, output, participants
                  </Paragraph>
                </div>

                <div>
                  <Title level={4} style={{ color: '#ffffff', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>
                    Multi-tab Workspace
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                    Allow multiple sessions/projects open at once
                  </Paragraph>
                </div>

                <div>
                  <Title level={4} style={{ color: '#ffffff', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>
                    Persistent State
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                    Files and workspace survive session restarts
                  </Paragraph>
                </div>
              </Space>
            </Col>

            <Col xs={24} lg={12} style={{ height: '600px' }}>
              <GoogleMeetsUI variant="workspace" showControls={false} />
            </Col>
          </Row>
        </section>

        {/* Real-Time Communication */}
        <section style={{ 
          borderBottom: '1px solid #1f1f1f', 
          background: '#000000',
          padding: isMobile ? '60px 24px' : '120px 48px'
        }}>
          {/* Label above illustration */}
          <Row justify="center" style={{ width: '100%', marginBottom: isMobile ? '24px' : '32px' }}>
            <Col xs={24} lg={20} xl={16}>
              <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                REAL-TIME COMMUNICATION
              </Text>
              <Divider style={{ margin: '8px 0 0 0', borderColor: '#1f1f1f' }} />
            </Col>
          </Row>

          {/* Full-width illustration */}
          <div style={{ marginBottom: isMobile ? '40px' : '48px' }}>
            <GoogleMeetsUI variant="communication" participants={4} showChat={true} showControls={true} />
          </div>

          {/* Content below illustration */}
          <Row justify="center" style={{ width: '100%' }}>
            <Col xs={24} lg={20} xl={16}>
              <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: isMobile ? 24 : 28, fontWeight: 600 }}>
                Real-Time Communication
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
                Essential for collaboration, meetings, and live interaction.
              </Paragraph>
              
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={8}>
                  <div>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 4, fontSize: 14, fontWeight: 600 }}>
                      Audio In / Out
                    </Title>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 13, lineHeight: 1.5, margin: 0 }}>
                      Full-duplex voice
                    </Paragraph>
                  </div>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8}>
                  <div>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 4, fontSize: 14, fontWeight: 600 }}>
                      Video Streams
                    </Title>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 13, lineHeight: 1.5, margin: 0 }}>
                      Grid or speaker view
                    </Paragraph>
                  </div>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8}>
                  <div>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 4, fontSize: 14, fontWeight: 600 }}>
                      Screen Sharing
                    </Title>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 13, lineHeight: 1.5, margin: 0 }}>
                      Share your workspace, code, or app
                    </Paragraph>
                  </div>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8}>
                  <div>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 4, fontSize: 14, fontWeight: 600 }}>
                      Chat / Messaging
                    </Title>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 13, lineHeight: 1.5, margin: 0 }}>
                      Text + reactions + links
                    </Paragraph>
                  </div>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8}>
                  <div>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 4, fontSize: 14, fontWeight: 600 }}>
                      Notifications / Alerts
                    </Title>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 13, lineHeight: 1.5, margin: 0 }}>
                      For actions, invites, or workflow events
                    </Paragraph>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        {/* Verified Identity */}
        <section style={{
          minHeight: '100vh',
          borderBottom: '1px solid #1f1f1f',
          background: '#0a0a0a',
          padding: isMobile ? '60px 24px' : '120px 48px',
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
                        background: '#0a0a0a',
                        border: '1px solid #1f1f1f',
                        borderRadius: 8,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 16,
                        padding: '8px 12px'
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
          background: '#000000',
          padding: isMobile ? '60px 24px' : '120px 48px',
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
                  { name: 'GitHub', logo: '/images/gtihubwhitelogo.png' },
                  { name: 'Instagram', logo: '/images/instagramlogo.png' },
                  { name: 'LinkedIn', logo: '/images/Linkedin-Logo.png' },
                  { name: 'TikTok', logo: '/images/tiktoklogo.png' }
                ].map((platform) => (
                  <Col xs={24} sm={12} md={6} lg={6} key={platform.name}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '32px',
                        background: '#000000',
                        border: '1px solid #1f1f1f',
                        borderRadius: 12,
                        height: '200px',
                        width: '100%'
                      }}
                    >
                      <img
                        src={platform.logo}
                        alt={platform.name}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain',
                          display: 'block'
                        }}
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        onError={(e) => {
                          console.error('Failed to load image:', platform.logo)
                        }}
                      />
                    </div>
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
        padding: isMobile ? '40px 24px 20px 24px' : '80px 48px 40px 48px'
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
