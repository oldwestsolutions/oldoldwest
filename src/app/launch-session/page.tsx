'use client'

import { Layout, Typography, Divider, Space, Button, Card, Row, Col } from 'antd'
import Link from 'next/link'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function LaunchSession() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Content style={{ padding: '120px 48px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
        
        <Title level={1} style={{ color: '#ffffff', marginBottom: 24, fontSize: 48, fontWeight: 700 }}>
          Launch Session
        </Title>
        
        <Paragraph style={{ color: '#8c8c8c', fontSize: 18, lineHeight: 1.8, marginBottom: 40 }}>
          Launch a new session to access the OldWest network. Each session operates within an isolated virtual environment with transparent usage tracking and real-time settlement.
        </Paragraph>
        
        <Divider style={{ borderColor: '#1f1f1f', margin: '40px 0' }} />
        
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card 
            bordered 
            style={{ 
              background: '#0a0a0a', 
              borderColor: '#1f1f1f',
              borderRadius: 12
            }}
            bodyStyle={{ padding: 32 }}
          >
            <Title level={3} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
              Starting a Session
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              When you launch a session, a dedicated virtual environment is provisioned for your use. This environment provides complete isolation, encrypted storage, and precise resource tracking. All interactions within your session consume VM minutes at published rates.
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              Sessions are active until you manually close them or they timeout due to inactivity. All session activity is logged for settlement and audit purposes. You can have multiple active sessions simultaneously.
            </Paragraph>
          </Card>
          
          <Card 
            bordered 
            style={{ 
              background: '#0a0a0a', 
              borderColor: '#1f1f1f',
              borderRadius: 12
            }}
            bodyStyle={{ padding: 32 }}
          >
            <Title level={3} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
              Session Requirements
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
              To launch a session, you must have an authenticated account with sufficient VM minutes balance. Each session consumes minutes based on your activity. Session duration and resource consumption are tracked in real-time and visible through your account dashboard.
            </Paragraph>
            <Button 
              type="primary"
              style={{ 
                background: '#000000', 
                borderColor: '#1f1f1f',
                color: '#ffffff',
                borderRadius: 12,
                fontWeight: 600,
                boxShadow: 'none'
              }}
              href="/login"
            >
              Login to Launch Session
            </Button>
          </Card>
          
          <Card 
            bordered 
            style={{ 
              background: '#0a0a0a', 
              borderColor: '#1f1f1f',
              borderRadius: 12
            }}
            bodyStyle={{ padding: 32 }}
          >
            <Title level={3} style={{ color: '#ffffff', marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
              Session Features
            </Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Isolated Environment</Text>
              </Col>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Encrypted Storage</Text>
              </Col>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Real-time Metering</Text>
              </Col>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Usage Transparency</Text>
              </Col>
            </Row>
          </Card>
        </Space>
      </Content>
    </Layout>
  )
}

