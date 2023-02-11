"use client";
import Navbar from '@/components/Navbar'
import { ThemeProvider } from 'next-themes'
import '../styles/global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThemeProvider attribute='class' enableSystem={true} >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
