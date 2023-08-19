import './globals.css'

export async function generateMetadata({ params }) {
  return {
    title: '...',
  }
}
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
