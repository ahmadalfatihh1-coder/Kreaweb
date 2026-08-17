'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Proses', href: '#proses' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Hasil Web', href: '#portfolio' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/6282161175424', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Overlay behind mobile drawer */}
      <div
        onClick={closeMobile}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Header — always solid (not transparent), subtle shadow on scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? 'border-slate-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
            : 'border-slate-100 bg-white'
        }`}
      >
        <nav className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between px-5 md:px-8 lg:px-10">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#0f172a] no-underline"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">
              K
            </span>
            KreaWeb
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-slate-600 transition-colors duration-200 hover:text-[#3b82f6]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={handleWhatsApp}
              className="rounded-full bg-wa-green px-5 py-2.5 text-[14px] font-semibold text-white transition-all duration-200 hover:bg-wa-green-dark hover:shadow-[0_4px_14px_rgba(37,211,102,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wa-green"
            >
              Konsultasi
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer — slides in from the left */}
      <aside
        className={`fixed left-0 top-[64px] bottom-0 z-50 w-[80%] max-w-[320px] border-r border-slate-200 bg-white transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-1 px-4 pt-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMobile}
              className="rounded-lg px-4 py-3.5 text-[16px] font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#3b82f6]"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-5 border-t border-slate-100 pt-5">
            <button
              onClick={() => { closeMobile(); handleWhatsApp(); }}
              className="w-full rounded-full bg-wa-green py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-wa-green-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wa-green"
            >
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}