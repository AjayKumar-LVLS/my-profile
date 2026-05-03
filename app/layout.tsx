import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ajay Kumar | Software Engineer',
  description: 'Ajay Kumar is a software engineer specializing in embedded systems, aviation testing, and cloud-backed applications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
