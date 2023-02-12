'use client';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from 'next-themes';
import '../styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <ThemeProvider attribute='class' enableSystem={true}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
