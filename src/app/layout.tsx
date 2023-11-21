import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '../styles/globals.css'
import {ReactNode} from "react";
// import {Toaster} from "@/components/ui/toaster"

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Watering Schedule',
    description: 'a watering schedule for aliens living among us.',
}

export default function RootLayout({children}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main>{children}</main>
        {/*<Toaster/>*/}
        </body>
        </html>
    )
}


