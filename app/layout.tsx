import type { Metadata } from 'next'
import './globals.css'

// Seo stuff (research og link meta properties)(to check metadata for twitter etc go to opengraph.xyz)
export const metadata: Metadata = {
  title: 'NextJs App',
  description: 'PDF Coding Resources For Beginners',
  other: {
    'theme-color': '#0d1117',
    'color-scheme': 'dark-only',
    'twitter:image': 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    'twitter:card': 'summary_large_image',
    'og:url': 'jsmastery.pro',
    'og:image': 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    'og:type': 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black-100 font-poppins'>
        {children}
      </body>
    </html>
  )
}
