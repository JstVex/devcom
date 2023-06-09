import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import clsx from 'clsx'
import styles from '@/styles/Beam.module.css'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className='bg-slate-50 dark:bg-[#101931] h-screen text-zinc-900 dark:text-zinc-50  dark:bg-gradient-to-b from-[#0c1120] p-6'>
        <div
          className={clsx(
            'absolute top-0 inset-x-0 bg-top bg-no-repeat',
            styles[`beams-1`],
          )}
        />
        <div className='fixed flex w-screen'>
          <Providers>
            {children}
          </Providers>
        </div>

      </body>
    </html>
  )
}