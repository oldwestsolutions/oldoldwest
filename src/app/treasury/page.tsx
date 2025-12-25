'use client'

import { Layout, Typography, Row, Col, Card, Button, Input, Space, Divider, Progress, Statistic } from 'antd'
import Link from 'next/link'
import { WalletOutlined, CreditCardOutlined, BankOutlined, CheckCircleOutlined, ArrowRightOutlined, PlusOutlined, FireOutlined, DollarOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Coins3D = dynamic(() => import('@/components/Coins3D'), { ssr: false })
const TokenomicsStatic = dynamic(() => import('@/components/Tokenomics3D'), { ssr: false })

const { Header, Content } = Layout
const { Title, Text, Paragraph } = Typography

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
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | null>(null)

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
        {/* Hero Section with 3D Visualization */}
        <div style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #141414 100%)',
          padding: '80px 48px',
          borderBottom: '1px solid #1f1f1f'
        }}>
          <Row justify="center" gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <div style={{ textAlign: 'center', marginBottom: 32 }}>
                <Title level={1} style={{ color: '#ffffff', marginBottom: 16, fontSize: 56, fontWeight: 700 }}>
                  Treasury
                </Title>
                <Paragraph style={{ color: '#8c8c8c', fontSize: 20, marginBottom: 0 }}>
                  Purchase VM minutes to power your virtual environment
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <Coins3D />
            </Col>
          </Row>
        </div>

        {/* Tokenomics Information */}
        <div style={{ padding: '80px 48px', background: '#0a0a0a' }}>
          <Row justify="center">
            <Col xs={24} lg={20}>
              <div style={{ marginBottom: 48 }}>
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
                <Row gutter={[32, 32]}>
                  {/* Left: Visual Illustration */}
                  <Col xs={24} lg={12}>
                    <div style={{
                      background: '#0a0a0a',
                      border: '1px solid #1f1f1f',
                      borderRadius: 12,
                      padding: '24px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <div style={{ marginBottom: 16, textAlign: 'center' }}>
                        <Text style={{ color: '#8c8c8c', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                          Interactive Tokenomics Flow
                        </Text>
                      </div>
                      <TokenomicsStatic />
                      <div style={{ marginTop: 16, textAlign: 'center' }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'center',
                          gap: 16,
                          flexWrap: 'wrap',
                          marginTop: 12
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <div style={{ width: 12, height: 12, background: '#ff6b35', borderRadius: '50%' }}></div>
                            <Text style={{ color: '#8c8c8c', fontSize: 11 }}>Spend</Text>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <div style={{ width: 12, height: 12, background: '#4ecdc4', borderRadius: '50%' }}></div>
                            <Text style={{ color: '#8c8c8c', fontSize: 11 }}>Stake</Text>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <div style={{ width: 12, height: 12, background: '#95e1d3', borderRadius: '50%' }}></div>
                            <Text style={{ color: '#8c8c8c', fontSize: 11 }}>Flow</Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>

                  {/* Right: Text Content Sections */}
                  <Col xs={24} lg={12}>
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
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Coin Packages - TikTok Style */}
        <div style={{ padding: '80px 48px', background: '#000000' }}>
          <Row justify="center">
            <Col xs={24} lg={22}>
              <div style={{ textAlign: 'center', marginBottom: 64 }}>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 12, fontSize: 48, fontWeight: 700 }}>
                  Buy VM Minutes
                </Title>
                <Text style={{ color: '#8c8c8c', fontSize: 18 }}>
                  Choose a package to add minutes to your wallet
                </Text>
              </div>
              <Row gutter={[20, 20]} justify="center">
                {coinPackages.map((pkg) => (
                  <Col xs={24} sm={12} md={8} lg={6} key={pkg.id}>
                    <Card
                      hoverable
                      bordered
                      style={{
                        background: pkg.popular ? '#141414' : '#0a0a0a',
                        borderColor: pkg.popular ? pkg.color : '#1f1f1f',
                        borderWidth: pkg.popular ? 2 : 1,
                        borderRadius: 16,
                        height: '100%',
                        cursor: 'pointer',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        overflow: 'visible'
                      }}
                      bodyStyle={{ padding: 32 }}
                      onClick={() => setSelectedPackage(pkg.id)}
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
                      <div style={{ textAlign: 'center', paddingTop: pkg.popular ? 8 : 0 }}>
                        <div style={{
                          width: 80,
                          height: 80,
                          background: '#141414',
                          border: `2px solid ${pkg.color}`,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 20px'
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
                          MINUTES
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
                              +{pkg.bonus} Bonus MIN
                            </Text>
                          </div>
                        )}
                        <Divider style={{ borderColor: '#1f1f1f', margin: '16px 0' }} />
                        <div style={{ marginBottom: 8 }}>
                          <Text style={{ color: '#ffffff', fontSize: 28, fontWeight: 700, fontFamily: 'monospace' }}>
                            ${pkg.price.toFixed(2)}
                          </Text>
                        </div>
                        <Text style={{ color: '#595959', fontSize: 11 }}>
                          ${(pkg.price / (pkg.amount + pkg.bonus)).toFixed(4)} per MIN
                        </Text>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>

        {/* Payment Method Selection */}
        {selectedPackage && (
          <div style={{ padding: '60px 48px', background: '#0a0a0a', borderTop: '1px solid #1f1f1f' }}>
            <Row justify="center">
              <Col xs={24} lg={16}>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 32, fontSize: 32, fontWeight: 600, textAlign: 'center' }}>
                  Select Payment Method
                </Title>
                <Row gutter={[24, 24]}>
                  <Col xs={24} md={12}>
                    <Card
                      hoverable
                      bordered
                      style={{
                        background: paymentMethod === 'card' ? '#141414' : '#000000',
                        borderColor: paymentMethod === 'card' ? '#595959' : '#1f1f1f',
                        borderRadius: 12,
                        borderWidth: paymentMethod === 'card' ? 2 : 1,
                        cursor: 'pointer'
                      }}
                      bodyStyle={{ padding: 32, textAlign: 'center' }}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <CreditCardOutlined style={{ fontSize: 48, color: '#595959', marginBottom: 16 }} />
                      <Title level={4} style={{ color: '#ffffff', marginBottom: 8, fontSize: 20, fontWeight: 600 }}>
                        Credit/Debit Card
                      </Title>
                      <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
                        Visa, Mastercard, Amex
                      </Text>
                    </Card>
                  </Col>
                  <Col xs={24} md={12}>
                    <Card
                      hoverable
                      bordered
                      style={{
                        background: paymentMethod === 'bank' ? '#141414' : '#000000',
                        borderColor: paymentMethod === 'bank' ? '#595959' : '#1f1f1f',
                        borderRadius: 12,
                        borderWidth: paymentMethod === 'bank' ? 2 : 1,
                        cursor: 'pointer'
                      }}
                      bodyStyle={{ padding: 32, textAlign: 'center' }}
                      onClick={() => setPaymentMethod('bank')}
                    >
                      <BankOutlined style={{ fontSize: 48, color: '#595959', marginBottom: 16 }} />
                      <Title level={4} style={{ color: '#ffffff', marginBottom: 8, fontSize: 20, fontWeight: 600 }}>
                        Bank Transfer
                      </Title>
                      <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
                        ACH, Wire Transfer
                      </Text>
                    </Card>
                  </Col>
                </Row>

                {/* Payment Form */}
                {paymentMethod && (
                  <Card
                    bordered
                    style={{
                      background: '#000000',
                      borderColor: '#1f1f1f',
                      borderRadius: 12,
                      marginTop: 32
                    }}
                    bodyStyle={{ padding: 32 }}
                  >
                    <Title level={3} style={{ color: '#ffffff', marginBottom: 24, fontSize: 24, fontWeight: 600 }}>
                      Payment Details
                    </Title>
                    {paymentMethod === 'card' ? (
                      <Space direction="vertical" size="large" style={{ width: '100%' }}>
                        <Input
                          placeholder="Card Number"
                          size="large"
                          style={{
                            background: '#141414',
                            borderColor: '#1f1f1f',
                            color: '#ffffff',
                            borderRadius: 8
                          }}
                        />
                        <Row gutter={16}>
                          <Col span={12}>
                            <Input
                              placeholder="MM/YY"
                              size="large"
                              style={{
                                background: '#141414',
                                borderColor: '#1f1f1f',
                                color: '#ffffff',
                                borderRadius: 8
                              }}
                            />
                          </Col>
                          <Col span={12}>
                            <Input
                              placeholder="CVV"
                              size="large"
                              style={{
                                background: '#141414',
                                borderColor: '#1f1f1f',
                                color: '#ffffff',
                                borderRadius: 8
                              }}
                            />
                          </Col>
                        </Row>
                        <Input
                          placeholder="Cardholder Name"
                          size="large"
                          style={{
                            background: '#141414',
                            borderColor: '#1f1f1f',
                            color: '#ffffff',
                            borderRadius: 8
                          }}
                        />
                      </Space>
                    ) : (
                      <Space direction="vertical" size="large" style={{ width: '100%' }}>
                        <Input
                          placeholder="Account Number"
                          size="large"
                          style={{
                            background: '#141414',
                            borderColor: '#1f1f1f',
                            color: '#ffffff',
                            borderRadius: 8
                          }}
                        />
                        <Input
                          placeholder="Routing Number"
                          size="large"
                          style={{
                            background: '#141414',
                            borderColor: '#1f1f1f',
                            color: '#ffffff',
                            borderRadius: 8
                          }}
                        />
                        <Input
                          placeholder="Account Holder Name"
                          size="large"
                          style={{
                            background: '#141414',
                            borderColor: '#1f1f1f',
                            color: '#ffffff',
                            borderRadius: 8
                          }}
                        />
                      </Space>
                    )}
                    <Divider style={{ borderColor: '#1f1f1f', margin: '24px 0' }} />
                    <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
                      <Col>
                        <Text style={{ color: '#8c8c8c', fontSize: 16 }}>Total Amount</Text>
                      </Col>
                      <Col>
                        <Title level={3} style={{ color: '#ffffff', margin: 0, fontSize: 32, fontWeight: 700 }}>
                          ${coinPackages.find(p => p.id === selectedPackage)?.price.toFixed(2)}
                        </Title>
                      </Col>
                    </Row>
                    <Button
                      type="primary"
                      block
                      size="large"
                      icon={<CheckCircleOutlined />}
                      style={{
                        background: '#141414',
                        borderColor: '#1f1f1f',
                        color: '#ffffff',
                        borderRadius: 12,
                        height: 56,
                        fontSize: 16,
                        fontWeight: 600,
                        boxShadow: '0 2px 8px rgba(140, 140, 140, 0.2)'
                      }}
                    >
                      Complete Purchase
                    </Button>
                  </Card>
                )}
              </Col>
            </Row>
          </div>
        )}
      </Content>
    </Layout>
  )
}



