'use client'

import { Layout, Typography, Divider, Space, Button, Card, Row, Col } from 'antd'
import Link from 'next/link'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function AccessBlockSpace() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Content style={{ padding: '120px 48px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
        
        <Title level={1} style={{ color: '#ffffff', marginBottom: 24, fontSize: 48, fontWeight: 700 }}>
          Access BlockSpace
        </Title>
        
        <Paragraph style={{ color: '#8c8c8c', fontSize: 18, lineHeight: 1.8, marginBottom: 40 }}>
          BlockSpace is the isolated virtual environment where all OldWest interactions occur. Each user session operates within a dedicated BlockSpace, ensuring security, accountability, and precise resource tracking.
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
              What is BlockSpace?
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              BlockSpace is a dedicated virtual machine environment allocated to each user session. It provides complete isolation from other users, encrypted storage, and precise resource tracking. All interactions within BlockSpace consume VM minutes at published rates.
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              Each BlockSpace is provisioned when you start a session and deallocated when the session ends. All data and interactions are logged within your BlockSpace for settlement and audit purposes.
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
              Accessing BlockSpace
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
              To access BlockSpace, you must have an authenticated account with sufficient VM minutes balance. Each session allocates a new BlockSpace instance. You can have multiple active sessions, each with its own BlockSpace.
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
              Login to Access BlockSpace
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
              BlockSpace Features
            </Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Complete Isolation</Text>
              </Col>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Encrypted Storage</Text>
              </Col>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Resource Metering</Text>
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

