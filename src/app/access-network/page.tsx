'use client'

import { Layout, Typography, Divider, Space, Button, Card, Row, Col } from 'antd'
import Link from 'next/link'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function AccessNetwork() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Content style={{ padding: '120px 48px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
        
        <Title level={1} style={{ color: '#ffffff', marginBottom: 24, fontSize: 48, fontWeight: 700 }}>
          Access Network
        </Title>
        
        <Paragraph style={{ color: '#8c8c8c', fontSize: 18, lineHeight: 1.8, marginBottom: 40 }}>
          Access the OldWest network through authenticated sessions. Each session operates within an isolated virtual environment with transparent usage tracking and settlement.
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
              Authentication
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
              Access requires phone number verification. Each account is tied to a single verified identity. Authentication establishes your session and allocates your virtual environment.
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
              Login to Network
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
              Session Management
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              Each session runs in an isolated virtual machine. Session duration, resource consumption, and usage are tracked in real-time. You can view active sessions and usage through your account dashboard.
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              Sessions automatically terminate after inactivity or can be manually closed. All session data is logged for settlement and audit purposes.
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
              Network Features
            </Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Messaging</Text>
              </Col>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Content Viewing</Text>
              </Col>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Connection Establishment</Text>
              </Col>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Usage Tracking</Text>
              </Col>
            </Row>
          </Card>
        </Space>
      </Content>
    </Layout>
  )
}



