'use client'

import { Layout, Typography, Divider, Space, Button, Card, Row, Col } from 'antd'
import Link from 'next/link'
import { WindowsOutlined, AppleOutlined, AndroidOutlined, CloudDownloadOutlined } from '@ant-design/icons'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function DownloadApp() {
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
            Download OldWest
          </Title>
          <Paragraph style={{ color: '#8c8c8c', fontSize: 20, lineHeight: 1.8, maxWidth: 600, margin: '0 auto 40px' }}>
            Get the OldWest desktop and mobile applications for the best experience accessing sessions and managing your account.
          </Paragraph>
        </div>
        
        <Row gutter={[32, 32]} style={{ marginBottom: 64 }}>
          <Col xs={24} md={8}>
            <Card 
              bordered 
              style={{ 
                background: '#0a0a0a', 
                borderColor: '#1f1f1f',
                borderRadius: 12,
                height: '100%',
                textAlign: 'center'
              }}
              bodyStyle={{ padding: 40 }}
            >
              <WindowsOutlined style={{ fontSize: 64, color: '#595959', marginBottom: 24 }} />
              <Title level={3} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
                Windows
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
                Download for Windows 10 and later
              </Paragraph>
              <Button 
                type="primary"
                block
                style={{ 
                  background: '#000000', 
                  borderColor: '#1f1f1f',
                  color: '#ffffff',
                  borderRadius: 12,
                  fontWeight: 600,
                  height: 48,
                  boxShadow: 'none'
                }}
                icon={<CloudDownloadOutlined />}
              >
                Download
              </Button>
            </Card>
          </Col>
          
          <Col xs={24} md={8}>
            <Card 
              bordered 
              style={{ 
                background: '#0a0a0a', 
                borderColor: '#1f1f1f',
                borderRadius: 12,
                height: '100%',
                textAlign: 'center'
              }}
              bodyStyle={{ padding: 40 }}
            >
              <AppleOutlined style={{ fontSize: 64, color: '#595959', marginBottom: 24 }} />
              <Title level={3} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
                macOS
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
                Download for macOS 11 and later
              </Paragraph>
              <Button 
                type="primary"
                block
                style={{ 
                  background: '#000000', 
                  borderColor: '#1f1f1f',
                  color: '#ffffff',
                  borderRadius: 12,
                  fontWeight: 600,
                  height: 48,
                  boxShadow: 'none'
                }}
                icon={<CloudDownloadOutlined />}
              >
                Download
              </Button>
            </Card>
          </Col>
          
          <Col xs={24} md={8}>
            <Card 
              bordered 
              style={{ 
                background: '#0a0a0a', 
                borderColor: '#1f1f1f',
                borderRadius: 12,
                height: '100%',
                textAlign: 'center'
              }}
              bodyStyle={{ padding: 40 }}
            >
              <AndroidOutlined style={{ fontSize: 64, color: '#595959', marginBottom: 24 }} />
              <Title level={3} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
                Mobile
              </Title>
              <Paragraph style={{ color: '#8c8c8c', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
                Available for iOS and Android
              </Paragraph>
              <Button 
                type="primary"
                block
                style={{ 
                  background: '#000000', 
                  borderColor: '#1f1f1f',
                  color: '#ffffff',
                  borderRadius: 12,
                  fontWeight: 600,
                  height: 48,
                  boxShadow: 'none'
                }}
                icon={<CloudDownloadOutlined />}
              >
                Download
              </Button>
            </Card>
          </Col>
        </Row>
        
        <Divider style={{ borderColor: '#1f1f1f', margin: '64px 0' }} />
        
        <Card 
          bordered 
          style={{ 
            background: '#0a0a0a', 
            borderColor: '#1f1f1f',
            borderRadius: 12
          }}
          bodyStyle={{ padding: 40 }}
        >
          <Title level={3} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
            Web Access
          </Title>
          <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
            You can also access OldWest directly from your web browser. No download required. Simply login to your account and launch sessions from any device.
          </Paragraph>
          <Button 
            type="primary"
            style={{ 
              background: '#000000', 
              borderColor: '#1f1f1f',
              color: '#ffffff',
              borderRadius: 12,
              fontWeight: 600,
              height: 48,
              paddingLeft: 32,
              paddingRight: 32,
              boxShadow: 'none'
            }}
            href="/login"
          >
            Access Web Version
          </Button>
        </Card>
      </Content>
    </Layout>
  )
}


