'use client'

import { Layout, Typography, Divider, Space, Button, Card, Input, Form, Header } from 'antd'
import Link from 'next/link'
import { useState } from 'react'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: any) => {
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
  }

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
      <Content style={{ padding: '120px 48px', maxWidth: 500, margin: '0 auto' }}>
        <Card 
          bordered 
          style={{ 
            background: '#0a0a0a', 
            borderColor: '#1f1f1f',
            borderRadius: 12
          }}
          bodyStyle={{ padding: 48 }}
        >
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 8, fontSize: 32, fontWeight: 600 }}>
              Forgot Password
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, margin: 0 }}>
              Enter your phone number to receive a password reset code
            </Paragraph>
          </div>

          <Form
            name="forgot-password"
            onFinish={onFinish}
            layout="vertical"
            requiredMark={false}
          >
            <Form.Item
              name="phone"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input
                placeholder="Phone Number"
                size="large"
                style={{
                  background: '#000000',
                  borderColor: '#1f1f1f',
                  color: '#ffffff',
                  borderRadius: 12,
                  height: 48
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                size="large"
                style={{
                  background: '#000000',
                  borderColor: '#1f1f1f',
                  color: '#ffffff',
                  borderRadius: 12,
                  fontWeight: 600,
                  height: 52,
                  boxShadow: 'none'
                }}
              >
                Send Reset Code
              </Button>
            </Form.Item>
          </Form>

          <Divider style={{ borderColor: '#1f1f1f', margin: '32px 0' }} />

          <div style={{ textAlign: 'center' }}>
            <Link href="/account" style={{ color: '#8c8c8c', fontSize: 14, textDecoration: 'none' }}>
              ← Back to Login
            </Link>
          </div>
        </Card>
      </Content>
    </Layout>
  )
}

