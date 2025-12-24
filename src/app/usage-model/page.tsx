'use client'

import { Layout, Typography, Divider, Space, Card, Row, Col, Table } from 'antd'
import Link from 'next/link'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function UsageModel() {
  const rateColumns = [
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text: string) => <Text style={{ color: '#d9d9d9' }}>{text}</Text>
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      key: 'rate',
      render: (text: string) => <Text style={{ color: '#8c8c8c', fontFamily: 'monospace' }}>{text}</Text>
    },
  ]

  const rateData = [
    { key: '1', action: 'Direct Message', rate: '0.5 MIN/MSG' },
    { key: '2', action: 'Content View', rate: '0.1 MIN/VIEW' },
    { key: '3', action: 'Connection Establish', rate: '1.0 MIN/CONN' },
    { key: '4', action: 'Session Active', rate: '0.05 MIN/MIN' },
  ]

  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Content style={{ padding: '120px 48px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>
        
        <Title level={1} style={{ color: '#ffffff', marginBottom: 24, fontSize: 48, fontWeight: 700 }}>
          Usage Model
        </Title>
        
        <Paragraph style={{ color: '#8c8c8c', fontSize: 18, lineHeight: 1.8, marginBottom: 40 }}>
          OldWest operates on a transparent, metered usage model. All interactions consume VM minutes at published rates. Usage is tracked in real-time and settled automatically against your account balance.
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
              Consumption Rates
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
              All platform interactions consume VM minutes at defined rates. Rates are published and visible before execution. Consumption is deducted from your account balance in real-time.
            </Paragraph>
            <Table
              columns={rateColumns}
              dataSource={rateData}
              pagination={false}
              style={{ background: '#000000' }}
            />
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
              Usage Tracking
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              Every interaction is logged with timestamp, action type, and minutes consumed. You can view complete usage history through your account dashboard. Usage logs are retained for 7 years for settlement and audit purposes.
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              Real-time usage is visible during active sessions. Balance updates immediately after each action. Session summaries show total consumption and remaining balance.
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
              Settlement
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              Settlement occurs automatically. Minutes are deducted from your account balance immediately upon action execution. If your balance is insufficient, the action is blocked until balance is replenished.
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              All settlements are logged with complete transaction history. You can view settlement records, export transaction data, and review usage patterns through your account dashboard.
            </Paragraph>
          </Card>
        </Space>
      </Content>
    </Layout>
  )
}


