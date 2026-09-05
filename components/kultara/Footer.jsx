import Link from 'next/link';
import { KULTARA_CONFIG, waLink } from './kultara-config';

const WHATSAPP_URL = waLink('halo Kreaweb, saya suka web seperti kultara ini, mau tanya tanya dulu');

const NAV_LINKS = [
  { label: 'Beranda', href: '/kultara' },
  { label: 'Tentang', href: '/kultara#tentang' },
  { label: 'Menu', href: '/kultara#menu' },
  { label: 'Galeri', href: '/kultara#galeri' },
  { label: 'FAQ', href: '/kultara#faq' },
  { label: 'Kontak', href: '/kultara/kontak' },
];

const CONTACT_LINKS = [
  { label: 'WhatsApp', href: WHATSAPP_URL, external: true },
  { label: 'Instagram', href: KULTARA_CONFIG.instagramUrl, external: true },
  { label: 'TikTok', href: KULTARA_CONFIG.tiktokUrl, external: true },
  { label: 'Google Maps', href: KULTARA_CONFIG.googleMapsUrl, external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink">
      <div className="mx-auto max-w-[1280px] px-5 pb-8 pt-14 md:px-8 md:pt-16 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-[1.1fr_1fr] sm:gap-12">
          {/* Kiri: Brand + Jam Operasional */}
          <div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl font-extrabold tracking-[0.14em] text-paper">
                KULTARA
              </span>
              <span className="mt-1.5 text-[10px] uppercase tracking-[0.32em] text-paper-faint">
                Kuliner Nusantara
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-paper-muted">
              Dua puluh tahun menjaga resep, rasa, dan cerita kuliner Nusantara yang khas
              Indonesia.
            </p>

            <div className="mt-8">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-paper-faint">
                Jam Operasional
              </h3>
              <div className="mt-4 space-y-2 text-[15px] text-paper-muted">
                <p>Senin – Minggu</p>
                <p className="text-paper">10.00 – 22.00</p>
                <p className="pt-2 text-paper-faint">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Kanan: Navigasi + Hubungi Kami */}
          <div className="grid grid-cols-2 gap-8">
            {/* Navigasi */}
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-paper-faint">
                Navigasi
              </h3>
              <ul className="mt-5 space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-paper-muted transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hubungi Kami */}
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-paper-faint">
                Hubungi Kami
              </h3>
              <ul className="mt-5 space-y-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-[15px] text-paper-muted transition-colors hover:text-paper"
                    >
                      {link.label} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-paper-faint">
            © 2026 Kultara. All Rights Reserved.
          </p>
          <p className="text-[13px] text-paper-faint">
            Website Concept by{' '}
            <span className="text-paper-muted">Kreaweb</span>
          </p>
        </div>
      </div>
    </footer>
  );
}