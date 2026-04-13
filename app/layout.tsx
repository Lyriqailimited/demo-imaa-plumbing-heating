import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'IMAA Plumbing & Heating', description: 'London's trusted 24/7 plumbing & heating experts with 4.9-star reviews' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>)
}
