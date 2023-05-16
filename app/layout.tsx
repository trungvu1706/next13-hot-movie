import Header from './Header'
import './globals.css'
import { Open_Sans } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import { MovieContextProvider } from '@/context/movieContext'

const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-open_sans',
})

export const metadata = {
  title: 'Hot Movie 2023',
  description: 'A web app for watching movie 2023',
}

config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Hot Movie 2023</title>
      </head>
      <body className={`${openSans.className}`} suppressHydrationWarning={true}>
        <Header />
        <MovieContextProvider>{children}</MovieContextProvider>

        <div className="flex items-center justify-center p-4 top-copy-right">
          <p className="text-sm text-gray-300">@Copy right by Trungvu - 2023</p>
        </div>
      </body>
    </html>
  )
}
