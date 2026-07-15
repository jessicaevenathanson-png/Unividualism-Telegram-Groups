import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Unividualism Telegram Groups',
  description: 'Join the Unividual Philosophy, Living, and Guides groups',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
