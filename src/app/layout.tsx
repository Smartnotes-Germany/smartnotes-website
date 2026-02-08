import './globals.css'
import type { Metadata } from 'next'
import {ConvexWrapper} from "./ConvexWrapper";

export const metadata: Metadata = {
  title: 'Smartnotes',
  description: 'Learn efficient and fast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body><ConvexWrapper>{children}</ConvexWrapper></body>
    </html>
  )
}
