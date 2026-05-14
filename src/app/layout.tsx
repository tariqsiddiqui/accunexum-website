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
  title: 'AccuNexum — Defensible AI Governance for Healthcare',
  description:
    'AccuNexum builds the framework and platform that healthcare organizations use to deploy AI defensibly. HIPAA, Section 1557, FDA, NAIC, and state AI law — operationalized.',
  keywords: [
    'healthcare AI governance',
    'HIPAA AI compliance',
    'Section 1557 AI',
    'FDA AI/ML',
    'NAIC AI',
    'AI risk management healthcare',
    'algorithmic impact assessment',
    'AI governance framework',
  ],
  openGraph: {
    title: 'AccuNexum — Defensible AI Governance for Healthcare',
    description:
      'The framework and platform healthcare organizations use to deploy AI defensibly.',
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
