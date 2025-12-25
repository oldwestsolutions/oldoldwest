import type { Metadata } from 'next'
import { ConfigProvider } from 'antd'
import type { ThemeConfig } from 'antd'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'OldWest',
  description: 'OldWest.net is a VM-based social platform where creators earn merit through real work. Music, design, coding, finance, and collaboration.',
  keywords: [
    'virtual machine platform',
    'creator infrastructure',
    'VM collaboration',
    'compute credits',
    'merit based network',
    'digital workspaces',
    'VM-based social network',
    'creator infrastructure',
    'compute-based collaboration',
    'merit-based platform',
    'secure virtual environments',
    'cloud workspaces',
    'skill-based network',
    'music production virtual machine',
    'audio engineering workspace',
    'collaborative music production',
    'cloud DAW environment',
    'graphic design virtual workspace',
    'video editing VM',
    'motion graphics cloud environment',
    'creative collaboration platform',
    'developer virtual machine',
    'cloud coding workspace',
    'secure development environment',
    'collaborative software development',
    'financial modeling workspace',
    'algorithm testing environment',
    'secure finance VM',
    'market analysis workspace',
    'virtual machines for creators',
    'platform where work earns merit',
    'skill-based social network',
    'pay-for-compute collaboration platform',
    'secure VM environments for teams',
    'creator tools powered by compute',
    'infrastructure for digital labor',
    'virtual workspace for real work'
  ],
  openGraph: {
    title: 'OldWest - VM-Based Social Platform for Creators',
    description: 'OldWest.net is a VM-based social platform where creators earn merit through real work. Music, design, coding, finance, and collaboration.',
    type: 'website',
    siteName: 'OldWest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OldWest - VM-Based Social Platform for Creators',
    description: 'OldWest.net is a VM-based social platform where creators earn merit through real work. Music, design, coding, finance, and collaboration.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
