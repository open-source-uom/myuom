import type React from 'react'
import type { Metadata } from 'next'
import { Poppins, Roboto } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/theme-providers'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
})

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-roboto',
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
                className={`${poppins.variable} ${roboto.variable} font-sans`}
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
