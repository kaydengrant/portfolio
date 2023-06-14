import './globals.css';

import { Rubik } from 'next/font/google';

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
