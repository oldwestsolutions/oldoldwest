import type { Metadata } from 'next'
import { ConfigProvider } from 'antd'
import type { ThemeConfig } from 'antd'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'OldWest - Social Infrastructure',
  description: 'VMaaS-based social network metered by design',
}

const theme: ThemeConfig = {
  token: {
    colorBgBase: '#000000',
    colorBgContainer: '#0a0a0a',
    colorBgElevated: '#141414',
    colorBorder: '#1f1f1f',
    colorText: '#ffffff',
    colorTextSecondary: '#8c8c8c',
    colorTextTertiary: '#595959',
    borderRadius: 8,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  algorithm: undefined, // Will use default dark algorithm
  components: {
    Button: {
      borderRadius: 12,
      controlHeight: 40,
      fontWeight: 500,
    },
    Card: {
      borderRadius: 12,
      paddingLG: 24,
    },
    Typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={theme}>
          <div style={{ minHeight: '100vh', background: '#000000', color: '#ffffff' }}>
            {children}
          </div>
          <Analytics />
        </ConfigProvider>
      </body>
    </html>
  )
}
