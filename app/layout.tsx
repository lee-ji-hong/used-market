import Navbar from './components/Navbar'
import '../public/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>
        {children}
        </div>
      </body>
    </html>
  )
}
