'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { waLink } from './kultara-config';

const NAV_LINKS = [
  { label: 'Beranda', href: '/kultara' },
  { label: 'Tentang', href: '/kultara#tentang' },
  { label: 'Menu', href: '/kultara#menu' },
  { label: 'Kisah Kultara', href: '/kultara#kisah' },
  { label: 'Galeri', href: '/kultara#galeri' },
  { label: 'FAQ', href: '/kultara#faq' },
  { label: 'Kontak', href: '/kultara/kontak' },
];

const CUSTOMER_SERVICE_URL = waLink('Halo Kultara, saya ingin bertanya.');

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b-2 transition-all duration-300 ${
          scrolled
            ? 'border-ink-line bg-black/80 backdrop-blur-md'
            : 'border-ink-line/40 bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 md:px-8 lg:px-10">
          <Link
            href="/kultara"
            className="flex flex-col leading-none no-underline"
            onClick={closeMobile}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/kultara/kultaralogo.png"
              alt="Kultara"
              loading="eager"
              className="h-[40px] w-auto object-contain"
            />
            <span className="mt-1 text-[10px] uppercase tracking-[0.32em] text-white/70">
              Kuliner Nusantara
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-paper-muted transition-colors duration-200 hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CUSTOMER_SERVICE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-semibold text-crimson-bright transition-colors duration-200 hover:text-crimson"
            >
              Hubungi Kultara
            </a>
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-paper transition-colors hover:bg-ink-raised lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <div
        onClick={closeMobile}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 bottom-0 z-50 w-[84%] max-w-[340px] border-l border-ink-line bg-ink-soft transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-ink-line px-5">
          <div className="flex flex-col leading-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/kultara/kultaralogo.png"
              alt="Kultara"
              className="h-[32px] w-auto object-contain"
            />
            <span className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/70">
              Kuliner Nusantara
            </span>
          </div>
          <button
            onClick={closeMobile}
            aria-label="Tutup menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-paper transition-colors hover:bg-ink-raised"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-4 pt-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="rounded-lg px-4 py-3.5 text-[16px] font-medium text-paper-muted transition-colors hover:bg-ink-raised hover:text-paper"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={CUSTOMER_SERVICE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            className="rounded-lg px-4 py-3.5 text-[16px] font-semibold text-crimson-bright transition-colors hover:bg-ink-raised"
          >
            Hubungi Kultara
          </a>
        </nav>
      </aside>
    </>
  );
}