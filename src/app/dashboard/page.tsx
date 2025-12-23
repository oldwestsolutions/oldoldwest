'use client'

import { Layout, Typography, Button, Card, Row, Col, List, Avatar, Input, Tabs, Calendar, Badge, Modal, Dropdown } from 'antd'
import { UserOutlined, MailOutlined, CalendarOutlined, VideoCameraOutlined, SearchOutlined, PlusOutlined, PhoneOutlined, MessageOutlined, AudioOutlined, AudioMutedOutlined, CloseOutlined, FullscreenOutlined, FullscreenExitOutlined, DownOutlined, SettingOutlined, LogoutOutlined, WalletOutlined, ContactsOutlined, SendOutlined, InboxOutlined, FileTextOutlined } from '@ant-design/icons'
import { useState } from 'react'
import type { Dayjs } from 'dayjs'
import type { MenuProps } from 'antd'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'

const { Header, Content } = Layout
const { Title, Text } = Typography

export default function Dashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('contacts')
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalType, setModalType] = useState<'wallet' | 'calendar' | 'mailbox' | null>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleLogout = () => {
    // Clear any stored authentication data
    // Redirect to home page
    router.push('/')
  }

  const accountMenuItems: MenuProps['items'] = [
    {
      key: 'wallet',
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <WalletOutlined />
          <span>Wallet</span>
        </div>
      ),
      onClick: () => {
        setModalType('wallet')
        setIsModalVisible(true)
      },
    },
    {
      type: 'divider',
    },
    {
      key: 'join-meeting',
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <PhoneOutlined />
          <span>Join Meeting</span>
        </div>
      ),
    },
    {
      key: 'new-meeting',
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <VideoCameraOutlined />
          <span>New Meeting</span>
        </div>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: 'profile',
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <UserOutlined />
          <span>Profile</span>
        </div>
      ),
    },
    {
      key: 'settings',
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <SettingOutlined />
          <span>Settings</span>
        </div>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#ff4d4f' }}>
          <LogoutOutlined />
          <span>Logout</span>
        </div>
      ),
      danger: true,
      onClick: handleLogout,
    },
  ]

  // Mock data
  const contacts = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'online', avatar: null },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'away', avatar: null },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'offline', avatar: null },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', status: 'online', avatar: null },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', status: 'online', avatar: null },
  ]

  const messages = [
    { id: 1, from: 'John Doe', subject: 'Meeting Tomorrow', preview: 'Hi, are we still meeting tomorrow at 2pm?', time: '2 hours ago', unread: true },
    { id: 2, from: 'Jane Smith', subject: 'Project Update', preview: 'The project is progressing well...', time: '5 hours ago', unread: true },
    { id: 3, from: 'Bob Johnson', subject: 'Re: Budget Review', preview: 'Thanks for the update on the budget...', time: '1 day ago', unread: false },
    { id: 4, from: 'Alice Williams', subject: 'Team Lunch', preview: 'Would you like to join us for lunch?', time: '2 days ago', unread: false },
  ]

  const calendarEvents = [
    { date: '2024-01-15', events: [{ type: 'meeting', title: 'Team Standup', time: '10:00 AM' }] },
    { date: '2024-01-16', events: [{ type: 'meeting', title: 'Client Call', time: '2:00 PM' }] },
    { date: '2024-01-17', events: [{ type: 'meeting', title: 'Project Review', time: '3:00 PM' }] },
  ]

  const getListData = (value: Dayjs) => {
    const dateStr = value.format('YYYY-MM-DD')
    return calendarEvents.find(e => e.date === dateStr)?.events || []
  }

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value)
    return (
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {listData.map((item, index) => (
          <li key={index} style={{ fontSize: 12, color: '#8c8c8c' }}>
            <Badge status="default" text={`${item.time} - ${item.title}`} />
          </li>
        ))}
      </ul>
    )
  }

  const tabItems = [
    {
      key: 'contacts',
      label: (
        <span style={{ color: activeTab === 'contacts' ? '#ffffff' : '#8c8c8c' }}>
          <UserOutlined style={{ marginRight: 8 }} />
          Contacts
        </span>
      ),
      children: (
        <div style={{ padding: '0 16px' }}>
          <Input
            placeholder="Search contacts"
            prefix={<SearchOutlined style={{ color: '#8c8c8c' }} />}
            style={{
              background: '#000000',
              borderColor: '#1f1f1f',
              color: '#ffffff',
              borderRadius: 8,
              marginBottom: 16
            }}
          />
          <List
            dataSource={contacts}
            renderItem={(item) => (
              <List.Item
                style={{
                  padding: '12px',
                  borderRadius: 8,
                  marginBottom: 8,
                  background: '#000000',
                  border: '1px solid #1f1f1f',
                  cursor: 'pointer'
                }}
                actions={[
                  <Button 
                    type="text" 
                    icon={<PhoneOutlined />} 
                    style={{ color: '#8c8c8c' }}
                  />,
                  <Button 
                    type="text" 
                    icon={<VideoCameraOutlined />} 
                    style={{ color: '#8c8c8c' }}
                  />,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar 
                      icon={<UserOutlined />} 
                      style={{ background: '#141414' }}
                    />
                  }
                  title={
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Text style={{ color: '#ffffff', fontSize: 14 }}>{item.name}</Text>
                      <Badge 
                        status={item.status === 'online' ? 'success' : item.status === 'away' ? 'warning' : 'default'} 
                        style={{ marginLeft: 8 }}
                      />
                    </div>
                  }
                  description={<Text style={{ color: '#8c8c8c', fontSize: 12 }}>{item.email}</Text>}
                />
              </List.Item>
            )}
          />
          <Button 
            block 
            icon={<PlusOutlined />}
            style={{
              background: '#141414',
              borderColor: '#1f1f1f',
              color: '#ffffff',
              borderRadius: 8,
              marginTop: 16
            }}
          >
            Add Contact
          </Button>
        </div>
      ),
    },
    {
      key: 'calendar',
      label: (
        <span style={{ color: activeTab === 'calendar' ? '#ffffff' : '#8c8c8c' }}>
          <CalendarOutlined style={{ marginRight: 8 }} />
          Calendar
        </span>
      ),
      children: (
        <div style={{ padding: '0 16px', height: 'calc(100vh - 200px)', overflow: 'auto' }}>
          <Calendar
            fullscreen={false}
            style={{ background: '#000000' }}
            dateCellRender={dateCellRender}
            onSelect={(date) => setSelectedDate(date)}
          />
        </div>
      ),
    },
    {
      key: 'mailbox',
      label: (
        <span style={{ color: activeTab === 'mailbox' ? '#ffffff' : '#8c8c8c' }}>
          <MailOutlined style={{ marginRight: 8 }} />
          Mailbox
        </span>
      ),
      children: (
        <div style={{ padding: '0 16px' }}>
          <Input
            placeholder="Search messages"
            prefix={<SearchOutlined style={{ color: '#8c8c8c' }} />}
            style={{
              background: '#000000',
              borderColor: '#1f1f1f',
              color: '#ffffff',
              borderRadius: 8,
              marginBottom: 16
            }}
          />
          <List
            dataSource={messages}
            renderItem={(item) => (
              <List.Item
                style={{
                  padding: '12px',
                  borderRadius: 8,
                  marginBottom: 8,
                  background: item.unread ? '#141414' : '#000000',
                  border: '1px solid #1f1f1f',
                  cursor: 'pointer'
                }}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar 
                      icon={<UserOutlined />} 
                      style={{ background: '#141414' }}
                    />
                  }
                  title={
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Text strong style={{ color: '#ffffff', fontSize: 14 }}>{item.from}</Text>
                      {item.unread && <Badge dot />}
                    </div>
                  }
                  description={
                    <div>
                      <Text style={{ color: '#ffffff', fontSize: 13, display: 'block', marginBottom: 4 }}>
                        {item.subject}
                      </Text>
                      <Text style={{ color: '#8c8c8c', fontSize: 12 }}>{item.preview}</Text>
                      <Text style={{ color: '#595959', fontSize: 11, display: 'block', marginTop: 4 }}>
                        {item.time}
                      </Text>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
          <Button 
            block 
            icon={<PlusOutlined />}
            style={{
              background: '#141414',
              borderColor: '#1f1f1f',
              color: '#ffffff',
              borderRadius: 8,
              marginTop: 16
            }}
          >
            Compose
          </Button>
        </div>
      ),
    },
  ]

  return (
    <Layout style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
      <Header style={{ 
        background: '#000000', 
        borderBottom: '1px solid #1f1f1f',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ 
            width: 32, 
            height: 32, 
            background: '#141414', 
            border: '1px solid #1f1f1f',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <VideoCameraOutlined style={{ fontSize: 18, color: '#595959' }} />
          </div>
          <Text strong style={{ fontSize: 18, color: '#ffffff' }}>OldWest</Text>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button 
            type="text"
            icon={<CalendarOutlined />}
            onClick={() => {
              setModalType('calendar')
              setIsModalVisible(true)
            }}
            style={{ 
              color: '#8c8c8c',
              borderRadius: 8
            }}
          />
          <Button 
            type="text"
            icon={<MailOutlined />}
            onClick={() => {
              setModalType('mailbox')
              setIsModalVisible(true)
            }}
            style={{ 
              color: '#8c8c8c',
              borderRadius: 8
            }}
          />
          <Dropdown menu={{ items: accountMenuItems }} placement="bottomRight">
            <Button 
              type="primary"
              icon={<UserOutlined />}
              style={{ 
                background: '#141414', 
                borderColor: '#1f1f1f',
                color: '#ffffff',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 2px 8px rgba(140, 140, 140, 0.2)'
              }}
            >
              Account
            </Button>
          </Dropdown>
        </div>
      </Header>

      <Content style={{ 
          background: '#000000', 
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 64px)'
        }}>
          <Card
            bordered
            style={{
              background: '#0a0a0a',
              borderColor: '#1f1f1f',
              borderRadius: 12,
              width: '100%',
              maxWidth: 800,
              textAlign: 'center'
            }}
            bodyStyle={{ padding: 64 }}
          >
            <VideoCameraOutlined style={{ fontSize: 64, color: '#595959', marginBottom: 24 }} />
            <Title level={2} style={{ color: '#ffffff', marginBottom: 16 }}>
              Ready to start a meeting?
            </Title>
            <Text style={{ color: '#8c8c8c', fontSize: 16, display: 'block', marginBottom: 32 }}>
              Click "New Meeting" to start a video session or select a contact to call.
            </Text>
            <Row gutter={16} justify="center">
              <Col>
                <Button
                  type="primary"
                  size="large"
                  icon={<VideoCameraOutlined />}
                  style={{
                    background: '#141414',
                    borderColor: '#1f1f1f',
                    color: '#ffffff',
                    borderRadius: 12,
                    boxShadow: '0 2px 8px rgba(140, 140, 140, 0.2)'
                  }}
                >
                  Start Meeting
                </Button>
              </Col>
              <Col>
                <Button
                  size="large"
                  icon={<PhoneOutlined />}
                  style={{
                    background: '#000000',
                    borderColor: '#1f1f1f',
                    color: '#ffffff',
                    borderRadius: 12
                  }}
                >
                  Join Meeting
                </Button>
              </Col>
            </Row>
          </Card>
        </Content>

      <Modal
        open={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false)
          setModalType(null)
        }}
        footer={null}
        width="100%"
        style={{ 
          top: 0, 
          paddingBottom: 0,
          maxWidth: '100%'
        }}
        bodyStyle={{ 
          padding: 0, 
          height: '100vh',
          background: '#000000'
        }}
        closable={true}
        closeIcon={<CloseOutlined style={{ color: '#ffffff', fontSize: 20 }} />}
        maskStyle={{ background: 'rgba(0, 0, 0, 0.95)' }}
      >
        <div style={{ 
          height: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          background: '#000000'
        }}>
          {modalType === 'wallet' && (
            <div style={{ flex: 1, padding: '24px', overflow: 'auto' }}>
              <Title level={2} style={{ color: '#ffffff', marginBottom: 24 }}>
                <WalletOutlined style={{ marginRight: 12 }} />
                Wallet
              </Title>
              <Row gutter={[24, 24]}>
                <Col xs={24} md={12}>
                  <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }}>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 16 }}>Balance</Title>
                    <Text style={{ fontSize: 32, color: '#ffffff', fontWeight: 600 }}>1,224 MIN</Text>
                    <div style={{ marginTop: 16 }}>
                      <Text style={{ color: '#8c8c8c', fontSize: 14 }}>VM Minutes Available</Text>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} md={12}>
                  <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }}>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 16 }}>Recent Transactions</Title>
                    <List
                      dataSource={[
                        { id: 1, type: 'Purchase', amount: '+500 MIN', date: '2 hours ago' },
                        { id: 2, type: 'Usage', amount: '-25 MIN', date: '5 hours ago' },
                        { id: 3, type: 'Purchase', amount: '+1000 MIN', date: '1 day ago' },
                      ]}
                      renderItem={(item) => (
                        <List.Item style={{ borderColor: '#1f1f1f', padding: '12px 0' }}>
                          <List.Item.Meta
                            title={<Text style={{ color: '#ffffff' }}>{item.type}</Text>}
                            description={<Text style={{ color: '#8c8c8c', fontSize: 12 }}>{item.date}</Text>}
                          />
                          <Text style={{ color: item.type === 'Purchase' ? '#52c41a' : '#ff4d4f', fontWeight: 600 }}>
                            {item.amount}
                          </Text>
                        </List.Item>
                      )}
                    />
                  </Card>
                </Col>
                <Col xs={24}>
                  <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }}>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 16 }}>Payment Methods</Title>
                    <Button type="primary" icon={<PlusOutlined />} style={{ background: '#141414', borderColor: '#1f1f1f' }}>
                      Add Payment Method
                    </Button>
                  </Card>
                </Col>
              </Row>
            </div>
          )}

          {modalType === 'calendar' && (
            <div style={{ flex: 1, padding: '24px', overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: 24 }}>
                <Title level={2} style={{ color: '#ffffff', marginBottom: 8 }}>
                  <CalendarOutlined style={{ marginRight: 12 }} />
                  Schedule Meeting
                </Title>
                <Text style={{ color: '#8c8c8c' }}>Select a date and time for your meeting</Text>
              </div>
              <Row gutter={[24, 24]} style={{ flex: 1 }}>
                <Col xs={24} md={12}>
                  <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }}>
                    <Calendar
                      fullscreen={false}
                      style={{ background: '#000000' }}
                      dateCellRender={dateCellRender}
                      onSelect={(date) => setSelectedDate(date)}
                    />
                  </Card>
                </Col>
                <Col xs={24} md={12}>
                  <Card bordered style={{ background: '#0a0a0a', borderColor: '#1f1f1f', borderRadius: 12 }}>
                    <Title level={4} style={{ color: '#ffffff', marginBottom: 16 }}>Available Times</Title>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                      {['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map((time) => (
                        <Button
                          key={time}
                          style={{
                            background: '#141414',
                            borderColor: '#1f1f1f',
                            color: '#ffffff',
                            borderRadius: 8
                          }}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                    <div style={{ marginTop: 24 }}>
                      <Input
                        placeholder="Meeting Title"
                        style={{
                          background: '#000000',
                          borderColor: '#1f1f1f',
                          color: '#ffffff',
                          marginBottom: 12
                        }}
                      />
                      <Input.TextArea
                        placeholder="Meeting Description"
                        rows={4}
                        style={{
                          background: '#000000',
                          borderColor: '#1f1f1f',
                          color: '#ffffff',
                          marginBottom: 12
                        }}
                      />
                      <Button type="primary" block style={{ background: '#141414', borderColor: '#1f1f1f' }}>
                        Schedule Meeting
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          )}

          {modalType === 'mailbox' && (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#000000' }}>
              <div style={{ borderBottom: '1px solid #1f1f1f', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Title level={3} style={{ color: '#ffffff', margin: 0 }}>
                  <MailOutlined style={{ marginRight: 12 }} />
                  Mail
                </Title>
                <Button
                  icon={<ContactsOutlined />}
                  onClick={() => {
                    setModalType('wallet')
                  }}
                  style={{
                    background: '#141414',
                    borderColor: '#1f1f1f',
                    color: '#ffffff'
                  }}
                >
                  Contacts
                </Button>
              </div>
              <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                <div style={{ width: 200, borderRight: '1px solid #1f1f1f', padding: '16px', background: '#0a0a0a' }}>
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    block
                    style={{
                      background: '#141414',
                      borderColor: '#1f1f1f',
                      marginBottom: 16
                    }}
                  >
                    Compose
                  </Button>
                  <List
                    dataSource={[
                      { key: 'inbox', label: 'Inbox', icon: <InboxOutlined />, count: 12 },
                      { key: 'sent', label: 'Sent', icon: <SendOutlined /> },
                      { key: 'drafts', label: 'Drafts', icon: <FileTextOutlined /> },
                    ]}
                    renderItem={(item) => (
                      <List.Item
                        style={{
                          padding: '12px',
                          borderRadius: 8,
                          cursor: 'pointer',
                          background: '#000000',
                          marginBottom: 4
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            {item.icon}
                            <Text style={{ color: '#ffffff' }}>{item.label}</Text>
                          </div>
                          {item.count && <Badge count={item.count} />}
                        </div>
                      </List.Item>
                    )}
                  />
                </div>
                <div style={{ flex: 1, padding: '24px', overflow: 'auto' }}>
                  <Input
                    placeholder="Search mail"
                    prefix={<SearchOutlined style={{ color: '#8c8c8c' }} />}
                    style={{
                      background: '#0a0a0a',
                      borderColor: '#1f1f1f',
                      color: '#ffffff',
                      marginBottom: 16
                    }}
                  />
                  <List
                    dataSource={messages}
                    renderItem={(item) => (
                      <List.Item
                        style={{
                          padding: '16px',
                          borderRadius: 8,
                          marginBottom: 8,
                          background: item.unread ? '#141414' : '#000000',
                          border: '1px solid #1f1f1f',
                          cursor: 'pointer'
                        }}
                      >
                        <List.Item.Meta
                          avatar={
                            <Avatar 
                              icon={<UserOutlined />} 
                              style={{ background: '#141414' }}
                            />
                          }
                          title={
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <Text strong style={{ color: '#ffffff', fontSize: 14 }}>{item.from}</Text>
                              {item.unread && <Badge dot />}
                            </div>
                          }
                          description={
                            <div>
                              <Text style={{ color: '#ffffff', fontSize: 13, display: 'block', marginBottom: 4 }}>
                                {item.subject}
                              </Text>
                              <Text style={{ color: '#8c8c8c', fontSize: 12 }}>{item.preview}</Text>
                              <Text style={{ color: '#595959', fontSize: 11, display: 'block', marginTop: 4 }}>
                                {item.time}
                              </Text>
                            </div>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </Layout>
  )
}
