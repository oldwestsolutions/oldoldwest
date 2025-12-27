'use client'

import { ReactNode } from 'react'
import { Typography, Space, Divider } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'

const { Text } = Typography

interface BankingModalProps {
  title?: string
  subtitle?: string
  status?: string
  statusColor?: string
  items?: Array<{ label: string; value: string; icon?: ReactNode }>
  footer?: ReactNode
  children?: ReactNode
}

export default function BankingModal({ 
  title, 
  subtitle,
  status,
  statusColor = '#27c93f',
  items = [],
  footer,
  children 
}: BankingModalProps) {
  return (
    <div style={{
      background: '#0a0a0a',
      border: '1px solid #1f1f1f',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
    }}>
      {/* Modal Header */}
      <div style={{
        background: 'linear-gradient(135deg, #141414 0%, #0a0a0a 100%)',
        borderBottom: '1px solid #1f1f1f',
        padding: '24px 32px'
      }}>
        {title && (
          <Text style={{ 
            color: '#ffffff', 
            fontSize: 20, 
            fontWeight: 600,
            display: 'block',
            marginBottom: 4
          }}>
            {title}
          </Text>
        )}
        {subtitle && (
          <Text style={{ 
            color: '#8c8c8c', 
            fontSize: 14,
            display: 'block'
          }}>
            {subtitle}
          </Text>
        )}
      </div>

      {/* Modal Content */}
      <div style={{
        padding: '32px',
        background: '#000000',
        minHeight: '200px'
      }}>
        {status && (
          <div style={{
            background: '#0a0a0a',
            border: `1px solid ${statusColor}40`,
            borderRadius: 12,
            padding: '16px 20px',
            marginBottom: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}>
            <div style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: statusColor,
              boxShadow: `0 0 12px ${statusColor}60`
            }}></div>
            <Text style={{ 
              color: statusColor, 
              fontSize: 14, 
              fontWeight: 500 
            }}>
              {status}
            </Text>
          </div>
        )}

        {items.length > 0 && (
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            {items.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                borderBottom: index < items.length - 1 ? '1px solid #1f1f1f' : 'none'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  {item.icon || <CheckCircleOutlined style={{ color: '#27c93f', fontSize: 16 }} />}
                  <Text style={{ color: '#8c8c8c', fontSize: 14 }}>
                    {item.label}
                  </Text>
                </div>
                <Text style={{ 
                  color: '#ffffff', 
                  fontSize: 14, 
                  fontWeight: 500,
                  fontFamily: 'monospace'
                }}>
                  {item.value}
                </Text>
              </div>
            ))}
          </Space>
        )}

        {children}
      </div>

      {footer && (
        <>
          <Divider style={{ margin: 0, borderColor: '#1f1f1f' }} />
          <div style={{
            padding: '20px 32px',
            background: '#0a0a0a',
            borderTop: '1px solid #1f1f1f'
          }}>
            {footer}
          </div>
        </>
      )}
    </div>
  )
}

