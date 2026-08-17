'use client';

import { useState } from 'react';
import { ChevronDown, Minus } from 'lucide-react';
import Reveal from './Reveal';

const FAQS = [
  { q: 'Apakah Kultara menerima reservasi?', a: 'Ya. Reservasi dapat dilakukan melalui WhatsApp.' },
  { q: 'Apakah bisa pesan untuk takeaway?', a: 'Bisa. Kultara tersedia di Grabfood dan Gofood.' },
  { q: 'Apakah tersedia menu untuk keluarga?', a: 'Ya. Kultara menyediakan beberapa pilihan paket keluarga.' },
  { q: 'Apakah tersedia tempat parkir?', a: 'Tersedia area parkir yang luas untuk pelanggan.' },
  { q: 'Apakah menerima acara keluarga atau gathering?', a: 'Ya. Hubungi tim Kultara untuk private dining dan acara.' },
  { q: 'Apakah bisa memesan untuk jumlah banyak?', a: 'Bisa. Disarankan memesan terlebih dahulu untuk pesanan besar.' },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="kultara-section scroll-mt-24">
      <div className="kultara-container">
        <Reveal className="mb-12">
          <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Hal yang Sering Ditanyakan
          </h2>
        </Reveal>

        <div className="flex flex-col gap-4">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.q}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-crimson-bright shadow-[0_0_0_1px_rgba(194,31,36,0.35),0_0_28px_rgba(194,31,36,0.45)]'
                    : 'border-crimson/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 rounded-xl px-5 py-4 text-left"
                >
                  <span className="text-base font-semibold text-white md:text-lg">
                    {item.q}
                  </span>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white">
                    {isOpen ? <Minus size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden rounded-b-xl bg-crimson">
                    <p className="px-5 pb-5 pt-2 text-base leading-relaxed text-white">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}