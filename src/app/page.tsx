'use client'

import Link from 'next/link'
import { Layout, Row, Col, Card, Typography, Divider, Button, Progress, Space } from 'antd'
import { AppstoreOutlined, DatabaseOutlined, ClockCircleOutlined, CheckCircleOutlined, SafetyOutlined, FileTextOutlined, ApiOutlined, GlobalOutlined, InfoCircleOutlined, QuestionCircleOutlined, BookOutlined, CodeOutlined, TrophyOutlined, CheckCircleFilled, FileProtectOutlined } from '@ant-design/icons'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false })

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
            <Link href="/product" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#8c8c8c'}
            >
              Product
            </Link>
          </Col>
          <Col>
            <Link href="/solutions" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#8c8c8c'}
            >
              Solutions
            </Link>
          </Col>
          <Col>
            <Link href="/pricing-rates" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#8c8c8c'}
            >
              Pricing
            </Link>
          </Col>
        </Row>
        <Space size="middle">
          <Button 
            type="text" 
            style={{ color: '#8c8c8c', borderRadius: 12 }}
            href="/launch-session"
          >
            LAUNCH SESSION
          </Button>
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
            href="/login"
          >
            LOGIN
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
          alignItems: 'center'
        }}>
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
                Social Infrastructure.
                <br />
                Metered by Design.
              </Title>
              <Paragraph style={{ fontSize: 20, color: '#8c8c8c', lineHeight: 1.8, marginBottom: 40 }}>
                OldWest is a VMaaS-based social network. Every user operates inside a virtual environment. Interactions consume minutes. Minutes function like compute credits. Usage is tracked and settled.
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
                  href="/login"
                >
                  LOGIN
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
                  href="/usage-model"
                >
                  VIEW USAGE MODEL
                </Button>
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <HeroScene />
            </Col>
          </Row>
        </section>

        {/* How the Platform Works */}
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
                  HOW THE PLATFORM WORKS
                </Text>
                <Divider style={{ margin: '8px 0 0 0', borderColor: '#1f1f1f' }} />
              </div>
              
              <Row gutter={[24, 24]}>
                <Col xs={24} sm={12} lg={6}>
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
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ 
                        width: 56, 
                        height: 56, 
                        background: '#141414', 
                        border: '1px solid #1f1f1f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 12,
                        marginBottom: 20
                      }}>
                        <AppstoreOutlined style={{ fontSize: 28, color: '#595959' }} />
                      </div>
                      <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                        IDENTITY
                      </Text>
                    </div>
                    <Paragraph style={{ color: '#d9d9d9', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                      Phone-number verified identity. Each user is authenticated through a verified phone number, establishing a single, accountable identity tied to all usage and settlement activities.
                    </Paragraph>
                  </Card>
                </Col>

                <Col xs={24} sm={12} lg={6}>
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
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ 
                        width: 56, 
                        height: 56, 
                        background: '#141414', 
                        border: '1px solid #1f1f1f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 12,
                        marginBottom: 20
                      }}>
                        <DatabaseOutlined style={{ fontSize: 28, color: '#595959' }} />
                      </div>
                      <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                        SESSION
                      </Text>
                    </div>
                    <Paragraph style={{ color: '#d9d9d9', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                      Virtual machine allocation per session. When you access the network, a dedicated virtual environment is provisioned for your session, ensuring isolation and precise resource tracking.
                    </Paragraph>
                  </Card>
                </Col>

                <Col xs={24} sm={12} lg={6}>
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
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ 
                        width: 56, 
                        height: 56, 
                        background: '#141414', 
                        border: '1px solid #1f1f1f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 12,
                        marginBottom: 20
                      }}>
                        <ClockCircleOutlined style={{ fontSize: 28, color: '#595959' }} />
                      </div>
                      <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                        RUNTIME
                      </Text>
                    </div>
                    <Paragraph style={{ color: '#d9d9d9', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                      Interactions consume minutes. Every action—messaging, viewing, connecting—consumes VM minutes from your balance at predefined rates, visible in real-time.
                    </Paragraph>
                  </Card>
                </Col>

                <Col xs={24} sm={12} lg={6}>
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
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ 
                        width: 56, 
                        height: 56, 
                        background: '#141414', 
                        border: '1px solid #1f1f1f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 12,
                        marginBottom: 20
                      }}>
                        <CheckCircleOutlined style={{ fontSize: 28, color: '#595959' }} />
                      </div>
                      <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                        SETTLEMENT
                      </Text>
                    </div>
                    <Paragraph style={{ color: '#d9d9d9', fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                      Usage is tracked and settled. All consumption is logged, metered, and automatically settled against your account balance with complete transaction history.
                    </Paragraph>
                  </Card>
                </Col>
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

        {/* What Makes OldWest Different */}
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
                  WHAT MAKES OLDWEST DIFFERENT
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
                <Paragraph style={{ fontSize: 18, color: '#d9d9d9', lineHeight: 1.8, marginBottom: 32, textAlign: 'center' }}>
                  OldWest recognizes achievement and verified work through merit-based NFTs. These tokens signify milestones reached, credentials verified, and contributions made to the platform.
                </Paragraph>
                
                <Row gutter={[32, 32]} style={{ marginTop: 40 }}>
                  <Col xs={24} md={8}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        width: 64, 
                        height: 64, 
                        background: '#141414', 
                        border: '1px solid #1f1f1f',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                      }}>
                        <TrophyOutlined style={{ fontSize: 32, color: '#595959' }} />
                      </div>
                      <Title level={5} style={{ color: '#ffffff', marginBottom: 12, fontSize: 16, fontWeight: 600 }}>
                        Milestone Achievements
                      </Title>
                      <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                        NFTs are minted when you reach significant milestones—message thresholds, connection counts, platform tenure. Each NFT represents a verified achievement in your OldWest journey.
                      </Paragraph>
                    </div>
                  </Col>
                  
                  <Col xs={24} md={8}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        width: 64, 
                        height: 64, 
                        background: '#141414', 
                        border: '1px solid #1f1f1f',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                      }}>
                        <FileProtectOutlined style={{ fontSize: 32, color: '#595959' }} />
                      </div>
                      <Title level={5} style={{ color: '#ffffff', marginBottom: 12, fontSize: 16, fontWeight: 600 }}>
                        Verified Work
                      </Title>
                      <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                        Completed projects, verified contributions, and validated work are recorded as NFTs. These tokens provide immutable proof of your accomplishments on the platform.
                      </Paragraph>
                    </div>
                  </Col>
                  
                  <Col xs={24} md={8}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        width: 64, 
                        height: 64, 
                        background: '#141414', 
                        border: '1px solid #1f1f1f',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                      }}>
                        <CheckCircleFilled style={{ fontSize: 32, color: '#595959' }} />
                      </div>
                      <Title level={5} style={{ color: '#ffffff', marginBottom: 12, fontSize: 16, fontWeight: 600 }}>
                        Credentials
                      </Title>
                      <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                        Professional credentials, certifications, and verified qualifications are issued as NFTs. These tokens establish your verified identity and expertise within the OldWest network.
                      </Paragraph>
                    </div>
                  </Col>
                </Row>
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

              <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                  <Card 
                    bordered 
                    style={{ 
                      background: '#0a0a0a', 
                      borderColor: '#1f1f1f',
                      borderRadius: 12,
                      height: '100%'
                    }}
                    bodyStyle={{ padding: 32 }}
                  >
                    <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                      PHONE-NUMBER IDENTITY
                    </Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 15, lineHeight: 1.75, marginTop: 16, marginBottom: 0 }}>
                      Every account is verified through a phone number. This establishes a single, verifiable identity tied to your usage and settlement, ensuring accountability and preventing abuse.
                    </Paragraph>
                  </Card>
                </Col>

                <Col xs={24} md={8}>
                  <Card 
                    bordered 
                    style={{ 
                      background: '#0a0a0a', 
                      borderColor: '#1f1f1f',
                      borderRadius: 12,
                      height: '100%'
                    }}
                    bodyStyle={{ padding: 32 }}
                  >
                    <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                      USAGE TRANSPARENCY
                    </Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 15, lineHeight: 1.75, marginTop: 16, marginBottom: 0 }}>
                      All consumption is logged and visible. You can view your usage history, current session consumption, and balance at any time through your account dashboard.
                    </Paragraph>
                  </Card>
                </Col>

                <Col xs={24} md={8}>
                  <Card 
                    bordered 
                    style={{ 
                      background: '#0a0a0a', 
                      borderColor: '#1f1f1f',
                      borderRadius: 12,
                      height: '100%'
                    }}
                    bodyStyle={{ padding: 32 }}
                  >
                    <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                      LOGS & SETTLEMENT
                    </Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 15, lineHeight: 1.75, marginTop: 16, marginBottom: 0 }}>
                      Complete audit trail of all interactions. Settlement occurs automatically against your account balance with full transaction logs available for review.
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
                  marginTop: 40
                }}
                bodyStyle={{ padding: 40 }}
              >
                <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                  UTILITY-GRADE DESIGN
                </Text>
                <Paragraph style={{ color: '#d9d9d9', fontSize: 16, lineHeight: 1.8, marginTop: 20, marginBottom: 0 }}>
                  OldWest is built as infrastructure, not entertainment. The platform operates like a public utility for digital interaction. Every component is designed for reliability, transparency, and accountable resource management. This utility-grade approach ensures consistent performance, predictable costs, and complete visibility into all platform operations.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Call to Action */}
        <section style={{ 
          minHeight: '100vh', 
          background: '#0a0a0a', 
          padding: '120px 48px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Row justify="center" style={{ width: '100%' }}>
            <Col xs={24} lg={16} xl={12}>
              <div style={{ textAlign: 'center' }}>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 32, fontSize: 48, fontWeight: 600 }}>
                  Access the Network
                </Title>
                <Paragraph style={{ color: '#8c8c8c', fontSize: 18, marginBottom: 48, lineHeight: 1.75 }}>
                  Create an account to begin using OldWest. View the usage model documentation for detailed information on rates and settlement.
                </Paragraph>
                <Space size="large">
                  <Button 
                    type="primary"
                    size="large"
                    style={{ 
                      background: '#000000', 
                      borderColor: '#1f1f1f',
                      color: '#ffffff',
                      borderRadius: 12,
                      fontWeight: 600,
                      height: 56,
                      paddingLeft: 40,
                      paddingRight: 40,
                      boxShadow: 'none'
                    }}
                    href="/login"
                  >
                    CREATE ACCOUNT
                  </Button>
                  <Button 
                    size="large"
                    style={{ 
                      background: '#141414', 
                      borderColor: '#1f1f1f',
                      color: '#d9d9d9',
                      borderRadius: 12,
                      fontWeight: 600,
                      height: 56,
                      paddingLeft: 40,
                      paddingRight: 40
                    }}
                    href="/usage-model"
                  >
                    VIEW USAGE MODEL
                  </Button>
                </Space>
              </div>
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
              <Link href="/pricing-rates" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Pricing & Rates</Link>
            </Space>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <Title level={5} style={{ color: '#ffffff', marginBottom: 24, fontSize: 14, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Merit & Credentials
            </Title>
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
              <Link href="#" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>NFT Achievements</Link>
              <Link href="#" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Verified Work</Link>
              <Link href="#" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Credentials</Link>
              <Link href="#" style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Milestone Tracking</Link>
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
            </Space>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}
