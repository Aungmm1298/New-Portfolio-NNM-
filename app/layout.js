import { DM_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import VantaBackground from '@/components/VantaBackground';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata = {
  title: 'Naing Naing Maw — Electrical Engineer & MBA Candidate',
  description:
    'Portfolio of Naing Naing Maw — Electrical Power Engineering graduate and MBA Candidate at Beykent University, Istanbul. Experienced in engineering, operations, CRM, and business management.',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='13' fill='none' stroke='%234a6a8a' stroke-width='2'/%3E%3Cellipse cx='16' cy='16' rx='5.5' ry='13' fill='none' stroke='%234a6a8a' stroke-width='2'/%3E%3Cline x1='3' y1='16' x2='29' y2='16' stroke='%234a6a8a' stroke-width='2'/%3E%3Cline x1='5' y1='10' x2='27' y2='10' stroke='%234a6a8a' stroke-width='1.4'/%3E%3Cline x1='5' y1='22' x2='27' y2='22' stroke='%234a6a8a' stroke-width='1.4'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <div id="scroll-bar" aria-hidden="true" />
        <VantaBackground />
        {children}
      </body>
    </html>
  );
}
