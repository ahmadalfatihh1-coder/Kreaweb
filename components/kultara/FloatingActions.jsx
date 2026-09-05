'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { waLink } from './kultara-config';

const WHATSAPP_URL = waLink('halo Kreaweb, saya suka web seperti kultara ini, mau tanya tanya dulu');

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Kembali ke atas"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink-line bg-ink-soft text-paper shadow-lg transition-colors hover:border-crimson"
        >
          <ArrowUp size={20} />
        </button>
      )}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Kultara via WhatsApp"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-wa-green text-black shadow-lg transition-colors hover:bg-wa-green-dark"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </div>
  );
}