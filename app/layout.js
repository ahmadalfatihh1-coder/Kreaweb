import './globals.css';
import GoogleAnalytics from '../components/GoogleAnalytics';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export const metadata = {
  metadataBase: new URL('https://kreaweb.id'),
  title: 'Kreaweb | Jasa buat website untuk Bisnismu, Mulai 1 jutaan',
  description: 'kami urus semua masalah pengembangan website dan maintenance kedepan, kamu tinggal konsultasi dan Terima beres',
  keywords: [
    'jasa pembuatan website',
    'jasa website UMKM',
    'jasa buat website',
    'jasa pembuatan website murah',
    'jasa website profesional',
    'website UMKM',
    'website company profile',
    'jasa web Indonesia',
  ],
  openGraph: {
    title: 'Jasa Pembuatan Website Profesional',
    description:
      'mulai dari 1 jutaan, kamu terima beres gak perlu repot mikirin hasil, biar kami yang urus semuanya',
    url: 'https://kreaweb.id',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Kreaweb',
    images: [
      {
        url: '/images/ogimage.png',
        width: 1366,
        height: 768,
        alt: 'Jasa Pembuatan Website Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Pembuatan Website Profesional',
    description:
      'mulai dari 1 jutaan, kamu terima beres gak perlu repot mikirin hasil, biar kami yang urus semuanya',
    images: ['/images/ogimage.png'],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var kt=localStorage.getItem('kultara-theme')||'light';if(kt==='dark'){document.documentElement.classList.add('kultara-dark');}var kw=localStorage.getItem('kreaweb-theme')||'light';if(kw==='dark'){document.documentElement.classList.add('kreaweb-dark');}}catch(e){}})();`,
          }}
        />
        <link rel="icon" href="/images/kreweb-logo.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        {children}
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}