'use client'

import { Layout, Typography, Row, Col, Card, Button, Input, Space, Divider, Progress, Statistic } from 'antd'
import Link from 'next/link'
import { WalletOutlined, CreditCardOutlined, BankOutlined, CheckCircleOutlined, ArrowRightOutlined, PlusOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

const { Header, Content } = Layout
const { Title, Text, Paragraph } = Typography

const coinPackages = [
  { id: 1, amount: 100, price: 9.99, bonus: 0, popular: false },
  { id: 2, amount: 500, price: 44.99, bonus: 50, popular: true },
  { id: 3, amount: 1000, price: 79.99, bonus: 150, popular: false },
  { id: 4, amount: 2500, price: 179.99, bonus: 500, popular: false },
  { id: 5, amount: 5000, price: 329.99, bonus: 1200, popular: false },
  { id: 6, amount: 10000, price: 599.99, bonus: 3000, popular: false }
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
        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #141414 100%)',
          padding: '80px 48px',
          borderBottom: '1px solid #1f1f1f'
        }}>
          <Row justify="center">
            <Col xs={24} lg={16}>
              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <WalletOutlined style={{ fontSize: 64, color: '#595959', marginBottom: 24 }} />
                <Title level={1} style={{ color: '#ffffff', marginBottom: 16, fontSize: 56, fontWeight: 700 }}>
                  Treasury
                </Title>
                <Paragraph style={{ color: '#8c8c8c', fontSize: 20, marginBottom: 0 }}>
                  Purchase VM minutes to power your virtual environment
                </Paragraph>
              </div>

              {/* Current Balance Card */}
              <Card
                bordered
                style={{
                  background: '#000000',
                  borderColor: '#1f1f1f',
                  borderRadius: 12,
                  marginBottom: 32
                }}
                bodyStyle={{ padding: 32 }}
              >
                <Row justify="space-between" align="middle">
                  <Col>
                    <Text style={{ color: '#8c8c8c', fontSize: 16, display: 'block', marginBottom: 8 }}>
                      Current Balance
                    </Text>
                    <Title level={2} style={{ color: '#ffffff', margin: 0, fontSize: 48, fontWeight: 700 }}>
                      1,224 MIN
                    </Title>
                  </Col>
                  <Col>
                    <Button
                      type="primary"
                      size="large"
                      icon={<PlusOutlined />}
                      style={{
                        background: '#141414',
                        borderColor: '#1f1f1f',
                        color: '#ffffff',
                        borderRadius: 12,
                        boxShadow: '0 2px 8px rgba(140, 140, 140, 0.2)'
                      }}
                    >
                      Add Funds
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Coin Packages */}
        <div style={{ padding: '60px 48px', background: '#000000' }}>
          <Row justify="center">
            <Col xs={24} lg={20}>
              <Title level={2} style={{ color: '#ffffff', marginBottom: 40, fontSize: 32, fontWeight: 600, textAlign: 'center' }}>
                Select a Package
              </Title>
              <Row gutter={[24, 24]}>
                {coinPackages.map((pkg) => (
                  <Col xs={24} sm={12} lg={8} key={pkg.id}>
                    <Card
                      hoverable
                      bordered
                      style={{
                        background: pkg.popular ? '#141414' : '#0a0a0a',
                        borderColor: pkg.popular ? '#595959' : '#1f1f1f',
                        borderRadius: 12,
                        borderWidth: pkg.popular ? 2 : 1,
                        height: '100%',
                        cursor: 'pointer',
                        position: 'relative'
                      }}
                      bodyStyle={{ padding: 32 }}
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      {pkg.popular && (
                        <div style={{
                          position: 'absolute',
                          top: -12,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: '#595959',
                          color: '#ffffff',
                          padding: '4px 16px',
                          borderRadius: 12,
                          fontSize: 12,
                          fontWeight: 600
                        }}>
                          MOST POPULAR
                        </div>
                      )}
                      <div style={{ textAlign: 'center' }}>
                        <Title level={3} style={{ color: '#ffffff', marginBottom: 8, fontSize: 36, fontWeight: 700 }}>
                          {pkg.amount.toLocaleString()} MIN
                        </Title>
                        {pkg.bonus > 0 && (
                          <Text style={{ color: '#52c41a', fontSize: 14, display: 'block', marginBottom: 16 }}>
                            +{pkg.bonus} Bonus MIN
                          </Text>
                        )}
                        <Divider style={{ borderColor: '#1f1f1f', margin: '16px 0' }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 16, display: 'block', marginBottom: 8 }}>
                          ${pkg.price.toFixed(2)}
                        </Text>
                        <Text style={{ color: '#595959', fontSize: 12 }}>
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


