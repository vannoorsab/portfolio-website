import React from "react"
import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: 'Vannoor Sab | Cybersecurity & AI Engineer',
  description: 'Cybersecurity Engineer, AI/ML Specialist, and Cloud Architect building secure, intelligent systems. Google Cloud Innovator with expertise in threat intelligence, machine learning, and scalable cloud solutions.',
  generator: 'VS',
  icons: {
    icon: [
      {
        url: '/vs-icon.png',
      },
    ],
    apple: '/vs-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
