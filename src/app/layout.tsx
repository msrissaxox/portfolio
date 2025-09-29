import type { Metadata } from 'next';
import { Geist, Geist_Mono, Josefin_Sans } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const josefinSans = Josefin_Sans({
  variable: '--font-josefin-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Marissa Lamothe | Software Engineer',
  description:
    'Experienced software engineer specializing in React, TypeScript, Node.js, and more.',
  keywords:
    'Marissa Lamothe, software engineer, orlando developer, orlando software engineer, orlando react developer, orlando javascript developer, orlando typescript developer, web developer, full stack developer, React developer, Next.js developer, JavaScript engineer, TypeScript developer, hire developer, MongoDB, SQL, Node.js, Express.js, TailwindCSS, Vercel, Netlify, AWS, Git, GitHub',
  openGraph: {
    title: 'Marissa Lamothe | Software Engineer for Hire',
    description:
      'Full stack software engineer specializing in modern web technologies. View my portfolio and experience.',
    url: 'https://www.marissalamothe.dev',
    siteName: 'Marissa Lamothe - Software Engineer Portfolio',
  },

  robots: {
    index: true,
    follow: true,
  },
  applicationName: 'Marissa Lamothe Portfolio',
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Marissa Lamothe', url: 'https://www.marissalamothe.dev' }],
  creator: 'Marissa Lamothe',
  publisher: 'Marissa Lamothe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${josefinSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
