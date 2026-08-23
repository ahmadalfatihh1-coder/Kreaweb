'use client';

import { MessageCircle, Instagram, Music2, Mail } from 'lucide-react';

const NAV = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Investasi', href: '#investasi' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Hasil Web', href: '#portfolio' },
  { label: 'Fitur', href: '#fitur' },
  { label: 'Proses', href: '#proses' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/6282161175424', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#0f172a] py-12 md:py-16">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand + Tagline */}
          <div className="max-w-[320px]">
            <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white no-underline">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/kreweb-logo.svg"
                alt="Kreaweb"
                className="h-8 w-auto"
              />
              Kreaweb
            </a>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-400">
              Website profesional untuk membantu bisnis tumbuh di era digital.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-slate-500">
              Navigasi
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[14px] text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-slate-500">
              Kontak
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center gap-2 text-[14px] text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <MessageCircle size={16} className="text-slate-500" />
                  WhatsApp: 082161175424
                </button>
              </li>
              <li>
                <a
                  href="mailto:halo@kreaweb.com"
                  className="flex items-center gap-2 text-[14px] text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Mail size={16} className="text-slate-500" />
                  halo@kreaweb.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-slate-500">
              Sosial Media
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Kreaweb"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors duration-200 hover:border-slate-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Kreaweb"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors duration-200 hover:border-slate-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Music2 size={16} />
              </a>
              <a
                href="mailto:halo@kreaweb.com"
                aria-label="Email Kreaweb"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors duration-200 hover:border-slate-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-slate-800 pt-6">
          <p className="text-center text-[12px] text-slate-500 md:text-[13px]">
            © 2026 Kreaweb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}