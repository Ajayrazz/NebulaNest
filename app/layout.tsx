import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Inter, Montserrat, Fira_Code } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ajay Razz',
  description: 'Personal portfolio website showcasing my skills, projects, and professional journey as a software developer',
  keywords: ['developer', 'software', 'portfolio', 'projects', 'web development', 'Ajay Razz'],
  authors: [{ name: 'Ajay Razz' }],
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable} ${montserrat.variable} ${firaCode.variable}`}>
      <body className={`${playfair.className} overflow-x-hidden min-h-screen bg-fixed`}>
        {children}
      </body>
    </html>
  )
} 