'use client'

import { Layout, Typography, Divider, Space } from 'antd'
import Link from 'next/link'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function PrivacyPolicy() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Content style={{ padding: '120px 48px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
        
        <Title level={1} style={{ color: '#ffffff', marginBottom: 24, fontSize: 48, fontWeight: 700 }}>
          Privacy Policy
        </Title>
        
        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Text>
        
        <Divider style={{ borderColor: '#1f1f1f', margin: '40px 0' }} />
        
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              1. Information We Collect
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              OldWest collects minimal information necessary for platform operation. This includes phone number for identity verification, usage data for settlement, and session information for virtual machine allocation. We do not collect browsing history, personal preferences, or third-party data.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              2. How We Use Information
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              Information is used exclusively for platform operation: identity verification, resource allocation, usage tracking, and settlement. We do not use data for advertising, marketing, or third-party sharing. All usage is logged transparently and visible to users.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              3. Data Storage and Security
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              All data is stored in isolated virtual environments. Each user session operates in a dedicated virtual machine with encrypted storage. Data is retained only as long as necessary for settlement and audit purposes. Complete data deletion is available upon account closure.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              4. Your Rights
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              You have the right to access all data associated with your account, view complete usage logs, request data export, and request account deletion. All requests are processed within 30 days. Usage transparency is built into the platform—you can view all logged interactions at any time.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              5. Third-Party Services
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              OldWest operates as a self-contained platform. We do not integrate with third-party analytics, advertising networks, or data brokers. Infrastructure services (hosting, compute) are used solely for platform operation and do not have access to user data.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              6. Contact
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              For privacy inquiries, data requests, or concerns, contact us through your account dashboard or via the support channels listed in the platform documentation.
            </Paragraph>
          </div>
        </Space>
      </Content>
    </Layout>
  )
}

