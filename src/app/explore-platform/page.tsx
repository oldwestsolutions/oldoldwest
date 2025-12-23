'use client'

import { Layout, Typography, Divider, Space, Card, Row, Col, Button } from 'antd'
import Link from 'next/link'
import { AppstoreOutlined, DatabaseOutlined, ClockCircleOutlined, CheckCircleOutlined, RocketOutlined } from '@ant-design/icons'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function ExplorePlatform() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Content style={{ padding: '120px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <RocketOutlined style={{ fontSize: 64, color: '#595959', marginBottom: 24 }} />
          <Title level={1} style={{ color: '#ffffff', marginBottom: 24, fontSize: 56, fontWeight: 700 }}>
            Explore Platform
          </Title>
          <Paragraph style={{ color: '#8c8c8c', fontSize: 20, lineHeight: 1.8, maxWidth: 700, margin: '0 auto 40px' }}>
            Discover how OldWest operates as infrastructure for digital interaction. Explore features, understand the platform architecture, and learn about usage and settlement.
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
              href="/create-account"
            >
              Create Account
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
              View Usage Model
            </Button>
          </Space>
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
              <AppstoreOutlined style={{ fontSize: 48, color: '#595959', marginBottom: 16 }} />
              <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                Identity System
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Phone-number verified identity ensuring accountable platform access.
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
              <DatabaseOutlined style={{ fontSize: 48, color: '#595959', marginBottom: 16 }} />
              <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                Virtual Sessions
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Isolated virtual environments for secure, tracked interactions.
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
                Usage Metering
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Transparent VM minutes consumption tracking in real-time.
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
              <CheckCircleOutlined style={{ fontSize: 48, color: '#595959', marginBottom: 16 }} />
              <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                Settlement
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Automated usage settlement with complete audit trails.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

