'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Investasi', href: '#investasi' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Hasil Web', href: '#portfolio' },
  { label: 'Fitur', href: '#fitur' },
  { label: 'Proses', href: '#proses' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('light');

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

  useEffect(() => {
    const saved = localStorage.getItem('kreaweb-theme') || 'light';
    setTheme(saved);
    document.documentElement.classList.toggle('kreaweb-dark', saved === 'dark');
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('kreaweb-theme', next);
      document.documentElement.classList.toggle('kreaweb-dark', next === 'dark');
      return next;
    });
  };

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
            ? 'border-slate-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:border-slate-800 dark:bg-[#0b1220]'
            : 'border-slate-100 bg-white dark:border-slate-800 dark:bg-[#0b1220]'
        }`}
      >
        <nav className="mx-auto flex h-[64px] max-w-[1280px] items-center gap-3 px-5 md:px-8 lg:px-10">
          <a
            href="#"
            className="mr-auto flex items-center gap-2 text-xl font-bold tracking-tight text-[#0f172a] no-underline dark:text-white"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/kreweb-logo.svg"
              alt="Kreaweb"
              className="h-8 w-auto"
            />
            Kreaweb
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center md:flex md:divide-x md:divide-slate-200 md:dark:divide-slate-700">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 first:pl-0 text-[15px] font-medium text-slate-600 transition-colors duration-200 hover:text-[#3b82f6] dark:text-slate-300 dark:hover:text-[#3b82f6]"
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

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Aktifkan mode gelap' : 'Aktifkan mode terang'}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:border-[#3b82f6] dark:border-slate-700 dark:text-slate-200"
          >
            {theme === 'light' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer — slides in from the left */}
      <aside
        className={`fixed right-0 top-[64px] bottom-0 z-50 w-[80%] max-w-[320px] border-l border-slate-200 bg-white transition-transform duration-300 ease-out md:hidden dark:border-slate-800 dark:bg-[#0b1220] ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col px-4 pt-5">
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="block rounded-lg px-4 py-3.5 text-[16px] font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#3b82f6] dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 border-t border-slate-100 pt-5 dark:border-slate-800">
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