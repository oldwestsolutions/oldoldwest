'use client'

import { Layout, Typography, Row, Col, Card, Divider, Space, Tag } from 'antd'
import Link from 'next/link'
import { SafetyOutlined, EyeOutlined, TrophyOutlined, CheckCircleOutlined, WarningOutlined, DollarOutlined, LockOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

const { Header, Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function Treasury() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
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
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Header style={{ 
        background: '#000000', 
        borderBottom: '1px solid #1f1f1f',
        padding: isMobile ? '0 24px' : '0 48px',
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

      <Content style={{ paddingTop: isHeaderVisible ? (isMobile ? 80 : 80) : 40 }}>
        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #141414 100%)',
          padding: isMobile ? '60px 24px' : '120px 48px',
          borderBottom: '1px solid #1f1f1f',
          textAlign: 'center'
        }}>
          <Title level={1} style={{ color: '#ffffff', marginBottom: 16, fontSize: isMobile ? 32 : 48, fontWeight: 700 }}>
            Treasury
          </Title>
          <Paragraph style={{ color: '#8c8c8c', fontSize: isMobile ? 16 : 20, maxWidth: '800px', margin: '0 auto' }}>
            The economic infrastructure that powers OldWest. Five interconnected systems that create trust, reduce risk, and enable secure transactions.
          </Paragraph>
        </section>

        {/* 1. Paid Placement */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          borderBottom: '1px solid #1f1f1f',
          background: '#0a0a0a'
        }}>
          <Row justify="center">
            <Col xs={24} lg={20} xl={16}>
              <div style={{ marginBottom: 48 }}>
                <Space align="center" style={{ marginBottom: 16 }}>
                  <EyeOutlined style={{ fontSize: 24, color: '#595959' }} />
                  <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                    PAID PLACEMENT
                  </Text>
                </Space>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 8, fontSize: isMobile ? 28 : 36, fontWeight: 600 }}>
                  Visibility, not outcomes
                </Title>
                <Text style={{ color: '#8c8c8c', fontSize: 16, fontStyle: 'italic' }}>
                  "Pay to be seen — not trusted."
                </Text>
              </div>

              <Row gutter={[32, 32]}>
                <Col xs={24} md={12}>
                  <Card bordered style={{ background: '#000000', borderColor: '#1f1f1f', borderRadius: 12, height: '100%' }} bodyStyle={{ padding: 32 }}>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                      What it is
                    </Title>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                      Users or organizations pay to surface:
                    </Paragraph>
                    <Space direction="vertical" size="small" style={{ width: '100%' }}>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Profiles</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Rooms</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Offers</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Tools</Text>
                    </Space>
                  </Card>
                </Col>

                <Col xs={24} md={12}>
                  <Card bordered style={{ background: '#000000', borderColor: '#1f1f1f', borderRadius: 12, height: '100%' }} bodyStyle={{ padding: 32 }}>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                      What it is NOT
                    </Title>
                    <Space direction="vertical" size="small" style={{ width: '100%' }}>
                      <Text style={{ color: '#8c8c8c', fontSize: 15 }}>• Not rank boosting</Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 15 }}>• Not merit manipulation</Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 15 }}>• Not endorsement</Text>
                    </Space>
                  </Card>
                </Col>
              </Row>

              <Card bordered style={{ background: '#000000', borderColor: '#1f1f1f', borderRadius: 12, marginTop: 32 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  How it works
                </Title>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <div>
                    <Text style={{ color: '#d9d9d9', fontSize: 16, fontWeight: 500 }}>Placement is clearly labeled</Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 15, marginTop: 4, marginBottom: 0 }}>
                      All paid placements are transparently marked, ensuring users know when content is promoted.
                    </Paragraph>
                  </div>
                  <div>
                    <Text style={{ color: '#d9d9d9', fontSize: 16, fontWeight: 500 }}>Eligibility requires a minimum reputation</Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 15, marginTop: 4, marginBottom: 0 }}>
                      Only users with established reputation can purchase placement, maintaining platform quality.
                    </Paragraph>
                  </div>
                  <div>
                    <Text style={{ color: '#d9d9d9', fontSize: 16, fontWeight: 500 }}>Placement expires</Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 15, marginTop: 4, marginBottom: 0 }}>
                      Paid visibility has time limits, ensuring fresh content and preventing permanent dominance.
                    </Paragraph>
                  </div>
                </Space>
              </Card>

              <Card bordered style={{ background: '#141414', borderColor: '#595959', borderRadius: 12, marginTop: 32 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  Why this fits OldWest
                </Title>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={8}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>Attention is scarce</Text>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>Trust is preserved</Text>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>Money doesn't override merit</Text>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </section>

        {/* 2. Escrow & Mediation */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          borderBottom: '1px solid #1f1f1f',
          background: '#000000'
        }}>
          <Row justify="center">
            <Col xs={24} lg={20} xl={16}>
              <div style={{ marginBottom: 48 }}>
                <Space align="center" style={{ marginBottom: 16 }}>
                  <LockOutlined style={{ fontSize: 24, color: '#595959' }} />
                  <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                    ESCROW & MEDIATION
                  </Text>
                </Space>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 8, fontSize: isMobile ? 28 : 36, fontWeight: 600 }}>
                  Transaction safety
                </Title>
                <Text style={{ color: '#8c8c8c', fontSize: 16, fontStyle: 'italic' }}>
                  "Pay to remove uncertainty."
                </Text>
              </div>

              <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, marginBottom: 32 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  What it is
                </Title>
                <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                  OldWest temporarily holds funds for:
                </Paragraph>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Work agreements</Text>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Compute usage</Text>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Deliverables</Text>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Milestone-based execution</Text>
                  </Col>
                </Row>
              </Card>

              <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, marginBottom: 32 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  Key distinction
                </Title>
                <Paragraph style={{ color: '#d9d9d9', fontSize: 18, fontWeight: 500, marginBottom: 8 }}>
                  OldWest does not decide winners — it enforces pre-agreed rules.
                </Paragraph>
              </Card>

              <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, marginBottom: 32 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  Mediation layer
                </Title>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={8}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>Evidence-based</Text>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>Time-bounded</Text>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>Reputation-impacting</Text>
                  </Col>
                </Row>
              </Card>

              <Card bordered style={{ background: '#141414', borderColor: '#595959', borderRadius: 12 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  Why this fits OldWest
                </Title>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={8}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>Trustless execution</Text>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>Lowers counterparty risk</Text>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>Encourages professionalism</Text>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </section>

        {/* 3. Reputation */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          borderBottom: '1px solid #1f1f1f',
          background: '#0a0a0a'
        }}>
          <Row justify="center">
            <Col xs={24} lg={20} xl={16}>
              <div style={{ marginBottom: 48 }}>
                <Space align="center" style={{ marginBottom: 16 }}>
                  <TrophyOutlined style={{ fontSize: 24, color: '#595959' }} />
                  <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                    REPUTATION
                  </Text>
                </Space>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 8, fontSize: isMobile ? 28 : 36, fontWeight: 600 }}>
                  Economic signal, not vanity
                </Title>
                <Text style={{ color: '#8c8c8c', fontSize: 16, fontStyle: 'italic' }}>
                  "Reputation lowers your cost of doing business."
                </Text>
              </div>

              <Paragraph style={{ color: '#d9d9d9', fontSize: 18, fontWeight: 500, marginBottom: 32, textAlign: 'center' }}>
                Reputation is financially coupled.
              </Paragraph>

              <Row gutter={[32, 32]}>
                <Col xs={24} md={12}>
                  <Card bordered style={{ background: '#000000', borderColor: '#1f1f1f', borderRadius: 12, height: '100%' }} bodyStyle={{ padding: 32 }}>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                      How reputation is earned
                    </Title>
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Completed escrow transactions</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Low dispute rate</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Consistent behavior</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Bonded commitments</Text>
                    </Space>
                  </Card>
                </Col>

                <Col xs={24} md={12}>
                  <Card bordered style={{ background: '#000000', borderColor: '#1f1f1f', borderRadius: 12, height: '100%' }} bodyStyle={{ padding: 32 }}>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                      How reputation is used
                    </Title>
                    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Access gates</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Placement eligibility</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Fee discounts</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Bond requirements</Text>
                    </Space>
                  </Card>
                </Col>
              </Row>

              <Card bordered style={{ background: '#141414', borderColor: '#595959', borderRadius: 12, marginTop: 32 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  Why this matters
                </Title>
                <Paragraph style={{ color: '#d9d9d9', fontSize: 18, fontWeight: 500, margin: 0 }}>
                  Reputation becomes cost-reducing capital, not a badge.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </section>

        {/* 4. Indemnity */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          borderBottom: '1px solid #1f1f1f',
          background: '#000000'
        }}>
          <Row justify="center">
            <Col xs={24} lg={20} xl={16}>
              <div style={{ marginBottom: 48 }}>
                <Space align="center" style={{ marginBottom: 16 }}>
                  <SafetyOutlined style={{ fontSize: 24, color: '#595959' }} />
                  <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                    INDEMNITY
                  </Text>
                </Space>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 8, fontSize: isMobile ? 28 : 36, fontWeight: 600 }}>
                  Risk transfer
                </Title>
                <Text style={{ color: '#8c8c8c', fontSize: 16, fontStyle: 'italic' }}>
                  "Pay to cap downside risk."
                </Text>
              </div>

              <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, marginBottom: 32 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  What indemnity means here
                </Title>
                <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                  OldWest provides limited financial coverage against:
                </Paragraph>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Non-delivery</Text>
                  <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Fraud</Text>
                  <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Breach of contract (within platform rules)</Text>
                </Space>
              </Card>

              <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, marginBottom: 32 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  How it works
                </Title>
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                  <div>
                    <Text style={{ color: '#d9d9d9', fontSize: 16, fontWeight: 500 }}>Coverage is optional</Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 15, marginTop: 4, marginBottom: 0 }}>
                      Users choose whether to purchase indemnity coverage for their transactions.
                    </Paragraph>
                  </div>
                  <div>
                    <Text style={{ color: '#d9d9d9', fontSize: 16, fontWeight: 500 }}>Coverage is capped</Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 15, marginTop: 4, marginBottom: 0 }}>
                      Maximum coverage amounts are clearly defined per transaction type.
                    </Paragraph>
                  </div>
                  <div>
                    <Text style={{ color: '#d9d9d9', fontSize: 16, fontWeight: 500 }}>Coverage requires:</Text>
                    <Space direction="vertical" size="small" style={{ marginTop: 8 }}>
                      <Text style={{ color: '#8c8c8c', fontSize: 15 }}>• Reputation minimums</Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 15 }}>• Bonding or premiums</Text>
                    </Space>
                  </div>
                </Space>
              </Card>

              <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, marginBottom: 32 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  Who pays
                </Title>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={8}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15 }}>Either party</Text>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15 }}>Or split</Text>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15 }}>Priced by risk profile</Text>
                  </Col>
                </Row>
              </Card>

              <Card bordered style={{ background: '#141414', borderColor: '#595959', borderRadius: 12, marginBottom: 32 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  Why this fits OldWest
                </Title>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={8}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>Converts trust into math</Text>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>Attracts serious users</Text>
                  </Col>
                  <Col xs={24} sm={8}>
                    <Text style={{ color: '#d9d9d9', fontSize: 15, fontWeight: 500 }}>Discourages bad actors</Text>
                  </Col>
                </Row>
              </Card>

              <Card bordered style={{ background: '#1a1a1a', borderColor: '#ff6b35', borderRadius: 12 }} bodyStyle={{ padding: 32 }}>
                <Space align="start" style={{ width: '100%' }}>
                  <WarningOutlined style={{ fontSize: 20, color: '#ff6b35', marginTop: 2 }} />
                  <div>
                    <Text style={{ color: '#ff6b35', fontSize: 14, fontWeight: 600 }}>⚠️ Note:</Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 14, marginTop: 8, marginBottom: 0 }}>
                      This must be framed as contractual indemnity, not insurance (unless licensed).
                    </Paragraph>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </section>

        {/* 5. Subrogation */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          borderBottom: '1px solid #1f1f1f',
          background: '#0a0a0a'
        }}>
          <Row justify="center">
            <Col xs={24} lg={20} xl={16}>
              <div style={{ marginBottom: 48 }}>
                <Space align="center" style={{ marginBottom: 16 }}>
                  <SafetyOutlined style={{ fontSize: 24, color: '#595959' }} />
                  <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                    SUBROGATION
                  </Text>
                </Space>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 8, fontSize: isMobile ? 28 : 36, fontWeight: 600 }}>
                  Accountability enforcement
                </Title>
                <Text style={{ color: '#8c8c8c', fontSize: 16, fontStyle: 'italic' }}>
                  "If we cover you, we inherit enforcement rights."
                </Text>
              </div>

              <Paragraph style={{ color: '#d9d9d9', fontSize: 18, fontWeight: 500, marginBottom: 32, textAlign: 'center' }}>
                This is the backbone that makes indemnity real.
              </Paragraph>

              <Card bordered style={{ background: '#000000', borderColor: '#1f1f1f', borderRadius: 12, marginBottom: 32 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  What subrogation means on OldWest
                </Title>
                <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                  If OldWest pays a claim:
                </Paragraph>
                <Space direction="vertical" size="middle" style={{ width: '100%', marginBottom: 16 }}>
                  <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• It acquires the right to recover funds</Text>
                  <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• From the at-fault party</Text>
                </Space>
                <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginTop: 16, marginBottom: 8 }}>
                  Via:
                </Paragraph>
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Bond slashing</Text>
                  <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Withheld payouts</Text>
                  <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Reputation damage</Text>
                  <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Access revocation</Text>
                </Space>
              </Card>

              <Row gutter={[32, 32]}>
                <Col xs={24} md={12}>
                  <Card bordered style={{ background: '#000000', borderColor: '#ff6b35', borderRadius: 12, height: '100%' }} bodyStyle={{ padding: 32 }}>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                      Without subrogation
                    </Title>
                    <Space direction="vertical" size="small" style={{ width: '100%' }}>
                      <Text style={{ color: '#8c8c8c', fontSize: 15 }}>• Indemnity becomes charity</Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 15 }}>• Bad actors extract value</Text>
                    </Space>
                  </Card>
                </Col>

                <Col xs={24} md={12}>
                  <Card bordered style={{ background: '#000000', borderColor: '#4ecdc4', borderRadius: 12, height: '100%' }} bodyStyle={{ padding: 32 }}>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                      With subrogation
                    </Title>
                    <Space direction="vertical" size="small" style={{ width: '100%' }}>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Risk is internalized</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Behavior improves</Text>
                    </Space>
                  </Card>
                </Col>
              </Row>

              <Card bordered style={{ background: '#141414', borderColor: '#595959', borderRadius: 12, marginTop: 32 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  Why this is critical
                </Title>
                <Paragraph style={{ color: '#d9d9d9', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                  Subrogation ensures that when OldWest covers a loss, it has the authority to recover from responsible parties, creating accountability and preventing abuse of the indemnity system.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </section>

        {/* How it all connects */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          background: '#000000'
        }}>
          <Row justify="center">
            <Col xs={24} lg={20} xl={16}>
              <div style={{ marginBottom: 48, textAlign: 'center' }}>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: isMobile ? 28 : 36, fontWeight: 600 }}>
                  How this all connects
                </Title>
                <Text style={{ color: '#8c8c8c', fontSize: 16 }}>
                  Simple model
                </Text>
              </div>

              <Row gutter={[24, 24]}>
                <Col xs={24} sm={12} md={6}>
                  <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, height: '100%', textAlign: 'center' }} bodyStyle={{ padding: 32 }}>
                    <EyeOutlined style={{ fontSize: 32, color: '#595959', marginBottom: 16 }} />
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>
                      Paid Placement
                    </Title>
                    <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
                      → Visibility
                    </Text>
                  </Card>
                </Col>

                <Col xs={24} sm={12} md={6}>
                  <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, height: '100%', textAlign: 'center' }} bodyStyle={{ padding: 32 }}>
                    <LockOutlined style={{ fontSize: 32, color: '#595959', marginBottom: 16 }} />
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>
                      Escrow
                    </Title>
                    <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
                      → Execution safety
                    </Text>
                  </Card>
                </Col>

                <Col xs={24} sm={12} md={6}>
                  <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, height: '100%', textAlign: 'center' }} bodyStyle={{ padding: 32 }}>
                    <TrophyOutlined style={{ fontSize: 32, color: '#595959', marginBottom: 16 }} />
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>
                      Reputation
                    </Title>
                    <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
                      → Cost & access
                    </Text>
                  </Card>
                </Col>

                <Col xs={24} sm={12} md={6}>
                  <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, height: '100%', textAlign: 'center' }} bodyStyle={{ padding: 32 }}>
                    <SafetyOutlined style={{ fontSize: 32, color: '#595959', marginBottom: 16 }} />
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 8, fontSize: 18, fontWeight: 600 }}>
                      Indemnity
                    </Title>
                    <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
                      → Risk ceiling
                    </Text>
                  </Card>
                </Col>
              </Row>

              <Card bordered style={{ background: '#141414', borderColor: '#595959', borderRadius: 12, marginTop: 32, textAlign: 'center' }} bodyStyle={{ padding: 40 }}>
                <SafetyOutlined style={{ fontSize: 48, color: '#595959', marginBottom: 16 }} />
                <Title level={3} style={{ color: '#ffffff', marginBottom: 8, fontSize: 24, fontWeight: 600 }}>
                  Subrogation
                </Title>
                <Text style={{ color: '#8c8c8c', fontSize: 16 }}>
                  → Enforcement
                </Text>
              </Card>
            </Col>
          </Row>
        </section>
      </Content>
    </Layout>
  )
}
