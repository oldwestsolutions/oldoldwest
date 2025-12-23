'use client'

import { Layout, Typography, Divider, Space, Button, Card, Input, Form, Checkbox, Header } from 'antd'
import Link from 'next/link'
import { useState } from 'react'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export default function Account() {
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: any) => {
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
    // Redirect would happen here
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
            <div style={{ 
              width: 64, 
              height: 64, 
              background: '#141414', 
              border: '1px solid #1f1f1f',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <div style={{ width: 32, height: 32, background: '#595959', borderRadius: 8 }}></div>
            </div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: 8, fontSize: 32, fontWeight: 600 }}>
              Welcome back
            </Title>
            <Paragraph style={{ color: '#8c8c8c', fontSize: 16, margin: 0 }}>
              Login to access your OldWest account
            </Paragraph>
          </div>

          <Form
            name="login"
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

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password
                placeholder="Password"
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox style={{ color: '#8c8c8c' }}>Remember me</Checkbox>
                </Form.Item>
                <Link href="/forgot-password" style={{ color: '#8c8c8c', fontSize: 14 }}>
                  Forgot Password?
                </Link>
              </div>
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
                Login
              </Button>
            </Form.Item>
          </Form>

          <Divider style={{ borderColor: '#1f1f1f', margin: '32px 0' }} />

          <div style={{ textAlign: 'center' }}>
            <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
              Need an account?{' '}
              <Link href="/create-account" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 600 }}>
                Create Account
              </Link>
            </Text>
          </div>
        </Card>

        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <Text style={{ color: '#595959', fontSize: 12 }}>
            By continuing, you agree to our{' '}
            <Link href="/terms-of-service" style={{ color: '#8c8c8c' }}>Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy-policy" style={{ color: '#8c8c8c' }}>Privacy Policy</Link>
          </Text>
        </div>
      </Content>
    </Layout>
  )
}

