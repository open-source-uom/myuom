import type React from 'react'
import type { Metadata } from 'next'
import { Poppins, Lexend } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-providers'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
})

const lexend = Lexend({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-lexend',
})

export const metadata: Metadata = {
    title: 'University of Macedonia - Student Portal',
    description: 'Student portal for the University of Macedonia',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${poppins.variable} ${lexend.variable} font-sans`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
