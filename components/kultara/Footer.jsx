import Link from 'next/link';
import { KULTARA_CONFIG, waLink } from './kultara-config';

const WHATSAPP_URL = waLink('Halo Kultara, saya ingin bertanya.');

const NAV_LINKS = [
  { label: 'Beranda', href: '/kultara' },
  { label: 'Tentang', href: '/kultara#tentang' },
  { label: 'Menu', href: '/kultara#menu' },
  { label: 'Kisah Kultara', href: '/kultara#kisah' },
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
    <footer className="border-t border-ink-line bg-black">
      <div className="mx-auto max-w-[1280px] px-5 pb-8 pt-16 md:px-8 md:pt-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl font-extrabold tracking-[0.14em] text-white">
                KULTARA
              </span>
              <span className="mt-1.5 text-[10px] uppercase tracking-[0.32em] text-white/70">
                Kuliner Nusantara
              </span>
            </div>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-paper-muted">
              Dua puluh tahun menjaga resep, rasa, dan cerita kuliner Nusantara yang khas
              Indonesia.
            </p>
          </div>

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

          {/* Jam Operasional */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-paper-faint">
              Jam Operasional
            </h3>
            <div className="mt-5 space-y-3 text-[15px] text-paper-muted">
              <p>Senin – Minggu</p>
              <p className="text-paper">10.00 – 22.00</p>
              <p className="pt-2 text-paper-faint">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-paper-faint">
            © 2026 Kultara. All Rights Reserved.
          </p>
          <p className="text-[13px] text-paper-faint">
            Website Concept by{' '}
            <span className="text-paper-muted">KreaWeb</span>
          </p>
        </div>
      </div>
    </footer>
  );
}