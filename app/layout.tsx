import type { Metadata } from 'next';
import './globals.css';
import 'leaflet/dist/leaflet.css';

export const metadata: Metadata = {
  title: 'PHAKAMA | See it. Report it. Fix it.',
  description: 'Citizen-powered pothole reporting and road accountability for South Africa.',
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-stone-50 text-slate-900">
      <body className="min-h-screen bg-stone-50 antialiased">{children}</body>
    </html>
  );
}
