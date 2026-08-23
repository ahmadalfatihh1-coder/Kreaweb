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
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="kultara-section scroll-mt-24">
      <div className="kultara-container">
        <Reveal className="mx-auto mb-12 max-w-[760px] text-center">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-paper sm:text-4xl md:text-5xl">
            Hal yang Sering Ditanyakan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper-muted md:text-lg">
            Jawaban untuk pertanyaan yang paling sering ditanyakan.
          </p>
        </Reveal>

        <div className="mx-auto max-w-[720px] space-y-3">
          {FAQS.map((item) => {
            const isOpen = openId === item.q;
            return (
              <div
                key={item.q}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-crimson/50 bg-ink-soft shadow-[0_2px_12px_rgba(0,0,0,0.05)]'
                    : 'border-ink-line bg-ink-soft'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.q)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.q}`}
                  className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson"
                >
                  <span className="text-base font-semibold text-paper md:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'border-crimson bg-crimson text-white'
                        : 'border-crimson/40 text-crimson-bright'
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>

                {/* Answer panel — smooth height animation */}
                <div
                  id={`faq-panel-${item.q}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-base leading-relaxed text-paper-muted">
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