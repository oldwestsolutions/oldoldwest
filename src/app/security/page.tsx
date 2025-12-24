'use client'

import { Layout, Typography, Divider } from 'antd'
import Link from 'next/link'
import { Space } from 'antd'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function Security() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Content style={{ padding: '120px 48px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
        
        <Title level={1} style={{ color: '#ffffff', marginBottom: 24, fontSize: 48, fontWeight: 700 }}>
          Security
        </Title>
        
        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Text>
        
        <Divider style={{ borderColor: '#1f1f1f', margin: '40px 0' }} />
        
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              Infrastructure Security
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              OldWest operates on isolated virtual machine infrastructure. Each user session runs in a dedicated virtual environment with no cross-session access. All virtual machines are encrypted at rest and in transit. Infrastructure is regularly audited and updated.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              Identity Verification
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              Account creation requires phone number verification. This establishes a single, verifiable identity tied to all platform activity. Phone numbers are encrypted and used solely for verification and account recovery. We do not share phone numbers with third parties.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              Data Protection
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              All user data is encrypted using industry-standard encryption. Session data is stored in isolated virtual environments. Usage logs are encrypted and access-controlled. Data is retained only as necessary for settlement and audit requirements.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              Access Control
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              Platform access requires authenticated sessions. All API endpoints require authentication. Administrative access is restricted and logged. Users can view all access logs for their accounts through the dashboard.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              Incident Response
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              Security incidents are responded to within 24 hours. Affected users are notified immediately. All incidents are logged and reviewed. Security improvements are implemented based on incident analysis and industry best practices.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              Reporting Security Issues
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              Report security vulnerabilities through your account dashboard or via the security contact listed in platform documentation. We appreciate responsible disclosure and will acknowledge valid reports.
            </Paragraph>
          </div>
        </Space>
      </Content>
    </Layout>
  )
}


