'use client'

import { ReactNode } from 'react'
import { Typography } from 'antd'

const { Text } = Typography

interface TerminalWindowProps {
  title?: string
  command?: string
  outputs?: Array<{ icon?: string; text: string; color?: string }>
  status?: { icon: string; text: string; bold?: boolean }
  children?: ReactNode
}

export default function TerminalWindow({ 
  title, 
  command, 
  outputs = [], 
  status,
  children 
}: TerminalWindowProps) {
  return (
    <div style={{
      background: '#0a0a0a',
      border: '1px solid #1f1f1f',
      borderRadius: 12,
      overflow: 'hidden',
      fontFamily: 'monospace'
    }}>
      {/* Terminal Header */}
      <div style={{
        background: '#141414',
        borderBottom: '1px solid #1f1f1f',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
        {/* Window Controls */}
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }}></div>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }}></div>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }}></div>
        </div>
        {title && (
          <Text style={{ color: '#8c8c8c', fontSize: 12, marginLeft: 8 }}>{title}</Text>
        )}
      </div>

      {/* Terminal Content */}
      <div style={{
        padding: '24px',
        background: '#000000',
        minHeight: '200px'
      }}>
        {command && (
          <div style={{ marginBottom: 16 }}>
            <span style={{ color: '#27c93f' }}>$ </span>
            <span style={{ color: '#27c93f' }}>{command}</span>
          </div>
        )}

        {outputs.map((output, index) => (
          <div key={index} style={{ marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
            {output.icon && (
              <span style={{ color: output.color || '#27c93f', fontSize: 14 }}>{output.icon}</span>
            )}
            <span style={{ color: output.color || '#ffffff', fontSize: 14 }}>{output.text}</span>
          </div>
        ))}

        {status && (
          <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 16 }}>{status.icon}</span>
            <span style={{ 
              color: '#ffffff', 
              fontSize: 16, 
              fontWeight: status.bold ? 700 : 400 
            }}>
              {status.text}
            </span>
          </div>
        )}

        {children}
      </div>
    </div>
  )
}

