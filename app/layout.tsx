import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LocaleProvider } from '@/lang/LocaleContext';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  title: 'Inorg',
  description: 'Usługi doradcze dla różnych branż, koncentrując się na efektywności i redukcji kosztów, z bogatym doświadczeniem i szeroką współpracą międzynarodową',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <LocaleProvider>
          <Navbar />
            <main className="relative overflow-hidden text-pretty" >{children}</main>
           <CookieConsent />
          <Footer/>
        </LocaleProvider>
      </body>
    </html>
  )
}
