import './globals.css'


export const metadata = {
  title: '3D Portfolio',
  description: 'A simple 3D Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative z-0 bg-primary' style={{ scrollBehavior: 'smooth' }}>
        {children}
      </body>
    </html>
  )
}
