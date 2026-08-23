'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { formatRupiah } from './menu-data';
import { waLink } from './kultara-config';

export default function MenuModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;

    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer / dialog */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-t-2xl border border-ink-line bg-ink-soft sm:rounded-2xl">
        <div className="relative aspect-[16/10] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
          {item.badges.length > 0 && (
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              {item.badges.map((badge) => (
                <span
                  key={badge}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
                    badge === 'Signature'
                      ? 'bg-crimson text-white'
                      : 'bg-white text-black'
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail menu"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-crimson-bright">
            {item.category}
          </span>
          <h3 className="mt-2 font-display text-3xl font-extrabold text-paper">
            {item.name}
          </h3>
          <div className="mt-2 text-2xl font-bold text-paper">
            {formatRupiah(item.price)}
          </div>
          <p className="mt-4 text-base leading-relaxed text-paper-muted">
            {item.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink(`Halo Kultara, saya ingin memesan ${item.name} (${formatRupiah(item.price)}).`)}
              target="_blank"
              rel="noopener noreferrer"
              className="kultara-btn kultara-btn-wa"
            >
              Pesan via WhatsApp
            </a>
            <button
              type="button"
              onClick={onClose}
              className="kultara-btn kultara-btn-ghost"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
