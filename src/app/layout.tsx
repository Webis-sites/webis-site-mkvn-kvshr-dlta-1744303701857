import React from 'react';
import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'מכון כושר דלתא',
  description: 'מכון כושר מתקדם עם מגוון שירותים ומתקנים',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 