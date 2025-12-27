'use client'

import { ReactNode } from 'react'
import { Typography, Space } from 'antd'
import { VideoCameraOutlined, UserOutlined, ShareAltOutlined, MessageOutlined, BellOutlined, PhoneOutlined, AudioOutlined, MoreOutlined } from '@ant-design/icons'

const { Text } = Typography

interface GoogleMeetsUIProps {
  participants?: number
  showChat?: boolean
  showScreenShare?: boolean
  showControls?: boolean
  variant?: 'workspace' | 'communication'
}

export default function GoogleMeetsUI({ 
  participants = 4,
  showChat = true,
  showScreenShare = false,
  showControls = true,
  variant = 'communication'
}: GoogleMeetsUIProps) {
  return (
    <div style={{
      background: '#0a0a0a',
      border: '1px solid #1f1f1f',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      height: variant === 'communication' ? '400px' : '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Top Bar */}
      <div style={{
        background: '#141414',
        borderBottom: '1px solid #1f1f1f',
        padding: '8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#ef4444',
            boxShadow: '0 0 8px #ef4444'
          }}></div>
          <Text style={{ color: '#8c8c8c', fontSize: 12 }}>
            {variant === 'workspace' ? 'Remote Desktop Session' : 'Meeting in progress'}
          </Text>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{
            width: 24,
            height: 24,
            borderRadius: 4,
            background: '#1f1f1f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <MoreOutlined style={{ color: '#8c8c8c', fontSize: 12 }} />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{
        flex: 1,
        background: '#000000',
        padding: variant === 'workspace' ? '16px' : '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: variant === 'workspace' ? '12px' : '8px',
        overflow: 'hidden',
        minHeight: 0
      }}>
        {variant === 'workspace' ? (
          // Workspace View - Desktop Environment
          <>
            {/* Desktop Toolbar */}
            <div style={{
              background: '#141414',
              border: '1px solid #1f1f1f',
              borderRadius: 8,
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: 12
            }}>
              <div style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#ef4444',
                marginRight: 4
              }}></div>
              <div style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#fbbf24',
                marginRight: 4
              }}></div>
              <div style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#10b981'
              }}></div>
              <div style={{
                flex: 1,
                height: 24,
                background: '#0a0a0a',
                border: '1px solid #1f1f1f',
                borderRadius: 4,
                margin: '0 12px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 8px'
              }}>
                <Text style={{ color: '#595959', fontSize: 10 }}>file:///workspace</Text>
              </div>
            </div>

            {/* File Explorer & Editor Panes */}
            <div style={{
              display: 'flex',
              gap: 12,
              flex: 1,
              minHeight: 0
            }}>
              {/* File Explorer */}
              <div style={{
                width: '30%',
                background: '#0a0a0a',
                border: '1px solid #1f1f1f',
                borderRadius: 8,
                padding: '12px',
                overflow: 'auto'
              }}>
                <Text style={{ color: '#8c8c8c', fontSize: 11, fontWeight: 600, display: 'block', marginBottom: 8 }}>
                  EXPLORER
                </Text>
                <Space direction="vertical" size={4} style={{ width: '100%' }}>
                  {['📁 src', '📁 public', '📄 index.ts', '📄 app.tsx', '📄 config.json'].map((item, idx) => (
                    <div key={idx} style={{
                      padding: '4px 8px',
                      borderRadius: 4,
                      background: idx === 2 ? '#1f1f1f' : 'transparent',
                      cursor: 'pointer'
                    }}>
                      <Text style={{ color: idx === 2 ? '#ffffff' : '#8c8c8c', fontSize: 11 }}>
                        {item}
                      </Text>
                    </div>
                  ))}
                </Space>
              </div>

              {/* Editor */}
              <div style={{
                flex: 1,
                background: '#0a0a0a',
                border: '1px solid #1f1f1f',
                borderRadius: 8,
                padding: '12px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  display: 'flex',
                  gap: 8,
                  marginBottom: 12,
                  borderBottom: '1px solid #1f1f1f',
                  paddingBottom: 8
                }}>
                  {['index.ts', 'app.tsx'].map((tab, idx) => (
                    <div key={idx} style={{
                      padding: '4px 12px',
                      background: idx === 0 ? '#1f1f1f' : 'transparent',
                      borderRadius: 4,
                      cursor: 'pointer'
                    }}>
                      <Text style={{ color: idx === 0 ? '#ffffff' : '#8c8c8c', fontSize: 11 }}>
                        {tab}
                      </Text>
                    </div>
                  ))}
                </div>
                <div style={{ flex: 1, fontFamily: 'monospace', fontSize: 10, color: '#8c8c8c', lineHeight: 1.6 }}>
                  <div style={{ color: '#8c8c8c' }}>1  <span style={{ color: '#10b981' }}>import</span> <span style={{ color: '#d9d9d9' }}>React</span></div>
                  <div style={{ color: '#8c8c8c' }}>2  <span style={{ color: '#10b981' }}>import</span> <span style={{ color: '#d9d9d9' }}>{'{'}</span> <span style={{ color: '#d9d9d9' }}>useState</span> <span style={{ color: '#d9d9d9' }}>{'}'}</span> <span style={{ color: '#10b981' }}>from</span> <span style={{ color: '#fbbf24' }}>'react'</span></div>
                  <div style={{ color: '#8c8c8c' }}>3</div>
                  <div style={{ color: '#8c8c8c' }}>4  <span style={{ color: '#10b981' }}>export default</span> <span style={{ color: '#10b981' }}>function</span> <span style={{ color: '#d9d9d9' }}>App</span><span style={{ color: '#d9d9d9' }}>()</span> <span style={{ color: '#d9d9d9' }}>{'{'}</span></div>
                  <div style={{ color: '#8c8c8c' }}>5    <span style={{ color: '#10b981' }}>return</span> <span style={{ color: '#d9d9d9' }}>{'<'}</span><span style={{ color: '#d9d9d9' }}>div</span><span style={{ color: '#d9d9d9' }}>{'>'}</span></div>
                  <div style={{ color: '#8c8c8c' }}>6      <span style={{ color: '#d9d9d9' }}>{'<'}</span><span style={{ color: '#d9d9d9' }}>h1</span><span style={{ color: '#d9d9d9' }}>{'>'}</span>Hello World<span style={{ color: '#d9d9d9' }}>{'<'}</span><span style={{ color: '#d9d9d9' }}>/h1</span><span style={{ color: '#d9d9d9' }}>{'>'}</span></div>
                  <div style={{ color: '#8c8c8c' }}>7    <span style={{ color: '#d9d9d9' }}>{'<'}</span><span style={{ color: '#d9d9d9' }}>/div</span><span style={{ color: '#d9d9d9' }}>{'>'}</span></div>
                  <div style={{ color: '#8c8c8c' }}>8  <span style={{ color: '#d9d9d9' }}>{'}'}</span></div>
                </div>
              </div>
            </div>

            {/* Terminal */}
            <div style={{
              background: '#000000',
              border: '1px solid #1f1f1f',
              borderRadius: 8,
              padding: '12px',
              fontFamily: 'monospace',
              fontSize: 10
            }}>
              <div style={{ marginBottom: 8 }}>
                <Text style={{ color: '#8c8c8c', fontSize: 10 }}>$ npm run dev</Text>
              </div>
              <div>
                <Text style={{ color: '#10b981', fontSize: 10 }}>✓ Server running on http://localhost:3000</Text>
              </div>
            </div>
          </>
        ) : (
          // Communication View - Video Grid
          <>
            {/* Video Grid */}
            <div style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: participants <= 2 ? '1fr' : 'repeat(2, 1fr)',
              gap: '8px',
              minHeight: 0,
              overflow: 'hidden'
            }}>
              {Array.from({ length: Math.min(participants, 4) }).map((_, idx) => (
                <div key={idx} style={{
                  background: '#141414',
                  border: '1px solid #1f1f1f',
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  aspectRatio: '16/9'
                }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #595959 0%, #8c8c8c 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <UserOutlined style={{ fontSize: 18, color: '#d9d9d9' }} />
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: 6,
                    left: 6,
                    background: 'rgba(0, 0, 0, 0.6)',
                    padding: '3px 6px',
                    borderRadius: 4
                  }}>
                    <Text style={{ color: '#ffffff', fontSize: 9 }}>
                      Participant {idx + 1}
                    </Text>
                  </div>
                  {idx === 0 && (
                    <div style={{
                      position: 'absolute',
                      top: 6,
                      right: 6,
                      background: '#ef4444',
                      borderRadius: '50%',
                      width: 10,
                      height: 10,
                      boxShadow: '0 0 6px #ef4444'
                    }}></div>
                  )}
                </div>
              ))}
            </div>

            {/* Chat Sidebar (if enabled) */}
            {showChat && (
              <div style={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: '30%',
                background: '#0a0a0a',
                borderLeft: '1px solid #1f1f1f',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{
                  padding: '12px',
                  borderBottom: '1px solid #1f1f1f',
                  background: '#141414'
                }}>
                  <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: 600 }}>
                    Chat
                  </Text>
                </div>
                <div style={{
                  flex: 1,
                  padding: '12px',
                  overflow: 'auto'
                }}>
                  <Space direction="vertical" size={12} style={{ width: '100%' }}>
                    {[
                      { name: 'Alice', message: 'Great work on the feature!' },
                      { name: 'Bob', message: 'Thanks! Should we review the PR?' }
                    ].map((msg, idx) => (
                      <div key={idx}>
                        <Text style={{ color: '#8c8c8c', fontSize: 10, fontWeight: 600 }}>
                          {msg.name}
                        </Text>
                        <div style={{ marginTop: 4 }}>
                          <Text style={{ color: '#d9d9d9', fontSize: 11 }}>
                            {msg.message}
                          </Text>
                        </div>
                      </div>
                    ))}
                  </Space>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Bottom Controls */}
      {showControls && (
        <div style={{
          background: '#141414',
          borderTop: '1px solid #1f1f1f',
          padding: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 12,
          flexShrink: 0
        }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#1f1f1f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '1px solid #1f1f1f'
          }}>
            <AudioOutlined style={{ color: '#8c8c8c', fontSize: 18 }} />
          </div>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#1f1f1f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '1px solid #1f1f1f'
          }}>
            <VideoCameraOutlined style={{ color: '#8c8c8c', fontSize: 18 }} />
          </div>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#1f1f1f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '1px solid #1f1f1f'
          }}>
            <ShareAltOutlined style={{ color: '#8c8c8c', fontSize: 18 }} />
          </div>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#1f1f1f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '1px solid #1f1f1f'
          }}>
            <MessageOutlined style={{ color: '#8c8c8c', fontSize: 18 }} />
          </div>
          <div style={{
            width: 48,
            height: 40,
            borderRadius: 20,
            background: '#ef4444',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            marginLeft: 8
          }}>
            <PhoneOutlined style={{ color: '#ffffff', fontSize: 18, transform: 'rotate(135deg)' }} />
          </div>
        </div>
      )}
    </div>
  )
}

