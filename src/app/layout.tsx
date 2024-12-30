import './globals.css';
import dotenv from 'dotenv';

import { Rubik } from 'next/font/google';

dotenv.config();

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${rubik.variable} font-rubik`}>
      <body>{children}</body>
    </html>
  );
}
