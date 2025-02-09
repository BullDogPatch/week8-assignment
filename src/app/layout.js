import { Geist, Geist_Mono } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Offside',
  description:
    'A place for user to share there thoughts about football matches.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
