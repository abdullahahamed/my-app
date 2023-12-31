import './globals.css'
// import { Roboto_400Latin } from 'next/font/google'
import Navbar from './components/Navbar'

// const roboto = Roboto_400Latin // Use the 400 weight for Roboto

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
