import Navbar from "@/components/Header/Header"
import './style.scss';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <div>Footer</div>
        </body>
    </html>
  )
}
