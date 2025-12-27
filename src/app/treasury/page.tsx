'use client'

import { Layout, Typography, Row, Col, Card, Divider, Space } from 'antd'
import Link from 'next/link'
import { SafetyOutlined, EyeOutlined, TrophyOutlined, CheckCircleOutlined, WarningOutlined, LockOutlined, CloudOutlined, RocketOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
import TerminalWindow from '@/components/TerminalWindow'

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
          background: '#000000'
        }}>
          <Row justify="center" gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <div style={{ marginBottom: 32 }}>
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

              <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, marginBottom: 24 }} bodyStyle={{ padding: 32 }}>
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

              <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }} bodyStyle={{ padding: 32 }}>
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
            </Col>

            <Col xs={24} lg={12}>
              <TerminalWindow
                title="placement.oldwest"
                command="oldwest placement --activate --profile"
                outputs={[
                  { icon: '✓', text: 'Profile visibility: Enabled', color: '#27c93f' },
                  { icon: '✓', text: 'Reputation check: Passed (min: 50)', color: '#27c93f' },
                  { icon: '✓', text: 'Payment processed: 1,000 coins', color: '#27c93f' },
                  { icon: '✓', text: 'Placement duration: 30 days', color: '#27c93f' },
                  { icon: '✓', text: 'Label status: [PAID] visible', color: '#27c93f' }
                ]}
                status={{ icon: '🚀', text: 'Placement active', bold: true }}
              />
            </Col>
          </Row>
        </section>

        {/* 2. Escrow & Mediation */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          borderBottom: '1px solid #1f1f1f',
          background: '#0a0a0a'
        }}>
          <Row justify="center" gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <div style={{ marginBottom: 32 }}>
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

              <Card bordered style={{ background: '#000000', borderColor: '#1f1f1f', borderRadius: 12, marginBottom: 24 }} bodyStyle={{ padding: 32 }}>
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

              <Card bordered style={{ background: '#000000', borderColor: '#1f1f1f', borderRadius: 12 }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                  Key distinction
                </Title>
                <Paragraph style={{ color: '#d9d9d9', fontSize: 18, fontWeight: 500, margin: 0 }}>
                  OldWest does not decide winners — it enforces pre-agreed rules.
                </Paragraph>
              </Card>
            </Col>

            <Col xs={24} lg={12}>
              <TerminalWindow
                title="escrow.oldwest"
                command="oldwest escrow --create --work-agreement"
                outputs={[
                  { icon: '✓', text: 'Escrow initialized: 5,000 coins', color: '#27c93f' },
                  { icon: '✓', text: 'Agreement terms: Verified', color: '#27c93f' },
                  { icon: '✓', text: 'Milestone tracking: Active', color: '#27c93f' },
                  { icon: '✓', text: 'Mediation layer: Ready', color: '#27c93f' },
                  { icon: '✓', text: 'Evidence storage: IPFS linked', color: '#27c93f' }
                ]}
                status={{ icon: '🔒', text: 'Funds secured in escrow', bold: true }}
              />
            </Col>
          </Row>
        </section>

        {/* 3. Reputation */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          borderBottom: '1px solid #1f1f1f',
          background: '#000000'
        }}>
          <Row justify="center" gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <div style={{ marginBottom: 32 }}>
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

              <Row gutter={[24, 24]}>
                <Col xs={24} md={12}>
                  <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, height: '100%' }} bodyStyle={{ padding: 32 }}>
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
                  <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, height: '100%' }} bodyStyle={{ padding: 32 }}>
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
            </Col>

            <Col xs={24} lg={12}>
              <TerminalWindow
                title="reputation.oldwest"
                command="oldwest reputation --check --user"
                outputs={[
                  { icon: '✓', text: 'Reputation score: 847/1000', color: '#27c93f' },
                  { icon: '✓', text: 'Completed transactions: 124', color: '#27c93f' },
                  { icon: '✓', text: 'Dispute rate: 0.8% (excellent)', color: '#27c93f' },
                  { icon: '✓', text: 'Fee discount: 15% active', color: '#27c93f' },
                  { icon: '✓', text: 'Placement eligible: Yes', color: '#27c93f' }
                ]}
                status={{ icon: '🏆', text: 'Reputation: Cost-reducing capital', bold: true }}
              />
            </Col>
          </Row>
        </section>

        {/* 4. Indemnity */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          borderBottom: '1px solid #1f1f1f',
          background: '#0a0a0a'
        }}>
          <Row justify="center" gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <div style={{ marginBottom: 32 }}>
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

              <Card bordered style={{ background: '#000000', borderColor: '#1f1f1f', borderRadius: 12, marginBottom: 24 }} bodyStyle={{ padding: 32 }}>
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

            <Col xs={24} lg={12}>
              <TerminalWindow
                title="indemnity.oldwest"
                command="oldwest indemnity --purchase --coverage"
                outputs={[
                  { icon: '✓', text: 'Risk assessment: Low risk profile', color: '#27c93f' },
                  { icon: '✓', text: 'Coverage amount: 10,000 coins', color: '#27c93f' },
                  { icon: '✓', text: 'Premium: 500 coins (5%)', color: '#27c93f' },
                  { icon: '✓', text: 'Reputation requirement: Met (847)', color: '#27c93f' },
                  { icon: '✓', text: 'Coverage active: 90 days', color: '#27c93f' }
                ]}
                status={{ icon: '🛡️', text: 'Indemnity coverage: Active', bold: true }}
              />
            </Col>
          </Row>
        </section>

        {/* 5. Subrogation */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          borderBottom: '1px solid #1f1f1f',
          background: '#000000'
        }}>
          <Row justify="center" gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <div style={{ marginBottom: 32 }}>
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

              <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12, marginBottom: 24 }} bodyStyle={{ padding: 32 }}>
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

              <Row gutter={[24, 24]}>
                <Col xs={24} md={12}>
                  <Card bordered style={{ background: '#0a0a0a', borderColor: '#ff6b35', borderRadius: 12, height: '100%' }} bodyStyle={{ padding: 32 }}>
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
                  <Card bordered style={{ background: '#0a0a0a', borderColor: '#4ecdc4', borderRadius: 12, height: '100%' }} bodyStyle={{ padding: 32 }}>
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
            </Col>

            <Col xs={24} lg={12}>
              <TerminalWindow
                title="subrogation.oldwest"
                command="oldwest subrogation --claim --recover"
                outputs={[
                  { icon: '✓', text: 'Claim processed: 5,000 coins paid', color: '#27c93f' },
                  { icon: '✓', text: 'Subrogation rights: Acquired', color: '#27c93f' },
                  { icon: '✓', text: 'At-fault party: Identified', color: '#27c93f' },
                  { icon: '✓', text: 'Bond slashing: 3,000 coins', color: '#27c93f' },
                  { icon: '✓', text: 'Reputation penalty: -150 points', color: '#27c93f' }
                ]}
                status={{ icon: '⚖️', text: 'Accountability enforced', bold: true }}
              />
            </Col>
          </Row>
        </section>

        {/* How it all connects */}
        <section style={{
          padding: isMobile ? '60px 24px' : '120px 48px',
          background: '#0a0a0a'
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

              <TerminalWindow
                title="treasury.oldwest"
                command="oldwest treasury --status --all-systems"
                outputs={[
                  { icon: '✓', text: 'Paid Placement: 1,247 active placements', color: '#27c93f' },
                  { icon: '✓', text: 'Escrow: 8,432 coins in escrow', color: '#27c93f' },
                  { icon: '✓', text: 'Reputation: 12,847 users tracked', color: '#27c93f' },
                  { icon: '✓', text: 'Indemnity: 156 active policies', color: '#27c93f' },
                  { icon: '✓', text: 'Subrogation: 23 recoveries this month', color: '#27c93f' }
                ]}
                status={{ icon: '🚀', text: 'All systems operational', bold: true }}
              >
                <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid #1f1f1f' }}>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={6}>
                      <div style={{ textAlign: 'center', padding: 16 }}>
                        <EyeOutlined style={{ fontSize: 32, color: '#595959', marginBottom: 8 }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Paid Placement</Text>
                        <Text style={{ color: '#d9d9d9', fontSize: 12, display: 'block', marginTop: 4 }}>→ Visibility</Text>
                      </div>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                      <div style={{ textAlign: 'center', padding: 16 }}>
                        <LockOutlined style={{ fontSize: 32, color: '#595959', marginBottom: 8 }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Escrow</Text>
                        <Text style={{ color: '#d9d9d9', fontSize: 12, display: 'block', marginTop: 4 }}>→ Execution safety</Text>
                      </div>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                      <div style={{ textAlign: 'center', padding: 16 }}>
                        <TrophyOutlined style={{ fontSize: 32, color: '#595959', marginBottom: 8 }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Reputation</Text>
                        <Text style={{ color: '#d9d9d9', fontSize: 12, display: 'block', marginTop: 4 }}>→ Cost & access</Text>
                      </div>
                    </Col>
                    <Col xs={24} sm={12} md={6}>
                      <div style={{ textAlign: 'center', padding: 16 }}>
                        <SafetyOutlined style={{ fontSize: 32, color: '#595959', marginBottom: 8 }} />
                        <Text style={{ color: '#8c8c8c', fontSize: 14, display: 'block' }}>Indemnity</Text>
                        <Text style={{ color: '#d9d9d9', fontSize: 12, display: 'block', marginTop: 4 }}>→ Risk ceiling</Text>
                      </div>
                    </Col>
                  </Row>
                  <div style={{ textAlign: 'center', marginTop: 24, padding: 16 }}>
                    <SafetyOutlined style={{ fontSize: 48, color: '#595959', marginBottom: 8 }} />
                    <Text style={{ color: '#8c8c8c', fontSize: 16, display: 'block' }}>Subrogation</Text>
                    <Text style={{ color: '#d9d9d9', fontSize: 14, display: 'block', marginTop: 4 }}>→ Enforcement</Text>
                  </div>
                </div>
              </TerminalWindow>
            </Col>
          </Row>
        </section>
      </Content>
    </Layout>
  )
}
