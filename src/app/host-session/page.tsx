'use client'

import { Layout, Typography, Divider, Space, Button, Card, Row, Col } from 'antd'
import Link from 'next/link'
import { VideoCameraOutlined, UserOutlined, ClockCircleOutlined, LockOutlined } from '@ant-design/icons'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function HostSession() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Content style={{ padding: '60px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <Title level={1} style={{ color: '#ffffff', marginBottom: 16, fontSize: 56, fontWeight: 700 }}>
            Host a Session
          </Title>
          <Paragraph style={{ color: '#8c8c8c', fontSize: 20, lineHeight: 1.8, maxWidth: 600, margin: '0 auto 40px' }}>
            Create and manage your own session. Invite participants, control access, and track usage in real-time.
          </Paragraph>
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
            icon={<VideoCameraOutlined />}
          >
            Start Hosting
          </Button>
        </div>
        
        <Divider style={{ borderColor: '#1f1f1f', margin: '64px 0' }} />
        
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12} lg={6}>
            <Card 
              bordered 
              style={{ 
                background: '#0a0a0a', 
                borderColor: '#1f1f1f',
                borderRadius: 12,
                height: '100%',
                textAlign: 'center'
              }}
              bodyStyle={{ padding: 32 }}
            >
              <VideoCameraOutlined style={{ fontSize: 48, color: '#595959', marginBottom: 16 }} />
              <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                Video Sessions
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Host video-enabled sessions with screen sharing and real-time collaboration.
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} md={12} lg={6}>
            <Card 
              bordered 
              style={{ 
                background: '#0a0a0a', 
                borderColor: '#1f1f1f',
                borderRadius: 12,
                height: '100%',
                textAlign: 'center'
              }}
              bodyStyle={{ padding: 32 }}
            >
              <UserOutlined style={{ fontSize: 48, color: '#595959', marginBottom: 16 }} />
              <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                Participant Control
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Manage participants, control access, and moderate session activity.
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} md={12} lg={6}>
            <Card 
              bordered 
              style={{ 
                background: '#0a0a0a', 
                borderColor: '#1f1f1f',
                borderRadius: 12,
                height: '100%',
                textAlign: 'center'
              }}
              bodyStyle={{ padding: 32 }}
            >
              <ClockCircleOutlined style={{ fontSize: 48, color: '#595959', marginBottom: 16 }} />
              <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                Usage Tracking
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Real-time tracking of session duration and resource consumption.
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} md={12} lg={6}>
            <Card 
              bordered 
              style={{ 
                background: '#0a0a0a', 
                borderColor: '#1f1f1f',
                borderRadius: 12,
                height: '100%',
                textAlign: 'center'
              }}
              bodyStyle={{ padding: 32 }}
            >
              <LockOutlined style={{ fontSize: 48, color: '#595959', marginBottom: 16 }} />
              <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                Secure Access
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Encrypted sessions with access controls and participant verification.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

