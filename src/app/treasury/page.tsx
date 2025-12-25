'use client'

import { Layout, Typography, Row, Col, Card, Button, Input, Space, Divider, Progress, Statistic } from 'antd'
import Link from 'next/link'
import { WalletOutlined, CreditCardOutlined, BankOutlined, CheckCircleOutlined, ArrowRightOutlined, PlusOutlined, FireOutlined, GiftOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

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
        {/* Wallet Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #141414 100%)',
          padding: '60px 48px',
          borderBottom: '1px solid #1f1f1f'
        }}>
          <Row justify="center">
            <Col xs={24} lg={20}>
              {/* Wallet Card */}
              <Card
                bordered
                style={{
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
                  borderColor: '#1f1f1f',
                  borderRadius: 20,
                  marginBottom: 48,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)'
                }}
                bodyStyle={{ padding: 48 }}
              >
                <div style={{ textAlign: 'center', marginBottom: 32 }}>
                  <div style={{
                    width: 80,
                    height: 80,
                    background: 'linear-gradient(135deg, #141414 0%, #0a0a0a 100%)',
                    border: '2px solid #1f1f1f',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px'
                  }}>
                    <WalletOutlined style={{ fontSize: 40, color: '#d9d9d9' }} />
                  </div>
                  <Text style={{ color: '#8c8c8c', fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 12 }}>
                    Your Wallet Balance
                  </Text>
                  <Title level={1} style={{ color: '#ffffff', margin: 0, fontSize: 64, fontWeight: 700, fontFamily: 'monospace' }}>
                    1,224 MIN
                  </Title>
                </div>
                <div style={{
                  background: '#0a0a0a',
                  border: '1px solid #1f1f1f',
                  borderRadius: 12,
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <Text style={{ color: '#595959', fontSize: 12 }}>
                    Available for use in Virtual Machine Environment
                  </Text>
                </div>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Coin Packages - TikTok Style */}
        <div style={{ padding: '60px 48px', background: '#000000' }}>
          <Row justify="center">
            <Col xs={24} lg={22}>
              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 8, fontSize: 40, fontWeight: 700 }}>
                  Buy VM Minutes
                </Title>
                <Text style={{ color: '#8c8c8c', fontSize: 16 }}>
                  Choose a package to add minutes to your wallet
                </Text>
              </div>
              <Row gutter={[20, 20]} justify="center">
                {coinPackages.map((pkg) => (
                  <Col xs={24} sm={12} md={8} lg={6} key={pkg.id}>
                    <Card
                      hoverable
                      bordered={false}
                      style={{
                        background: `linear-gradient(135deg, ${pkg.color}15 0%, ${pkg.color}05 100%)`,
                        border: pkg.popular ? `2px solid ${pkg.color}` : '1px solid #1f1f1f',
                        borderRadius: 16,
                        height: '100%',
                        cursor: 'pointer',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        boxShadow: pkg.popular ? `0 4px 16px ${pkg.color}30` : '0 2px 8px rgba(0, 0, 0, 0.3)'
                      }}
                      bodyStyle={{ padding: 24 }}
                      onClick={() => setSelectedPackage(pkg.id)}
                      onMouseEnter={(e) => {
                        if (!pkg.popular) {
                          e.currentTarget.style.transform = 'translateY(-4px)'
                          e.currentTarget.style.boxShadow = `0 8px 24px ${pkg.color}40`
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!pkg.popular) {
                          e.currentTarget.style.transform = 'translateY(0)'
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)'
                        }
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
                          width: 64,
                          height: 64,
                          background: `linear-gradient(135deg, ${pkg.color}30 0%, ${pkg.color}10 100%)`,
                          border: `2px solid ${pkg.color}40`,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 20px'
                        }}>
                          <GiftOutlined style={{ fontSize: 32, color: pkg.color }} />
                        </div>
                        <Title level={2} style={{ 
                          color: '#ffffff', 
                          marginBottom: 4, 
                          fontSize: 32, 
                          fontWeight: 700,
                          fontFamily: 'monospace'
                        }}>
                          {pkg.amount.toLocaleString()}
                        </Text>
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



