import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Loop',
  description: 'Swipe through ultra-short playable games and build your own loops.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
