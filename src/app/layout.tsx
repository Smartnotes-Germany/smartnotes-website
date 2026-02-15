import './globals.css'
import type { Metadata } from 'next'
import {ConvexWrapper} from "./components/ConvexWrapper";
import {Navbar} from "./components/navbar";
import {Footer} from "./components/footer";

export const metadata: Metadata = {
  title: 'Smartnotes',
  description: 'Learn efficient and fast',
  icons: "/logo.png"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
    <ConvexWrapper>
      <Navbar/>
      {children}
      <Footer/>
    </ConvexWrapper></body>
    </html>
  )
}
