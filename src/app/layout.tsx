import type { Metadata } from 'next';
import { Lora, Inter } from 'next/font/google';
import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://accunexum.com'),
  title: 'AccuNexum — Decision Governance for Enterprise AI',
  description:
    'Say yes to AI without legal saying no. AccuNexum governs the consequential decisions where AI is involved — for Fortune 500 healthcare, financial services, insurance, and public-sector enterprises.',
  keywords: [
    'AI decision governance',
    'consequential decision register',
    'autonomy envelope',
    'Fractional Chief AI Decision Officer',
    'EU AI Act compliance',
    'FDA SaMD governance',
    'HHS Section 1557 AI',
    'algorithmic accountability',
    'AI risk management',
    'algorithmic impact assessment',
  ],
  openGraph: {
    title: 'AccuNexum — Decision Governance for Enterprise AI',
    description:
      'Say yes to AI without legal saying no. Three engagements — Decision Risk Map, Autonomy Envelope Design, Fractional Chief AI Decision Officer.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
