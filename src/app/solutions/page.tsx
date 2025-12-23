'use client'

import { Layout, Typography, Divider, Space, Card, Row, Col } from 'antd'
import Link from 'next/link'
import { TeamOutlined, SafetyOutlined, BarChartOutlined, GlobalOutlined } from '@ant-design/icons'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function Solutions() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Content style={{ padding: '120px 48px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
        
        <Title level={1} style={{ color: '#ffffff', marginBottom: 24, fontSize: 56, fontWeight: 700 }}>
          Solutions
        </Title>
        
        <Paragraph style={{ color: '#8c8c8c', fontSize: 20, lineHeight: 1.8, marginBottom: 64, maxWidth: 800 }}>
          OldWest provides infrastructure solutions for accountable digital interaction. From individual users to enterprise deployments, our platform scales to meet your needs.
        </Paragraph>
        
        <Divider style={{ borderColor: '#1f1f1f', margin: '64px 0' }} />
        
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card 
              bordered 
              style={{ 
                background: '#0a0a0a', 
                borderColor: '#1f1f1f',
                borderRadius: 12,
                height: '100%'
              }}
              bodyStyle={{ padding: 40 }}
            >
              <TeamOutlined style={{ fontSize: 48, color: '#595959', marginBottom: 24 }} />
              <Title level={3} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
                Individual Users
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                Transparent, metered access for personal use. Pay only for what you consume with complete visibility into usage and settlement.
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} md={12}>
            <Card 
              bordered 
              style={{ 
                background: '#0a0a0a', 
                borderColor: '#1f1f1f',
                borderRadius: 12,
                height: '100%'
              }}
              bodyStyle={{ padding: 40 }}
            >
              <GlobalOutlined style={{ fontSize: 48, color: '#595959', marginBottom: 24 }} />
              <Title level={3} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
                Enterprise
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                Scalable infrastructure for organizations. Custom deployment options, dedicated support, and enterprise-grade security.
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} md={12}>
            <Card 
              bordered 
              style={{ 
                background: '#0a0a0a', 
                borderColor: '#1f1f1f',
                borderRadius: 12,
                height: '100%'
              }}
              bodyStyle={{ padding: 40 }}
            >
              <BarChartOutlined style={{ fontSize: 48, color: '#595959', marginBottom: 24 }} />
              <Title level={3} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
                Analytics & Reporting
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                Complete usage analytics, settlement reports, and audit trails for compliance and optimization.
              </Paragraph>
            </Card>
          </Col>
          
          <Col xs={24} md={12}>
            <Card 
              bordered 
              style={{ 
                background: '#0a0a0a', 
                borderColor: '#1f1f1f',
                borderRadius: 12,
                height: '100%'
              }}
              bodyStyle={{ padding: 40 }}
            >
              <SafetyOutlined style={{ fontSize: 48, color: '#595959', marginBottom: 24 }} />
              <Title level={3} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
                Security & Compliance
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
                Isolated environments, encrypted storage, and complete audit trails meeting enterprise security requirements.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

