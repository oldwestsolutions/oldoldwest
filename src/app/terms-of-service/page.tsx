'use client'

import { Layout, Typography, Divider } from 'antd'
import Link from 'next/link'
import { Space } from 'antd'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function TermsOfService() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Content style={{ padding: '120px 48px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
        
        <Title level={1} style={{ color: '#ffffff', marginBottom: 24, fontSize: 48, fontWeight: 700 }}>
          Terms of Service
        </Title>
        
        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Text>
        
        <Divider style={{ borderColor: '#1f1f1f', margin: '40px 0' }} />
        
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              1. Acceptance of Terms
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              By accessing and using OldWest, you agree to these Terms of Service. OldWest is a metered platform where all interactions consume VM minutes. Usage is tracked, logged, and settled transparently. Continued use constitutes acceptance of these terms.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              2. Account Requirements
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              Accounts require phone number verification. Each account is tied to a single verified identity. You are responsible for maintaining account security and for all usage and settlement associated with your account. Account sharing is prohibited.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              3. Usage and Settlement
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              All platform interactions consume VM minutes at published rates. Minutes are deducted from your account balance in real-time. You are responsible for maintaining sufficient balance for desired usage. Rates are transparent and visible before execution. Settlement occurs automatically.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              4. Prohibited Activities
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              Prohibited activities include: attempting to circumvent usage metering, abuse of platform resources, fraudulent settlement activity, impersonation, harassment, or any activity that violates applicable laws. Violations may result in account suspension or termination.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              5. Virtual Environment
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              Each user session operates within an isolated virtual environment. You are responsible for content and activities within your session. The platform provides infrastructure, not content moderation. All interactions are logged for settlement and audit purposes.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              6. Limitation of Liability
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              OldWest operates as infrastructure. We are not liable for user-generated content, interactions between users, or outcomes of platform usage. The platform is provided "as-is" with no warranties. Our liability is limited to the amount paid for VM minutes in the preceding 30 days.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              7. Modifications
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              We reserve the right to modify these terms, platform features, or usage rates with 30 days notice. Continued use after modifications constitutes acceptance. Significant changes will be communicated through your account dashboard.
            </Paragraph>
          </div>
        </Space>
      </Content>
    </Layout>
  )
}



