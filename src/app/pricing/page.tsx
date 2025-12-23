'use client'

import { Layout, Typography, Divider, Space, Card, Row, Col, Table } from 'antd'
import Link from 'next/link'

const { Header, Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function Pricing() {
  const pricingColumns = [
    {
      title: 'Package',
      dataIndex: 'package',
      key: 'package',
      render: (text: string) => <Text style={{ color: '#d9d9d9', fontWeight: 600 }}>{text}</Text>
    },
    {
      title: 'Minutes',
      dataIndex: 'minutes',
      key: 'minutes',
      render: (text: string) => <Text style={{ color: '#8c8c8c', fontFamily: 'monospace' }}>{text}</Text>
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text: string) => <Text style={{ color: '#d9d9d9', fontFamily: 'monospace' }}>{text}</Text>
    },
  ]

  const pricingData = [
    { key: '1', package: 'Starter', minutes: '1,000 MIN', price: '$10.00' },
    { key: '2', package: 'Standard', minutes: '5,000 MIN', price: '$45.00' },
    { key: '3', package: 'Professional', minutes: '10,000 MIN', price: '$85.00' },
    { key: '4', package: 'Enterprise', minutes: '50,000 MIN', price: '$400.00' },
  ]

  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Header style={{ 
        background: '#000000', 
        borderBottom: '1px solid #1f1f1f',
        padding: '0 48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px'
      }}>
        <Link href="/" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
          ← Back to Home
        </Link>
      </Header>
      <Content style={{ padding: '60px 48px', maxWidth: 900, margin: '0 auto' }}>
        <Title level={1} style={{ color: '#ffffff', marginBottom: 24, fontSize: 48, fontWeight: 700 }}>
          Pricing
        </Title>
        
        <Paragraph style={{ color: '#8c8c8c', fontSize: 18, lineHeight: 1.8, marginBottom: 40 }}>
          Purchase VM minutes to access the OldWest network. Minutes are consumed at published rates for all platform interactions. Balance can be replenished at any time.
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
              Minute Packages
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>
              Purchase minutes in packages. Larger packages offer better value. Minutes never expire and can be used at any time.
            </Paragraph>
            <Table
              columns={pricingColumns}
              dataSource={pricingData}
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
              Consumption Rates
            </Title>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>Direct Message: <Text style={{ fontFamily: 'monospace', color: '#8c8c8c' }}>0.5 MIN/MSG</Text></Text>
              </Col>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>Content View: <Text style={{ fontFamily: 'monospace', color: '#8c8c8c' }}>0.1 MIN/VIEW</Text></Text>
              </Col>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>Connection: <Text style={{ fontFamily: 'monospace', color: '#8c8c8c' }}>1.0 MIN/CONN</Text></Text>
              </Col>
              <Col xs={24} sm={12}>
                <Text style={{ color: '#d9d9d9', fontSize: 15 }}>Session Active: <Text style={{ fontFamily: 'monospace', color: '#8c8c8c' }}>0.05 MIN/MIN</Text></Text>
              </Col>
            </Row>
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
              Payment & Billing
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              Payments are processed securely at the time of purchase. Accepted payment methods include major credit cards and digital payment platforms. All transactions are logged and receipts are provided.
            </Paragraph>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              Minutes are added to your account balance immediately after successful payment. Balance can be viewed and managed through your account dashboard.
            </Paragraph>
          </Card>
        </Space>
      </Content>
    </Layout>
  )
}

