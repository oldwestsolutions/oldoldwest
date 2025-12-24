'use client'

import { Layout, Typography, Divider } from 'antd'
import Link from 'next/link'
import { Space } from 'antd'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function Compliance() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Content style={{ padding: '120px 48px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
        
        <Title level={1} style={{ color: '#ffffff', marginBottom: 24, fontSize: 48, fontWeight: 700 }}>
          Compliance
        </Title>
        
        <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Text>
        
        <Divider style={{ borderColor: '#1f1f1f', margin: '40px 0' }} />
        
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              Regulatory Compliance
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              OldWest operates in compliance with applicable data protection regulations including GDPR, CCPA, and other regional requirements. We maintain transparent data practices, provide user rights, and ensure data portability and deletion capabilities.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              Data Processing
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              All data processing is limited to platform operation: identity verification, resource allocation, usage tracking, and settlement. We do not process data for advertising, marketing, or third-party purposes. Processing is transparent and logged.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              User Rights
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              Users have the right to access, export, correct, and delete their data. All rights are exercisable through the account dashboard. Data export is available in machine-readable format. Account deletion removes all associated data within 30 days.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              Audit and Transparency
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              All platform operations are logged and auditable. Users can view complete usage logs, settlement records, and access history. Regular security audits are conducted. Compliance documentation is available upon request.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              Data Retention
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              Data is retained only as necessary for settlement, audit, and legal requirements. Usage logs are retained for 7 years for settlement and audit purposes. Account data is deleted upon account closure request. Retention periods comply with applicable regulations.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              International Operations
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              OldWest operates infrastructure globally. Data may be processed in multiple jurisdictions. We ensure compliance with applicable laws in all jurisdictions where we operate. Standard contractual clauses are used for international data transfers where required.
            </Paragraph>
          </div>
          
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 24, fontWeight: 600 }}>
              Compliance Inquiries
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8 }}>
              For compliance inquiries, data protection officer contact, or regulatory requests, use the contact channels listed in your account dashboard or platform documentation. All inquiries are responded to within 30 days.
            </Paragraph>
          </div>
        </Space>
      </Content>
    </Layout>
  )
}


