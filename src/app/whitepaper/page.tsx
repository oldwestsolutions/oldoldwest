'use client'

import { Layout, Typography, Divider, Space, Card, Row, Col } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const { Header, Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function Whitepaper() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Header style={{ 
        background: '#000000', 
        borderBottom: '1px solid #1f1f1f',
        padding: '0 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
        position: 'fixed',
        top: isHeaderVisible ? 0 : -72,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'top 0.3s ease-in-out'
      }}>
        <Row align="middle" gutter={16}>
          <Col>
            <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#8c8c8c'}
            >
              ← Back to Home
            </Link>
          </Col>
        </Row>
      </Header>
      <Content style={{ paddingTop: isHeaderVisible ? 120 : 60, paddingLeft: 48, paddingRight: 48, maxWidth: 900, margin: '0 auto' }}>
        <Title level={1} style={{ color: '#ffffff', marginBottom: 24, fontSize: 48, fontWeight: 700 }}>
          OldWest Whitepaper
        </Title>
        <Paragraph style={{ color: '#8c8c8c', fontSize: 18, lineHeight: 1.8, marginBottom: 40 }}>
          A comprehensive technical overview of the OldWest platform architecture, VMaaS infrastructure, Cosmos Network integration, and merit-based NFT system.
        </Paragraph>
        <Divider style={{ borderColor: '#1f1f1f', margin: '40px 0' }} />
        
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }} bodyStyle={{ padding: 32 }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 28, fontWeight: 600 }}>
              Executive Summary
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              OldWest is a VMaaS-based social network platform metered by design, providing transparent, accountable digital interaction infrastructure. The platform integrates with the Cosmos Network to enable a merit-based NFT system that rewards verified achievements and contributions.
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              This whitepaper outlines the technical architecture, economic model, security considerations, and future roadmap for the OldWest platform.
            </Paragraph>
          </Card>

          <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }} bodyStyle={{ padding: 32 }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 28, fontWeight: 600 }}>
              Platform Architecture
            </Title>
            <Title level={3} style={{ color: '#ffffff', marginBottom: 12, fontSize: 20, fontWeight: 600 }}>
              VMaaS Infrastructure
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              OldWest operates on a Virtual Machine as a Service (VMaaS) model, where each user session is allocated a dedicated virtual environment. This ensures complete isolation between users, precise resource tracking, and transparent metering of all platform interactions.
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              Every action—messaging, viewing content, connecting with users—consumes VM minutes from the user's balance at predefined rates. Usage is tracked in real-time and automatically settled against account balances with complete transaction history.
            </Paragraph>
            <Title level={3} style={{ color: '#ffffff', marginTop: 24, marginBottom: 12, fontSize: 20, fontWeight: 600 }}>
              Identity & Authentication
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              User identity is established through username-based authentication. Each user account is tied to all usage and settlement activities, providing accountability and transparency across the platform.
            </Paragraph>
          </Card>

          <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }} bodyStyle={{ padding: 32 }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 28, fontWeight: 600 }}>
              Cosmos Network Integration
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              OldWest integrates with the Cosmos Network blockchain to enable a transparent, immutable merit system. The Cosmos blockchain provides a secure ledger for tracking merit accrual, achievement verification, and NFT issuance.
            </Paragraph>
            <Title level={3} style={{ color: '#ffffff', marginBottom: 12, fontSize: 20, fontWeight: 600 }}>
              Merit Tracking
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              Users gain merit through verified achievements including completed Coursera courses, social media analytics milestones, and platform contributions. All merit accrual is permanently recorded on the Cosmos blockchain, ensuring immutability and transparency.
            </Paragraph>
            <Title level={3} style={{ color: '#ffffff', marginTop: 24, marginBottom: 12, fontSize: 20, fontWeight: 600 }}>
              Merit-Based NFTs
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              When users reach merit milestones, NFTs are automatically minted on Cosmos via smart contracts. These NFTs serve as proof-of-contribution or proof-of-skill, unlock platform perks such as bonus VM minutes or priority BlockSpace access, and are displayed as reputation assets on user profiles.
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              NFT issuance and merit accrual are fully automated through Cosmos smart contracts, creating a self-sustaining merit economy that incentivizes skill development, verified contributions, and platform engagement.
            </Paragraph>
          </Card>

          <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }} bodyStyle={{ padding: 32 }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 28, fontWeight: 600 }}>
              Economic Model
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              The OldWest platform operates on a pay-per-use model where users purchase VM minutes and consume them based on platform interactions. Rates are transparent and visible in real-time, with complete settlement history available through the user dashboard.
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              Merit-based NFTs provide additional value by unlocking perks and demonstrating verified achievements. This creates a dual economy: direct usage-based consumption and merit-based rewards.
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              The platform's economic model is designed to be transparent, fair, and aligned with user value creation. All transactions are logged on-chain where applicable, ensuring complete auditability.
            </Paragraph>
          </Card>

          <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }} bodyStyle={{ padding: 32 }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 28, fontWeight: 600 }}>
              Security & Privacy
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              OldWest implements comprehensive security measures including session isolation, encrypted communications, and secure authentication. User data is protected according to industry best practices, with detailed security documentation available in the Security section.
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              Privacy is maintained through VM isolation, ensuring that user sessions cannot access each other's data. All platform interactions are logged for settlement purposes while maintaining user privacy where appropriate.
            </Paragraph>
          </Card>

          <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }} bodyStyle={{ padding: 32 }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 28, fontWeight: 600 }}>
              Future Roadmap
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              OldWest is committed to continuous improvement and expansion. Planned developments include enhanced API capabilities, additional Cosmos network integrations, expanded merit tracking sources, and improved user experience features.
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              The platform's architecture is designed to scale horizontally, supporting growth in users, sessions, and transaction volume while maintaining performance and reliability.
            </Paragraph>
          </Card>

          <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }} bodyStyle={{ padding: 32 }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16, fontSize: 28, fontWeight: 600 }}>
              Conclusion
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              OldWest represents a new paradigm in social infrastructure: transparent, metered, and merit-based. By combining VMaaS technology with blockchain-based merit tracking, the platform creates a self-sustaining economy that rewards verified achievements and contributions.
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              For technical documentation, API references, and integration guides, please visit the Documentation section. For questions or support, contact our team through the Support channels.
            </Paragraph>
          </Card>
        </Space>

        <Divider style={{ borderColor: '#1f1f1f', margin: '48px 0' }} />

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Text style={{ color: '#595959', fontSize: 14 }}>
            Last updated: January 2025 | Version 1.0
          </Text>
        </div>
      </Content>
    </Layout>
  )
}



