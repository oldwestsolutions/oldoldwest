'use client'

import Link from 'next/link'
import { Layout, Row, Col, Card, Typography, Divider, Button, Progress, Space } from 'antd'
import { AppstoreOutlined, DatabaseOutlined, ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons'

const { Header, Content, Footer } = Layout
const { Title, Paragraph, Text } = Typography

export default function Home() {
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
        height: '72px'
      }}>
        <Row align="middle" gutter={16}>
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
            <Text strong style={{ fontSize: 18, color: '#ffffff', letterSpacing: '0.5px' }}>OLDWEST</Text>
          </Col>
        </Row>
        <Space size="middle">
          <Button 
            type="text" 
            style={{ color: '#8c8c8c', borderRadius: 12 }}
            href="/login"
          >
            ACCESS NETWORK
          </Button>
          <Button 
            type="primary" 
            style={{ 
              background: '#141414', 
              borderColor: '#1f1f1f',
              color: '#ffffff',
              borderRadius: 12,
              fontWeight: 600
            }}
            href="/login"
          >
            CREATE ACCOUNT
          </Button>
        </Space>
      </Header>

      <Content>
        {/* Hero Section */}
        <section style={{ borderBottom: '1px solid #1f1f1f', padding: '96px 48px' }}>
          <Row justify="center">
            <Col xs={24} lg={20} xl={16}>
              <Title 
                level={1} 
                style={{ 
                  fontSize: 64, 
                  fontWeight: 700, 
                  color: '#ffffff',
                  marginBottom: 24,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em'
                }}
              >
                Social Infrastructure.
                <br />
                Metered by Design.
              </Title>
              <Paragraph style={{ fontSize: 18, color: '#8c8c8c', lineHeight: 1.75, maxWidth: 800 }}>
                OldWest is a VMaaS-based social network. Every user operates inside a virtual environment. Interactions consume minutes. Minutes function like compute credits. Usage is tracked and settled.
              </Paragraph>
            </Col>
          </Row>
        </section>

        {/* How the Platform Works */}
        <section style={{ borderBottom: '1px solid #1f1f1f', background: '#0a0a0a', padding: '80px 48px' }}>
          <Row justify="center" style={{ marginBottom: 48 }}>
            <Col xs={24} lg={20} xl={16}>
              <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                HOW THE PLATFORM WORKS
              </Text>
              <Divider style={{ margin: '8px 0 0 0', borderColor: '#1f1f1f' }} />
            </Col>
          </Row>
          
          <Row justify="center">
            <Col xs={24} lg={20} xl={16}>
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
                    bodyStyle={{ padding: 24 }}
                  >
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ 
                        width: 48, 
                        height: 48, 
                        background: '#141414', 
                        border: '1px solid #1f1f1f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                        marginBottom: 16
                      }}>
                        <AppstoreOutlined style={{ fontSize: 24, color: '#595959' }} />
                      </div>
                      <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                        IDENTITY
                      </Text>
                    </div>
                    <Paragraph style={{ color: '#d9d9d9', fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                      Phone-number verified identity. Each user is authenticated through a verified phone number, establishing a single, accountable identity.
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
                    bodyStyle={{ padding: 24 }}
                  >
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ 
                        width: 48, 
                        height: 48, 
                        background: '#141414', 
                        border: '1px solid #1f1f1f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                        marginBottom: 16
                      }}>
                        <DatabaseOutlined style={{ fontSize: 24, color: '#595959' }} />
                      </div>
                      <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                        SESSION
                      </Text>
                    </div>
                    <Paragraph style={{ color: '#d9d9d9', fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                      Virtual machine allocation per session. When you access the network, a virtual environment is provisioned for your session.
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
                    bodyStyle={{ padding: 24 }}
                  >
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ 
                        width: 48, 
                        height: 48, 
                        background: '#141414', 
                        border: '1px solid #1f1f1f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                        marginBottom: 16
                      }}>
                        <ClockCircleOutlined style={{ fontSize: 24, color: '#595959' }} />
                      </div>
                      <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                        RUNTIME
                      </Text>
                    </div>
                    <Paragraph style={{ color: '#d9d9d9', fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                      Interactions consume minutes. Every action—messaging, viewing, connecting—consumes VM minutes from your balance.
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
                    bodyStyle={{ padding: 24 }}
                  >
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ 
                        width: 48, 
                        height: 48, 
                        background: '#141414', 
                        border: '1px solid #1f1f1f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                        marginBottom: 16
                      }}>
                        <CheckCircleOutlined style={{ fontSize: 24, color: '#595959' }} />
                      </div>
                      <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                        SETTLEMENT
                      </Text>
                    </div>
                    <Paragraph style={{ color: '#d9d9d9', fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                      Usage is tracked and settled. All consumption is logged, metered, and settled against your account balance.
                    </Paragraph>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        {/* VM Minutes Explanation */}
        <section style={{ borderBottom: '1px solid #1f1f1f', padding: '80px 48px' }}>
          <Row justify="center" gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                VM MINUTES
              </Text>
              <Divider style={{ margin: '8px 0 32px 0', borderColor: '#1f1f1f' }} />
              
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <div>
                  <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                    What Minutes Are
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    VM minutes are compute credits that meter your usage of the platform. Each minute represents a unit of virtual machine runtime consumed during your session.
                  </Paragraph>
                </div>

                <div>
                  <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                    Why They Exist
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    Minutes ensure accountable resource consumption. Every interaction requires compute resources. Minutes provide transparent, metered access to these resources.
                  </Paragraph>
                </div>

                <div>
                  <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                    What Actions Consume Minutes
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    Messaging, viewing content, establishing connections, and all platform interactions consume minutes at a defined rate per action type.
                  </Paragraph>
                </div>

                <div>
                  <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                    How Users Acquire Minutes
                  </Title>
                  <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                    Minutes are purchased and added to your account balance. Usage is deducted from your balance in real-time as you interact with the platform.
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
                bodyStyle={{ padding: 32 }}
              >
                <div style={{ marginBottom: 24 }}>
                  <Row justify="space-between" style={{ marginBottom: 8 }}>
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
                    style={{ marginBottom: 8 }}
                  />
                  <Row justify="space-between">
                    <Col>
                      <Text style={{ color: '#d9d9d9', fontFamily: 'monospace', fontSize: 14 }}>
                        1,247 MIN
                      </Text>
                    </Col>
                    <Col>
                      <Text style={{ color: '#8c8c8c', fontFamily: 'monospace', fontSize: 14 }}>
                        0.5 MIN/MSG
                      </Text>
                    </Col>
                  </Row>
                </div>

                <Divider style={{ borderColor: '#1f1f1f', margin: '24px 0' }} />

                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <Row justify="space-between">
                    <Col>
                      <Text style={{ color: '#8c8c8c', fontSize: 14 }}>Session Duration</Text>
                    </Col>
                    <Col>
                      <Text style={{ color: '#d9d9d9', fontFamily: 'monospace', fontSize: 14 }}>12:34</Text>
                    </Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>
                      <Text style={{ color: '#8c8c8c', fontSize: 14 }}>Consumed This Session</Text>
                    </Col>
                    <Col>
                      <Text style={{ color: '#d9d9d9', fontFamily: 'monospace', fontSize: 14 }}>23 MIN</Text>
                    </Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>
                      <Text style={{ color: '#8c8c8c', fontSize: 14 }}>Remaining Balance</Text>
                    </Col>
                    <Col>
                      <Text style={{ color: '#d9d9d9', fontFamily: 'monospace', fontSize: 14 }}>1,224 MIN</Text>
                    </Col>
                  </Row>
                </Space>
              </Card>
            </Col>
          </Row>
        </section>

        {/* What Makes OldWest Different */}
        <section style={{ borderBottom: '1px solid #1f1f1f', background: '#0a0a0a', padding: '80px 48px' }}>
          <Row justify="center" style={{ marginBottom: 48 }}>
            <Col xs={24} lg={20} xl={16}>
              <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                WHAT MAKES OLDWEST DIFFERENT
              </Text>
              <Divider style={{ margin: '8px 0 0 0', borderColor: '#1f1f1f' }} />
            </Col>
          </Row>

          <Row justify="center">
            <Col xs={24} lg={20} xl={16}>
              <Row gutter={[32, 32]}>
                <Col xs={24} md={12}>
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
                    <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                      TRADITIONAL SOCIAL MEDIA
                    </Text>
                    <Divider style={{ borderColor: '#1f1f1f', margin: '16px 0' }} />
                    <Space direction="vertical" size="small" style={{ width: '100%' }}>
                      <Text style={{ color: '#8c8c8c', fontSize: 14 }}>— Infinite scroll consumption</Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 14 }}>— Engagement farming algorithms</Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 14 }}>— Free resource abuse</Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 14 }}>— Algorithmic manipulation</Text>
                    </Space>
                  </Card>
                </Col>

                <Col xs={24} md={12}>
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
                    <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                      OLDWEST
                    </Text>
                    <Divider style={{ borderColor: '#1f1f1f', margin: '16px 0' }} />
                    <Space direction="vertical" size="small" style={{ width: '100%' }}>
                      <Text style={{ color: '#d9d9d9', fontSize: 14 }}>— Intentional usage metering</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 14 }}>— Accountable resource consumption</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 14 }}>— Resource-based access model</Text>
                      <Text style={{ color: '#d9d9d9', fontSize: 14 }}>— Transparent usage tracking</Text>
                    </Space>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>

        {/* Trust & Infrastructure */}
        <section style={{ borderBottom: '1px solid #1f1f1f', padding: '80px 48px' }}>
          <Row justify="center" style={{ marginBottom: 48 }}>
            <Col xs={24} lg={20} xl={16}>
              <Text style={{ fontSize: 12, color: '#595959', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                TRUST & INFRASTRUCTURE
              </Text>
              <Divider style={{ margin: '8px 0 0 0', borderColor: '#1f1f1f' }} />
            </Col>
          </Row>

          <Row justify="center">
            <Col xs={24} lg={20} xl={16}>
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
                    bodyStyle={{ padding: 24 }}
                  >
                    <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                      PHONE-NUMBER IDENTITY
                    </Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.75, marginTop: 12, marginBottom: 0 }}>
                      Every account is verified through a phone number. This establishes a single, verifiable identity tied to your usage and settlement.
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
                    bodyStyle={{ padding: 24 }}
                  >
                    <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                      USAGE TRANSPARENCY
                    </Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.75, marginTop: 12, marginBottom: 0 }}>
                      All consumption is logged and visible. You can view your usage history, current session consumption, and balance at any time.
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
                    bodyStyle={{ padding: 24 }}
                  >
                    <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                      LOGS & SETTLEMENT
                    </Text>
                    <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.75, marginTop: 12, marginBottom: 0 }}>
                      Complete audit trail of all interactions. Settlement occurs automatically against your account balance with full transaction logs.
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
                  marginTop: 32
                }}
                bodyStyle={{ padding: 32 }}
              >
                <Text style={{ fontSize: 12, color: '#8c8c8c', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                  UTILITY-GRADE DESIGN
                </Text>
                <Paragraph style={{ color: '#d9d9d9', fontSize: 14, lineHeight: 1.75, marginTop: 16, marginBottom: 0, maxWidth: 800 }}>
                  OldWest is built as infrastructure, not entertainment. The platform operates like a public utility for digital interaction. Every component is designed for reliability, transparency, and accountable resource management.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </section>

        {/* Call to Action */}
        <section style={{ background: '#0a0a0a', padding: '80px 48px' }}>
          <Row justify="center">
            <Col xs={24} lg={16} xl={12}>
              <div style={{ textAlign: 'center' }}>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 24, fontSize: 32, fontWeight: 600 }}>
                  Access the Network
                </Title>
                <Paragraph style={{ color: '#8c8c8c', fontSize: 14, marginBottom: 32, lineHeight: 1.75 }}>
                  Create an account to begin using OldWest. View the usage model documentation for detailed information on rates and settlement.
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
                      height: 48,
                      paddingLeft: 32,
                      paddingRight: 32
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
                      height: 48,
                      paddingLeft: 32,
                      paddingRight: 32
                    }}
                  >
                    VIEW USAGE MODEL
                  </Button>
                </Space>
              </div>
            </Col>
          </Row>
        </section>
      </Content>

      {/* Footer */}
      <Footer style={{ 
        background: '#000000', 
        borderTop: '1px solid #1f1f1f',
        padding: '48px 48px'
      }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Row align="middle" gutter={12}>
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
                <Text style={{ fontSize: 14, color: '#8c8c8c', fontWeight: 600, letterSpacing: '0.5px' }}>OLDWEST</Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Space size="large">
              <Link href="#" style={{ color: '#595959', fontSize: 12 }}>DOCUMENTATION</Link>
              <Link href="#" style={{ color: '#595959', fontSize: 12 }}>SETTLEMENT</Link>
              <Link href="#" style={{ color: '#595959', fontSize: 12 }}>INFRASTRUCTURE</Link>
            </Space>
          </Col>
        </Row>
      </Footer>
    </Layout>
  )
}
