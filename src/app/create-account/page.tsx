'use client'

import { Layout, Typography, Divider, Space, Button, Card, Row, Col } from 'antd'
import Link from 'next/link'
import { CheckCircleOutlined } from '@ant-design/icons'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function CreateAccount() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Content style={{ padding: '120px 48px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
        
        <Title level={1} style={{ color: '#ffffff', marginBottom: 24, fontSize: 48, fontWeight: 700 }}>
          Create Account
        </Title>
        
        <Paragraph style={{ color: '#8c8c8c', fontSize: 18, lineHeight: 1.8, marginBottom: 40 }}>
          Create an OldWest account to access the network. Account creation requires phone number verification and establishes your identity on the platform.
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
              Account Requirements
            </Title>
            <Space direction="vertical" size="middle" style={{ width: '100%', marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <CheckCircleOutlined style={{ color: '#595959', fontSize: 16 }} />
                <Text style={{ color: '#8c8c8c', fontSize: 16 }}>Phone number for verification</Text>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <CheckCircleOutlined style={{ color: '#595959', fontSize: 16 }} />
                <Text style={{ color: '#8c8c8c', fontSize: 16 }}>Valid phone number capable of receiving SMS</Text>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <CheckCircleOutlined style={{ color: '#595959', fontSize: 16 }} />
                <Text style={{ color: '#8c8c8c', fontSize: 16 }}>Agreement to Terms of Service</Text>
              </div>
            </Space>
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
              href="/login"
            >
              Create Account
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
              Verification Process
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              After providing your phone number, you will receive a verification code via SMS. Enter the code to complete account creation. This verification establishes your identity and enables account recovery.
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              Each phone number can be associated with one account. This ensures a single, verifiable identity tied to all platform activity and settlement.
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
              Account Features
            </Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Usage Dashboard</Text>
              </Col>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Balance Management</Text>
              </Col>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Session History</Text>
              </Col>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>• Settlement Logs</Text>
              </Col>
            </Row>
          </Card>
        </Space>
      </Content>
    </Layout>
  )
}

