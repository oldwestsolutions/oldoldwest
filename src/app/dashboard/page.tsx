'use client'

import { Layout, Typography, Button, Card, Row, Col, List, Avatar, Input, Tabs, Calendar, Badge, Modal } from 'antd'
import { UserOutlined, MailOutlined, CalendarOutlined, VideoCameraOutlined, SearchOutlined, PlusOutlined, PhoneOutlined, MessageOutlined, AudioOutlined, AudioMutedOutlined, CloseOutlined, FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons'
import { useState } from 'react'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

const { Header, Content, Sider } = Layout
const { Title, Text } = Typography

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('contacts')
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalType, setModalType] = useState<'contacts' | 'calendar' | 'mailbox' | null>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

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
            icon={<UserOutlined />}
            onClick={() => {
              setModalType('contacts')
              setIsModalVisible(true)
            }}
            style={{ 
              color: '#8c8c8c',
              borderRadius: 8
            }}
          />
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
          <Button 
            type="primary"
            icon={<VideoCameraOutlined />}
            style={{ 
              background: '#141414', 
              borderColor: '#1f1f1f',
              color: '#ffffff',
              borderRadius: 12
            }}
          >
            New Meeting
          </Button>
        </div>
      </Header>

      <Layout>
        <Sider 
          width={280} 
          style={{ 
            background: '#0a0a0a', 
            borderRight: '1px solid #1f1f1f',
            padding: '24px 0'
          }}
        >
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            tabBarStyle={{ padding: '0 16px', marginBottom: 16 }}
            items={tabItems}
          />
        </Sider>

        <Content style={{ 
          background: '#000000', 
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
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
                    borderRadius: 12
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
      </Layout>

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
          {/* Video Grid Area */}
          <div style={{ 
            flex: 1, 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '8px',
            padding: '16px',
            overflow: 'auto'
          }}>
            {/* Mock video participants */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                style={{
                  aspectRatio: '16/9',
                  background: '#141414',
                  borderRadius: '8px',
                  border: '1px solid #1f1f1f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Avatar 
                  size={80}
                  icon={<UserOutlined />}
                  style={{ background: '#595959' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '8px',
                  left: '8px',
                  background: 'rgba(0, 0, 0, 0.6)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  color: '#ffffff'
                }}>
                  Participant {num}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Controls Bar */}
          <div style={{
            background: '#0a0a0a',
            borderTop: '1px solid #1f1f1f',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Text style={{ color: '#8c8c8c', fontSize: '14px' }}>
                {modalType === 'contacts' ? 'Contacts Meeting' : modalType === 'calendar' ? 'Calendar Meeting' : modalType === 'mailbox' ? 'Mailbox Meeting' : 'Meeting'}
              </Text>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Button
                type={isMuted ? 'primary' : 'default'}
                danger={isMuted}
                icon={isMuted ? <AudioMutedOutlined /> : <AudioOutlined />}
                onClick={() => setIsMuted(!isMuted)}
                style={{
                  background: isMuted ? '#ff4d4f' : '#141414',
                  borderColor: '#1f1f1f',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              />
              <Button
                type={isVideoOff ? 'primary' : 'default'}
                danger={isVideoOff}
                icon={<VideoCameraOutlined />}
                onClick={() => setIsVideoOff(!isVideoOff)}
                style={{
                  background: isVideoOff ? '#ff4d4f' : '#141414',
                  borderColor: '#1f1f1f',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              />
              <Button
                type="default"
                icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                onClick={() => setIsFullscreen(!isFullscreen)}
                style={{
                  background: '#141414',
                  borderColor: '#1f1f1f',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Button
                type="primary"
                danger
                icon={<PhoneOutlined />}
                onClick={() => {
                  setIsModalVisible(false)
                  setModalType(null)
                }}
                style={{
                  background: '#ff4d4f',
                  borderColor: '#ff4d4f',
                  color: '#ffffff',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              />
            </div>
          </div>
        </div>
      </Modal>
    </Layout>
  )
}
