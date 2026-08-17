import './globals.css';

export const metadata = {
  title: 'KreaWeb — Jasa Pembuatan Website Profesional',
  description:
    'KreaWeb membantu bisnis, UMKM, personal brand, dan organisasi membuat website profesional, modern, responsive, dan terjangkau mulai dari 1 jutaan.',
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
    title: 'KreaWeb — Jasa Pembuatan Website Profesional',
    description:
      'KreaWeb membantu bisnis, UMKM, personal brand, dan organisasi membuat website profesional, modern, responsive, dan terjangkau.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'KreaWeb',
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}