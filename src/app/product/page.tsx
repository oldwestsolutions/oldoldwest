'use client'

import { Layout, Typography, Divider, Space, Card, Row, Col } from 'antd'
import Link from 'next/link'
import { AppstoreOutlined, DatabaseOutlined, ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function Product() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Content style={{ padding: '120px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
        
        <Title level={1} style={{ color: '#ffffff', marginBottom: 24, fontSize: 56, fontWeight: 700 }}>
          Product
        </Title>
        
        <Paragraph style={{ color: '#8c8c8c', fontSize: 20, lineHeight: 1.8, marginBottom: 64, maxWidth: 800 }}>
          OldWest is a VMaaS-based social network. Every user operates inside a virtual environment. Interactions consume minutes. Minutes function like compute credits. Usage is tracked and settled.
        </Paragraph>
        
        <Divider style={{ borderColor: '#1f1f1f', margin: '64px 0' }} />
        
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12} lg={6}>
            <Card 
              bordered 
              style={{ 
                background: '#0a0a0a', 
                borderColor: '#1f1f1f',
                borderRadius: 12,
                height: '100%'
              }}
              bodyStyle={{ padding: 32 }}
            >
              <AppstoreOutlined style={{ fontSize: 32, color: '#595959', marginBottom: 16 }} />
              <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                Identity
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Phone-number verified identity for accountable platform access.
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
                height: '100%'
              }}
              bodyStyle={{ padding: 32 }}
            >
              <DatabaseOutlined style={{ fontSize: 32, color: '#595959', marginBottom: 16 }} />
              <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                Sessions
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Isolated virtual environments for secure interactions.
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
                height: '100%'
              }}
              bodyStyle={{ padding: 32 }}
            >
              <ClockCircleOutlined style={{ fontSize: 32, color: '#595959', marginBottom: 16 }} />
              <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                Metering
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Transparent VM minutes consumption tracking.
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
                height: '100%'
              }}
              bodyStyle={{ padding: 32 }}
            >
              <CheckCircleOutlined style={{ fontSize: 32, color: '#595959', marginBottom: 16 }} />
              <Title level={4} style={{ color: '#ffffff', marginBottom: 12, fontSize: 18, fontWeight: 600 }}>
                Settlement
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Automated usage settlement and logging.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

